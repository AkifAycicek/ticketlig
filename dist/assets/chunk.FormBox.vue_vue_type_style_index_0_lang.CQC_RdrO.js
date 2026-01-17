import{k as c,o as s,m as a,F as l,ai as k,E as T,O as L,p as b,K as d,t as m,R as w,H as $,G as B,s as y,v as D,q as u,aP as H,T as M,W as N,L as K,X as F,aI as V,z as A,P as W,h as R,d as x,aa as z,l as U,aj as g,ak as f}from"./index.CHlnk_G5.js";import{a as X,s as Z}from"./chunk.index.DF7CplV7.js";import{s as q}from"./chunk.FormField.vue_vue_type_style_index_0_lang.DBA7iGDy.js";var I={name:"MinusIcon",extends:k};function G(e){return ee(e)||Y(e)||Q(e)||J()}function J(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Q(e,t){if(e){if(typeof e=="string")return C(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(e,t):void 0}}function Y(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ee(e){if(Array.isArray(e))return C(e)}function C(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function te(e,t,n,o,i,r){return s(),c("svg",l({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),G(t[0]||(t[0]=[a("path",{d:"M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z",fill:"currentColor"},null,-1)])),16)}I.render=te;var O={name:"PlusIcon",extends:k};function ne(e){return ie(e)||le(e)||re(e)||oe()}function oe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function re(e,t){if(e){if(typeof e=="string")return _(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}function le(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ie(e){if(Array.isArray(e))return _(e)}function _(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function ae(e,t,n,o,i,r){return s(),c("svg",l({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),ne(t[0]||(t[0]=[a("path",{d:"M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z",fill:"currentColor"},null,-1)])),16)}O.render=ae;var se=`
    .p-fieldset {
        background: dt('fieldset.background');
        border: 1px solid dt('fieldset.border.color');
        border-radius: dt('fieldset.border.radius');
        color: dt('fieldset.color');
        padding: dt('fieldset.padding');
        margin: 0;
    }

    .p-fieldset-legend {
        background: dt('fieldset.legend.background');
        border-radius: dt('fieldset.legend.border.radius');
        border-width: dt('fieldset.legend.border.width');
        border-style: solid;
        border-color: dt('fieldset.legend.border.color');
        padding: dt('fieldset.legend.padding');
        transition:
            background dt('fieldset.transition.duration'),
            color dt('fieldset.transition.duration'),
            outline-color dt('fieldset.transition.duration'),
            box-shadow dt('fieldset.transition.duration');
    }

    .p-fieldset-toggleable > .p-fieldset-legend {
        padding: 0;
    }

    .p-fieldset-toggle-button {
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        text-decoration: none;
        display: flex;
        gap: dt('fieldset.legend.gap');
        align-items: center;
        justify-content: center;
        padding: dt('fieldset.legend.padding');
        background: transparent;
        border: 0 none;
        border-radius: dt('fieldset.legend.border.radius');
        transition:
            background dt('fieldset.transition.duration'),
            color dt('fieldset.transition.duration'),
            outline-color dt('fieldset.transition.duration'),
            box-shadow dt('fieldset.transition.duration');
        outline-color: transparent;
    }

    .p-fieldset-legend-label {
        font-weight: dt('fieldset.legend.font.weight');
    }

    .p-fieldset-toggle-button:focus-visible {
        box-shadow: dt('fieldset.legend.focus.ring.shadow');
        outline: dt('fieldset.legend.focus.ring.width') dt('fieldset.legend.focus.ring.style') dt('fieldset.legend.focus.ring.color');
        outline-offset: dt('fieldset.legend.focus.ring.offset');
    }

    .p-fieldset-toggleable > .p-fieldset-legend:hover {
        color: dt('fieldset.legend.hover.color');
        background: dt('fieldset.legend.hover.background');
    }

    .p-fieldset-toggle-icon {
        color: dt('fieldset.toggle.icon.color');
        transition: color dt('fieldset.transition.duration');
    }

    .p-fieldset-toggleable > .p-fieldset-legend:hover .p-fieldset-toggle-icon {
        color: dt('fieldset.toggle.icon.hover.color');
    }

    .p-fieldset-content-container {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-fieldset-content-wrapper {
        min-height: 0;
    }

    .p-fieldset-content {
        padding: dt('fieldset.content.padding');
    }
`,de={root:function(t){var n=t.props;return["p-fieldset p-component",{"p-fieldset-toggleable":n.toggleable}]},legend:"p-fieldset-legend",legendLabel:"p-fieldset-legend-label",toggleButton:"p-fieldset-toggle-button",toggleIcon:"p-fieldset-toggle-icon",contentContainer:"p-fieldset-content-container",contentWrapper:"p-fieldset-content-wrapper",content:"p-fieldset-content"},ce=T.extend({name:"fieldset",style:se,classes:de}),ue={name:"BaseFieldset",extends:K,props:{legend:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:ce,provide:function(){return{$pcFieldset:this,$parentInstance:this}}},j={name:"Fieldset",extends:ue,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(t){this.d_collapsed=t}},methods:{toggle:function(t){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:t,value:this.d_collapsed})},onKeyDown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.legend},dataP:function(){return F({toggleable:this.toggleable})}},directives:{ripple:N},components:{PlusIcon:O,MinusIcon:I}};function p(e){"@babel/helpers - typeof";return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(e)}function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,o)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?P(Object(n),!0).forEach(function(o){pe(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function pe(e,t,n){return(t=ge(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ge(e){var t=fe(e,"string");return p(t)=="symbol"?t:t+""}function fe(e,t){if(p(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(p(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var be=["data-p"],me=["data-p"],ye=["id"],he=["id","aria-controls","aria-expanded","aria-label"],ve=["id","aria-labelledby"];function we(e,t,n,o,i,r){var h=L("ripple");return s(),c("fieldset",l({class:e.cx("root"),"data-p":r.dataP},e.ptmi("root")),[a("legend",l({class:e.cx("legend"),"data-p":r.dataP},e.ptm("legend")),[d(e.$slots,"legend",{toggleCallback:r.toggle},function(){return[e.toggleable?m("",!0):(s(),c("span",l({key:0,id:e.$id+"_header",class:e.cx("legendLabel")},e.ptm("legendLabel")),$(e.legend),17,ye)),e.toggleable?w((s(),c("button",l({key:1,id:e.$id+"_header",type:"button","aria-controls":e.$id+"_content","aria-expanded":!i.d_collapsed,"aria-label":r.buttonAriaLabel,class:e.cx("toggleButton"),onClick:t[0]||(t[0]=function(){return r.toggle&&r.toggle.apply(r,arguments)}),onKeydown:t[1]||(t[1]=function(){return r.onKeyDown&&r.onKeyDown.apply(r,arguments)})},S(S({},e.toggleButtonProps),e.ptm("toggleButton"))),[d(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:i.d_collapsed,class:B(e.cx("toggleIcon"))},function(){return[(s(),y(D(i.d_collapsed?"PlusIcon":"MinusIcon"),l({class:e.cx("toggleIcon")},e.ptm("toggleIcon")),null,16,["class"]))]}),a("span",l({class:e.cx("legendLabel")},e.ptm("legendLabel")),$(e.legend),17)],16,he)),[[h]]):m("",!0)]})],16,me),b(M,l({name:"p-collapsible"},e.ptm("transition")),{default:u(function(){return[w(a("div",l({id:e.$id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":e.$id+"_header"},e.ptm("contentContainer")),[a("div",l({class:e.cx("contentWrapper")},e.ptm("contentWrapper")),[a("div",l({class:e.cx("content")},e.ptm("content")),[d(e.$slots,"default")],16)],16)],16,ve),[[H,!i.d_collapsed]])]}),_:3},16)],16,be)}j.render=we;const $e={__name:"ErrorBadge",props:{error:{type:[String,Boolean],default:null}},setup(e){return(t,n)=>{const o=X,i=V;return w((s(),y(o,{severity:"danger",class:"error_badge__badge"},{default:u(()=>[a("i",{class:B(["error_badge__icon",("PrimeIcons"in t?t.PrimeIcons:A(W)).EXCLAMATION_CIRCLE])},null,2)]),_:1})),[[i,{value:e.error,pt:{root:{class:"error-tooltip"},text:"error-tooltip-text"}}]])}}},Ce=["invalid"],_e={key:0,class:"form_box__actions-bar"},Pe={class:"form_box__button-container"},Se={class:"form_box__header-container"},ke=["textContent"],Be={class:"form_box__header-actions"},Ae={class:"form_box__header-actions"},Ee=R({__name:"FormBox",props:{legend:{},form:{},readonly:{type:Boolean},invalid:{type:Boolean},error:{type:[String,Boolean]},printable:{type:Boolean},submitText:{},resetText:{}},setup(e){const t=x(null);return(n,o)=>{const i=Z,r=q,h=$e,E=j;return("_isNil"in n?n._isNil:A(U.isNil))(e.legend)?(s(),c("form",l({key:0,invalid:e.invalid||!!e.error,class:"form_box",onSubmit:o[0]||(o[0]=z(()=>{},["prevent"])),ref_key:"boxElement",ref:t,autocomplete:"on",onReset:o[1]||(o[1]=()=>e.form?._reset())},n.$attrs),[b(r,{blocked:e.readonly===!0,pt:{root:{class:"contents"},mask:{class:"!bg-[transparent]"}}},{default:u(()=>[d(n.$slots,"default",g(f(n.$props))),d(n.$slots,"form-actions",g(f(n.$props)),()=>[e.readonly?m("",!0):(s(),c("div",_e,[a("span",Pe,[b(i,{label:e.resetText||n.$t("action.reset"),severity:"secondary",class:"form_box__button",disabled:!e.form?._isChanged,type:"reset"},null,8,["label","disabled"]),b(i,{label:e.submitText||n.$t("action.save"),class:"form_box__button",type:"submit"},null,8,["label"])])]))])]),_:3},8,["blocked"])],16,Ce)):(s(),y(E,{key:1,invalid:e.invalid||!!e.error,legend:e.legend,pt:{content:{class:"form_box"}},ref:v=>t.value=v?.$el},{legend:u(v=>[d(n.$slots,"header",g(f(n.$props)),()=>[a("div",Se,[d(n.$slots,"legend",g(f(n.$props)),()=>[a("label",l({textContent:$(e.legend)},v,{class:"form_box__legend"}),null,16,ke)]),a("div",Be,[d(n.$slots,"actions")]),a("div",Ae,[e.error?(s(),y(h,{key:0,error:e.error,class:"form_box__error-badge"},null,8,["error"])):m("",!0)])])])]),default:u(()=>[d(n.$slots,"default")]),_:3},8,["invalid","legend"]))}}});export{Ee as _};
