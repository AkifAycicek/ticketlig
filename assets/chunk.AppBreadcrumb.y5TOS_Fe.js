import{s as _}from"./chunk.index.DDoBUe3O.js";import{E,k as m,t as d,o as i,s as b,F as r,G as C,v as g,H as I,j as k,m as B,I as v,J as N,p as y,K as R,L as w,i as M,d as S,P as U,b as V,l as A,M as z,q as h,z as f,N as D}from"./index.CHlnk_G5.js";var F=`
    .p-breadcrumb {
        background: dt('breadcrumb.background');
        padding: dt('breadcrumb.padding');
        overflow-x: auto;
    }

    .p-breadcrumb-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        gap: dt('breadcrumb.gap');
    }

    .p-breadcrumb-separator {
        display: flex;
        align-items: center;
        color: dt('breadcrumb.separator.color');
    }

    .p-breadcrumb-separator-icon:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-breadcrumb::-webkit-scrollbar {
        display: none;
    }

    .p-breadcrumb-item-link {
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: dt('breadcrumb.item.gap');
        transition:
            background dt('breadcrumb.transition.duration'),
            color dt('breadcrumb.transition.duration'),
            outline-color dt('breadcrumb.transition.duration'),
            box-shadow dt('breadcrumb.transition.duration');
        border-radius: dt('breadcrumb.item.border.radius');
        outline-color: transparent;
        color: dt('breadcrumb.item.color');
    }

    .p-breadcrumb-item-link:focus-visible {
        box-shadow: dt('breadcrumb.item.focus.ring.shadow');
        outline: dt('breadcrumb.item.focus.ring.width') dt('breadcrumb.item.focus.ring.style') dt('breadcrumb.item.focus.ring.color');
        outline-offset: dt('breadcrumb.item.focus.ring.offset');
    }

    .p-breadcrumb-item-link:hover .p-breadcrumb-item-label {
        color: dt('breadcrumb.item.hover.color');
    }

    .p-breadcrumb-item-label {
        transition: inherit;
    }

    .p-breadcrumb-item-icon {
        color: dt('breadcrumb.item.icon.color');
        transition: inherit;
    }

    .p-breadcrumb-item-link:hover .p-breadcrumb-item-icon {
        color: dt('breadcrumb.item.icon.hover.color');
    }
`,H={root:"p-breadcrumb p-component",list:"p-breadcrumb-list",homeItem:"p-breadcrumb-home-item",separator:"p-breadcrumb-separator",separatorIcon:"p-breadcrumb-separator-icon",item:function(a){var t=a.instance;return["p-breadcrumb-item",{"p-disabled":t.disabled()}]},itemLink:"p-breadcrumb-item-link",itemIcon:"p-breadcrumb-item-icon",itemLabel:"p-breadcrumb-item-label"},j=E.extend({name:"breadcrumb",style:F,classes:H}),q={name:"BaseBreadcrumb",extends:w,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:j,provide:function(){return{$pcBreadcrumb:this,$parentInstance:this}}},L={name:"BreadcrumbItem",hostName:"Breadcrumb",extends:w,props:{item:null,templates:null,index:null},methods:{onClick:function(a){this.item.command&&this.item.command({originalEvent:a,item:this.item})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},isCurrentUrl:function(){var a=this.item,t=a.to,l=a.url,s=typeof window<"u"?window.location.pathname:"";return t===s||l===s?"page":void 0}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var a=this;return{action:r({class:this.cx("itemLink"),"aria-current":this.isCurrentUrl(),onClick:function(l){return a.onClick(l)}},this.ptm("itemLink",this.ptmOptions)),icon:r({class:[this.cx("icon"),this.item.icon]},this.ptm("icon",this.ptmOptions)),label:r({class:this.cx("label")},this.ptm("label",this.ptmOptions))}}}},G=["href","target","aria-current"];function J(e,a,t,l,s,n){return n.visible()?(i(),m("li",r({key:0,class:[e.cx("item"),t.item.class]},e.ptm("item",n.ptmOptions)),[t.templates.item?(i(),b(g(t.templates.item),{key:1,item:t.item,label:n.label(),props:n.getMenuItemProps},null,8,["item","label","props"])):(i(),m("a",r({key:0,href:t.item.url||"#",class:e.cx("itemLink"),target:t.item.target,"aria-current":n.isCurrentUrl(),onClick:a[0]||(a[0]=function(){return n.onClick&&n.onClick.apply(n,arguments)})},e.ptm("itemLink",n.ptmOptions)),[t.templates&&t.templates.itemicon?(i(),b(g(t.templates.itemicon),{key:0,item:t.item,class:C(e.cx("itemIcon",n.ptmOptions))},null,8,["item","class"])):t.item.icon?(i(),m("span",r({key:1,class:[e.cx("itemIcon"),t.item.icon]},e.ptm("itemIcon",n.ptmOptions)),null,16)):d("",!0),t.item.label?(i(),m("span",r({key:2,class:e.cx("itemLabel")},e.ptm("itemLabel",n.ptmOptions)),I(n.label()),17)):d("",!0)],16,G))],16)):d("",!0)}L.render=J;var O={name:"Breadcrumb",extends:q,inheritAttrs:!1,components:{BreadcrumbItem:L,ChevronRightIcon:_}};function K(e,a,t,l,s,n){var u=k("BreadcrumbItem"),p=k("ChevronRightIcon");return i(),m("nav",r({class:e.cx("root")},e.ptmi("root")),[B("ol",r({class:e.cx("list")},e.ptm("list")),[e.home?(i(),b(u,r({key:0,item:e.home,class:e.cx("homeItem"),templates:e.$slots,pt:e.pt,unstyled:e.unstyled},e.ptm("homeItem")),null,16,["item","class","templates","pt","unstyled"])):d("",!0),(i(!0),m(v,null,N(e.model,function(o,c){return i(),m(v,{key:o.label+"_"+c},[e.home||c!==0?(i(),m("li",r({key:0,class:e.cx("separator")},{ref_for:!0},e.ptm("separator")),[R(e.$slots,"separator",{},function(){return[y(p,r({"aria-hidden":"true",class:e.cx("separatorIcon")},{ref_for:!0},e.ptm("separatorIcon")),null,16,["class"])]})],16)):d("",!0),y(u,{item:o,index:c,templates:e.$slots,pt:e.pt,unstyled:e.unstyled},null,8,["item","index","templates","pt","unstyled"])],64)}),128))],16)],16)}O.render=K;const T=["onClick"],Q=["textContent"],Y={__name:"AppBreadcrumb",setup(e){const a=M(),t=S({meta:{icon:U.HOME},path:"/"}),l=V(()=>a.matched.filter(({meta:s})=>!A.isEmpty(s?.label)).map((s,n)=>{const u=z.t(s.meta.label);return{...s,index:n,label:u}}));return(s,n)=>{const u=k("RouterLink"),p=O;return i(),b(p,{home:f(t),class:"breadcrumb",model:f(l)},{separator:h(()=>[...n[0]||(n[0]=[D(" > ",-1)])]),item:h(({item:o,props:c})=>[y(u,r({to:f(l)?.length-1==o.index?s.$route:o},c.action,{class:"breadcrumb__link"}),{default:h(({navigate:x,isExactActive:P})=>[B("button",{onClick:x,class:C(["breadcrumb__container",{"breadcrumb__link--active":P}])},[o.meta?.icon?(i(),m("span",r({key:0},c.icon,{class:[o.meta?.icon]}),null,16)):d("",!0),o.label?(i(),m("span",r({key:1,class:["breadcrumb__label",{"breadcrumb__label--hidden":s.$route.name!==o.name}]},c.label,{textContent:I(o.label)}),null,16,Q)):d("",!0)],10,T)]),_:2},1040,["to"])]),_:1},8,["home","model"])}}};export{Y as default};
