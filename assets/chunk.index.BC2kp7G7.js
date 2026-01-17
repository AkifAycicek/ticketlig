import{E as $,L as C,k as a,o as s,t as d,m as e,F as n,K as i,h as g,a9 as k,H as c,I as w,J as B,z as x,j as E,s as I,q as l,aa as L,p as S,x as z}from"./index.CHlnk_G5.js";import{E as A}from"./chunk.EventApi.B88ofSsJ.js";import{B as N}from"./chunk.BaseResponse.BOfAc7uK.js";import{E as R}from"./chunk.EventModel.b7tBL5nl.js";import"./chunk.http.D1AbaxGe.js";import"./chunk.BaseModel.BJiNiVpj.js";import"./chunk.index.BYK99MpJ.js";var V=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`,F={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},M=$.extend({name:"card",style:V,classes:F}),j={name:"BaseCard",extends:C,style:M,provide:function(){return{$pcCard:this,$parentInstance:this}}},h={name:"Card",extends:j,inheritAttrs:!1};function q(t,r,p,u,f,m){return s(),a("div",n({class:t.cx("root")},t.ptmi("root")),[t.$slots.header?(s(),a("div",n({key:0,class:t.cx("header")},t.ptm("header")),[i(t.$slots,"header")],16)):d("",!0),e("div",n({class:t.cx("body")},t.ptm("body")),[t.$slots.title||t.$slots.subtitle?(s(),a("div",n({key:0,class:t.cx("caption")},t.ptm("caption")),[t.$slots.title?(s(),a("div",n({key:0,class:t.cx("title")},t.ptm("title")),[i(t.$slots,"title")],16)):d("",!0),t.$slots.subtitle?(s(),a("div",n({key:1,class:t.cx("subtitle")},t.ptm("subtitle")),[i(t.$slots,"subtitle")],16)):d("",!0)],16)):d("",!0),e("div",n({class:t.cx("content")},t.ptm("content")),[i(t.$slots,"content")],16),t.$slots.footer?(s(),a("div",n({key:1,class:t.cx("footer")},t.ptm("footer")),[i(t.$slots,"footer")],16)):d("",!0)],16)],16)}h.render=q;const D={class:"page__container"},H={class:"page__title"},J=["textContent"],K={class:"event-list"},P=["href","onClick"],G=["src"],O=["textContent"],Q=["textContent"],T=["textContent"],U=g({__name:"index",async setup(t){let r,p;const u=([r,p]=k(()=>A.list()),r=await r,p(),r),f=N.create()._merge(u)._map(R);return(m,W)=>{const _=h,v=E("RouterLink");return s(),a("div",D,[e("h1",H,[e("span",{textContent:c(m.$t(m.$route.meta.label))},null,8,J)]),e("div",K,[(s(!0),a(w,null,B(x(f)._data,o=>(s(),I(v,{custom:"",key:o.id,to:{name:"event-detail",params:{eventId:o.id}}},{default:l(({href:b,navigate:y})=>[e("a",{href:b,onClick:L(()=>y(),["prevent"]),class:"event-card"},[S(_,{class:"event-card__card"},{header:l(()=>[e("img",{alt:"user header",src:o.image_url,class:"event-card__image"},null,8,G)]),title:l(()=>[e("span",{textContent:c(o.title),class:"event-card__title"},null,8,O)]),subtitle:l(()=>[e("span",{textContent:c(o.event_date),class:"event-card__subtitle"},null,8,Q)]),content:l(()=>[e("p",{class:"event-card__content",textContent:c(o.venue.name)},null,8,T)]),_:2},1024)],8,P)]),_:2},1032,["to"]))),128))])])}}}),at=z(U,[["__scopeId","data-v-860feb38"]]);export{at as default};
