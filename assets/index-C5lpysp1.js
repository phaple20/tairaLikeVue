import{o as me,a as ee,i as Fe,w as I,r as w,b as te,n as pe,c as ye,u as ae,d as he,g as V,e as x,f as K,h as u,j as Ne,m as q,k as Le,T as be,l as Ee,v as Ce,p as Re,q as je,F as Be,s as Me,_ as Ye,t as Se,x as xe,y as Ue,z as Ve,A as Z,B as Ke}from"./index-COwLRFGS.js";function He(){}const _=Object.assign,_e=typeof window<"u",H=e=>e!==null&&typeof e=="object",S=e=>e!=null,J=e=>typeof e=="function",Xe=e=>H(e)&&J(e.then)&&J(e.catch),Oe=e=>typeof e=="number"||/^\d+(\.\d+)?$/.test(e),We=()=>_e?/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()):!1;function se(e,t){const n=t.split(".");let o=e;return n.forEach(r=>{var a;o=H(o)&&(a=o[r])!=null?a:""}),o}function Ze(e,t,n){return t.reduce((o,r)=>(o[r]=e[r],o),{})}const U=null,y=[Number,String],k={type:Boolean,default:!0},Ge=e=>({type:Number,default:e}),p=e=>({type:String,default:e});var ne=typeof window<"u";function ke(e){let t;te(()=>{e(),pe(()=>{t=!0})}),ye(()=>{t&&e()})}function Ie(e,t,n={}){if(!ne)return;const{target:o=window,passive:r=!1,capture:a=!1}=n;let c=!1,s;const d=l=>{if(c)return;const g=ae(l);g&&!s&&(g.addEventListener(e,t,{capture:a,passive:r}),s=!0)},i=l=>{if(c)return;const g=ae(l);g&&s&&(g.removeEventListener(e,t,a),s=!1)};me(()=>i(o)),ee(()=>i(o)),ke(()=>d(o));let f;return Fe(o)&&(f=I(o,(l,g)=>{i(g),d(l)})),()=>{f==null||f(),i(o),c=!0}}var M,G;function Je(){if(!M&&(M=w(0),G=w(0),ne)){const e=()=>{M.value=window.innerWidth,G.value=window.innerHeight};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",e,{passive:!0})}return{width:M,height:G}}var Qe=/scroll|auto|overlay/i,et=ne?window:void 0;function tt(e){return e.tagName!=="HTML"&&e.tagName!=="BODY"&&e.nodeType===1}function nt(e,t=et){let n=e;for(;n&&n!==t&&tt(n);){const{overflowY:o}=window.getComputedStyle(n);if(Qe.test(o))return n;n=n.parentNode}return t}We();const ot=e=>e.stopPropagation();function oe(e,t){(typeof e.cancelable!="boolean"||e.cancelable)&&e.preventDefault(),t&&ot(e)}Je();function C(e){if(S(e))return Oe(e)?`${e}px`:String(e)}function rt(e){if(S(e)){if(Array.isArray(e))return{width:C(e[0]),height:C(e[1])};const t=C(e);return{width:t,height:t}}}function at(e){const t={};return e!==void 0&&(t.zIndex=+e),t}const st=/-(\w)/g,Pe=e=>e.replace(st,(t,n)=>n.toUpperCase()),{hasOwnProperty:it}=Object.prototype;function ct(e,t,n){const o=t[n];S(o)&&(!it.call(e,n)||!H(o)?e[n]=o:e[n]=$e(Object(e[n]),o))}function $e(e,t){return Object.keys(t).forEach(n=>{ct(e,t,n)}),e}var lt={name:"姓名",tel:"电话",save:"保存",clear:"清空",cancel:"取消",confirm:"确认",delete:"删除",loading:"加载中...",noCoupon:"暂无优惠券",nameEmpty:"请填写姓名",addContact:"添加联系人",telInvalid:"请填写正确的电话",vanCalendar:{end:"结束",start:"开始",title:"日期选择",weekdays:["日","一","二","三","四","五","六"],monthTitle:(e,t)=>`${e}年${t}月`,rangePrompt:e=>`最多选择 ${e} 天`},vanCascader:{select:"请选择"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计:"},vanCoupon:{unlimited:"无门槛",discount:e=>`${e}折`,condition:e=>`满${e}元可用`},vanCouponCell:{title:"优惠券",count:e=>`${e}张可用`},vanCouponList:{exchange:"兑换",close:"不使用",enable:"可用",disabled:"不可用",placeholder:"输入优惠码"},vanAddressEdit:{area:"地区",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",addressDetail:"详细地址",defaultAddress:"设为默认收货地址"},vanAddressList:{add:"新增地址"}};const ie=w("zh-CN"),ce=he({"zh-CN":lt}),ut={messages(){return ce[ie.value]},use(e,t){ie.value=e,this.add({[e]:t})},add(e={}){$e(ce,e)}};var dt=ut;function gt(e){const t=Pe(e)+".";return(n,...o)=>{const r=dt.messages(),a=se(r,t+n)||se(r,n);return J(a)?a(...o):a}}function Q(e,t){return t?typeof t=="string"?` ${e}--${t}`:Array.isArray(t)?t.reduce((n,o)=>n+Q(e,o),""):Object.keys(t).reduce((n,o)=>n+(t[o]?Q(e,o):""),""):""}function ft(e){return(t,n)=>(t&&typeof t!="string"&&(n=t,t=""),t=t?`${e}__${t}`:e,`${t}${Q(t,n)}`)}function O(e){const t=`van-${e}`;return[t,ft(t),gt(t)]}const vt="van-hairline",wt=`${vt}--surround`,mt="van-haptics-feedback",le=5;function pt(e,{args:t=[],done:n,canceled:o,error:r}){if(e){const a=e.apply(null,t);Xe(a)?a.then(c=>{c?n():o&&o()}).catch(r||He):a?n():o&&o()}else n()}function P(e){return e.install=t=>{const{name:n}=e;n&&(t.component(n,e),t.component(Pe(`-${n}`),e))},e}const yt=Symbol();function Te(e){const t=V();t&&_(t.proxy,e)}const ht={to:[String,Object],url:String,replace:Boolean};function bt({to:e,url:t,replace:n,$router:o}){e&&o?o[n?"replace":"push"](e):t&&(n?location.replace(t):location.href=t)}function Et(){const e=V().proxy;return()=>bt(e)}const[Ct,ue]=O("badge"),Bt={dot:Boolean,max:y,tag:p("div"),color:String,offset:Array,content:y,showZero:k,position:p("top-right")};var St=x({name:Ct,props:Bt,setup(e,{slots:t}){const n=()=>{if(t.content)return!0;const{content:s,showZero:d}=e;return S(s)&&s!==""&&(d||s!==0&&s!=="0")},o=()=>{const{dot:s,max:d,content:i}=e;if(!s&&n())return t.content?t.content():S(d)&&Oe(i)&&+i>+d?`${d}+`:i},r=s=>s.startsWith("-")?s.replace("-",""):`-${s}`,a=K(()=>{const s={background:e.color};if(e.offset){const[d,i]=e.offset,{position:f}=e,[l,g]=f.split("-");t.default?(typeof i=="number"?s[l]=C(l==="top"?i:-i):s[l]=l==="top"?C(i):r(i),typeof d=="number"?s[g]=C(g==="left"?d:-d):s[g]=g==="left"?C(d):r(d)):(s.marginTop=C(i),s.marginLeft=C(d))}return s}),c=()=>{if(n()||e.dot)return u("div",{class:ue([e.position,{dot:e.dot,fixed:!!t.default}]),style:a.value},[o()])};return()=>{if(t.default){const{tag:s}=e;return u(s,{class:ue("wrapper")},{default:()=>[t.default(),c()]})}return c()}}});const xt=P(St);let _t=2e3;const Ot=()=>++_t,[kt,Sn]=O("config-provider"),It=Symbol(kt),[Pt,de]=O("icon"),$t=e=>e==null?void 0:e.includes("/"),Tt={dot:Boolean,tag:p("i"),name:String,size:y,badge:y,color:String,badgeProps:Object,classPrefix:String};var Dt=x({name:Pt,props:Tt,setup(e,{slots:t}){const n=Ne(It,null),o=K(()=>e.classPrefix||(n==null?void 0:n.iconPrefix)||de());return()=>{const{tag:r,dot:a,name:c,size:s,badge:d,color:i}=e,f=$t(c);return u(xt,q({dot:a,tag:r,class:[o.value,f?"":`${o.value}-${c}`],style:{color:i,fontSize:C(s)},content:d},e.badgeProps),{default:()=>{var l;return[(l=t.default)==null?void 0:l.call(t),f&&u("img",{class:de("image"),src:c},null)]}})}}});const re=P(Dt),[At,z]=O("loading"),zt=Array(12).fill(null).map((e,t)=>u("i",{class:z("line",String(t+1))},null)),qt=u("svg",{class:z("circular"),viewBox:"25 25 50 50"},[u("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),Ft={size:y,type:p("circular"),color:String,vertical:Boolean,textSize:y,textColor:String};var Nt=x({name:At,props:Ft,setup(e,{slots:t}){const n=K(()=>_({color:e.color},rt(e.size))),o=()=>{const a=e.type==="spinner"?zt:qt;return u("span",{class:z("spinner",e.type),style:n.value},[t.icon?t.icon():a])},r=()=>{var a;if(t.default)return u("span",{class:z("text"),style:{fontSize:C(e.textSize),color:(a=e.textColor)!=null?a:e.color}},[t.default()])};return()=>{const{type:a,vertical:c}=e;return u("div",{class:z([a,{vertical:c}]),"aria-live":"polite","aria-busy":!0},[o(),r()])}}});const De=P(Nt),[Lt,$]=O("button"),Rt=_({},ht,{tag:p("button"),text:String,icon:String,type:p("default"),size:p("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:p("button"),loadingSize:y,loadingText:String,loadingType:String,iconPosition:p("left")});var jt=x({name:Lt,props:Rt,emits:["click"],setup(e,{emit:t,slots:n}){const o=Et(),r=()=>n.loading?n.loading():u(De,{size:e.loadingSize,type:e.loadingType,class:$("loading")},null),a=()=>{if(e.loading)return r();if(n.icon)return u("div",{class:$("icon")},[n.icon()]);if(e.icon)return u(re,{name:e.icon,class:$("icon"),classPrefix:e.iconPrefix},null)},c=()=>{let i;if(e.loading?i=e.loadingText:i=n.default?n.default():e.text,i)return u("span",{class:$("text")},[i])},s=()=>{const{color:i,plain:f}=e;if(i){const l={color:f?i:"white"};return f||(l.background=i),i.includes("gradient")?l.border=0:l.borderColor=i,l}},d=i=>{e.loading?oe(i):e.disabled||(t("click",i),o())};return()=>{const{tag:i,type:f,size:l,block:g,round:m,plain:h,square:b,loading:E,disabled:F,hairline:N,nativeType:X,iconPosition:L}=e,R=[$([f,l,{plain:h,block:g,round:m,square:b,loading:E,disabled:F,hairline:N}]),{[wt]:N}];return u(i,{type:X,class:R,style:s(),disabled:F,onClick:d},{default:()=>[u("div",{class:$("content")},[L==="left"&&a(),c(),L==="right"&&a()])]})}}});const Mt=P(jt),Yt={show:Boolean,zIndex:y,overlay:k,duration:y,teleport:[String,Object],lockScroll:k,lazyRender:k,beforeClose:Function,overlayStyle:Object,overlayClass:U,transitionAppear:Boolean,closeOnClickOverlay:k};function Ut(e,t){return e>t?"horizontal":t>e?"vertical":""}function Vt(){const e=w(0),t=w(0),n=w(0),o=w(0),r=w(0),a=w(0),c=w(""),s=w(!0),d=()=>c.value==="vertical",i=()=>c.value==="horizontal",f=()=>{n.value=0,o.value=0,r.value=0,a.value=0,c.value="",s.value=!0};return{move:m=>{const h=m.touches[0];n.value=(h.clientX<0?0:h.clientX)-e.value,o.value=h.clientY-t.value,r.value=Math.abs(n.value),a.value=Math.abs(o.value);const b=10;(!c.value||r.value<b&&a.value<b)&&(c.value=Ut(r.value,a.value)),s.value&&(r.value>le||a.value>le)&&(s.value=!1)},start:m=>{f(),e.value=m.touches[0].clientX,t.value=m.touches[0].clientY},reset:f,startX:e,startY:t,deltaX:n,deltaY:o,offsetX:r,offsetY:a,direction:c,isVertical:d,isHorizontal:i,isTap:s}}let D=0;const ge="van-overflow-hidden";function Kt(e,t){const n=Vt(),o="01",r="10",a=f=>{n.move(f);const l=n.deltaY.value>0?r:o,g=nt(f.target,e.value),{scrollHeight:m,offsetHeight:h,scrollTop:b}=g;let E="11";b===0?E=h>=m?"00":"01":b+h>=m&&(E="10"),E!=="11"&&n.isVertical()&&!(parseInt(E,2)&parseInt(l,2))&&oe(f,!0)},c=()=>{document.addEventListener("touchstart",n.start),document.addEventListener("touchmove",a,{passive:!1}),D||document.body.classList.add(ge),D++},s=()=>{D&&(document.removeEventListener("touchstart",n.start),document.removeEventListener("touchmove",a),D--,D||document.body.classList.remove(ge))},d=()=>t()&&c(),i=()=>t()&&s();ke(d),ee(i),Le(i),I(t,f=>{f?c():s()})}function Ae(e){const t=w(!1);return I(e,n=>{n&&(t.value=n)},{immediate:!0}),n=>()=>t.value?n():null}const fe=()=>{var e;const{scopeId:t}=((e=V())==null?void 0:e.vnode)||{};return t?{[t]:""}:null},[Ht,Xt]=O("overlay"),Wt={show:Boolean,zIndex:y,duration:y,className:U,lockScroll:k,lazyRender:k,customStyle:Object};var Zt=x({name:Ht,props:Wt,setup(e,{slots:t}){const n=w(),o=Ae(()=>e.show||!e.lazyRender),r=c=>{e.lockScroll&&oe(c,!0)},a=o(()=>{var c;const s=_(at(e.zIndex),e.customStyle);return S(e.duration)&&(s.animationDuration=`${e.duration}s`),Ee(u("div",{ref:n,style:s,class:[Xt(),e.className]},[(c=t.default)==null?void 0:c.call(t)]),[[Ce,e.show]])});return Ie("touchmove",r,{target:n}),()=>u(be,{name:"van-fade",appear:!0},{default:a})}});const Gt=P(Zt),Jt=_({},Yt,{round:Boolean,position:p("center"),closeIcon:p("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:p("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[Qt,ve]=O("popup");var en=x({name:Qt,inheritAttrs:!1,props:Jt,emits:["open","close","opened","closed","keydown","update:show","clickOverlay","clickCloseIcon"],setup(e,{emit:t,attrs:n,slots:o}){let r,a;const c=w(),s=w(),d=Ae(()=>e.show||!e.lazyRender),i=K(()=>{const v={zIndex:c.value};if(S(e.duration)){const B=e.position==="center"?"animationDuration":"transitionDuration";v[B]=`${e.duration}s`}return v}),f=()=>{r||(r=!0,c.value=e.zIndex!==void 0?+e.zIndex:Ot(),t("open"))},l=()=>{r&&pt(e.beforeClose,{done(){r=!1,t("close"),t("update:show",!1)}})},g=v=>{t("clickOverlay",v),e.closeOnClickOverlay&&l()},m=()=>{if(e.overlay)return u(Gt,q({show:e.show,class:e.overlayClass,zIndex:c.value,duration:e.duration,customStyle:e.overlayStyle,role:e.closeOnClickOverlay?"button":void 0,tabindex:e.closeOnClickOverlay?0:void 0},fe(),{onClick:g}),{default:o["overlay-content"]})},h=v=>{t("clickCloseIcon",v),l()},b=()=>{if(e.closeable)return u(re,{role:"button",tabindex:0,name:e.closeIcon,class:[ve("close-icon",e.closeIconPosition),mt],classPrefix:e.iconPrefix,onClick:h},null)};let E;const F=()=>{E&&clearTimeout(E),E=setTimeout(()=>{t("opened")})},N=()=>t("closed"),X=v=>t("keydown",v),L=d(()=>{var v;const{round:B,position:j,safeAreaInsetTop:W,safeAreaInsetBottom:qe}=e;return Ee(u("div",q({ref:s,style:i.value,role:"dialog",tabindex:0,class:[ve({round:B,[j]:j}),{"van-safe-area-top":W,"van-safe-area-bottom":qe}],onKeydown:X},n,fe()),[(v=o.default)==null?void 0:v.call(o),b()]),[[Ce,e.show]])}),R=()=>{const{position:v,transition:B,transitionAppear:j}=e,W=v==="center"?"van-fade":`van-popup-slide-${v}`;return u(be,{name:B||W,appear:j,onAfterEnter:F,onAfterLeave:N},{default:L})};return I(()=>e.show,v=>{v&&!r&&(f(),n.tabindex===0&&pe(()=>{var B;(B=s.value)==null||B.focus()})),!v&&r&&(r=!1,t("close"))}),Te({popupRef:s}),Kt(s,()=>e.show&&e.lockScroll),Ie("popstate",()=>{e.closeOnPopstate&&(l(),a=!1)}),te(()=>{e.show&&f()}),ye(()=>{a&&(t("update:show",!0),a=!1)}),ee(()=>{e.show&&e.teleport&&(l(),a=!0)}),Re(yt,()=>e.show),()=>e.teleport?u(je,{to:e.teleport},{default:()=>[m(),R()]}):u(Be,null,[m(),R()])}});const tn=P(en);let A=0;function nn(e){e?(A||document.body.classList.add("van-toast--unclickable"),A++):A&&(A--,A||document.body.classList.remove("van-toast--unclickable"))}const[on,T]=O("toast"),rn=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay","zIndex"],an={icon:String,show:Boolean,type:p("text"),overlay:Boolean,message:y,iconSize:y,duration:Ge(2e3),position:p("middle"),teleport:[String,Object],wordBreak:String,className:U,iconPrefix:String,transition:p("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:U,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean,zIndex:y};var ze=x({name:on,props:an,emits:["update:show"],setup(e,{emit:t,slots:n}){let o,r=!1;const a=()=>{const l=e.show&&e.forbidClick;r!==l&&(r=l,nn(r))},c=l=>t("update:show",l),s=()=>{e.closeOnClick&&c(!1)},d=()=>clearTimeout(o),i=()=>{const{icon:l,type:g,iconSize:m,iconPrefix:h,loadingType:b}=e;if(l||g==="success"||g==="fail")return u(re,{name:l||g,size:m,class:T("icon"),classPrefix:h},null);if(g==="loading")return u(De,{class:T("loading"),size:m,type:b},null)},f=()=>{const{type:l,message:g}=e;if(n.message)return u("div",{class:T("text")},[n.message()]);if(S(g)&&g!=="")return l==="html"?u("div",{key:0,class:T("text"),innerHTML:String(g)},null):u("div",{class:T("text")},[g])};return I(()=>[e.show,e.forbidClick],a),I(()=>[e.show,e.type,e.message,e.duration],()=>{d(),e.show&&e.duration>0&&(o=setTimeout(()=>{c(!1)},e.duration))}),te(a),me(a),()=>u(tn,q({class:[T([e.position,e.wordBreak==="normal"?"break-normal":e.wordBreak,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:s,onClosed:d,"onUpdate:show":c},Ze(e,rn)),{default:()=>[i(),f()]})}});function sn(){const e=he({show:!1}),t=r=>{e.show=r},n=r=>{_(e,r,{transitionAppear:!0}),t(!0)},o=()=>t(!1);return Te({open:n,close:o,toggle:t}),{open:n,close:o,state:e,toggle:t}}function cn(e){const t=Me(e),n=document.createElement("div");return document.body.appendChild(n),{instance:t.mount(n),unmount(){t.unmount(),document.body.removeChild(n)}}}const ln={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let Y=[],un=!1,we=_({},ln);const dn=new Map;function gn(e){return H(e)?e:{message:e}}function fn(){const{instance:e,unmount:t}=cn({setup(){const n=w(""),{open:o,state:r,close:a,toggle:c}=sn(),s=()=>{},d=()=>u(ze,q(r,{onClosed:s,"onUpdate:show":c}),null);return I(n,i=>{r.message=i}),V().render=d,{open:o,close:a,message:n}}});return e}function vn(){if(!Y.length||un){const e=fn();Y.push(e)}return Y[Y.length-1]}function wn(e={}){if(!_e)return{};const t=vn(),n=gn(e);return t.open(_({},we,dn.get(n.type||we.type),n)),t}P(ze);const mn={},pn={class:"page_content"},yn=Ue('<div class="snippet"><p>fgrgregregregqwgrew</p><p>fgrgregregregqwgrew</p><p>fgrgregregregqwgrew</p><p>fgrgregregregqwgrewfgrgregregregqwgrewfgrgregregregqwgrew</p><p>fgrgregregregqwgrew</p><p>fgrgregregregqwgrew</p><p>fgrgregregregqwgrew</p><p>fgrgregregregqwgrew</p><p>fgrgregregregqwgrewfgrgregregregqwgrewfgrgregregregqwgrew</p><p>fgrgregregregqwgrew</p><p>fgrgregregregqwgrew</p><p>fgrgregregregqwgrew</p><p>fgrgregregregqwgrew</p><p>fgrgregregregqwgrewfgrgregregregqwgrewfgrgregregregqwgrew</p><p>fgrgregregregqwgrew</p><p>fgrgregregregqwgrew</p><p>fgrgregregregqwgrew</p><p>fgrgregregregqwgrew</p><p>fgrgregregregqwgrewfgrgregregregqwgrewfgrgregregregqwgrew</p><p>fgrgregregregqwgrew</p><p>fgrgregregregqwgrew</p><p>fgrgregregregqwgrew</p><p>fgrgregregregqwgrew</p><p>fgrgregregregqwgrewfgrgregregregqwgrewfgrgregregregqwgrew</p><p>fgrgregregregqwgrew</p></div>',1),hn=[yn];function bn(e,t){return Se(),xe("div",pn,hn)}const En=Ye(mn,[["render",bn]]),Cn=Z("section",{class:"promo"},[Z("div",{class:"promo_title"},"Taira"),Z("div",{class:"promo_desc"}," 简洁、直观、强悍的前端开发框架，让web开发更迅速、简单。 ")],-1),xn=x({__name:"index",setup(e){const t=()=>{wn("emmm")};return(n,o)=>{const r=Mt;return Se(),xe(Be,null,[Cn,u(En),u(r,{type:"primary",onClick:t},{default:Ve(()=>[Ke("按钮test")]),_:1})],64)}}});export{xn as default};
