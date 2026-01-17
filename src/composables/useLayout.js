import tailwindConfig from '@/../tailwind.config.js';
import { $t, updatePreset, updateSurfacePalette } from '@primeuix/themes';
import aura from '@primeuix/themes/aura';
import lara from '@primeuix/themes/lara';
import material from '@primeuix/themes/material';
import nora from '@primeuix/themes/nora';
import tailwindColors from 'tailwindcss/colors';

delete tailwindColors.lightBlue;
delete tailwindColors.warmGray;
delete tailwindColors.trueGray;
delete tailwindColors.coolGray;
delete tailwindColors.blueGray;

const colors = _omit(_merge(tailwindConfig.theme?.extend?.colors, tailwindColors), [
   'white',
   'black',
   'transparent',
   'current',
   'inherit'
]);

const layoutStorage = useLocalStorage(
   'app-state',
   {
      isDark: usePreferredDark(),
      isLinked: true,
      sidebarActive: false,
      activeMenuItem: {},
      preset: 'aura',
      primary: 'blue',
      surface: 'zinc',
      dark: {
         preset: 'aura',
         primary: 'blue',
         surface: 'zinc'
      }
   },
   { writeDefaults: true, mergeDefaults: true }
);

const layoutState = new Proxy(layoutStorage.value, {
   get(target, prop) {
      if (!target.isLinked && target.isDark && _has(target.dark, prop))
         return _get(target, `dark.${prop}`, _get(target, prop));
      return _get(target, prop);
   },
   set(target, prop, newValue) {
      if (!target.isLinked && target.isDark && _has(target.dark, prop))
         return _set(target, `dark.${prop}`, newValue);
      return _set(target, prop, newValue);
   }
});

const isDarkTheme = computed(() => layoutState.isDark);

const getPrimaryColor = computed(() => colors[layoutState.primary]);

const getSurfaceColor = computed(() => colors[layoutState.surface]);

const setPrimary = (value) => {
   layoutState.primary = value;
};

const setSurface = (value) => {
   layoutState.surface = value;
};

const setPreset = (value) => {
   layoutState.preset = value;
};

const toggleDarkMode = (e, value = !isDarkTheme.value) => {
   if (!document.startViewTransition) {
      toggleDark(value);

      return;
   }

   return document.startViewTransition(() => toggleDark(value));
};

const primaryColors = _toPairs(colors).reduce(
   (acc, [name, palette]) => {
      acc.push({ name, palette: { 0: '#ffffff', ...palette } });
      return acc;
   },
   [{ name: 'noir', palette: {} }]
);

const surfaces = ref(primaryColors.filter(({ name }) => name !== 'noir'));

const presets = {
   aura,
   lara,
   material,
   nora
};

const getPresetExt = () => {
   const color = primaryColors.find((c) => c.name === layoutState.primary);

   return {
      semantic: {
         primary: color.palette,
         colorScheme: {
            light: {
               primary: {
                  color: '{primary.500}',
                  contrastColor: '#ffffff',
                  hoverColor: '{primary.600}',
                  activeColor: '{primary.700}'
               },
               highlight: {
                  background: '{primary.50}',
                  focusBackground: '{primary.100}',
                  color: '{primary.700}',
                  focusColor: '{primary.800}'
               }
            },
            dark: {
               primary: {
                  color: '{primary.400}',
                  contrastColor: '{surface.900}',
                  hoverColor: '{primary.300}',
                  activeColor: '{primary.200}'
               },
               highlight: {
                  background: 'color-mix(in srgb, {primary.400}, transparent 84%)',
                  focusBackground: 'color-mix(in srgb, {primary.400}, transparent 76%)',
                  color: 'rgba(255,255,255,.87)',
                  focusColor: 'rgba(255,255,255,.87)'
               }
            }
         }
      }
   };
};

function applyTheme(type, color) {
   if (type === 'primary') {
      updatePreset(getPresetExt());
   } else if (type === 'surface') {
      updateSurfacePalette(color.palette);
   }
}

nextTick(() => {
   watch(
      () => layoutState,
      (newlayoutState) => {
         localStorage.setItem('app-state', JSON.stringify(newlayoutState));
      },
      { immediate: true }
   );

   watch(
      () => layoutState.preset,
      (value) => {
         const presetValue = presets[value];
         const surfacePalette = surfaces.value.find((s) => s.name === layoutState.surface)?.palette;

         $t()
            .preset(presetValue)
            .preset(getPresetExt())
            .surfacePalette(surfacePalette)
            .use({ useDefaultOptions: true });
      },
      { immediate: true }
   );

   watch(
      () => layoutState.primary,
      (value) =>
         applyTheme(
            'primary',
            primaryColors.find(({ name }) => name === value)
         ),
      { immediate: true }
   );

   watch(
      () => layoutState.surface,
      (value) =>
         applyTheme(
            'surface',
            surfaces.value.find(({ name }) => name === value)
         ),
      { immediate: true }
   );
});

export default () => {
   return {
      layoutState: layoutState,
      surfaces: readonly(surfaces),
      primaryColors: readonly(primaryColors),
      isDarkTheme: readonly(isDarkTheme),
      getPrimaryColor: readonly(getPrimaryColor),
      getSurfaceColor: readonly(getSurfaceColor),
      presets: readonly(presets),
      toggleDarkMode,
      setPrimary,
      setSurface,
      setPreset,
      getPresetExt
   };
};
