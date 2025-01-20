var ti=i=>{throw TypeError(i)};var Gt=(i,e,t)=>e.has(i)||ti("Cannot "+t);var m=(i,e,t)=>(Gt(i,e,"read from private field"),t?t.call(i):e.get(i)),T=(i,e,t)=>e.has(i)?ti("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t),S=(i,e,t,o)=>(Gt(i,e,"write to private field"),o?o.call(i,t):e.set(i,t),t),St=(i,e,t)=>(Gt(i,e,"access private method"),t);import{t as Wt,r as sn,i as g,a as Ri,b as C,d as O,T as H,c as Fi,B as Bi,e as Vi,f as Me,g as Ui,h as $i,x as rn,E as de,j as an,k as ct,l as ln,m as dn,O as cn}from"./indexhtml-BS-8QCE-.js";/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(i,e){return i};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let hn=/(url\()([^)]*)(\))/g,un=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,Ot,N;function vt(i,e){if(i&&un.test(i)||i==="//")return i;if(Ot===void 0){Ot=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",Ot=t.href==="http://a/c%20d"}catch{}}if(e||(e=document.baseURI||window.location.href),Ot)try{return new URL(i,e).href}catch{return i}return N||(N=document.implementation.createHTMLDocument("temp"),N.base=N.createElement("base"),N.head.appendChild(N.base),N.anchor=N.createElement("a"),N.body.appendChild(N.anchor)),N.base.href=e,N.anchor.href=i,N.anchor.href||i}function ke(i,e){return i.replace(hn,function(t,o,n,s){return o+"'"+vt(n.replace(/["']/g,""),e)+"'"+s})}function Ie(i){return i.substring(0,i.lastIndexOf("/")+1)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ji=!window.ShadyDOM||!window.ShadyDOM.inUse;!window.ShadyCSS||window.ShadyCSS.nativeCss;const pn=ji&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const i=new CSSStyleSheet;i.replaceSync("");const e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[i],e.shadowRoot.adoptedStyleSheets[0]===i}catch{return!1}})();let fn=window.Polymer&&window.Polymer.rootPath||Ie(document.baseURI||window.location.href),Ht=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures;let bt=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,_n=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,qi=window.Polymer&&window.Polymer.legacyOptimizations||!1,Yi=window.Polymer&&window.Polymer.legacyWarnings||!1,mn=window.Polymer&&window.Polymer.syncInitialRender||!1,ce=window.Polymer&&window.Polymer.legacyUndefined||!1,gn=window.Polymer&&window.Polymer.orderedComputed||!1,ei=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Gi=window.Polymer&&window.Polymer.fastDomIf||!1,vn=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1;window.Polymer&&window.Polymer.legacyNoObservedAttributes;let yn=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ze={},Wi={};function ii(i,e){ze[i]=Wi[i.toLowerCase()]=e}function oi(i){return ze[i]||Wi[i.toLowerCase()]}function bn(i){i.querySelector("style")&&console.warn("dom-module %s has style outside template",i.id)}class lt extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){let o=oi(e);return o&&t?o.querySelector(t):o}return null}attributeChangedCallback(e,t,o,n){t!==o&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=vt(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=Ie(t)}return this.__assetpath}register(e){if(e=e||this.id,e){if(bt&&oi(e)!==void 0)throw ii(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,ii(e,this),bn(this)}}}lt.prototype.modules=ze;customElements.define("dom-module",lt);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Cn="link[rel=import][type~=css]",wn="include",ni="shady-unscoped";function Ki(i){return lt.import(i)}function si(i){let e=i.body?i.body:i;const t=ke(e.textContent,i.baseURI),o=document.createElement("style");return o.textContent=t,o}function xn(i){const e=i.trim().split(/\s+/),t=[];for(let o=0;o<e.length;o++)t.push(...An(e[o]));return t}function An(i){const e=Ki(i);if(!e)return console.warn("Could not find style data in module named",i),[];if(e._styles===void 0){const t=[];t.push(...Xi(e));const o=e.querySelector("template");o&&t.push(...Le(o,e.assetpath)),e._styles=t}return e._styles}function Le(i,e){if(!i._styles){const t=[],o=i.content.querySelectorAll("style");for(let n=0;n<o.length;n++){let s=o[n],r=s.getAttribute(wn);r&&t.push(...xn(r).filter(function(a,l,d){return d.indexOf(a)===l})),e&&(s.textContent=ke(s.textContent,e)),t.push(s)}i._styles=t}return i._styles}function En(i){let e=Ki(i);return e?Xi(e):[]}function Xi(i){const e=[],t=i.querySelectorAll(Cn);for(let o=0;o<t.length;o++){let n=t[o];if(n.import){const s=n.import,r=n.hasAttribute(ni);if(r&&!s._unscopedStyle){const a=si(s);a.setAttribute(ni,""),s._unscopedStyle=a}else s._style||(s._style=si(s));e.push(r?s._unscopedStyle:s._style)}}return e}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let ri=0;function Ji(i,e=[],t={}){const o=t.moduleId||`custom-style-module-${ri}`;ri+=1;const n=document.createElement("dom-module");i&&n.setAttribute("theme-for",i);const s=!!(e.length&&t.moduleId),r=[].concat(t.include||[]);r.length===0?n.__allStyles=e:s||(n.__partialStyles=e),n.innerHTML=`
    <template>
      ${r.map(a=>`<style include=${a}></style>`)}
      ${s?`<style>${e.map(a=>a.cssText).join(`
`)}</style>`:""}
    </template>
  `,n.register(o)}function Pn(i){return Le(i.querySelector("template")).map(e=>sn(e.textContent))}function Tn(){const e=lt.prototype.modules;return Object.keys(e).map(t=>{const o=e[t],n=o.getAttribute("theme-for");return o.__allStyles||(o.__allStyles=Pn(o).concat(o.__partialStyles||[])),{themeFor:n,moduleId:t,styles:o.__allStyles}})}window.Vaadin||(window.Vaadin={});window.Vaadin.styleModules={getAllThemes:Tn,registerStyles:Ji};Wt.length>0&&(Wt.forEach(i=>{Ji(i.themeFor,i.styles,{moduleId:i.moduleId,include:i.include})}),Wt.length=0);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Nn=g`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`;Ri("sizing-props",Nn);C("vaadin-input-container",g`
    :host {
      background: var(--_background);
      padding: 0 calc(0.375em + var(--_input-container-radius) / 4 - 1px);
      font-weight: var(--vaadin-input-field-value-font-weight, 500);
      line-height: 1;
      position: relative;
      cursor: text;
      box-sizing: border-box;
      border-radius:
        /* See https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius#syntax */
        var(--vaadin-input-field-top-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-top-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-start-radius, var(--_input-container-radius));
      /* Fallback */
      --_input-container-radius: var(--vaadin-input-field-border-radius, var(--lumo-border-radius-m));
      --_input-height: var(--lumo-text-field-size, var(--lumo-size-m));
      /* Default values */
      --_background: var(--vaadin-input-field-background, var(--lumo-contrast-10pct));
      --_hover-highlight: var(--vaadin-input-field-hover-highlight, var(--lumo-contrast-50pct));
      --_input-border-color: var(--vaadin-input-field-border-color, var(--lumo-contrast-50pct));
      --_icon-color: var(--vaadin-input-field-icon-color, var(--lumo-contrast-60pct));
      --_icon-size: var(--vaadin-input-field-icon-size, var(--lumo-icon-size-m));
      --_invalid-background: var(--vaadin-input-field-invalid-background, var(--lumo-error-color-10pct));
      --_invalid-hover-highlight: var(--vaadin-input-field-invalid-hover-highlight, var(--lumo-error-color-50pct));
      --_disabled-background: var(--vaadin-input-field-disabled-background, var(--lumo-contrast-5pct));
      --_disabled-value-color: var(--vaadin-input-field-disabled-value-color, var(--lumo-disabled-text-color));
    }

    :host([dir='rtl']) {
      border-radius:
        /* Don't use logical props, see https://github.com/vaadin/vaadin-time-picker/issues/145 */
        var(--vaadin-input-field-top-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-top-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-end-radius, var(--_input-container-radius));
    }

    /* Used for hover and activation effects */
    :host::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      pointer-events: none;
      background: var(--_hover-highlight);
      opacity: 0;
      transition:
        transform 0.15s,
        opacity 0.2s;
      transform-origin: 100% 0;
    }

    ::slotted(:not([slot$='fix'])) {
      cursor: inherit;
      min-height: var(--vaadin-input-field-height, var(--_input-height));
      padding: 0 0.25em;
      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      mask-image: var(--_lumo-text-field-overflow-mask-image);
    }

    /* Read-only */
    :host([readonly]) {
      color: var(--lumo-secondary-text-color);
      background-color: transparent;
      cursor: default;
    }

    :host([readonly])::after {
      background-color: transparent;
      opacity: 1;
      border: var(--vaadin-input-field-readonly-border, 1px dashed var(--lumo-contrast-30pct));
    }

    /* Disabled */
    :host([disabled]) {
      background: var(--_disabled-background);
    }

    :host([disabled]) ::slotted(:not([slot$='fix'])) {
      -webkit-text-fill-color: var(--_disabled-value-color);
      color: var(--_disabled-value-color);
    }

    /* Invalid */
    :host([invalid]) {
      background: var(--_invalid-background);
    }

    :host([invalid]:not([readonly]))::after {
      background: var(--_invalid-hover-highlight);
    }

    /* Slotted icons */
    ::slotted(vaadin-icon) {
      color: var(--_icon-color);
      width: var(--_icon-size);
      height: var(--_icon-size);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    ::slotted(vaadin-icon[icon^='vaadin:']) {
      padding: 0.25em;
      box-sizing: border-box !important;
    }

    /* Text align */
    :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
    }

    @-moz-document url-prefix() {
      :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
        mask-image: var(--_lumo-text-field-overflow-mask-image);
      }
    }

    :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
      text-align: start;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center']) ::slotted(:not([slot$='fix'])) {
      text-align: center;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
      text-align: end;
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }

    /* RTL specific styles */
    :host([dir='rtl'])::after {
      transform-origin: 0% 0;
    }

    :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }
  `,{moduleId:"lumo-input-container"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Sn=g`
  @font-face {
    font-family: 'lumo-icons';
    src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABHAAAsAAAAAI6AAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuNY21hcAAAAYgAAAD+AAADymne8hxnbHlmAAACiAAAC+gAABioIzlOlWhlYWQAAA5wAAAAMAAAADZa/6SsaGhlYQAADqAAAAAdAAAAJAbpA4BobXR4AAAOwAAAABAAAAC0q+AAAGxvY2EAAA7QAAAAXAAAAFyF7o1GbWF4cAAADywAAAAfAAAAIAFMAXBuYW1lAAAPTAAAATEAAAIuUUJZCHBvc3QAABCAAAABPQAAAgfdkltveJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+xDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mEO+p/FEMUcxDANKMwIkgMABvgMMAB4nO3SV26EMABF0UsZpjG9d6Y3FpgF5StLYxMTP16WEUvHV1gGIQzQAJKgDFKIfojQ+A6rUb2e0KnXU77qPanWq/LzCXOkOVyn9RyHvWl4YkaTFu1wX5ecHn0GDBkxZsKUGXMWLFmxZsOWHXsOFBw5cebClRt3Hjx58dZ7RRn/I9cUF39Xpb691acRG2piOtUqNZ1P1TCdeJUZatNQW4baNtSO6U+ouoaam96u6hlq31AHhjo01JGhjg11YqhTQ50Z6txQF4a6NNSVoa4NdWOoW0PdGereUA+GWhjq0VBPhno21IuhXg31Zqh3Q30Y6tNQX4b6NtTSKH8BOIRpQQAAeJy1WH1sW9UVv+fG9vPz+7Bf/N6zHcd2/J04jbP6s0lap4kDpB9JWzUUCqxNgaHxpTI6hNhUNLVr17HSISb2D2iAJrWb6FTWahNQdQxRvmHamAR0qibE1E18CG3QaVNFvJ17n+3YIf1AiMQ679x77j3v3HPPPed3H7ER/OsYpw8TmQRIiuQJ8RZK+WjO1B3xaCzla21orY10a+OQ6aHTHtP0zB31mBs1GZ6RNU2uXc7oPL+xdRS9R9X1oK4fVfijdsBqvqF6vd1eLzPrYrYZ57WteF7bPDIc5+ZcJnta+S9i2Vfhs4MaMwZNQmO0Vv7gF/MZcNsCcJp4sJFSwYyAmRuFCmTBDRBUkwGqnlViyjmVBpLqaXhNpt0J5V1JOqMkuqn8WkMHvZX+iOlImiqkBiFVYDrCqINulmkwKb8ry2fkZBBn7FcTlk4ZdfpRZ9MOesLSAakKt0N3g4p2jAL8eIEOOqom/U0lgQRXUl8LtXM7HFkojUIpF0ErVBhcZC1vtyjtpsqr83a8RVcSH+ool8LgcIMjNohmVCACuDs506BdO6WIQeXjUsh1XKZGRNpp9piv3+Givoh00OU6KEV81HUHTLtN093Q+YGlE3wLHWRtMNy9XWqdLm2HKbaNsGzhu+41eswFOjE6WKSk2/1Wpt+qHeM6phbohmVmj3GvpdcVkiy9zbXfzHVqKuDB0IR2P6ZpF+D7dy6YC/9svGmBE5hKB9+X2+hh4iYRMkhGyTqyFc9APmeGQHf043tWQKHkizmwaY5AroTNVJzJDc2SFzUu92kOLsdmKu77vByb8/IjtxmhkMFISRBFISO4XMLJlj4XgGuRXtaHw2FLyHifdSOpisIhJjgkiPBAyJh7lfXTkhEadwk1mUngrOC6MazX7mASeEAPV1FyjEumBOaEDu4DP/ogRDKkiLEV1woVyMeLLKJCEM+FwdCwL4XLcRgdbfkhbzS8BNvXDKzNQiAWgOzagTXF1Eyq+Ci6/TPm/JrNY/59p1epKN4jQFGe0fx+LTMwNVCrAU2VSqnaKYzIiGmWe2Rvp9KDJhncrjLaFce8VCUbyQ1kB9lNfkJ+To6R58mfyd/Ip9ABXohDHqqwEW7A2Mij1ehntLu+h8xMtocjUJcYwoLdtYafv/1Vjy8vjLaLtBfOt3/B931Rexa24e5zstgnyqvZHs69zuhq3vFgRpQVJyN7FuE++RLSeW4xMi+t6Zeo5sIK6S5dlGVRD2hWnGoB3j7OV3lesvNLic8tOnLRSRfRdOna63VJp/1WbYs5dFZjy1AqpGICQEWKmNI+CZNoVTJ7pNop+IZkRrBHgnEmqr3TrEsfw1Gi8LqE+S1aV0SNNwXVVVvuUoU3ld6TLwmditIpvKTU50zSzWwO1h0rL8awnulwTXMYrGDT4aQ1fb4GPkyv5vMEh5Vec6yw0AMXnfcx1l/rfVZaKLDi0W4j/HfeyGZuHOf1IUGW1udizU2leXY0OmLpVDpVKJfKpZzPRKHgEBzpXAUKWYipoIeBdl3JfLZVBizEqWun1i4ZGFiyduq3DebayXsmJ+95gBG4+Urm1a2SdpKV57lP2wZyZqI+FAlfUtO+NCmgdWhMOS1gDY+jHWnBhwjBQLMEXxmLbx6t9JXTWDLtsSxgisfErqvQMbbBoywZmeyLeWe8OWNydFDxzMx4lMGRtX0xN3YFJkeW+O0bascGNwwObtjCCOzrzAVWjSwN2K9cpyn9o5cZOXMmkAuM85EbNHnJyHhfLLCnPhxJYw9eoIMkyC3l+4ZuY5ig7lW2oYUynDgg+Xrk+++Xe3zSgRYetnyuy+KbfjiB+GAAtZ8HHXmtijZfFFgrujhmOs2qkXvuSV6WqA1WLYqhPHOfsa26rklKFqbAGL2dOIlGurB6LWFVFd/KoBBaYTFYVBs93hZRFlrG5Ex4NVFIJguJVvqnBW2kNNvFGx90YUcSEvyZSMDeZjc0xYlEYy8+hHcWx9YrZOaPPyCGepP5Q34aXnGBr8d1QhSf4yjtiebZqNJfEYl4SY6dDRb8WSguLZW9ZQtBpoW4hX0QMyB2KmsYcOh8HMQxBn288oZ6BXV0GOq/ClKsC6T8g9X3OFKZNkJrYkOx2lEk+KNDy953+wGHXuGGzhGZ+uLK8FVrQkbtKBv+9EztU2sgTCNpvXMdJjqJ4tkdw+x00dPKkZ1QR254x7GQoFmvfakSnL3gCc5nREly2mN2pyTLMacMipNT7YInGU7JzlN2p9N+yinXTirOKEvPUafSWMNDmCf9pIQYaG19DSxKGqvAQ+xg60iabEm5MheUU2n+HxO4TDDbjnw6xxK8QzfhbHXq8pWVqanKysun9s6ztdt7sivGqruqYyuyPS6Hw9XehGt6q+l0dT0jvaFMZjiTuTHo7+vdtHJTb58/2ML+IxHt9/n9vv5owiWKrrbWD+sakKxhKoYzxF5f7y9INxki42QNuYrVFDPfvqxyY83xWNMV+ZxPSMWb62W+wPSCJwkDDl1WZOGW84nAEo4A7HjB/uWmOdayRFnKjazi668u/ajJlUd87aPk048Crlu4j1Oh9gxdL3Z1inNPIt2xvKNlsU4hn54Z5Y6YbTDu9hHOvkcFAb35fU6hNovKOrtQmcvbNV9/Ntfv5xf4atDWOOTX6CSHZ08xujhPs51+f9zvf1YLIGoPPKvxVh0TSLAXzzUBFiXs7GJVB7vH5/PAXznd4+vx4a95h3qI/oYIpIdMkA1kC7kVLS3GhWI5bwj1fIaVKG/Ei5gXWOjhtcJbzFthaMQrwIcIRj0ppvO6yV95icu9j/YPDNySWp7w+kOr95R1RfGpfVlDVhS/2geJ5Umv2mn0rkxBvzvgdisndJXaVF1X5z5jdHGe2n/QnYo8+b2uaMivhowgjYcLnVqnrEpQezsieyVZ6ooETbdJO6ip+cORLpes6BL82/qg8VHbo45B/vch/YQeJX28QvEANR3sQhxh+TcMCEd4l8BKF7uID7KM05tRYlIHHXY63YIi2fXQyj5XSBbcMeewKLpttkJ2Syz33YJfDdJdSYkqHbYb3VHRJgTV8c0TAy67YHeK7htwOKWax5co7Do8Pfh1tKdx1g5j9o6TZeQyMo27FuW3vbYsbY/Op3AG06DMKionRlpgHzCEeMmLU5opRrCyS670RzppZeW5p/iT3jL3lB4O63QS6dzzh8SAtOqwGJK3bv+lGJTWbr++471wsVKMRJCEK5H+cLg/Qp+IDsdqs7HhKD7hMXyyrD/Li8RjRqimHhI7HP2vSDZn9brplySb0L9dgpURSwmSiBFhilrwB8OA9gZ29NkRO/669parW9e7XZDxwvgRu+SE7zgl+xG5p/HtRqJ3cdwSZwsbwTA1WT3jEdyPN0sWxvDGy+xovIzHosnwc9LePf9tywun0fMkWaFYZbB4oovRq8VyKYUBkMVXqVhBHSylQ0wanvla3+rQ1XbR8ZzstYOo2Mf7vjk8ftcGDWxdSdXx0cAVveHg1TZFtEOn8ntBBFs11V++vuLUQ5qz+U6d/oUjpGIdNjOQhJXNqn5YCS1Yy5PofLGEs6Js2yOKe2yyOLxtaGjbt7cNIURCEDdWfaQ6lurtRYbePCuItv1iUNxvE4Vdw2zQ0LZhdv2fxjHp5uAmdlBpopHXoJGU8e6BRc0yi+PztkaHTRRrW1m2hcfFLlEUzzD+DGczjEVCg9jEQZhFcdAL2DjD+DPiSWQzjM2I89g5RXdxfECS+CIWy1hTGmFs6EIbkv/pbtkfU3aPrZ+4c2Lizn07qufym/L5TTdtyuU2/We3HPeDsjtb3bGPSSfW31aX3LQpX/d9sL7fWYpRJPBbCJavYjrFjj0rT2GWCZjf6Ytffr8beXl/HYeyGwJiIK8FLDHbfo65xGz7YCSRqCQSkbbHI5eUU5X4sjj+zrU9aHnRlEnrd7YGptd0x2Jf/RbH9PAiovadckSnEsJ661OgPFuH9B4O6e202vIN0h9xHXSJh1wRP5Vqv1uI6Wn9Gxmrwzqrii1gqhEscJanuAlGas+s2/uzvetgS72NpHZ6aHbZstmh/wPq1seEeJxjYGRgYADi31ySEvH8Nl8ZuJlfAEUYalQ3NCLo/6+ZpzLdAnI5GJhAogAiBgraeJxjYGRgYA76nwUkXzAAAfNUBkYGVKALAFb4A3EAAAB4nGNgYGBgfjG0MAAMzihlAAAAAABOAJoA6AEKASwBTgFwAZoBxAHuAhoCnALoBJoEvATWBPIFDgUqBXoF0AX+BkQGlga4BwgHagfiCGoIpAi8CVAJmAoQCiwKVgqQCtYLGAtOC4gL6AwuDFR4nGNgZGBg0GVMYRBlAAEmIOYCQgaG/2A+AwAYygG+AHicbZE9TsMwGIbf9A/RSggEYmHxAgtq+jN2ZGj3Dt3T1GlTOXHkuBW9AyfgEByCgTNwCA7BW/NJlVBtyd/jx+8XKwmAa3whwnFE6Ib1OBq44O6Pm6Qb4Rb5QbiNHh6FO/RD4S6eMRHu4RaaT4halzR3eBVu4Apvwk36d+EW+UO4jXt8Cnfov4W7WOBHuIen6MXsCtvPU1vWc73emcSdxIkW2tW5LdUoHp7kTJfaJV6v1PKg6v167H2mMmcLNbWl18ZYVTm71amPN95Xk8EgEx+ntoDBDgUs+siRspaoMef7rukNEriziXNuwS7Hmoe9wggxv+e55IzJMqQTeNYV00scuNbY8+YxrUfGfcaMZb/CNPQe04bT0lThbEuT0sfYhK6K/23Amf3Lx+H24hcj4GScAAAAeJxtjuduwzAMhH2NnTqOk+6993TfSZFY24giGZTVon36eiRFf5SAiO/A05HBWtBXEvxfGdYwQIgIQ6wjxggJxkgxwRQb2MQWtrGDXexhHwc4xBGOcYJTnOEcF7jEFa5xg1vc4R4PeMQTnvGCV2R4C1Khy9xkkkxNnPRC03s97pHLvKgTYXJNmbKfZom9o8POEffsq0Qw28+ltcPe2uHS2rGvRjPBmSwE1+GMtI6l0GSU4JEsSM4XgudpQx9sTRf3K9rAyUr0962UryKprZwPpM0jyda5uP2qrVBjxSLPCmGUplixrdpBSKqsI2oO4gF9Udq8TJVOzDSpcEHGR4vSeJdaVsSkMl26OqoKa6jttQ0rLb6a5l3YjO2QqV01YXLlNy2XDR0JlkXojbJTb/5GDX3V+kPviIPgB9AUks0AAAA=)
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html {
    --lumo-icons-align-center: '\\ea01';
    --lumo-icons-align-left: '\\ea02';
    --lumo-icons-align-right: '\\ea03';
    --lumo-icons-angle-down: '\\ea04';
    --lumo-icons-angle-left: '\\ea05';
    --lumo-icons-angle-right: '\\ea06';
    --lumo-icons-angle-up: '\\ea07';
    --lumo-icons-arrow-down: '\\ea08';
    --lumo-icons-arrow-left: '\\ea09';
    --lumo-icons-arrow-right: '\\ea0a';
    --lumo-icons-arrow-up: '\\ea0b';
    --lumo-icons-bar-chart: '\\ea0c';
    --lumo-icons-bell: '\\ea0d';
    --lumo-icons-calendar: '\\ea0e';
    --lumo-icons-checkmark: '\\ea0f';
    --lumo-icons-chevron-down: '\\ea10';
    --lumo-icons-chevron-left: '\\ea11';
    --lumo-icons-chevron-right: '\\ea12';
    --lumo-icons-chevron-up: '\\ea13';
    --lumo-icons-clock: '\\ea14';
    --lumo-icons-cog: '\\ea15';
    --lumo-icons-cross: '\\ea16';
    --lumo-icons-download: '\\ea17';
    --lumo-icons-drag-handle: '\\ea18';
    --lumo-icons-dropdown: '\\ea19';
    --lumo-icons-edit: '\\ea1a';
    --lumo-icons-error: '\\ea1b';
    --lumo-icons-eye: '\\ea1c';
    --lumo-icons-eye-disabled: '\\ea1d';
    --lumo-icons-menu: '\\ea1e';
    --lumo-icons-minus: '\\ea1f';
    --lumo-icons-ordered-list: '\\ea20';
    --lumo-icons-phone: '\\ea21';
    --lumo-icons-photo: '\\ea22';
    --lumo-icons-play: '\\ea23';
    --lumo-icons-plus: '\\ea24';
    --lumo-icons-redo: '\\ea25';
    --lumo-icons-reload: '\\ea26';
    --lumo-icons-resize-handle: '\\ea27';
    --lumo-icons-search: '\\ea28';
    --lumo-icons-undo: '\\ea29';
    --lumo-icons-unordered-list: '\\ea2a';
    --lumo-icons-upload: '\\ea2b';
    --lumo-icons-user: '\\ea2c';
  }
`;Ri("font-icons",Sn);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Zi=g`
  [part$='button'] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--lumo-icon-size-m);
    text-align: center;
    color: var(--lumo-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:hover {
    color: var(--lumo-contrast-90pct);
  }

  :host([disabled]) [part$='button'],
  :host([readonly]) [part$='button'] {
    color: var(--lumo-contrast-20pct);
    cursor: default;
  }

  [part$='button']::before {
    font-family: 'lumo-icons';
    display: block;
  }
`;C("",Zi,{moduleId:"lumo-field-button"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const On=g`
  :host {
    --_helper-spacing: var(--vaadin-input-field-helper-spacing, 0.4em);
  }

  :host([has-helper]) [part='helper-text']::before {
    content: '';
    display: block;
    height: var(--_helper-spacing);
  }

  [part='helper-text'] {
    display: block;
    color: var(--vaadin-input-field-helper-color, var(--lumo-secondary-text-color));
    font-size: var(--vaadin-input-field-helper-font-size, var(--lumo-font-size-xs));
    line-height: var(--lumo-line-height-xs);
    font-weight: var(--vaadin-input-field-helper-font-weight, 400);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
  }

  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  :host([disabled]) [part='helper-text'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::before {
    display: none;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::after {
    content: '';
    display: block;
    height: var(--_helper-spacing);
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] {
    order: 0;
    padding-bottom: var(--_helper-spacing);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text'] {
    order: 1;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] + * {
    order: 2;
  }

  :host([has-helper][theme~='helper-above-field']) [part='error-message'] {
    order: 3;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Qi=g`
  [part='label'] {
    align-self: flex-start;
    color: var(--vaadin-input-field-label-color, var(--lumo-secondary-text-color));
    font-weight: var(--vaadin-input-field-label-font-weight, 500);
    font-size: var(--vaadin-input-field-label-font-size, var(--lumo-font-size-s));
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
    line-height: 1;
    padding-right: 1em;
    padding-bottom: 0.5em;
    /* As a workaround for diacritics being cut off, add a top padding and a
    negative margin to compensate */
    padding-top: 0.25em;
    margin-top: -0.25em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    max-width: 100%;
    box-sizing: border-box;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--vaadin-input-field-focused-label-color, var(--lumo-primary-text-color));
  }

  :host(:hover:not([readonly]):not([focused])) [part='label'] {
    color: var(--vaadin-input-field-hovered-label-color, var(--lumo-body-text-color));
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--vaadin-input-field-label-color, var(--lumo-secondary-text-color));
    }
  }

  :host([has-label])::before {
    margin-top: calc(var(--lumo-font-size-s) * 1.5);
  }

  :host([has-label][theme~='small'])::before {
    margin-top: calc(var(--lumo-font-size-xs) * 1.5);
  }

  :host([has-label]) {
    padding-top: var(--lumo-space-m);
  }

  :host([has-label]) ::slotted([slot='tooltip']) {
    --vaadin-tooltip-offset-bottom: calc((var(--lumo-space-m) - var(--lumo-space-xs)) * -1);
  }

  :host([required]) [part='required-indicator']::after {
    content: var(--lumo-required-field-indicator, '\\2022');
    transition: opacity 0.2s;
    color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
    position: absolute;
    right: 0;
    width: 1em;
    text-align: center;
  }

  :host([invalid]) [part='required-indicator']::after {
    color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
  }

  [part='error-message'] {
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    font-size: var(--vaadin-input-field-error-font-size, var(--lumo-font-size-xs));
    line-height: var(--lumo-line-height-xs);
    font-weight: var(--vaadin-input-field-error-font-weight, 400);
    color: var(--vaadin-input-field-error-color, var(--lumo-error-text-color));
    will-change: max-height;
    transition: 0.4s max-height;
    max-height: 5em;
  }

  :host([has-error-message]) [part='error-message']::before,
  :host([has-error-message]) [part='error-message']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host(:not([invalid])) [part='error-message'] {
    max-height: 0;
    overflow: hidden;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='label'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }

  :host([dir='rtl']) [part='label'] {
    padding-left: 1em;
    padding-right: 0;
  }

  :host([dir='rtl']) [part='required-indicator']::after {
    right: auto;
    left: 0;
  }

  :host([dir='rtl']) [part='error-message'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }
`;C("",Qi,{moduleId:"lumo-required-field"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Mn=g`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--vaadin-input-field-value-color, var(--lumo-body-text-color));
    font-size: var(--vaadin-input-field-value-font-size, var(--lumo-font-size-m));
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
    --_input-height: var(--vaadin-input-field-height, var(--lumo-text-field-size));
    --_disabled-value-color: var(--vaadin-input-field-disabled-value-color, var(--lumo-disabled-text-color));
  }

  :host::before {
    height: var(--_input-height);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([focused]) [part='input-field'] ::slotted(:is(input, textarea)) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  ::slotted(:is(input, textarea):placeholder-shown) {
    color: var(--vaadin-input-field-placeholder-color, var(--lumo-secondary-text-color));
  }

  /* Hover */
  :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
    opacity: var(--vaadin-input-field-hover-highlight-opacity, 0.1);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0;
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0.2;
    }
  }

  /* Trigger when not focusing using the keyboard */
  :host([focused]:not([focus-ring]):not([readonly])) [part='input-field']::after {
    transform: scaleX(0);
    transition-duration: 0.15s, 1s;
  }

  /* Focus-ring */
  :host([focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }

  /* Read-only and disabled */
  :host(:is([readonly], [disabled])) ::slotted(:is(input, textarea):placeholder-shown) {
    opacity: 0;
  }

  /* Read-only style */
  :host([readonly]) {
    --vaadin-input-field-border-color: transparent;
  }

  /* Disabled style */
  :host([disabled]) {
    pointer-events: none;
    --vaadin-input-field-border-color: var(--lumo-contrast-20pct);
  }

  :host([disabled]) [part='label'],
  :host([disabled]) [part='input-field'] ::slotted([slot$='fix']) {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([disabled]) [part='input-field'] ::slotted(:not([slot$='fix'])) {
    color: var(--_disabled-value-color);
    -webkit-text-fill-color: var(--_disabled-value-color);
  }

  /* Invalid style */
  :host([invalid]) {
    --vaadin-input-field-border-color: var(--lumo-error-color);
  }

  :host([invalid][focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
  }

  :host([input-prevented]) [part='input-field'] {
    animation: shake 0.15s infinite;
  }

  @keyframes shake {
    25% {
      transform: translateX(4px);
    }
    75% {
      transform: translateX(-4px);
    }
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small']) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small']) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* Slotted content */
  [part='input-field'] ::slotted(:not(vaadin-icon):not(input):not(textarea)) {
    color: var(--lumo-secondary-text-color);
    font-weight: 400;
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }
`,De=[Qi,Zi,On,Mn];C("",De,{moduleId:"lumo-input-field-shared-styles"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */C("vaadin-text-field",De,{moduleId:"lumo-text-field-styles"});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let kn=0;const y=function(i){let e=i.__mixinApplications;e||(e=new WeakMap,i.__mixinApplications=e);let t=kn++;function o(n){let s=n.__mixinSet;if(s&&s[t])return n;let r=e,a=r.get(n);if(!a){a=i(n),r.set(n,a);let l=Object.create(a.__mixinSet||s||null);l[t]=!0,a.__mixinSet=l}return a}return o};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const v=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?i=>ShadyDOM.patch(i):i=>i;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function he(i){return i.indexOf(".")>=0}function R(i){let e=i.indexOf(".");return e===-1?i:i.slice(0,e)}function In(i,e){return i.indexOf(e+".")===0}function Rt(i,e){return e.indexOf(i+".")===0}function Ft(i,e,t){return e+t.slice(i.length)}function mt(i){if(Array.isArray(i)){let e=[];for(let t=0;t<i.length;t++){let o=i[t].toString().split(".");for(let n=0;n<o.length;n++)e.push(o[n])}return e.join(".")}else return i}function to(i){return Array.isArray(i)?mt(i).split("."):i.toString().split(".")}function E(i,e,t){let o=i,n=to(e);for(let s=0;s<n.length;s++){if(!o)return;let r=n[s];o=o[r]}return t&&(t.path=n.join(".")),o}function ai(i,e,t){let o=i,n=to(e),s=n[n.length-1];if(n.length>1){for(let r=0;r<n.length-1;r++){let a=n[r];if(o=o[a],!o)return}o[s]=t}else o[e]=t;return n.join(".")}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Bt={},zn=/-[a-z]/g,Ln=/([A-Z])/g;function eo(i){return Bt[i]||(Bt[i]=i.indexOf("-")<0?i:i.replace(zn,e=>e[1].toUpperCase()))}function $t(i){return Bt[i]||(Bt[i]=i.replace(Ln,"-$1").toLowerCase())}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Dn=0,io=0,Z=[],Hn=0,ue=!1,oo=document.createTextNode("");new window.MutationObserver(Rn).observe(oo,{characterData:!0});function Rn(){ue=!1;const i=Z.length;for(let e=0;e<i;e++){let t=Z[e];if(t)try{t()}catch(o){setTimeout(()=>{throw o})}}Z.splice(0,i),io+=i}const Fn={run(i){return window.requestIdleCallback?window.requestIdleCallback(i):window.setTimeout(i,16)},cancel(i){window.cancelIdleCallback?window.cancelIdleCallback(i):window.clearTimeout(i)}},no={run(i){return ue||(ue=!0,oo.textContent=Hn++),Z.push(i),Dn++},cancel(i){const e=i-io;if(e>=0){if(!Z[e])throw new Error("invalid async handle: "+i);Z[e]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Bn=no,so=y(i=>{class e extends i{static createProperties(o){const n=this.prototype;for(let s in o)s in n||n._createPropertyAccessor(s)}static attributeNameForProperty(o){return o.toLowerCase()}static typeForProperty(o){}_createPropertyAccessor(o,n){this._addPropertyToAttributeMap(o),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[o]||(this.__dataHasAccessor[o]=!0,this._definePropertyAccessor(o,n))}_addPropertyToAttributeMap(o){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let n=this.__dataAttributes[o];return n||(n=this.constructor.attributeNameForProperty(o),this.__dataAttributes[n]=o),n}_definePropertyAccessor(o,n){Object.defineProperty(this,o,{get(){return this.__data[o]},set:n?function(){}:function(s){this._setPendingProperty(o,s,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let o in this.__dataHasAccessor)this.hasOwnProperty(o)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[o]=this[o],delete this[o])}_initializeInstanceProperties(o){Object.assign(this,o)}_setProperty(o,n){this._setPendingProperty(o,n)&&this._invalidateProperties()}_getProperty(o){return this.__data[o]}_setPendingProperty(o,n,s){let r=this.__data[o],a=this._shouldPropertyChange(o,n,r);return a&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(o in this.__dataOld)&&(this.__dataOld[o]=r),this.__data[o]=n,this.__dataPending[o]=n),a}_isPropertyPending(o){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(o))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Bn.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const o=this.__data,n=this.__dataPending,s=this.__dataOld;this._shouldPropertiesChange(o,n,s)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(o,n,s)),this.__dataCounter--}_shouldPropertiesChange(o,n,s){return!!n}_propertiesChanged(o,n,s){}_shouldPropertyChange(o,n,s){return s!==n&&(s===s||n===n)}attributeChangedCallback(o,n,s,r){n!==s&&this._attributeToProperty(o,s),super.attributeChangedCallback&&super.attributeChangedCallback(o,n,s,r)}_attributeToProperty(o,n,s){if(!this.__serializing){const r=this.__dataAttributes,a=r&&r[o]||o;this[a]=this._deserializeValue(n,s||this.constructor.typeForProperty(a))}}_propertyToAttribute(o,n,s){this.__serializing=!0,s=arguments.length<3?this[o]:s,this._valueToNodeAttribute(this,s,n||this.constructor.attributeNameForProperty(o)),this.__serializing=!1}_valueToNodeAttribute(o,n,s){const r=this._serializeValue(n);(s==="class"||s==="name"||s==="slot")&&(o=v(o)),r===void 0?o.removeAttribute(s):o.setAttribute(s,r===""&&window.trustedTypes?window.trustedTypes.emptyScript:r)}_serializeValue(o){switch(typeof o){case"boolean":return o?"":void 0;default:return o!=null?o.toString():void 0}}_deserializeValue(o,n){switch(n){case Boolean:return o!==null;case Number:return Number(o);default:return o}}}return e});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ro={};let Mt=HTMLElement.prototype;for(;Mt;){let i=Object.getOwnPropertyNames(Mt);for(let e=0;e<i.length;e++)ro[i[e]]=!0;Mt=Object.getPrototypeOf(Mt)}const Vn=window.trustedTypes?i=>trustedTypes.isHTML(i)||trustedTypes.isScript(i)||trustedTypes.isScriptURL(i):()=>!1;function Un(i,e){if(!ro[e]){let t=i[e];t!==void 0&&(i.__data?i._setPendingProperty(e,t):(i.__dataProto?i.hasOwnProperty(JSCompiler_renameProperty("__dataProto",i))||(i.__dataProto=Object.create(i.__dataProto)):i.__dataProto={},i.__dataProto[e]=t))}}const $n=y(i=>{const e=so(i);class t extends e{static createPropertiesForAttributes(){let n=this.observedAttributes;for(let s=0;s<n.length;s++)this.prototype._createPropertyAccessor(eo(n[s]))}static attributeNameForProperty(n){return $t(n)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(n){for(let s in n)this._setProperty(s,n[s])}_ensureAttribute(n,s){const r=this;r.hasAttribute(n)||this._valueToNodeAttribute(r,s,n)}_serializeValue(n){switch(typeof n){case"object":if(n instanceof Date)return n.toString();if(n){if(Vn(n))return n;try{return JSON.stringify(n)}catch{return""}}default:return super._serializeValue(n)}}_deserializeValue(n,s){let r;switch(s){case Object:try{r=JSON.parse(n)}catch{r=n}break;case Array:try{r=JSON.parse(n)}catch{r=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${n}`)}break;case Date:r=isNaN(n)?String(n):Number(n),r=new Date(r);break;default:r=super._deserializeValue(n,s);break}return r}_definePropertyAccessor(n,s){Un(this,n),super._definePropertyAccessor(n,s)}_hasAccessor(n){return this.__dataHasAccessor&&this.__dataHasAccessor[n]}_isPropertyPending(n){return!!(this.__dataPending&&n in this.__dataPending)}}return t});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const jn={"dom-if":!0,"dom-repeat":!0};let li=!1,di=!1;function qn(){if(!li){li=!0;const i=document.createElement("textarea");i.placeholder="a",di=i.placeholder===i.textContent}return di}function Yn(i){qn()&&i.localName==="textarea"&&i.placeholder&&i.placeholder===i.textContent&&(i.textContent=null)}const Gn=(()=>{const i=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:e=>e});return(e,t,o)=>{const n=t.getAttribute(o);if(i&&o.startsWith("on-")){e.setAttribute(o,i.createScript(n,o));return}e.setAttribute(o,n)}})();function Wn(i){let e=i.getAttribute("is");if(e&&jn[e]){let t=i;for(t.removeAttribute("is"),i=t.ownerDocument.createElement(e),t.parentNode.replaceChild(i,t),i.appendChild(t);t.attributes.length;){const{name:o}=t.attributes[0];Gn(i,t,o),t.removeAttribute(o)}}return i}function ao(i,e){let t=e.parentInfo&&ao(i,e.parentInfo);if(t){for(let o=t.firstChild,n=0;o;o=o.nextSibling)if(e.parentIndex===n++)return o}else return i}function Kn(i,e,t,o){o.id&&(e[o.id]=t)}function Xn(i,e,t){if(t.events&&t.events.length)for(let o=0,n=t.events,s;o<n.length&&(s=n[o]);o++)i._addMethodEventListenerToNode(e,s.name,s.value,i)}function Jn(i,e,t,o){t.templateInfo&&(e._templateInfo=t.templateInfo,e._parentTemplateInfo=o)}function Zn(i,e,t){return i=i._methodHost||i,function(n){i[t]?i[t](n,n.detail):console.warn("listener method `"+t+"` not defined")}}const Qn=y(i=>{class e extends i{static _parseTemplate(o,n){if(!o._templateInfo){let s=o._templateInfo={};s.nodeInfoList=[],s.nestedTemplate=!!n,s.stripWhiteSpace=n&&n.stripWhiteSpace||o.hasAttribute&&o.hasAttribute("strip-whitespace"),this._parseTemplateContent(o,s,{parent:null})}return o._templateInfo}static _parseTemplateContent(o,n,s){return this._parseTemplateNode(o.content,n,s)}static _parseTemplateNode(o,n,s){let r=!1,a=o;return a.localName=="template"&&!a.hasAttribute("preserve-content")?r=this._parseTemplateNestedTemplate(a,n,s)||r:a.localName==="slot"&&(n.hasInsertionPoint=!0),Yn(a),a.firstChild&&this._parseTemplateChildNodes(a,n,s),a.hasAttributes&&a.hasAttributes()&&(r=this._parseTemplateNodeAttributes(a,n,s)||r),r||s.noted}static _parseTemplateChildNodes(o,n,s){if(!(o.localName==="script"||o.localName==="style"))for(let r=o.firstChild,a=0,l;r;r=l){if(r.localName=="template"&&(r=Wn(r)),l=r.nextSibling,r.nodeType===Node.TEXT_NODE){let c=l;for(;c&&c.nodeType===Node.TEXT_NODE;)r.textContent+=c.textContent,l=c.nextSibling,o.removeChild(c),c=l;if(n.stripWhiteSpace&&!r.textContent.trim()){o.removeChild(r);continue}}let d={parentIndex:a,parentInfo:s};this._parseTemplateNode(r,n,d)&&(d.infoIndex=n.nodeInfoList.push(d)-1),r.parentNode&&a++}}static _parseTemplateNestedTemplate(o,n,s){let r=o,a=this._parseTemplate(r,n);return(a.content=r.content.ownerDocument.createDocumentFragment()).appendChild(r.content),s.templateInfo=a,!0}static _parseTemplateNodeAttributes(o,n,s){let r=!1,a=Array.from(o.attributes);for(let l=a.length-1,d;d=a[l];l--)r=this._parseTemplateNodeAttribute(o,n,s,d.name,d.value)||r;return r}static _parseTemplateNodeAttribute(o,n,s,r,a){return r.slice(0,3)==="on-"?(o.removeAttribute(r),s.events=s.events||[],s.events.push({name:r.slice(3),value:a}),!0):r==="id"?(s.id=a,!0):!1}static _contentForTemplate(o){let n=o._templateInfo;return n&&n.content||o.content}_stampTemplate(o,n){o&&!o.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(o),n=n||this.constructor._parseTemplate(o);let s=n.nodeInfoList,r=n.content||o.content,a=document.importNode(r,!0);a.__noInsertionPoint=!n.hasInsertionPoint;let l=a.nodeList=new Array(s.length);a.$={};for(let d=0,c=s.length,h;d<c&&(h=s[d]);d++){let u=l[d]=ao(a,h);Kn(this,a.$,u,h),Jn(this,u,h,n),Xn(this,u,h)}return a=a,a}_addMethodEventListenerToNode(o,n,s,r){r=r||o;let a=Zn(r,n,s);return this._addEventListenerToNode(o,n,a),a}_addEventListenerToNode(o,n,s){o.addEventListener(n,s)}_removeEventListenerFromNode(o,n,s){o.removeEventListener(n,s)}}return e});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let Ct=0;const wt=[],_={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},lo="__computeInfo",ts=/[A-Z]/;function Kt(i,e,t){let o=i[e];if(!o)o=i[e]={};else if(!i.hasOwnProperty(e)&&(o=i[e]=Object.create(i[e]),t))for(let n in o){let s=o[n],r=o[n]=Array(s.length);for(let a=0;a<s.length;a++)r[a]=s[a]}return o}function gt(i,e,t,o,n,s){if(e){let r=!1;const a=Ct++;for(let l in t){let d=n?R(l):l,c=e[d];if(c)for(let h=0,u=c.length,p;h<u&&(p=c[h]);h++)(!p.info||p.info.lastRun!==a)&&(!n||He(l,p.trigger))&&(p.info&&(p.info.lastRun=a),p.fn(i,l,t,o,p.info,n,s),r=!0)}return r}return!1}function es(i,e,t,o,n,s,r,a){let l=!1,d=r?R(o):o,c=e[d];if(c)for(let h=0,u=c.length,p;h<u&&(p=c[h]);h++)(!p.info||p.info.lastRun!==t)&&(!r||He(o,p.trigger))&&(p.info&&(p.info.lastRun=t),p.fn(i,o,n,s,p.info,r,a),l=!0);return l}function He(i,e){if(e){let t=e.name;return t==i||!!(e.structured&&In(t,i))||!!(e.wildcard&&Rt(t,i))}else return!0}function ci(i,e,t,o,n){let s=typeof n.method=="string"?i[n.method]:n.method,r=n.property;s?s.call(i,i.__data[r],o[r]):n.dynamicFn||console.warn("observer method `"+n.method+"` not defined")}function is(i,e,t,o,n){let s=i[_.NOTIFY],r,a=Ct++;for(let d in e)e[d]&&(s&&es(i,s,a,d,t,o,n)||n&&os(i,d,t))&&(r=!0);let l;r&&(l=i.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function os(i,e,t){let o=R(e);if(o!==e){let n=$t(o)+"-changed";return co(i,n,t[e],e),!0}return!1}function co(i,e,t,o){let n={value:t,queueProperty:!0};o&&(n.path=o),v(i).dispatchEvent(new CustomEvent(e,{detail:n}))}function ns(i,e,t,o,n,s){let a=(s?R(e):e)!=e?e:null,l=a?E(i,a):i.__data[e];a&&l===void 0&&(l=t[e]),co(i,n.eventName,l,a)}function ss(i,e,t,o,n){let s,r=i.detail,a=r&&r.path;a?(o=Ft(t,o,a),s=r&&r.value):s=i.currentTarget[t],s=n?!s:s,(!e[_.READ_ONLY]||!e[_.READ_ONLY][o])&&e._setPendingPropertyOrPath(o,s,!0,!!a)&&(!r||!r.queueProperty)&&e._invalidateProperties()}function rs(i,e,t,o,n){let s=i.__data[e];Ht&&(s=Ht(s,n.attrName,"attribute",i)),i._propertyToAttribute(e,n.attrName,s)}function as(i,e,t,o){let n=i[_.COMPUTE];if(n)if(gn){Ct++;const s=ds(i),r=[];for(let l in e)hi(l,n,r,s,o);let a;for(;a=r.shift();)ho(i,"",e,t,a)&&hi(a.methodInfo,n,r,s,o);Object.assign(t,i.__dataOld),Object.assign(e,i.__dataPending),i.__dataPending=null}else{let s=e;for(;gt(i,n,s,t,o);)Object.assign(t,i.__dataOld),Object.assign(e,i.__dataPending),s=i.__dataPending,i.__dataPending=null}}const ls=(i,e,t)=>{let o=0,n=e.length-1,s=-1;for(;o<=n;){const r=o+n>>1,a=t.get(e[r].methodInfo)-t.get(i.methodInfo);if(a<0)o=r+1;else if(a>0)n=r-1;else{s=r;break}}s<0&&(s=n+1),e.splice(s,0,i)},hi=(i,e,t,o,n)=>{const s=n?R(i):i,r=e[s];if(r)for(let a=0;a<r.length;a++){const l=r[a];l.info.lastRun!==Ct&&(!n||He(i,l.trigger))&&(l.info.lastRun=Ct,ls(l.info,t,o))}};function ds(i){let e=i.constructor.__orderedComputedDeps;if(!e){e=new Map;const t=i[_.COMPUTE];let{counts:o,ready:n,total:s}=cs(i),r;for(;r=n.shift();){e.set(r,e.size);const a=t[r];a&&a.forEach(l=>{const d=l.info.methodInfo;--s,--o[d]===0&&n.push(d)})}s!==0&&console.warn(`Computed graph for ${i.localName} incomplete; circular?`),i.constructor.__orderedComputedDeps=e}return e}function cs(i){const e=i[lo],t={},o=i[_.COMPUTE],n=[];let s=0;for(let r in e){const a=e[r];s+=t[r]=a.args.filter(l=>!l.literal).length+(a.dynamicFn?1:0)}for(let r in o)e[r]||n.push(r);return{counts:t,ready:n,total:s}}function ho(i,e,t,o,n){let s=pe(i,e,t,o,n);if(s===wt)return!1;let r=n.methodInfo;return i.__dataHasAccessor&&i.__dataHasAccessor[r]?i._setPendingProperty(r,s,!0):(i[r]=s,!1)}function hs(i,e,t){let o=i.__dataLinkedPaths;if(o){let n;for(let s in o){let r=o[s];Rt(s,e)?(n=Ft(s,r,e),i._setPendingPropertyOrPath(n,t,!0,!0)):Rt(r,e)&&(n=Ft(r,s,e),i._setPendingPropertyOrPath(n,t,!0,!0))}}}function Xt(i,e,t,o,n,s,r){t.bindings=t.bindings||[];let a={kind:o,target:n,parts:s,literal:r,isCompound:s.length!==1};if(t.bindings.push(a),ms(a)){let{event:d,negate:c}=a.parts[0];a.listenerEvent=d||$t(n)+"-changed",a.listenerNegate=c}let l=e.nodeInfoList.length;for(let d=0;d<a.parts.length;d++){let c=a.parts[d];c.compoundIndex=d,us(i,e,a,c,l)}}function us(i,e,t,o,n){if(!o.literal)if(t.kind==="attribute"&&t.target[0]==="-")console.warn("Cannot set attribute "+t.target+' because "-" is not a valid attribute starting character');else{let s=o.dependencies,r={index:n,binding:t,part:o,evaluator:i};for(let a=0;a<s.length;a++){let l=s[a];typeof l=="string"&&(l=po(l),l.wildcard=!0),i._addTemplatePropertyEffect(e,l.rootProperty,{fn:ps,info:r,trigger:l})}}}function ps(i,e,t,o,n,s,r){let a=r[n.index],l=n.binding,d=n.part;if(s&&d.source&&e.length>d.source.length&&l.kind=="property"&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let c=t[e];e=Ft(d.source,l.target,e),a._setPendingPropertyOrPath(e,c,!1,!0)&&i._enqueueClient(a)}else{let c=n.evaluator._evaluateBinding(i,d,e,t,o,s);c!==wt&&fs(i,a,l,d,c)}}function fs(i,e,t,o,n){if(n=_s(e,n,t,o),Ht&&(n=Ht(n,t.target,t.kind,e)),t.kind=="attribute")i._valueToNodeAttribute(e,n,t.target);else{let s=t.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[s]?(!e[_.READ_ONLY]||!e[_.READ_ONLY][s])&&e._setPendingProperty(s,n)&&i._enqueueClient(e):i._setUnmanagedPropertyToNode(e,s,n)}}function _s(i,e,t,o){if(t.isCompound){let n=i.__dataCompoundStorage[t.target];n[o.compoundIndex]=e,e=n.join("")}return t.kind!=="attribute"&&(t.target==="textContent"||t.target==="value"&&(i.localName==="input"||i.localName==="textarea"))&&(e=e??""),e}function ms(i){return!!i.target&&i.kind!="attribute"&&i.kind!="text"&&!i.isCompound&&i.parts[0].mode==="{"}function gs(i,e){let{nodeList:t,nodeInfoList:o}=e;if(o.length)for(let n=0;n<o.length;n++){let s=o[n],r=t[n],a=s.bindings;if(a)for(let l=0;l<a.length;l++){let d=a[l];vs(r,d),ys(r,i,d)}r.__dataHost=i}}function vs(i,e){if(e.isCompound){let t=i.__dataCompoundStorage||(i.__dataCompoundStorage={}),o=e.parts,n=new Array(o.length);for(let r=0;r<o.length;r++)n[r]=o[r].literal;let s=e.target;t[s]=n,e.literal&&e.kind=="property"&&(s==="className"&&(i=v(i)),i[s]=e.literal)}}function ys(i,e,t){if(t.listenerEvent){let o=t.parts[0];i.addEventListener(t.listenerEvent,function(n){ss(n,e,t.target,o.source,o.negate)})}}function ui(i,e,t,o,n,s){s=e.static||s&&(typeof s!="object"||s[e.methodName]);let r={methodName:e.methodName,args:e.args,methodInfo:n,dynamicFn:s};for(let a=0,l;a<e.args.length&&(l=e.args[a]);a++)l.literal||i._addPropertyEffect(l.rootProperty,t,{fn:o,info:r,trigger:l});return s&&i._addPropertyEffect(e.methodName,t,{fn:o,info:r}),r}function pe(i,e,t,o,n){let s=i._methodHost||i,r=s[n.methodName];if(r){let a=i._marshalArgs(n.args,e,t);return a===wt?wt:r.apply(s,a)}else n.dynamicFn||console.warn("method `"+n.methodName+"` not defined")}const bs=[],uo="(?:[a-zA-Z_$][\\w.:$\\-*]*)",Cs="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",ws="(?:'(?:[^'\\\\]|\\\\.)*')",xs='(?:"(?:[^"\\\\]|\\\\.)*")',As="(?:"+ws+"|"+xs+")",pi="(?:("+uo+"|"+Cs+"|"+As+")\\s*)",Es="(?:"+pi+"(?:,\\s*"+pi+")*)",Ps="(?:\\(\\s*(?:"+Es+"?)\\)\\s*)",Ts="("+uo+"\\s*"+Ps+"?)",Ns="(\\[\\[|{{)\\s*",Ss="(?:]]|}})",Os="(?:(!)\\s*)?",Ms=Ns+Os+Ts+Ss,fi=new RegExp(Ms,"g");function _i(i){let e="";for(let t=0;t<i.length;t++){let o=i[t].literal;e+=o||""}return e}function Jt(i){let e=i.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let o={methodName:e[1],static:!0,args:bs};if(e[2].trim()){let n=e[2].replace(/\\,/g,"&comma;").split(",");return ks(n,o)}else return o}return null}function ks(i,e){return e.args=i.map(function(t){let o=po(t);return o.literal||(e.static=!1),o},this),e}function po(i){let e=i.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),t={name:e,value:"",literal:!1},o=e[0];switch(o==="-"&&(o=e[1]),o>="0"&&o<="9"&&(o="#"),o){case"'":case'"':t.value=e.slice(1,-1),t.literal=!0;break;case"#":t.value=Number(e),t.literal=!0;break}return t.literal||(t.rootProperty=R(e),t.structured=he(e),t.structured&&(t.wildcard=e.slice(-2)==".*",t.wildcard&&(t.name=e.slice(0,-2)))),t}function mi(i,e,t){let o=E(i,t);return o===void 0&&(o=e[t]),o}function fo(i,e,t,o){const n={indexSplices:o};ce&&!i._overrideLegacyUndefined&&(e.splices=n),i.notifyPath(t+".splices",n),i.notifyPath(t+".length",e.length),ce&&!i._overrideLegacyUndefined&&(n.indexSplices=[])}function ht(i,e,t,o,n,s){fo(i,e,t,[{index:o,addedCount:n,removed:s,object:e,type:"splice"}])}function Is(i){return i[0].toUpperCase()+i.substring(1)}const Re=y(i=>{const e=Qn($n(i));class t extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return _}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(ut.length){let n=ut[ut.length-1];n._enqueueClient(this),this.__dataHost=n}}_initializeProtoProperties(n){this.__data=Object.create(n),this.__dataPending=Object.create(n),this.__dataOld={}}_initializeInstanceProperties(n){let s=this[_.READ_ONLY];for(let r in n)(!s||!s[r])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[r]=this.__dataPending[r]=n[r])}_addPropertyEffect(n,s,r){this._createPropertyAccessor(n,s==_.READ_ONLY);let a=Kt(this,s,!0)[n];a||(a=this[s][n]=[]),a.push(r)}_removePropertyEffect(n,s,r){let a=Kt(this,s,!0)[n],l=a.indexOf(r);l>=0&&a.splice(l,1)}_hasPropertyEffect(n,s){let r=this[s];return!!(r&&r[n])}_hasReadOnlyEffect(n){return this._hasPropertyEffect(n,_.READ_ONLY)}_hasNotifyEffect(n){return this._hasPropertyEffect(n,_.NOTIFY)}_hasReflectEffect(n){return this._hasPropertyEffect(n,_.REFLECT)}_hasComputedEffect(n){return this._hasPropertyEffect(n,_.COMPUTE)}_setPendingPropertyOrPath(n,s,r,a){if(a||R(Array.isArray(n)?n[0]:n)!==n){if(!a){let l=E(this,n);if(n=ai(this,n,s),!n||!super._shouldPropertyChange(n,s,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(n,s,r))return hs(this,n,s),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[n])return this._setPendingProperty(n,s,r);this[n]=s}return!1}_setUnmanagedPropertyToNode(n,s,r){(r!==n[s]||typeof r=="object")&&(s==="className"&&(n=v(n)),n[s]=r)}_setPendingProperty(n,s,r){let a=this.__dataHasPaths&&he(n),l=a?this.__dataTemp:this.__data;return this._shouldPropertyChange(n,s,l[n])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),n in this.__dataOld||(this.__dataOld[n]=this.__data[n]),a?this.__dataTemp[n]=s:this.__data[n]=s,this.__dataPending[n]=s,(a||this[_.NOTIFY]&&this[_.NOTIFY][n])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[n]=r),!0):!1}_setProperty(n,s){this._setPendingProperty(n,s,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(n){this.__dataPendingClients=this.__dataPendingClients||[],n!==this&&this.__dataPendingClients.push(n)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let n=this.__dataPendingClients;if(n){this.__dataPendingClients=null;for(let s=0;s<n.length;s++){let r=n[s];r.__dataEnabled?r.__dataPending&&r._flushProperties():r._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(n,s){for(let r in n)(s||!this[_.READ_ONLY]||!this[_.READ_ONLY][r])&&this._setPendingPropertyOrPath(r,n[r],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(n,s,r){let a=this.__dataHasPaths;this.__dataHasPaths=!1;let l;as(this,s,r,a),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(s,r,a),this._flushClients(),gt(this,this[_.REFLECT],s,r,a),gt(this,this[_.OBSERVE],s,r,a),l&&is(this,l,s,r,a),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(n,s,r){this[_.PROPAGATE]&&gt(this,this[_.PROPAGATE],n,s,r),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,n,s,r)}_runEffectsForTemplate(n,s,r,a){const l=(d,c)=>{gt(this,n.propertyEffects,d,r,c,n.nodeList);for(let h=n.firstChild;h;h=h.nextSibling)this._runEffectsForTemplate(h,d,r,c)};n.runEffects?n.runEffects(l,s,a):l(s,a)}linkPaths(n,s){n=mt(n),s=mt(s),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[n]=s}unlinkPaths(n){n=mt(n),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[n]}notifySplices(n,s){let r={path:""},a=E(this,n,r);fo(this,a,r.path,s)}get(n,s){return E(s||this,n)}set(n,s,r){r?ai(r,n,s):(!this[_.READ_ONLY]||!this[_.READ_ONLY][n])&&this._setPendingPropertyOrPath(n,s,!0)&&this._invalidateProperties()}push(n,...s){let r={path:""},a=E(this,n,r),l=a.length,d=a.push(...s);return s.length&&ht(this,a,r.path,l,s.length,[]),d}pop(n){let s={path:""},r=E(this,n,s),a=!!r.length,l=r.pop();return a&&ht(this,r,s.path,r.length,0,[l]),l}splice(n,s,r,...a){let l={path:""},d=E(this,n,l);s<0?s=d.length-Math.floor(-s):s&&(s=Math.floor(s));let c;return arguments.length===2?c=d.splice(s):c=d.splice(s,r,...a),(a.length||c.length)&&ht(this,d,l.path,s,a.length,c),c}shift(n){let s={path:""},r=E(this,n,s),a=!!r.length,l=r.shift();return a&&ht(this,r,s.path,0,0,[l]),l}unshift(n,...s){let r={path:""},a=E(this,n,r),l=a.unshift(...s);return s.length&&ht(this,a,r.path,0,s.length,[]),l}notifyPath(n,s){let r;if(arguments.length==1){let a={path:""};s=E(this,n,a),r=a.path}else Array.isArray(n)?r=mt(n):r=n;this._setPendingPropertyOrPath(r,s,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(n,s){this._addPropertyEffect(n,_.READ_ONLY),s&&(this["_set"+Is(n)]=function(r){this._setProperty(n,r)})}_createPropertyObserver(n,s,r){let a={property:n,method:s,dynamicFn:!!r};this._addPropertyEffect(n,_.OBSERVE,{fn:ci,info:a,trigger:{name:n}}),r&&this._addPropertyEffect(s,_.OBSERVE,{fn:ci,info:a,trigger:{name:s}})}_createMethodObserver(n,s){let r=Jt(n);if(!r)throw new Error("Malformed observer expression '"+n+"'");ui(this,r,_.OBSERVE,pe,null,s)}_createNotifyingProperty(n){this._addPropertyEffect(n,_.NOTIFY,{fn:ns,info:{eventName:$t(n)+"-changed",property:n}})}_createReflectedProperty(n){let s=this.constructor.attributeNameForProperty(n);s[0]==="-"?console.warn("Property "+n+" cannot be reflected to attribute "+s+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(n,_.REFLECT,{fn:rs,info:{attrName:s}})}_createComputedProperty(n,s,r){let a=Jt(s);if(!a)throw new Error("Malformed computed expression '"+s+"'");const l=ui(this,a,_.COMPUTE,ho,n,r);Kt(this,lo)[n]=l}_marshalArgs(n,s,r){const a=this.__data,l=[];for(let d=0,c=n.length;d<c;d++){let{name:h,structured:u,wildcard:p,value:f,literal:x}=n[d];if(!x)if(p){const A=Rt(h,s),w=mi(a,r,A?s:h);f={path:A?s:h,value:w,base:A?E(a,h):w}}else f=u?mi(a,r,h):a[h];if(ce&&!this._overrideLegacyUndefined&&f===void 0&&n.length>1)return wt;l[d]=f}return l}static addPropertyEffect(n,s,r){this.prototype._addPropertyEffect(n,s,r)}static createPropertyObserver(n,s,r){this.prototype._createPropertyObserver(n,s,r)}static createMethodObserver(n,s){this.prototype._createMethodObserver(n,s)}static createNotifyingProperty(n){this.prototype._createNotifyingProperty(n)}static createReadOnlyProperty(n,s){this.prototype._createReadOnlyProperty(n,s)}static createReflectedProperty(n){this.prototype._createReflectedProperty(n)}static createComputedProperty(n,s,r){this.prototype._createComputedProperty(n,s,r)}static bindTemplate(n){return this.prototype._bindTemplate(n)}_bindTemplate(n,s){let r=this.constructor._parseTemplate(n),a=this.__preBoundTemplateInfo==r;if(!a)for(let l in r.propertyEffects)this._createPropertyAccessor(l);if(s)if(r=Object.create(r),r.wasPreBound=a,!this.__templateInfo)this.__templateInfo=r;else{const l=n._parentTemplateInfo||this.__templateInfo,d=l.lastChild;r.parent=l,l.lastChild=r,r.previousSibling=d,d?d.nextSibling=r:l.firstChild=r}else this.__preBoundTemplateInfo=r;return r}static _addTemplatePropertyEffect(n,s,r){let a=n.hostProps=n.hostProps||{};a[s]=!0;let l=n.propertyEffects=n.propertyEffects||{};(l[s]=l[s]||[]).push(r)}_stampTemplate(n,s){s=s||this._bindTemplate(n,!0),ut.push(this);let r=super._stampTemplate(n,s);if(ut.pop(),s.nodeList=r.nodeList,!s.wasPreBound){let a=s.childNodes=[];for(let l=r.firstChild;l;l=l.nextSibling)a.push(l)}return r.templateInfo=s,gs(this,s),this.__dataClientsReady&&(this._runEffectsForTemplate(s,this.__data,null,!1),this._flushClients()),r}_removeBoundDom(n){const s=n.templateInfo,{previousSibling:r,nextSibling:a,parent:l}=s;r?r.nextSibling=a:l&&(l.firstChild=a),a?a.previousSibling=r:l&&(l.lastChild=r),s.nextSibling=s.previousSibling=null;let d=s.childNodes;for(let c=0;c<d.length;c++){let h=d[c];v(v(h).parentNode).removeChild(h)}}static _parseTemplateNode(n,s,r){let a=e._parseTemplateNode.call(this,n,s,r);if(n.nodeType===Node.TEXT_NODE){let l=this._parseBindings(n.textContent,s);l&&(n.textContent=_i(l)||" ",Xt(this,s,r,"text","textContent",l),a=!0)}return a}static _parseTemplateNodeAttribute(n,s,r,a,l){let d=this._parseBindings(l,s);if(d){let c=a,h="property";ts.test(a)?h="attribute":a[a.length-1]=="$"&&(a=a.slice(0,-1),h="attribute");let u=_i(d);return u&&h=="attribute"&&(a=="class"&&n.hasAttribute("class")&&(u+=" "+n.getAttribute(a)),n.setAttribute(a,u)),h=="attribute"&&c=="disable-upgrade$"&&n.setAttribute(a,""),n.localName==="input"&&c==="value"&&n.setAttribute(c,""),n.removeAttribute(c),h==="property"&&(a=eo(a)),Xt(this,s,r,h,a,d,u),!0}else return e._parseTemplateNodeAttribute.call(this,n,s,r,a,l)}static _parseTemplateNestedTemplate(n,s,r){let a=e._parseTemplateNestedTemplate.call(this,n,s,r);const l=n.parentNode,d=r.templateInfo,c=l.localName==="dom-if",h=l.localName==="dom-repeat";ei&&(c||h)&&(l.removeChild(n),r=r.parentInfo,r.templateInfo=d,r.noted=!0,a=!1);let u=d.hostProps;if(Gi&&c)u&&(s.hostProps=Object.assign(s.hostProps||{},u),ei||(r.parentInfo.noted=!0));else{let p="{";for(let f in u){let x=[{mode:p,source:f,dependencies:[f],hostProp:!0}];Xt(this,s,r,"property","_host_"+f,x)}}return a}static _parseBindings(n,s){let r=[],a=0,l;for(;(l=fi.exec(n))!==null;){l.index>a&&r.push({literal:n.slice(a,l.index)});let d=l[1][0],c=!!l[2],h=l[3].trim(),u=!1,p="",f=-1;d=="{"&&(f=h.indexOf("::"))>0&&(p=h.substring(f+2),h=h.substring(0,f),u=!0);let x=Jt(h),A=[];if(x){let{args:w,methodName:b}=x;for(let dt=0;dt<w.length;dt++){let q=w[dt];q.literal||A.push(q)}let B=s.dynamicFns;(B&&B[b]||x.static)&&(A.push(b),x.dynamicFn=!0)}else A.push(h);r.push({source:h,mode:d,negate:c,customEvent:u,signature:x,dependencies:A,event:p}),a=fi.lastIndex}if(a&&a<n.length){let d=n.substring(a);d&&r.push({literal:d})}return r.length?r:null}static _evaluateBinding(n,s,r,a,l,d){let c;return s.signature?c=pe(n,r,a,l,s.signature):r!=s.source?c=E(n,s.source):d&&he(r)?c=E(n,r):c=n.__data[r],s.negate&&(c=!c),c}}return t}),ut=[];/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*//**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function zs(i){const e={};for(let t in i){const o=i[t];e[t]=typeof o=="function"?{type:o}:o}return e}const Ls=y(i=>{const e=so(i);function t(s){const r=Object.getPrototypeOf(s);return r.prototype instanceof n?r:null}function o(s){if(!s.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",s))){let r=null;if(s.hasOwnProperty(JSCompiler_renameProperty("properties",s))){const a=s.properties;a&&(r=zs(a))}s.__ownProperties=r}return s.__ownProperties}class n extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const r=this._properties;this.__observedAttributes=r?Object.keys(r).map(a=>this.prototype._addPropertyToAttributeMap(a)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const r=t(this);r&&r.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const r=o(this);r&&this.createProperties(r)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const r=t(this);this.__properties=Object.assign({},r&&r._properties,o(this))}return this.__properties}static typeForProperty(r){const a=this._properties[r];return a&&a.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return n});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const Ds="3.5.2",gi=window.ShadyCSS&&window.ShadyCSS.cssBuild,Hs=y(i=>{const e=Ls(Re(i));function t(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let d=l._properties;for(let c in d){let h=d[c];"value"in h&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[c]=h)}}return l.__propertyDefaults}function o(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function n(l,d,c,h){c.computed&&(c.readOnly=!0),c.computed&&(l._hasReadOnlyEffect(d)?console.warn(`Cannot redefine computed property '${d}'.`):l._createComputedProperty(d,c.computed,h)),c.readOnly&&!l._hasReadOnlyEffect(d)?l._createReadOnlyProperty(d,!c.computed):c.readOnly===!1&&l._hasReadOnlyEffect(d)&&console.warn(`Cannot make readOnly property '${d}' non-readOnly.`),c.reflectToAttribute&&!l._hasReflectEffect(d)?l._createReflectedProperty(d):c.reflectToAttribute===!1&&l._hasReflectEffect(d)&&console.warn(`Cannot make reflected property '${d}' non-reflected.`),c.notify&&!l._hasNotifyEffect(d)?l._createNotifyingProperty(d):c.notify===!1&&l._hasNotifyEffect(d)&&console.warn(`Cannot make notify property '${d}' non-notify.`),c.observer&&l._createPropertyObserver(d,c.observer,h[c.observer]),l._addPropertyToAttributeMap(d)}function s(l,d,c,h){if(!gi){const u=d.content.querySelectorAll("style"),p=Le(d),f=En(c),x=d.content.firstElementChild;for(let w=0;w<f.length;w++){let b=f[w];b.textContent=l._processStyleText(b.textContent,h),d.content.insertBefore(b,x)}let A=0;for(let w=0;w<p.length;w++){let b=p[w],B=u[A];B!==b?(b=b.cloneNode(!0),B.parentNode.insertBefore(b,B)):A++,b.textContent=l._processStyleText(b.textContent,h)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(d,c),yn&&gi&&pn){const u=d.content.querySelectorAll("style");if(u){let p="";Array.from(u).forEach(f=>{p+=f.textContent,f.parentNode.removeChild(f)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(p)}}}function r(l){let d=null;if(l&&(!bt||_n)&&(d=lt.import(l,"template"),bt&&!d))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return d}class a extends e{static get polymerElementVersion(){return Ds}static _finalizeClass(){e._finalizeClass.call(this);const d=o(this);d&&this.createObservers(d,this._properties),this._prepareTemplate()}static _prepareTemplate(){let d=this.template;d&&(typeof d=="string"?(console.error("template getter must return HTMLTemplateElement"),d=null):qi||(d=d.cloneNode(!0))),this.prototype._template=d}static createProperties(d){for(let c in d)n(this.prototype,c,d[c],d)}static createObservers(d,c){const h=this.prototype;for(let u=0;u<d.length;u++)h._createMethodObserver(d[u],c)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let d=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof d=="function"&&(d=d()),this._template=d!==void 0?d:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&r(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(d){this._template=d}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const d=this.importMeta;if(d)this._importPath=Ie(d.url);else{const c=lt.import(this.is);this._importPath=c&&c.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=fn,this.importPath=this.constructor.importPath;let d=t(this.constructor);if(d)for(let c in d){let h=d[c];if(this._canApplyPropertyDefault(c)){let u=typeof h.value=="function"?h.value.call(this):h.value;this._hasAccessor(c)?this._setPendingProperty(c,u,!0):this[c]=u}}}_canApplyPropertyDefault(d){return!this.hasOwnProperty(d)}static _processStyleText(d,c){return ke(d,c)}static _finalizeTemplate(d){const c=this.prototype._template;if(c&&!c.__polymerFinalized){c.__polymerFinalized=!0;const h=this.importPath,u=h?vt(h):"";s(this,c,d,u),this.prototype._bindTemplate(c)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(d){const c=v(this);if(c.attachShadow)return d?(c.shadowRoot||(c.attachShadow({mode:"open",shadyUpgradeFragment:d}),c.shadowRoot.appendChild(d),this.constructor._styleSheet&&(c.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),mn&&window.ShadyDOM&&window.ShadyDOM.flushInitial(c.shadowRoot),c.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(d){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,d)}resolveUrl(d,c){return!c&&this.importPath&&(c=vt(this.importPath)),vt(d,c)}static _parseTemplateContent(d,c,h){return c.dynamicFns=c.dynamicFns||this._properties,e._parseTemplateContent.call(this,d,c,h)}static _addTemplatePropertyEffect(d,c,h){return Yi&&!(c in this._properties)&&!(h.info.part.signature&&h.info.part.signature.static)&&!h.info.part.hostProp&&!d.nestedTemplate&&console.warn(`Property '${c}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,d,c,h)}}return a});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const vi=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:i=>i});class _o{constructor(e,t){go(e,t);const o=t.reduce((n,s,r)=>n+mo(s)+e[r+1],e[0]);this.value=o.toString()}toString(){return this.value}}function mo(i){if(i instanceof _o)return i.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${i}`)}function Rs(i){if(i instanceof HTMLTemplateElement)return i.innerHTML;if(i instanceof _o)return mo(i);throw new Error(`non-template value passed to Polymer's html function: ${i}`)}const M=function(e,...t){go(e,t);const o=document.createElement("template");let n=t.reduce((s,r,a)=>s+Rs(r)+e[a+1],e[0]);return vi&&(n=vi.createHTML(n)),o.innerHTML=n,o},go=(i,e)=>{if(!Array.isArray(i)||!Array.isArray(i.raw)||e.length!==i.length-1)throw new TypeError("Invalid call to the html template tag")};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const P=Hs(HTMLElement);/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const L=[];function fe(i,e,t=i.getAttribute("dir")){e?i.setAttribute("dir",e):t!=null&&i.removeAttribute("dir")}function _e(){return document.documentElement.getAttribute("dir")}function Fs(){const i=_e();L.forEach(e=>{fe(e,i)})}const Bs=new MutationObserver(Fs);Bs.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const Fe=i=>class extends i{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:t=>t||"",toAttribute:t=>t===""?null:t}}}}get __isRTL(){return this.getAttribute("dir")==="rtl"}connectedCallback(){super.connectedCallback(),(!this.hasAttribute("dir")||this.__restoreSubscription)&&(this.__subscribe(),fe(this,_e(),null))}attributeChangedCallback(t,o,n){if(super.attributeChangedCallback(t,o,n),t!=="dir")return;const s=_e(),r=n===s&&L.indexOf(this)===-1,a=!n&&o&&L.indexOf(this)===-1;r||a?(this.__subscribe(),fe(this,s,n)):n!==s&&o===s&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=L.includes(this),this.__unsubscribe()}_valueToNodeAttribute(t,o,n){n==="dir"&&o===""&&!t.hasAttribute("dir")||super._valueToNodeAttribute(t,o,n)}_attributeToProperty(t,o,n){t==="dir"&&!o?this.dir="":super._attributeToProperty(t,o,n)}__subscribe(){L.includes(this)||L.push(this)}__unsubscribe(){L.includes(this)&&L.splice(L.indexOf(this),1)}};/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Vs=i=>class extends i{static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0}}}ready(){super.ready(),this.addEventListener("pointerdown",t=>{t.target===this&&t.preventDefault()}),this.addEventListener("click",t=>{t.target===this&&this.shadowRoot.querySelector("slot:not([name])").assignedNodes({flatten:!0}).forEach(o=>o.focus&&o.focus())})}};/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Us=g`
  :host {
    display: flex;
    align-items: center;
    flex: 0 1 auto;
    border-radius:
            /* See https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius */
      var(--vaadin-input-field-top-start-radius, var(--__border-radius))
      var(--vaadin-input-field-top-end-radius, var(--__border-radius))
      var(--vaadin-input-field-bottom-end-radius, var(--__border-radius))
      var(--vaadin-input-field-bottom-start-radius, var(--__border-radius));
    --_border-radius: var(--vaadin-input-field-border-radius, 0);
    --_input-border-width: var(--vaadin-input-field-border-width, 0);
    --_input-border-color: var(--vaadin-input-field-border-color, transparent);
    box-shadow: inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
  }

  :host([dir='rtl']) {
    border-radius:
            /* Don't use logical props, see https://github.com/vaadin/vaadin-time-picker/issues/145 */
      var(--vaadin-input-field-top-end-radius, var(--_border-radius))
      var(--vaadin-input-field-top-start-radius, var(--_border-radius))
      var(--vaadin-input-field-bottom-start-radius, var(--_border-radius))
      var(--vaadin-input-field-bottom-end-radius, var(--_border-radius));
  }

  :host([hidden]) {
    display: none !important;
  }

  /* Reset the native input styles */
  ::slotted(input) {
    -webkit-appearance: none;
    -moz-appearance: none;
    flex: auto;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    height: 100%;
    outline: none;
    margin: 0;
    padding: 0;
    border: 0;
    border-radius: 0;
    min-width: 0;
    font: inherit;
    line-height: normal;
    color: inherit;
    background-color: transparent;
    /* Disable default invalid style in Firefox */
    box-shadow: none;
  }

  ::slotted(*) {
    flex: none;
  }

  ::slotted(:is(input, textarea))::placeholder {
    /* Use ::slotted(input:placeholder-shown) in themes to style the placeholder. */
    /* because ::slotted(...)::placeholder does not work in Safari. */
    font: inherit;
    color: inherit;
    /* Override default opacity in Firefox */
    opacity: 1;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */C("vaadin-input-container",Us,{moduleId:"vaadin-input-container-styles"});class $s extends Vs(H(Fe(P))){static get is(){return"vaadin-input-container"}static get template(){return M`
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}}O($s);const js=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Dt=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function qs(){function i(){return!0}return vo(i)}function Ys(){try{return Gs()?!0:Ws()?Dt?!Ks():!qs():!1}catch{return!1}}function Gs(){return localStorage.getItem("vaadin.developmentmode.force")}function Ws(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Ks(){return!!(Dt&&Object.keys(Dt).map(e=>Dt[e]).filter(e=>e.productionMode).length>0)}function vo(i,e){if(typeof i!="function")return;const t=js.exec(i.toString());if(t)try{i=new Function(t[1])}catch(o){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",o)}return i(e)}window.Vaadin=window.Vaadin||{};const yi=function(i,e){if(window.Vaadin.developmentMode)return vo(i,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Ys());function Xs(){/*! vaadin-dev-mode:start
  (function () {
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var getPolymerVersion = function getPolymerVersion() {
  return window.Polymer && window.Polymer.version;
};

var StatisticsGatherer = function () {
  function StatisticsGatherer(logger) {
    classCallCheck(this, StatisticsGatherer);

    this.now = new Date().getTime();
    this.logger = logger;
  }

  createClass(StatisticsGatherer, [{
    key: 'frameworkVersionDetectors',
    value: function frameworkVersionDetectors() {
      return {
        'Flow': function Flow() {
          if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
            var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
              return window.Vaadin.Flow.clients[key];
            }).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().flow;
            });
            if (flowVersions.length > 0) {
              return flowVersions[0];
            }
          }
        },
        'Vaadin Framework': function VaadinFramework() {
          if (window.vaadin && window.vaadin.clients) {
            var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().vaadinVersion;
            });
            if (frameworkVersions.length > 0) {
              return frameworkVersions[0];
            }
          }
        },
        'AngularJs': function AngularJs() {
          if (window.angular && window.angular.version && window.angular.version) {
            return window.angular.version.full;
          }
        },
        'Angular': function Angular() {
          if (window.ng) {
            var tags = document.querySelectorAll("[ng-version]");
            if (tags.length > 0) {
              return tags[0].getAttribute("ng-version");
            }
            return "Unknown";
          }
        },
        'Backbone.js': function BackboneJs() {
          if (window.Backbone) {
            return window.Backbone.VERSION;
          }
        },
        'React': function React() {
          var reactSelector = '[data-reactroot], [data-reactid]';
          if (!!document.querySelector(reactSelector)) {
            // React does not publish the version by default
            return "unknown";
          }
        },
        'Ember': function Ember() {
          if (window.Em && window.Em.VERSION) {
            return window.Em.VERSION;
          } else if (window.Ember && window.Ember.VERSION) {
            return window.Ember.VERSION;
          }
        },
        'jQuery': function (_jQuery) {
          function jQuery() {
            return _jQuery.apply(this, arguments);
          }

          jQuery.toString = function () {
            return _jQuery.toString();
          };

          return jQuery;
        }(function () {
          if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
            return jQuery.prototype.jquery;
          }
        }),
        'Polymer': function Polymer() {
          var version = getPolymerVersion();
          if (version) {
            return version;
          }
        },
        'LitElement': function LitElement() {
          var version = window.litElementVersions && window.litElementVersions[0];
          if (version) {
            return version;
          }
        },
        'LitHtml': function LitHtml() {
          var version = window.litHtmlVersions && window.litHtmlVersions[0];
          if (version) {
            return version;
          }
        },
        'Vue.js': function VueJs() {
          if (window.Vue) {
            return window.Vue.version;
          }
        }
      };
    }
  }, {
    key: 'getUsedVaadinElements',
    value: function getUsedVaadinElements(elements) {
      var version = getPolymerVersion();
      var elementClasses = void 0;
      // NOTE: In case you edit the code here, YOU MUST UPDATE any statistics reporting code in Flow.
      // Check all locations calling the method getEntries() in
      // https://github.com/vaadin/flow/blob/master/flow-server/src/main/java/com/vaadin/flow/internal/UsageStatistics.java#L106
      // Currently it is only used by BootstrapHandler.
      if (version && version.indexOf('2') === 0) {
        // Polymer 2: components classes are stored in window.Vaadin
        elementClasses = Object.keys(window.Vaadin).map(function (c) {
          return window.Vaadin[c];
        }).filter(function (c) {
          return c.is;
        });
      } else {
        // Polymer 3: components classes are stored in window.Vaadin.registrations
        elementClasses = window.Vaadin.registrations || [];
      }
      elementClasses.forEach(function (klass) {
        var version = klass.version ? klass.version : "0.0.0";
        elements[klass.is] = { version: version };
      });
    }
  }, {
    key: 'getUsedVaadinThemes',
    value: function getUsedVaadinThemes(themes) {
      ['Lumo', 'Material'].forEach(function (themeName) {
        var theme;
        var version = getPolymerVersion();
        if (version && version.indexOf('2') === 0) {
          // Polymer 2: themes are stored in window.Vaadin
          theme = window.Vaadin[themeName];
        } else {
          // Polymer 3: themes are stored in custom element registry
          theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
        }
        if (theme && theme.version) {
          themes[themeName] = { version: theme.version };
        }
      });
    }
  }, {
    key: 'getFrameworks',
    value: function getFrameworks(frameworks) {
      var detectors = this.frameworkVersionDetectors();
      Object.keys(detectors).forEach(function (framework) {
        var detector = detectors[framework];
        try {
          var version = detector();
          if (version) {
            frameworks[framework] = { version: version };
          }
        } catch (e) {}
      });
    }
  }, {
    key: 'gather',
    value: function gather(storage) {
      var storedStats = storage.read();
      var gatheredStats = {};
      var types = ["elements", "frameworks", "themes"];

      types.forEach(function (type) {
        gatheredStats[type] = {};
        if (!storedStats[type]) {
          storedStats[type] = {};
        }
      });

      var previousStats = JSON.stringify(storedStats);

      this.getUsedVaadinElements(gatheredStats.elements);
      this.getFrameworks(gatheredStats.frameworks);
      this.getUsedVaadinThemes(gatheredStats.themes);

      var now = this.now;
      types.forEach(function (type) {
        var keys = Object.keys(gatheredStats[type]);
        keys.forEach(function (key) {
          if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
            storedStats[type][key] = { firstUsed: now };
          }
          // Discards any previously logged version number
          storedStats[type][key].version = gatheredStats[type][key].version;
          storedStats[type][key].lastUsed = now;
        });
      });

      var newStats = JSON.stringify(storedStats);
      storage.write(newStats);
      if (newStats != previousStats && Object.keys(storedStats).length > 0) {
        this.logger.debug("New stats: " + newStats);
      }
    }
  }]);
  return StatisticsGatherer;
}();

var StatisticsStorage = function () {
  function StatisticsStorage(key) {
    classCallCheck(this, StatisticsStorage);

    this.key = key;
  }

  createClass(StatisticsStorage, [{
    key: 'read',
    value: function read() {
      var localStorageStatsString = localStorage.getItem(this.key);
      try {
        return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
      } catch (e) {
        return {};
      }
    }
  }, {
    key: 'write',
    value: function write(data) {
      localStorage.setItem(this.key, data);
    }
  }, {
    key: 'clear',
    value: function clear() {
      localStorage.removeItem(this.key);
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      var storedStats = this.read();
      var empty = true;
      Object.keys(storedStats).forEach(function (key) {
        if (Object.keys(storedStats[key]).length > 0) {
          empty = false;
        }
      });

      return empty;
    }
  }]);
  return StatisticsStorage;
}();

var StatisticsSender = function () {
  function StatisticsSender(url, logger) {
    classCallCheck(this, StatisticsSender);

    this.url = url;
    this.logger = logger;
  }

  createClass(StatisticsSender, [{
    key: 'send',
    value: function send(data, errorHandler) {
      var logger = this.logger;

      if (navigator.onLine === false) {
        logger.debug("Offline, can't send");
        errorHandler();
        return;
      }
      logger.debug("Sending data to " + this.url);

      var req = new XMLHttpRequest();
      req.withCredentials = true;
      req.addEventListener("load", function () {
        // Stats sent, nothing more to do
        logger.debug("Response: " + req.responseText);
      });
      req.addEventListener("error", function () {
        logger.debug("Send failed");
        errorHandler();
      });
      req.addEventListener("abort", function () {
        logger.debug("Send aborted");
        errorHandler();
      });
      req.open("POST", this.url);
      req.setRequestHeader("Content-Type", "application/json");
      req.send(data);
    }
  }]);
  return StatisticsSender;
}();

var StatisticsLogger = function () {
  function StatisticsLogger(id) {
    classCallCheck(this, StatisticsLogger);

    this.id = id;
  }

  createClass(StatisticsLogger, [{
    key: '_isDebug',
    value: function _isDebug() {
      return localStorage.getItem("vaadin." + this.id + ".debug");
    }
  }, {
    key: 'debug',
    value: function debug(msg) {
      if (this._isDebug()) {
        console.info(this.id + ": " + msg);
      }
    }
  }]);
  return StatisticsLogger;
}();

var UsageStatistics = function () {
  function UsageStatistics() {
    classCallCheck(this, UsageStatistics);

    this.now = new Date();
    this.timeNow = this.now.getTime();
    this.gatherDelay = 10; // Delay between loading this file and gathering stats
    this.initialDelay = 24 * 60 * 60;

    this.logger = new StatisticsLogger("statistics");
    this.storage = new StatisticsStorage("vaadin.statistics.basket");
    this.gatherer = new StatisticsGatherer(this.logger);
    this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
  }

  createClass(UsageStatistics, [{
    key: 'maybeGatherAndSend',
    value: function maybeGatherAndSend() {
      var _this = this;

      if (localStorage.getItem(UsageStatistics.optOutKey)) {
        return;
      }
      this.gatherer.gather(this.storage);
      setTimeout(function () {
        _this.maybeSend();
      }, this.gatherDelay * 1000);
    }
  }, {
    key: 'lottery',
    value: function lottery() {
      return true;
    }
  }, {
    key: 'currentMonth',
    value: function currentMonth() {
      return this.now.getYear() * 12 + this.now.getMonth();
    }
  }, {
    key: 'maybeSend',
    value: function maybeSend() {
      var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));

      if (!firstUse) {
        // Use a grace period to avoid interfering with tests, incognito mode etc
        firstUse = this.timeNow;
        localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
      }

      if (this.timeNow < firstUse + this.initialDelay * 1000) {
        this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
        return;
      }
      if (this.currentMonth() <= monthProcessed) {
        this.logger.debug("This month has already been processed");
        return;
      }
      localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
      // Use random sampling
      if (this.lottery()) {
        this.logger.debug("Congratulations, we have a winner!");
      } else {
        this.logger.debug("Sorry, no stats from you this time");
        return;
      }

      this.send();
    }
  }, {
    key: 'send',
    value: function send() {
      // Ensure we have the latest data
      this.gatherer.gather(this.storage);

      // Read, send and clean up
      var data = this.storage.read();
      data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      data["usageStatisticsVersion"] = UsageStatistics.version;
      var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
      var self = this;
      this.sender.send(info + JSON.stringify(data), function () {
        // Revert the 'month processed' flag
        localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
      });
    }
  }], [{
    key: 'version',
    get: function get$1() {
      return '2.1.2';
    }
  }, {
    key: 'firstUseKey',
    get: function get$1() {
      return 'vaadin.statistics.firstuse';
    }
  }, {
    key: 'monthProcessedKey',
    get: function get$1() {
      return 'vaadin.statistics.monthProcessed';
    }
  }, {
    key: 'optOutKey',
    get: function get$1() {
      return 'vaadin.statistics.optout';
    }
  }]);
  return UsageStatistics;
}();

try {
  window.Vaadin = window.Vaadin || {};
  window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
  window.Vaadin.usageStatsChecker.maybeGatherAndSend();
} catch (e) {
  // Intentionally ignored as this is not a problem in the app being developed
}

}());

  vaadin-dev-mode:end **/}const Js=function(){if(typeof yi=="function")return yi(Xs)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */let bi=0,yo=0;const Q=[];let me=!1;function Zs(){me=!1;const i=Q.length;for(let e=0;e<i;e++){const t=Q[e];if(t)try{t()}catch(o){setTimeout(()=>{throw o})}}Q.splice(0,i),yo+=i}const Qs={after(i){return{run(e){return window.setTimeout(e,i)},cancel(e){window.clearTimeout(e)}}},run(i,e){return window.setTimeout(i,e)},cancel(i){window.clearTimeout(i)}},tr={run(i){return window.requestAnimationFrame(i)},cancel(i){window.cancelAnimationFrame(i)}},er={run(i){return window.requestIdleCallback?window.requestIdleCallback(i):window.setTimeout(i,16)},cancel(i){window.cancelIdleCallback?window.cancelIdleCallback(i):window.clearTimeout(i)}},bo={run(i){me||(me=!0,queueMicrotask(()=>Zs())),Q.push(i);const e=bi;return bi+=1,e},cancel(i){const e=i-yo;if(e>=0){if(!Q[e])throw new Error(`invalid async handle: ${i}`);Q[e]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ge=new Set;let jt=class ve{static debounce(e,t,o){return e instanceof ve?e._cancelAsync():e=new ve,e.setConfig(t,o),e}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,ge.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),ge.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}};function ir(i){ge.add(i)}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */window.Vaadin||(window.Vaadin={});window.Vaadin.registrations||(window.Vaadin.registrations=[]);window.Vaadin.developmentModeCallback||(window.Vaadin.developmentModeCallback={});window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){Js()};let Zt;const Ci=new Set,F=i=>class extends Fe(i){static finalize(){super.finalize();const{is:t}=this;t&&!Ci.has(t)&&(window.Vaadin.registrations.push(this),Ci.add(t),window.Vaadin.developmentModeCallback&&(Zt=jt.debounce(Zt,er,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),ir(Zt)))}constructor(){super(),document.doctype===null&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function or(i){const e=[];for(;i;){if(i.nodeType===Node.DOCUMENT_NODE){e.push(i);break}if(i.nodeType===Node.DOCUMENT_FRAGMENT_NODE){e.push(i),i=i.host;continue}if(i.assignedSlot){i=i.assignedSlot;continue}i=i.parentNode}return e}function Be(i){return i?new Set(i.split(" ")):new Set}function qt(i){return i?[...i].join(" "):""}function Ve(i,e,t){const o=Be(i.getAttribute(e));o.add(t),i.setAttribute(e,qt(o))}function Co(i,e,t){const o=Be(i.getAttribute(e));if(o.delete(t),o.size===0){i.removeAttribute(e);return}i.setAttribute(e,qt(o))}function nr(i){return i.nodeType===Node.TEXT_NODE&&i.textContent.trim()===""}/**
 * @license
 * Copyright (c) 2023 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class sr{constructor(e,t){this.slot=e,this.callback=t,this._storedNodes=[],this._connected=!1,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){this.slot.addEventListener("slotchange",this._boundSchedule),this._connected=!0}disconnect(){this.slot.removeEventListener("slotchange",this._boundSchedule),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,queueMicrotask(()=>{this.flush()}))}flush(){this._connected&&(this._scheduled=!1,this._processNodes())}_processNodes(){const e=this.slot.assignedNodes({flatten:!0});let t=[];const o=[],n=[];e.length&&(t=e.filter(s=>!this._storedNodes.includes(s))),this._storedNodes.length&&this._storedNodes.forEach((s,r)=>{const a=e.indexOf(s);a===-1?o.push(s):a!==r&&n.push(s)}),(t.length||o.length||n.length)&&this.callback({addedNodes:t,currentNodes:e,movedNodes:n,removedNodes:o}),this._storedNodes=e}}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let rr=0;function wo(){return rr++}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Tt extends EventTarget{static generateId(e,t="default"){return`${t}-${e.localName}-${wo()}`}constructor(e,t,o,n={}){super();const{initializer:s,multiple:r,observe:a,useUniqueId:l,uniqueIdPrefix:d}=n;this.host=e,this.slotName=t,this.tagName=o,this.observe=typeof a=="boolean"?a:!0,this.multiple=typeof r=="boolean"?r:!1,this.slotInitializer=s,r&&(this.nodes=[]),l&&(this.defaultId=this.constructor.generateId(e,d||t))}hostConnected(){this.initialized||(this.multiple?this.initMultiple():this.initSingle(),this.observe&&this.observeSlot(),this.initialized=!0)}initSingle(){let e=this.getSlotChild();e?(this.node=e,this.initAddedNode(e)):(e=this.attachDefaultNode(),this.initNode(e))}initMultiple(){const e=this.getSlotChildren();if(e.length===0){const t=this.attachDefaultNode();t&&(this.nodes=[t],this.initNode(t))}else this.nodes=e,e.forEach(t=>{this.initAddedNode(t)})}attachDefaultNode(){const{host:e,slotName:t,tagName:o}=this;let n=this.defaultNode;return!n&&o&&(n=document.createElement(o),n instanceof Element&&(t!==""&&n.setAttribute("slot",t),this.defaultNode=n)),n&&(this.node=n,e.appendChild(n)),n}getSlotChildren(){const{slotName:e}=this;return Array.from(this.host.childNodes).filter(t=>t.nodeType===Node.ELEMENT_NODE&&t.slot===e||t.nodeType===Node.TEXT_NODE&&t.textContent.trim()&&e==="")}getSlotChild(){return this.getSlotChildren()[0]}initNode(e){const{slotInitializer:t}=this;t&&t(e,this.host)}initCustomNode(e){}teardownNode(e){}initAddedNode(e){e!==this.defaultNode&&(this.initCustomNode(e),this.initNode(e))}observeSlot(){const{slotName:e}=this,t=e===""?"slot:not([name])":`slot[name=${e}]`,o=this.host.shadowRoot.querySelector(t);this.__slotObserver=new sr(o,({addedNodes:n,removedNodes:s})=>{const r=this.multiple?this.nodes:[this.node],a=n.filter(l=>!nr(l)&&!r.includes(l));s.length&&(this.nodes=r.filter(l=>!s.includes(l)),s.forEach(l=>{this.teardownNode(l)})),a&&a.length>0&&(this.multiple?(this.defaultNode&&this.defaultNode.remove(),this.nodes=[...r,...a].filter(l=>l!==this.defaultNode),a.forEach(l=>{this.initAddedNode(l)})):(this.node&&this.node.remove(),this.node=a[0],this.initAddedNode(this.node)))})}}/**
 * @license
 * Copyright (c) 2022 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ue extends Tt{constructor(e){super(e,"tooltip"),this.setTarget(e)}initCustomNode(e){e.target=this.target,this.ariaTarget!==void 0&&(e.ariaTarget=this.ariaTarget),this.context!==void 0&&(e.context=this.context),this.manual!==void 0&&(e.manual=this.manual),this.opened!==void 0&&(e.opened=this.opened),this.position!==void 0&&(e._position=this.position),this.shouldShow!==void 0&&(e.shouldShow=this.shouldShow),this.__notifyChange()}teardownNode(){this.__notifyChange()}setAriaTarget(e){this.ariaTarget=e;const t=this.node;t&&(t.ariaTarget=e)}setContext(e){this.context=e;const t=this.node;t&&(t.context=e)}setManual(e){this.manual=e;const t=this.node;t&&(t.manual=e)}setOpened(e){this.opened=e;const t=this.node;t&&(t.opened=e)}setPosition(e){this.position=e;const t=this.node;t&&(t._position=e)}setShouldShow(e){this.shouldShow=e;const t=this.node;t&&(t.shouldShow=e)}setTarget(e){this.target=e;const t=this.node;t&&(t.target=e)}__notifyChange(){this.dispatchEvent(new CustomEvent("tooltip-changed",{detail:{node:this.node}}))}}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ar=g`
  [part='clear-button'] {
    display: none;
    cursor: default;
  }

  [part='clear-button']::before {
    content: '\\2715';
  }

  :host([clear-button-visible][has-value]:not([disabled]):not([readonly])) [part='clear-button'] {
    display: block;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const lr=g`
  :host {
    display: inline-flex;
    outline: none;
  }

  :host::before {
    content: '\\2003';
    width: 0;
    display: inline-block;
    /* Size and position this element on the same vertical position as the input-field element
          to make vertical align for the host element work as expected */
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:not([has-label])) [part='label'] {
    display: none;
  }

  @media (forced-colors: active) {
    :host(:not([readonly])) [part='input-field'] {
      outline: 1px solid;
      outline-offset: -1px;
    }
    :host([focused]) [part='input-field'] {
      outline-width: 2px;
    }
    :host([disabled]) [part='input-field'] {
      outline-color: GrayText;
    }
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const dr=g`
  [class$='container'] {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    max-width: 100%;
    width: var(--vaadin-field-default-width, 12em);
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xo=[lr,dr,ar];/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class cr extends Tt{constructor(e,t,o={}){const{uniqueIdPrefix:n}=o;super(e,"input","input",{initializer:(s,r)=>{r.value&&(s.value=r.value),r.type&&s.setAttribute("type",r.type),s.id=this.defaultId,typeof t=="function"&&t(s)},useUniqueId:!0,uniqueIdPrefix:n})}}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let $e=!1;window.addEventListener("keydown",()=>{$e=!0},{capture:!0});window.addEventListener("mousedown",()=>{$e=!1},{capture:!0});function ye(){let i=document.activeElement||document.body;for(;i.shadowRoot&&i.shadowRoot.activeElement;)i=i.shadowRoot.activeElement;return i}function je(){return $e}function hr(i){const e=i.style;if(e.visibility==="hidden"||e.display==="none")return!0;const t=window.getComputedStyle(i);return t.visibility==="hidden"||t.display==="none"}function ur(i,e){const t=Math.max(i.tabIndex,0),o=Math.max(e.tabIndex,0);return t===0||o===0?o>t:t>o}function pr(i,e){const t=[];for(;i.length>0&&e.length>0;)ur(i[0],e[0])?t.push(e.shift()):t.push(i.shift());return t.concat(i,e)}function be(i){const e=i.length;if(e<2)return i;const t=Math.ceil(e/2),o=be(i.slice(0,t)),n=be(i.slice(t));return pr(o,n)}function fr(i){return i.matches('[tabindex="-1"]')?!1:i.matches("input, select, textarea, button, object")?i.matches(":not([disabled])"):i.matches("a[href], area[href], iframe, [tabindex], [contentEditable]")}function _r(i){return i.getRootNode().activeElement===i}function mr(i){if(!fr(i))return-1;const e=i.getAttribute("tabindex")||0;return Number(e)}function Ao(i,e){if(i.nodeType!==Node.ELEMENT_NODE||hr(i))return!1;const t=i,o=mr(t);let n=o>0;o>=0&&e.push(t);let s=[];return t.localName==="slot"?s=t.assignedNodes({flatten:!0}):s=(t.shadowRoot||t).children,[...s].forEach(r=>{n=Ao(r,e)||n}),n}function gr(i){const e=[];return Ao(i,e)?be(e):e}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Eo=y(i=>class extends i{get _keyboardActive(){return je()}ready(){this.addEventListener("focusin",t=>{this._shouldSetFocus(t)&&this._setFocused(!0)}),this.addEventListener("focusout",t=>{this._shouldRemoveFocus(t)&&this._setFocused(!1)}),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(t){this.toggleAttribute("focused",t),this.toggleAttribute("focus-ring",t&&this._keyboardActive)}_shouldSetFocus(t){return!0}_shouldRemoveFocus(t){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Po=y(i=>class extends i{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0,sync:!0}}}_disabledChanged(t){this._setAriaDisabled(t)}_setAriaDisabled(t){t?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}});/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const To=i=>class extends Po(i){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(t,o){super._disabledChanged(t,o),t?(this.tabindex!==void 0&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):o&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(t){this.disabled&&t!==-1&&(this._lastTabIndex=t,this.tabindex=-1)}};/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const vr=y(i=>class extends Eo(To(i)){static get properties(){return{autofocus:{type:Boolean},focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged"},_lastTabIndex:{value:0}}}constructor(){super(),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready(),this.autofocus&&!this.disabled&&requestAnimationFrame(()=>{this.focus(),this.setAttribute("focus-ring","")})}focus(){this.focusElement&&!this.disabled&&this.focusElement.focus()}blur(){this.focusElement&&this.focusElement.blur()}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(t,o){t?(t.disabled=this.disabled,this._addFocusListeners(t),this.__forwardTabIndex(this.tabindex)):o&&this._removeFocusListeners(o)}_addFocusListeners(t){t.addEventListener("blur",this._boundOnBlur),t.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(t){t.removeEventListener("blur",this._boundOnBlur),t.removeEventListener("focus",this._boundOnFocus)}_onFocus(t){t.stopPropagation(),this.dispatchEvent(new Event("focus"))}_onBlur(t){t.stopPropagation(),this.dispatchEvent(new Event("blur"))}_shouldSetFocus(t){return t.target===this.focusElement}_shouldRemoveFocus(t){return t.target===this.focusElement}_disabledChanged(t,o){super._disabledChanged(t,o),this.focusElement&&(this.focusElement.disabled=t),t&&this.blur()}_tabindexChanged(t){this.__forwardTabIndex(t)}__forwardTabIndex(t){t!==void 0&&this.focusElement&&(this.focusElement.tabIndex=t,t!==-1&&(this.tabindex=void 0)),this.disabled&&t&&(t!==-1&&(this._lastTabIndex=t),this.tabindex=void 0)}});/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qe=y(i=>class extends i{ready(){super.ready(),this.addEventListener("keydown",t=>{this._onKeyDown(t)}),this.addEventListener("keyup",t=>{this._onKeyUp(t)})}_onKeyDown(t){switch(t.key){case"Enter":this._onEnter(t);break;case"Escape":this._onEscape(t);break}}_onKeyUp(t){}_onEnter(t){}_onEscape(t){}});/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Qt=new WeakMap;function yr(i){return Qt.has(i)||Qt.set(i,new Set),Qt.get(i)}function br(i,e){const t=document.createElement("style");t.textContent=i,e===document?document.head.appendChild(t):e.insertBefore(t,e.firstChild)}const Cr=y(i=>class extends i{get slotStyles(){return{}}connectedCallback(){super.connectedCallback(),this.__applySlotStyles()}__applySlotStyles(){const t=this.getRootNode(),o=yr(t);this.slotStyles.forEach(n=>{o.has(n)||(br(n,t),o.add(n))})}});/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Yt=i=>i.test(navigator.userAgent),Ce=i=>i.test(navigator.platform),wr=i=>i.test(navigator.vendor);Yt(/Android/u);Yt(/Chrome/u)&&wr(/Google Inc/u);Yt(/Firefox/u);const xr=Ce(/^iPad/u)||Ce(/^Mac/u)&&navigator.maxTouchPoints>1,Ar=Ce(/^iPhone/u),No=Ar||xr;Yt(/^((?!chrome|android).)*safari/iu);const Er=(()=>{try{return document.createEvent("TouchEvent"),!0}catch{return!1}})();/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const So=y(i=>class extends i{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged"},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0,sync:!0},_hasInputValue:{type:Boolean,value:!1,observer:"_hasInputValueChanged"}}}constructor(){super(),this._boundOnInput=this.__onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}get _hasValue(){return this.value!=null&&this.value!==""}get _inputElementValueProperty(){return"value"}get _inputElementValue(){return this.inputElement?this.inputElement[this._inputElementValueProperty]:void 0}set _inputElementValue(t){this.inputElement&&(this.inputElement[this._inputElementValueProperty]=t),this._hasInputValue=t&&t.length>0}clear(){this._hasInputValue=!1,this.value="",this._inputElementValue=""}_addInputListeners(t){t.addEventListener("input",this._boundOnInput),t.addEventListener("change",this._boundOnChange)}_removeInputListeners(t){t.removeEventListener("input",this._boundOnInput),t.removeEventListener("change",this._boundOnChange)}_forwardInputValue(t){this.inputElement&&(this._inputElementValue=t??"")}_inputElementChanged(t,o){t?this._addInputListeners(t):o&&this._removeInputListeners(o)}_hasInputValueChanged(t,o){(t||o)&&this.dispatchEvent(new CustomEvent("has-input-value-changed"))}__onInput(t){this._setHasInputValue(t),this._onInput(t)}_onInput(t){const o=t.composedPath()[0];this.__userInput=t.isTrusted,this.value=o.value,this.__userInput=!1}_onChange(t){}_toggleHasValue(t){this.toggleAttribute("has-value",t)}_valueChanged(t,o){this._toggleHasValue(this._hasValue),!(t===""&&o===void 0)&&(this.__userInput||this._forwardInputValue(t))}_setHasInputValue(t){const o=t.composedPath()[0];this._hasInputValue=o.value.length>0}});/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Pr=i=>class extends So(qe(i)){static get properties(){return{clearButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1}}}get clearElement(){return console.warn(`Please implement the 'clearElement' property in <${this.localName}>`),null}ready(){super.ready(),this.clearElement&&(this.clearElement.addEventListener("mousedown",t=>this._onClearButtonMouseDown(t)),this.clearElement.addEventListener("click",t=>this._onClearButtonClick(t)))}_onClearButtonClick(t){t.preventDefault(),this._onClearAction()}_onClearButtonMouseDown(t){t.preventDefault(),Er||this.inputElement.focus()}_onEscape(t){super._onEscape(t),this.clearButtonVisible&&this.value&&(t.stopPropagation(),this._onClearAction())}_onClearAction(){this._inputElementValue="",this.inputElement.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.inputElement.dispatchEvent(new Event("change",{bubbles:!0}))}};/**
 * @license
 * Copyright (c) 2023 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const te=new Map;function Ye(i){return te.has(i)||te.set(i,new WeakMap),te.get(i)}function Oo(i,e){i&&i.removeAttribute(e)}function Mo(i,e){if(!i||!e)return;const t=Ye(e);if(t.has(i))return;const o=Be(i.getAttribute(e));t.set(i,new Set(o))}function Tr(i,e){if(!i)return;const t=Ye(e),o=t.get(i);!o||o.size===0?i.removeAttribute(e):Ve(i,e,qt(o)),t.delete(i)}function ee(i,e,t={newId:null,oldId:null,fromUser:!1}){if(!i||!e)return;const{newId:o,oldId:n,fromUser:s}=t,r=Ye(e),a=r.get(i);if(!s&&a){n&&a.delete(n),o&&a.add(o);return}s&&(a?o||r.delete(i):Mo(i,e),Oo(i,e)),Co(i,e,n);const l=o||qt(a);l&&Ve(i,e,l)}function Nr(i,e){Mo(i,e),Oo(i,e)}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Sr{constructor(e){this.host=e,this.__required=!1}setTarget(e){this.__target=e,this.__setAriaRequiredAttribute(this.__required),this.__setLabelIdToAriaAttribute(this.__labelId,this.__labelId),this.__labelIdFromUser!=null&&this.__setLabelIdToAriaAttribute(this.__labelIdFromUser,this.__labelIdFromUser,!0),this.__setErrorIdToAriaAttribute(this.__errorId),this.__setHelperIdToAriaAttribute(this.__helperId),this.setAriaLabel(this.__label)}setRequired(e){this.__setAriaRequiredAttribute(e),this.__required=e}setAriaLabel(e){this.__setAriaLabelToAttribute(e),this.__label=e}setLabelId(e,t=!1){const o=t?this.__labelIdFromUser:this.__labelId;this.__setLabelIdToAriaAttribute(e,o,t),t?this.__labelIdFromUser=e:this.__labelId=e}setErrorId(e){this.__setErrorIdToAriaAttribute(e,this.__errorId),this.__errorId=e}setHelperId(e){this.__setHelperIdToAriaAttribute(e,this.__helperId),this.__helperId=e}__setAriaLabelToAttribute(e){this.__target&&(e?(Nr(this.__target,"aria-labelledby"),this.__target.setAttribute("aria-label",e)):this.__label&&(Tr(this.__target,"aria-labelledby"),this.__target.removeAttribute("aria-label")))}__setLabelIdToAriaAttribute(e,t,o){ee(this.__target,"aria-labelledby",{newId:e,oldId:t,fromUser:o})}__setErrorIdToAriaAttribute(e,t){ee(this.__target,"aria-describedby",{newId:e,oldId:t,fromUser:!1})}__setHelperIdToAriaAttribute(e,t){ee(this.__target,"aria-describedby",{newId:e,oldId:t,fromUser:!1})}__setAriaRequiredAttribute(e){this.__target&&(["input","textarea"].includes(this.__target.localName)||(e?this.__target.setAttribute("aria-required","true"):this.__target.removeAttribute("aria-required")))}}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Nt=y(i=>typeof i.prototype.addController=="function"?i:class extends i{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach(t=>{t.hostConnected&&t.hostConnected()})}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach(t=>{t.hostDisconnected&&t.hostDisconnected()})}addController(t){this.__controllers.add(t),this.$!==void 0&&this.isConnected&&t.hostConnected&&t.hostConnected()}removeController(t){this.__controllers.delete(t)}});/**
 * @license
 * Copyright (c) 2022 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const k=document.createElement("div");k.style.position="fixed";k.style.clip="rect(0px, 0px, 0px, 0px)";k.setAttribute("aria-live","polite");document.body.appendChild(k);let kt;function Or(i,e={}){const t=e.mode||"polite",o=e.timeout===void 0?150:e.timeout;t==="alert"?(k.removeAttribute("aria-live"),k.removeAttribute("role"),kt=jt.debounce(kt,tr,()=>{k.setAttribute("role","alert")})):(kt&&kt.cancel(),k.removeAttribute("role"),k.setAttribute("aria-live",t)),k.textContent="",setTimeout(()=>{k.textContent=i},o)}/**
 * @license
 * Copyright (c) 2022 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ge extends Tt{constructor(e,t,o,n={}){super(e,t,o,{...n,useUniqueId:!0})}initCustomNode(e){this.__updateNodeId(e),this.__notifyChange(e)}teardownNode(e){const t=this.getSlotChild();t&&t!==this.defaultNode?this.__notifyChange(t):(this.restoreDefaultNode(),this.updateDefaultNode(this.node))}attachDefaultNode(){const e=super.attachDefaultNode();return e&&this.__updateNodeId(e),e}restoreDefaultNode(){}updateDefaultNode(e){this.__notifyChange(e)}observeNode(e){this.__nodeObserver&&this.__nodeObserver.disconnect(),this.__nodeObserver=new MutationObserver(t=>{t.forEach(o=>{const n=o.target,s=n===this.node;o.type==="attributes"?s&&this.__updateNodeId(n):(s||n.parentElement===this.node)&&this.__notifyChange(this.node)})}),this.__nodeObserver.observe(e,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__hasContent(e){return e?e.nodeType===Node.ELEMENT_NODE&&(customElements.get(e.localName)||e.children.length>0)||e.textContent&&e.textContent.trim()!=="":!1}__notifyChange(e){this.dispatchEvent(new CustomEvent("slot-content-changed",{detail:{hasContent:this.__hasContent(e),node:e}}))}__updateNodeId(e){const t=!this.nodes||e===this.nodes[0];e.nodeType===Node.ELEMENT_NODE&&(!this.multiple||t)&&!e.id&&(e.id=this.defaultId)}}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Mr extends Ge{constructor(e){super(e,"error-message","div")}setErrorMessage(e){this.errorMessage=e,this.updateDefaultNode(this.node)}setInvalid(e){this.invalid=e,this.updateDefaultNode(this.node)}initAddedNode(e){e!==this.defaultNode&&this.initCustomNode(e)}initNode(e){this.updateDefaultNode(e)}initCustomNode(e){e.textContent&&!this.errorMessage&&(this.errorMessage=e.textContent.trim()),super.initCustomNode(e)}restoreDefaultNode(){this.attachDefaultNode()}updateDefaultNode(e){const{errorMessage:t,invalid:o}=this,n=!!(o&&t&&t.trim()!=="");e&&(e.textContent=n?t:"",e.hidden=!n,n&&Or(t,{mode:"assertive"})),super.updateDefaultNode(e)}}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class kr extends Ge{constructor(e){super(e,"helper",null)}setHelperText(e){this.helperText=e,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{helperText:e}=this;if(e&&e.trim()!==""){this.tagName="div";const t=this.attachDefaultNode();this.observeNode(t)}}updateDefaultNode(e){e&&(e.textContent=this.helperText),super.updateDefaultNode(e)}initCustomNode(e){super.initCustomNode(e),this.observeNode(e)}}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ir extends Ge{constructor(e){super(e,"label","label")}setLabel(e){this.label=e,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{label:e}=this;if(e&&e.trim()!==""){const t=this.attachDefaultNode();this.observeNode(t)}}updateDefaultNode(e){e&&(e.textContent=this.label),super.updateDefaultNode(e)}initCustomNode(e){super.initCustomNode(e),this.observeNode(e)}}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zr=y(i=>class extends Nt(i){static get properties(){return{label:{type:String,observer:"_labelChanged"}}}constructor(){super(),this._labelController=new Ir(this),this._labelController.addEventListener("slot-content-changed",t=>{this.toggleAttribute("has-label",t.detail.hasContent)})}get _labelId(){const t=this._labelNode;return t&&t.id}get _labelNode(){return this._labelController.node}ready(){super.ready(),this.addController(this._labelController)}_labelChanged(t){this._labelController.setLabel(t)}});/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ko=y(i=>class extends i{static get properties(){return{invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},manualValidation:{type:Boolean,value:!1},required:{type:Boolean,reflectToAttribute:!0}}}validate(){const t=this.checkValidity();return this._setInvalid(!t),this.dispatchEvent(new CustomEvent("validated",{detail:{valid:t}})),t}checkValidity(){return!this.required||!!this.value}_setInvalid(t){this._shouldSetInvalid(t)&&(this.invalid=t)}_shouldSetInvalid(t){return!0}_requestValidation(){this.manualValidation||this.validate()}});/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Lr=i=>class extends ko(zr(Nt(i))){static get properties(){return{ariaTarget:{type:Object,observer:"_ariaTargetChanged"},errorMessage:{type:String,observer:"_errorMessageChanged"},helperText:{type:String,observer:"_helperTextChanged"},accessibleName:{type:String,observer:"_accessibleNameChanged"},accessibleNameRef:{type:String,observer:"_accessibleNameRefChanged"}}}static get observers(){return["_invalidChanged(invalid)","_requiredChanged(required)"]}constructor(){super(),this._fieldAriaController=new Sr(this),this._helperController=new kr(this),this._errorController=new Mr(this),this._errorController.addEventListener("slot-content-changed",t=>{this.toggleAttribute("has-error-message",t.detail.hasContent)}),this._labelController.addEventListener("slot-content-changed",t=>{const{hasContent:o,node:n}=t.detail;this.__labelChanged(o,n)}),this._helperController.addEventListener("slot-content-changed",t=>{const{hasContent:o,node:n}=t.detail;this.toggleAttribute("has-helper",o),this.__helperChanged(o,n)})}get _errorNode(){return this._errorController.node}get _helperNode(){return this._helperController.node}ready(){super.ready(),this.addController(this._fieldAriaController),this.addController(this._helperController),this.addController(this._errorController)}__helperChanged(t,o){t?this._fieldAriaController.setHelperId(o.id):this._fieldAriaController.setHelperId(null)}_accessibleNameChanged(t){this._fieldAriaController.setAriaLabel(t)}_accessibleNameRefChanged(t){this._fieldAriaController.setLabelId(t,!0)}__labelChanged(t,o){t?this._fieldAriaController.setLabelId(o.id):this._fieldAriaController.setLabelId(null)}_errorMessageChanged(t){this._errorController.setErrorMessage(t)}_helperTextChanged(t){this._helperController.setHelperText(t)}_ariaTargetChanged(t){t&&this._fieldAriaController.setTarget(t)}_requiredChanged(t){this._fieldAriaController.setRequired(t)}_invalidChanged(t){this._errorController.setInvalid(t),setTimeout(()=>{if(t){const o=this._errorNode;this._fieldAriaController.setErrorId(o&&o.id)}else this._fieldAriaController.setErrorId(null)})}};/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Dr=y(i=>class extends i{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(t){t&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach(t=>{this._delegateAttribute(t,this[t])})}_ensurePropsDelegated(){this.constructor.delegateProps.forEach(t=>{this._delegateProperty(t,this[t])})}_delegateAttrsChanged(...t){this.constructor.delegateAttrs.forEach((o,n)=>{this._delegateAttribute(o,t[n])})}_delegatePropsChanged(...t){this.constructor.delegateProps.forEach((o,n)=>{this._delegateProperty(o,t[n])})}_delegateAttribute(t,o){this.stateTarget&&(t==="invalid"&&this._delegateAttribute("aria-invalid",o?"true":!1),typeof o=="boolean"?this.stateTarget.toggleAttribute(t,o):o?this.stateTarget.setAttribute(t,o):this.stateTarget.removeAttribute(t))}_delegateProperty(t,o){this.stateTarget&&(this.stateTarget[t]=o)}});/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Hr=y(i=>class extends Dr(ko(So(i))){static get constraints(){return["required"]}static get delegateAttrs(){return[...super.delegateAttrs,"required"]}ready(){super.ready(),this._createConstraintsObserver()}checkValidity(){return this.inputElement&&this._hasValidConstraints(this.constructor.constraints.map(t=>this[t]))?this.inputElement.checkValidity():!this.invalid}_hasValidConstraints(t){return t.some(o=>this.__isValidConstraint(o))}_createConstraintsObserver(){this._createMethodObserver(`_constraintsChanged(stateTarget, ${this.constructor.constraints.join(", ")})`)}_constraintsChanged(t,...o){if(!t)return;const n=this._hasValidConstraints(o),s=this.__previousHasConstraints&&!n;(this._hasValue||this.invalid)&&n?this._requestValidation():s&&!this.manualValidation&&this._setInvalid(!1),this.__previousHasConstraints=n}_onChange(t){t.stopPropagation(),this._requestValidation(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:t},bubbles:t.bubbles,cancelable:t.cancelable}))}__isValidConstraint(t){return!!t||t===0}});/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Rr=i=>class extends Cr(vr(Hr(Lr(Pr(qe(i)))))){static get properties(){return{allowedCharPattern:{type:String,observer:"_allowedCharPatternChanged"},autoselect:{type:Boolean,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},title:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"name","type","placeholder","readonly","invalid","title"]}constructor(){super(),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this)}get slotStyles(){return[`
          :is(input[slot='input'], textarea[slot='textarea'])::placeholder {
            font: inherit;
            color: inherit;
          }
        `]}_onFocus(t){super._onFocus(t),this.autoselect&&this.inputElement&&this.inputElement.select()}_addInputListeners(t){super._addInputListeners(t),t.addEventListener("paste",this._boundOnPaste),t.addEventListener("drop",this._boundOnDrop),t.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(t){super._removeInputListeners(t),t.removeEventListener("paste",this._boundOnPaste),t.removeEventListener("drop",this._boundOnDrop),t.removeEventListener("beforeinput",this._boundOnBeforeInput)}_onKeyDown(t){super._onKeyDown(t),this.allowedCharPattern&&!this.__shouldAcceptKey(t)&&t.target===this.inputElement&&(t.preventDefault(),this._markInputPrevented())}_markInputPrevented(){this.setAttribute("input-prevented",""),this._preventInputDebouncer=jt.debounce(this._preventInputDebouncer,Qs.after(200),()=>{this.removeAttribute("input-prevented")})}__shouldAcceptKey(t){return t.metaKey||t.ctrlKey||!t.key||t.key.length!==1||this.__allowedCharRegExp.test(t.key)}_onPaste(t){if(this.allowedCharPattern){const o=t.clipboardData.getData("text");this.__allowedTextRegExp.test(o)||(t.preventDefault(),this._markInputPrevented())}}_onDrop(t){if(this.allowedCharPattern){const o=t.dataTransfer.getData("text");this.__allowedTextRegExp.test(o)||(t.preventDefault(),this._markInputPrevented())}}_onBeforeInput(t){this.allowedCharPattern&&t.data&&!this.__allowedTextRegExp.test(t.data)&&(t.preventDefault(),this._markInputPrevented())}_allowedCharPatternChanged(t){if(t)try{this.__allowedCharRegExp=new RegExp(`^${t}$`,"u"),this.__allowedTextRegExp=new RegExp(`^${t}*$`,"u")}catch(o){console.error(o)}}};/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Io=i=>class extends Rr(i){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"autocapitalize","autocomplete","autocorrect"]}get __data(){return this.__dataValue||{}}set __data(t){this.__dataValue=t}_inputElementChanged(t){super._inputElementChanged(t),t&&(t.value&&t.value!==this.value&&(console.warn(`Please define value on the <${this.localName}> component!`),t.value=""),this.value&&(t.value=this.value))}_setFocused(t){super._setFocused(t),!t&&document.hasFocus()&&this._requestValidation()}_onInput(t){super._onInput(t),this.invalid&&this._requestValidation()}_valueChanged(t,o){super._valueChanged(t,o),o!==void 0&&this.invalid&&this._requestValidation()}};/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class zo{constructor(e,t){this.input=e,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),t.addEventListener("slot-content-changed",o=>{this.__initLabel(o.detail.node)}),this.__initLabel(t.node)}__initLabel(e){e&&(e.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&e.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const e=t=>{t.stopImmediatePropagation(),this.input.removeEventListener("click",e)};this.input.addEventListener("click",e)}}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Fr=i=>class extends Io(i){static get properties(){return{maxlength:{type:Number},minlength:{type:Number},pattern:{type:String}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength","pattern"]}static get constraints(){return[...super.constraints,"maxlength","minlength","pattern"]}constructor(){super(),this._setType("text")}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new cr(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new zo(this.inputElement,this._labelController))}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */C("vaadin-text-field",xo,{moduleId:"vaadin-text-field-styles"});class Br extends Fr(H(F(P))){static get is(){return"vaadin-text-field"}static get template(){return M`
      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this._tooltipController=new Ue(this),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.inputElement),this.addController(this._tooltipController)}}O(Br);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Vr=g`
  [part='input-field'],
  [part='input-field'] ::slotted(textarea) {
    height: auto;
    box-sizing: border-box;
  }

  [part='input-field'] {
    /* Equal to the implicit padding in vaadin-text-field */
    padding-top: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
    padding-bottom: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
    transition: background-color 0.1s;
    line-height: var(--lumo-line-height-s);
  }

  :host(:not([readonly])) [part='input-field']::after {
    display: none;
  }

  :host([readonly]) [part='input-field'] {
    border: var(--vaadin-input-field-readonly-border, 1px dashed var(--lumo-contrast-30pct));
  }

  :host([readonly]) [part='input-field']::after {
    border: none;
  }

  :host(:hover:not([readonly]):not([focused]):not([invalid])) [part='input-field'] {
    background-color: var(--lumo-contrast-20pct);
  }

  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused]):not([invalid])) [part='input-field'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field'] {
      background-color: var(--lumo-contrast-20pct);
    }
  }

  [part='input-field'] ::slotted(textarea) {
    line-height: inherit;
    --_lumo-text-field-overflow-mask-image: none;
  }

  /* Use sticky positioning to keep prefix/suffix/clear button visible when scrolling textarea container */
  [part='input-field'] ::slotted([slot$='fix']),
  [part='clear-button'] {
    position: sticky;
    top: 0;
    align-self: flex-start;
  }

  /* Vertically align icon prefix/suffix/clear button with the first line of text */
  [part='input-field'] ::slotted(vaadin-icon[slot$='fix']),
  [part='clear-button'] {
    top: calc((var(--lumo-icon-size-m) - 1em * var(--lumo-line-height-s)) / -2);
    margin-top: calc((var(--lumo-icon-size-m) - 1em * var(--lumo-line-height-s)) / -2);
  }
`;C("vaadin-text-area",[De,Vr],{moduleId:"lumo-text-area"});/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const It=new ResizeObserver(i=>{setTimeout(()=>{i.forEach(e=>{e.target.resizables?e.target.resizables.forEach(t=>{t._onResize(e.contentRect)}):e.target._onResize(e.contentRect)})})}),Ur=y(i=>class extends i{get _observeParent(){return!1}connectedCallback(){if(super.connectedCallback(),It.observe(this),this._observeParent){const t=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;t.resizables||(t.resizables=new Set,It.observe(t)),t.resizables.add(this),this.__parent=t}}disconnectedCallback(){super.disconnectedCallback(),It.unobserve(this);const t=this.__parent;if(this._observeParent&&t){const o=t.resizables;o&&(o.delete(this),o.size===0&&It.unobserve(t)),this.__parent=null}}_onResize(t){}});/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class $r extends Tt{constructor(e,t){super(e,"textarea","textarea",{initializer:(o,n)=>{const s=n.getAttribute("value");s&&(o.value=s);const r=n.getAttribute("name");r&&o.setAttribute("name",r),o.id=this.defaultId,typeof t=="function"&&t(o)},useUniqueId:!0})}}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const jr=i=>class extends Ur(Io(i)){static get properties(){return{maxlength:{type:Number},minlength:{type:Number},pattern:{type:String},minRows:{type:Number,value:2,observer:"__minRowsChanged"},maxRows:{type:Number}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength","pattern"]}static get constraints(){return[...super.constraints,"maxlength","minlength","pattern"]}static get observers(){return["__updateMinHeight(minRows, inputElement)","__updateMaxHeight(maxRows, inputElement, _inputField)"]}get clearElement(){return this.$.clearButton}_onResize(){this._updateHeight(),this.__scrollPositionUpdated()}_onScroll(){this.__scrollPositionUpdated()}ready(){super.ready(),this.__textAreaController=new $r(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t}),this.addController(this.__textAreaController),this.addController(new zo(this.inputElement,this._labelController)),this.addEventListener("animationend",this._onAnimationEnd),this._inputField=this.shadowRoot.querySelector("[part=input-field]"),this._inputField.addEventListener("wheel",t=>{const o=this._inputField.scrollTop;this._inputField.scrollTop+=t.deltaY,o!==this._inputField.scrollTop&&(t.preventDefault(),this.__scrollPositionUpdated())}),this._updateHeight(),this.__scrollPositionUpdated()}__scrollPositionUpdated(){this._inputField.style.setProperty("--_text-area-vertical-scroll-position","0px"),this._inputField.style.setProperty("--_text-area-vertical-scroll-position",`${this._inputField.scrollTop}px`)}_onAnimationEnd(t){t.animationName.indexOf("vaadin-text-area-appear")===0&&this._updateHeight()}_valueChanged(t,o){super._valueChanged(t,o),this._updateHeight()}_updateHeight(){const t=this.inputElement,o=this._inputField;if(!t||!o)return;const n=o.scrollTop,s=this.value?this.value.length:0;if(this._oldValueLength>=s){const a=getComputedStyle(o).height,l=getComputedStyle(t).width;o.style.height=a,t.style.maxWidth=l,t.style.alignSelf="flex-start",t.style.height="auto"}this._oldValueLength=s;const r=t.scrollHeight;r>t.clientHeight&&(t.style.height=`${r}px`),t.style.removeProperty("max-width"),t.style.removeProperty("align-self"),o.style.removeProperty("height"),o.scrollTop=n,this.__updateMaxHeight(this.maxRows)}__updateMinHeight(t){this.inputElement&&this.inputElement===this.__textAreaController.defaultNode&&(this.inputElement.rows=Math.max(t,2))}__updateMaxHeight(t){if(!(!this._inputField||!this.inputElement))if(t){const o=getComputedStyle(this.inputElement),n=getComputedStyle(this._inputField),r=parseFloat(o.lineHeight)*t,a=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.marginTop)+parseFloat(o.marginBottom)+parseFloat(n.paddingTop)+parseFloat(n.paddingBottom),l=Math.ceil(r+a);this._inputField.style.setProperty("max-height",`${l}px`)}else this._inputField.style.removeProperty("max-height")}__minRowsChanged(t){t<2&&console.warn("<vaadin-text-area> minRows must be at least 2.")}scrollToStart(){this._inputField.scrollTop=0}scrollToEnd(){this._inputField.scrollTop=this._inputField.scrollHeight}checkValidity(){if(!super.checkValidity())return!1;if(!this.pattern||!this.inputElement.value)return!0;try{const t=this.inputElement.value.match(this.pattern);return t?t[0]===t.input:!1}catch{return!0}}};/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qr=g`
  :host {
    animation: 1ms vaadin-text-area-appear;
  }

  .vaadin-text-area-container {
    flex: auto;
  }

  /* The label, helper text and the error message should neither grow nor shrink. */
  [part='label'],
  [part='helper-text'],
  [part='error-message'] {
    flex: none;
  }

  [part='input-field'] {
    flex: auto;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  ::slotted(textarea) {
    -webkit-appearance: none;
    -moz-appearance: none;
    flex: auto;
    overflow: hidden;
    width: 100%;
    height: 100%;
    outline: none;
    resize: none;
    margin: 0;
    padding: 0 0.25em;
    border: 0;
    border-radius: 0;
    min-width: 0;
    font: inherit;
    font-size: 1em;
    line-height: normal;
    color: inherit;
    background-color: transparent;
    /* Disable default invalid style in Firefox */
    box-shadow: none;
  }

  /* Override styles from <vaadin-input-container> */
  [part='input-field'] ::slotted(textarea) {
    align-self: stretch;
    white-space: pre-wrap;
    box-sizing: border-box;
  }

  [part='input-field'] ::slotted(:not(textarea)) {
    align-self: flex-start;
  }

  /* Workaround https://bugzilla.mozilla.org/show_bug.cgi?id=1739079 */
  :host([disabled]) ::slotted(textarea) {
    user-select: none;
  }

  @keyframes vaadin-text-area-appear {
    to {
      opacity: 1;
    }
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */C("vaadin-text-area",[xo,qr],{moduleId:"vaadin-text-area-styles"});class Yr extends jr(H(F(P))){static get is(){return"vaadin-text-area"}static get template(){return M`
      <div class="vaadin-text-area-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
          on-scroll="_onScroll"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="textarea"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this._tooltipController=new Ue(this),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.inputElement),this.addController(this._tooltipController)}}O(Yr);const Gr=g`
  :host([theme~='margin']) {
    margin: var(--lumo-space-m);
  }

  :host([theme~='padding']) {
    padding: var(--lumo-space-m);
  }

  :host([theme~='spacing-xs']) {
    gap: var(--lumo-space-xs);
  }

  :host([theme~='spacing-s']) {
    gap: var(--lumo-space-s);
  }

  :host([theme~='spacing']) {
    gap: var(--lumo-space-m);
  }

  :host([theme~='spacing-l']) {
    gap: var(--lumo-space-l);
  }

  :host([theme~='spacing-xl']) {
    gap: var(--lumo-space-xl);
  }

  :host([theme~='wrap']) {
    flex-wrap: wrap;
  }
`;C("vaadin-vertical-layout",Gr,{moduleId:"lumo-vertical-layout"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Wr extends F(H(P)){static get template(){return M`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Theme variations */
        :host([theme~='margin']) {
          margin: 1em;
        }

        :host([theme~='padding']) {
          padding: 1em;
        }

        :host([theme~='spacing']) {
          gap: 1em;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-vertical-layout"}}O(Wr);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Lo=g`
  :host {
    top: var(--lumo-space-m);
    right: var(--lumo-space-m);
    bottom: var(--lumo-space-m);
    left: var(--lumo-space-m);
    /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */
    /* stylelint-disable-next-line */
    outline: 0px solid transparent;
  }

  [part='overlay'] {
    background-color: var(--lumo-base-color);
    background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
    border-radius: var(--lumo-border-radius-m);
    box-shadow:
      0 0 0 1px var(--lumo-shade-5pct),
      var(--lumo-box-shadow-m);
    color: var(--lumo-body-text-color);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 400;
    line-height: var(--lumo-line-height-m);
    letter-spacing: 0;
    text-transform: none;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [part='content'] {
    padding: var(--lumo-space-xs);
  }

  [part='backdrop'] {
    background-color: var(--lumo-shade-20pct);
    animation: 0.2s lumo-overlay-backdrop-enter both;
    will-change: opacity;
  }

  @keyframes lumo-overlay-backdrop-enter {
    0% {
      opacity: 0;
    }
  }

  :host([closing]) [part='backdrop'] {
    animation: 0.2s lumo-overlay-backdrop-exit both;
  }

  @keyframes lumo-overlay-backdrop-exit {
    100% {
      opacity: 0;
    }
  }

  @keyframes lumo-overlay-dummy-animation {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }
`;C("",Lo,{moduleId:"lumo-overlay"});const Kr=g`
  :host {
    --vaadin-tooltip-offset-top: var(--lumo-space-xs);
    --vaadin-tooltip-offset-bottom: var(--lumo-space-xs);
    --vaadin-tooltip-offset-start: var(--lumo-space-xs);
    --vaadin-tooltip-offset-end: var(--lumo-space-xs);
  }

  [part='overlay'] {
    background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-s);
  }

  [part='content'] {
    padding: var(--lumo-space-xs) var(--lumo-space-s);
  }
`;C("vaadin-tooltip-overlay",[Lo,Kr],{moduleId:"lumo-tooltip-overlay"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Xr=g`
  :host {
    z-index: 200;
    position: fixed;

    /* Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part. */

    /* Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport. */
    inset: 0;
    bottom: var(--vaadin-overlay-viewport-bottom);

    /* Use flexbox alignment for the overlay part. */
    display: flex;
    flex-direction: column; /* makes dropdowns sizing easier */
    /* Align to center by default. */
    align-items: center;
    justify-content: center;

    /* Allow centering when max-width/max-height applies. */
    margin: auto;

    /* The host is not clickable, only the overlay part is. */
    pointer-events: none;

    /* Remove tap highlight on touch devices. */
    -webkit-tap-highlight-color: transparent;

    /* CSS API for host */
    --vaadin-overlay-viewport-bottom: 0;
  }

  :host([hidden]),
  :host(:not([opened]):not([closing])),
  :host(:not([opened]):not([closing])) [part='overlay'] {
    display: none !important;
  }

  [part='overlay'] {
    -webkit-overflow-scrolling: touch;
    overflow: auto;
    pointer-events: auto;

    /* Prevent overflowing the host */
    max-width: 100%;
    box-sizing: border-box;

    -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
  }

  [part='backdrop'] {
    z-index: -1;
    content: '';
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    inset: 0;
    pointer-events: auto;
  }
`;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let we=!1,Jr=[],Do=[];function Zr(){we=!0,requestAnimationFrame(function(){we=!1,Qr(Jr),setTimeout(function(){ta(Do)})})}function Qr(i){for(;i.length;)Ho(i.shift())}function ta(i){for(let e=0,t=i.length;e<t;e++)Ho(i.shift())}function Ho(i){const e=i[0],t=i[1],o=i[2];try{t.apply(e,o)}catch(n){setTimeout(()=>{throw n})}}function ea(i,e,t){we||Zr(),Do.push([i,e,t])}/**
 * @license
 * Copyright (c) 2017 Anton Korzunov
 * SPDX-License-Identifier: MIT
 */let K=new WeakMap,zt=new WeakMap,Lt={},ie=0;const wi=i=>i&&i.nodeType===Node.ELEMENT_NODE,oe=(...i)=>{console.error(`Error: ${i.join(" ")}. Skip setting aria-hidden.`)},ia=(i,e)=>wi(i)?e.map(t=>{if(!wi(t))return oe(t,"is not a valid element"),null;let o=t;for(;o&&o!==i;){if(i.contains(o))return t;o=o.getRootNode().host}return oe(t,"is not contained inside",i),null}).filter(t=>!!t):(oe(i,"is not a valid element"),[]),oa=(i,e,t,o)=>{const n=ia(e,Array.isArray(i)?i:[i]);Lt[t]||(Lt[t]=new WeakMap);const s=Lt[t],r=[],a=new Set,l=new Set(n),d=h=>{if(!h||a.has(h))return;a.add(h);const u=h.assignedSlot;u&&d(u),d(h.parentNode||h.host)};n.forEach(d);const c=h=>{if(!h||l.has(h))return;const u=h.shadowRoot;(u?[...h.children,...u.children]:[...h.children]).forEach(f=>{if(!["template","script","style"].includes(f.localName))if(a.has(f))c(f);else{const x=f.getAttribute(o),A=x!==null&&x!=="false",w=(K.get(f)||0)+1,b=(s.get(f)||0)+1;K.set(f,w),s.set(f,b),r.push(f),w===1&&A&&zt.set(f,!0),b===1&&f.setAttribute(t,"true"),A||f.setAttribute(o,"true")}})};return c(e),a.clear(),ie+=1,()=>{r.forEach(h=>{const u=K.get(h)-1,p=s.get(h)-1;K.set(h,u),s.set(h,p),u||(zt.has(h)?zt.delete(h):h.removeAttribute(o)),p||h.removeAttribute(t)}),ie-=1,ie||(K=new WeakMap,K=new WeakMap,zt=new WeakMap,Lt={})}},na=(i,e=document.body,t="data-aria-hidden")=>{const o=Array.from(Array.isArray(i)?i:[i]);return e&&o.push(...Array.from(e.querySelectorAll("[aria-live]"))),oa(o,e,t,"aria-hidden")};/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class sa{constructor(e,t){this.host=e,this.callback=typeof t=="function"?t:()=>e}showModal(){const e=this.callback();this.__showOthers=na(e)}close(){this.__showOthers&&(this.__showOthers(),this.__showOthers=null)}}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ra{saveFocus(e){this.focusNode=e||ye()}restoreFocus(e){const t=this.focusNode;if(!t)return;const o=e?e.preventScroll:!1;ye()===document.body?setTimeout(()=>t.focus({preventScroll:o})):t.focus({preventScroll:o}),this.focusNode=null}}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ne=[];class aa{constructor(e){this.host=e,this.__trapNode=null,this.__onKeyDown=this.__onKeyDown.bind(this)}get __focusableElements(){return gr(this.__trapNode)}get __focusedElementIndex(){const e=this.__focusableElements;return e.indexOf(e.filter(_r).pop())}hostConnected(){document.addEventListener("keydown",this.__onKeyDown)}hostDisconnected(){document.removeEventListener("keydown",this.__onKeyDown)}trapFocus(e){if(this.__trapNode=e,this.__focusableElements.length===0)throw this.__trapNode=null,new Error("The trap node should have at least one focusable descendant or be focusable itself.");ne.push(this),this.__focusedElementIndex===-1&&this.__focusableElements[0].focus()}releaseFocus(){this.__trapNode=null,ne.pop()}__onKeyDown(e){if(this.__trapNode&&this===Array.from(ne).pop()&&e.key==="Tab"){e.preventDefault();const t=e.shiftKey;this.__focusNextElement(t)}}__focusNextElement(e=!1){const t=this.__focusableElements,o=e?-1:1,n=this.__focusedElementIndex,s=(t.length+n+o)%t.length,r=t[s];r.focus(),r.localName==="input"&&r.select()}}/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const la=i=>class extends Nt(i){static get properties(){return{focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},restoreFocusNode:{type:HTMLElement}}}constructor(){super(),this.__ariaModalController=new sa(this),this.__focusTrapController=new aa(this),this.__focusRestorationController=new ra}ready(){super.ready(),this.addController(this.__ariaModalController),this.addController(this.__focusTrapController),this.addController(this.__focusRestorationController)}_resetFocus(){if(this.focusTrap&&(this.__ariaModalController.close(),this.__focusTrapController.releaseFocus()),this.restoreFocusOnClose&&this._shouldRestoreFocus()){const t=!je();this.__focusRestorationController.restoreFocus({preventScroll:t})}}_saveFocus(){this.restoreFocusOnClose&&this.__focusRestorationController.saveFocus(this.restoreFocusNode)}_trapFocus(){this.focusTrap&&(this.__ariaModalController.showModal(),this.__focusTrapController.trapFocus(this.$.overlay))}_shouldRestoreFocus(){const t=ye();return t===document.body||this._deepContains(t)}_deepContains(t){if(this.contains(t))return!0;let o=t;const n=t.ownerDocument;for(;o&&o!==n&&o!==this;)o=o.parentNode||o.host;return o===this}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ro=()=>Array.from(document.body.children).filter(i=>i instanceof HTMLElement&&i._hasOverlayStackMixin&&!i.hasAttribute("closing")).sort((i,e)=>i.__zIndex-e.__zIndex||0),xe=()=>Ro().filter(i=>i.$.overlay),da=i=>i===xe().pop(),Fo=i=>class extends i{constructor(){super(),this._hasOverlayStackMixin=!0}get _last(){return da(this)}bringToFront(){let t="";const o=Ro().filter(n=>n!==this).pop();o&&(t=o.__zIndex+1),this.style.zIndex=t,this.__zIndex=t||parseFloat(getComputedStyle(this).zIndex)}_enterModalState(){document.body.style.pointerEvents!=="none"&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),xe().forEach(t=>{t!==this&&(t.$.overlay.style.pointerEvents="none")})}_exitModalState(){this._previousDocumentPointerEvents!==void 0&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const t=xe();let o;for(;(o=t.pop())&&!(o!==this&&(o.$.overlay.style.removeProperty("pointer-events"),!o.modeless)););}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ca=i=>class extends la(Fo(i)){static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0,sync:!0},owner:{type:Object,sync:!0},model:{type:Object,sync:!0},renderer:{type:Object,sync:!0},modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged",sync:!0},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged",sync:!0},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0,sync:!0}}}static get observers(){return["_rendererOrDataChanged(renderer, owner, model, opened)"]}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),No&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}ready(){super.ready(),this.addEventListener("click",()=>{}),this.$.backdrop.addEventListener("click",()=>{}),this.addEventListener("mouseup",()=>{document.activeElement===document.body&&this.$.overlay.getAttribute("tabindex")==="0"&&this.$.overlay.focus()})}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}requestContentUpdate(){this.renderer&&this.renderer.call(this.owner,this,this.owner,this.model)}close(t){const o=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:t}});this.dispatchEvent(o),o.defaultPrevented||(this.opened=!1)}_detectIosNavbar(){if(!this.opened)return;const t=window.innerHeight,n=window.innerWidth>t,s=document.documentElement.clientHeight;n&&s>t?this.style.setProperty("--vaadin-overlay-viewport-bottom",`${s-t}px`):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0)}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0)}_rendererOrDataChanged(t,o,n,s){const r=this._oldOwner!==o||this._oldModel!==n;this._oldModel=n,this._oldOwner=o;const a=this._oldRenderer!==t,l=this._oldRenderer!==void 0;this._oldRenderer=t;const d=this._oldOpened!==s;this._oldOpened=s,a&&l&&(this.innerHTML="",delete this._$litPart$),s&&t&&(a||d||r)&&this.requestContentUpdate()}_modelessChanged(t){t?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_openedChanged(t,o){t?(this._saveFocus(),this._animatedOpening(),ea(this,()=>{this._trapFocus();const n=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(n)}),document.addEventListener("keydown",this._boundKeydownListener),this.modeless||this._addGlobalListeners()):o&&(this._resetFocus(),this._animatedClosing(),document.removeEventListener("keydown",this._boundKeydownListener),this.modeless||this._removeGlobalListeners())}_hiddenChanged(t){t&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const t=getComputedStyle(this),o=t.getPropertyValue("animation-name");return!(t.getPropertyValue("display")==="none")&&o&&o!=="none"}_enqueueAnimation(t,o){const n=`__${t}Handler`,s=r=>{r&&r.target!==this||(o(),this.removeEventListener("animationend",s),delete this[n])};this[n]=s,this.addEventListener("animationend",s)}_flushAnimation(t){const o=`__${t}Handler`;typeof this[o]=="function"&&this[o]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.modeless||this._enterModalState(),this.setAttribute("opening",""),this._shouldAnimate()?this._enqueueAnimation("opening",()=>{this._finishOpening()}):this._finishOpening()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this),this.bringToFront()}_finishOpening(){this.removeAttribute("opening")}_finishClosing(){this._detachOverlay(),this.$.overlay.style.removeProperty("pointer-events"),this.removeAttribute("closing"),this.dispatchEvent(new CustomEvent("vaadin-overlay-closed"))}_animatedClosing(){this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder&&(this._exitModalState(),this.setAttribute("closing",""),this.dispatchEvent(new CustomEvent("vaadin-overlay-closing")),this._shouldAnimate()?this._enqueueAnimation("closing",()=>{this._finishClosing()}):this._finishClosing())}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}_mouseDownListener(t){this._mouseDownInside=t.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(t){this._mouseUpInside=t.composedPath().indexOf(this.$.overlay)>=0}_shouldCloseOnOutsideClick(t){return this._last}_outsideClickListener(t){if(t.composedPath().includes(this.$.overlay)||this._mouseDownInside||this._mouseUpInside){this._mouseDownInside=!1,this._mouseUpInside=!1;return}if(!this._shouldCloseOnOutsideClick(t))return;const o=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:t}});this.dispatchEvent(o),this.opened&&!o.defaultPrevented&&this.close(t)}_keydownListener(t){if(this._last&&!(this.modeless&&!t.composedPath().includes(this.$.overlay))&&t.key==="Escape"){const o=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:t}});this.dispatchEvent(o),this.opened&&!o.defaultPrevented&&this.close(t)}}};/**
 * @license
 * Copyright (c) 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function ha(i,e){let t=null;const o=document.documentElement;function n(){t&&t.disconnect(),t=null}function s(r=!1,a=1){n();const{left:l,top:d,width:c,height:h}=i.getBoundingClientRect();if(r||e(),!c||!h)return;const u=Math.floor(d),p=Math.floor(o.clientWidth-(l+c)),f=Math.floor(o.clientHeight-(d+h)),x=Math.floor(l),w={rootMargin:`${-u}px ${-p}px ${-f}px ${-x}px`,threshold:Math.max(0,Math.min(1,a))||1};let b=!0;function B(dt){let q=dt[0].intersectionRatio;if(q!==a){if(!b)return s();q===0&&(q=1e-7),s(!1,q)}b=!1}t=new IntersectionObserver(B,w),t.observe(i)}return s(!0),n}/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const se={start:"top",end:"bottom"},re={start:"left",end:"right"},xi=new ResizeObserver(i=>{setTimeout(()=>{i.forEach(e=>{e.target.__overlay&&e.target.__overlay._updatePosition()})})}),ua=i=>class extends i{static get properties(){return{positionTarget:{type:Object,value:null,sync:!0},horizontalAlign:{type:String,value:"start",sync:!0},verticalAlign:{type:String,value:"top",sync:!0},noHorizontalOverlap:{type:Boolean,value:!1,sync:!0},noVerticalOverlap:{type:Boolean,value:!1,sync:!0},requiredVerticalSpace:{type:Number,value:0,sync:!0}}}static get observers(){return["__positionSettingsChanged(horizontalAlign, verticalAlign, noHorizontalOverlap, noVerticalOverlap, requiredVerticalSpace)","__overlayOpenedChanged(opened, positionTarget)"]}constructor(){super(),this.__onScroll=this.__onScroll.bind(this),this._updatePosition=this._updatePosition.bind(this)}connectedCallback(){super.connectedCallback(),this.opened&&this.__addUpdatePositionEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.__removeUpdatePositionEventListeners()}__addUpdatePositionEventListeners(){window.visualViewport.addEventListener("resize",this._updatePosition),window.visualViewport.addEventListener("scroll",this.__onScroll,!0),this.__positionTargetAncestorRootNodes=or(this.positionTarget),this.__positionTargetAncestorRootNodes.forEach(t=>{t.addEventListener("scroll",this.__onScroll,!0)}),this.positionTarget&&(this.__observePositionTargetMove=ha(this.positionTarget,()=>{this._updatePosition()}))}__removeUpdatePositionEventListeners(){window.visualViewport.removeEventListener("resize",this._updatePosition),window.visualViewport.removeEventListener("scroll",this.__onScroll,!0),this.__positionTargetAncestorRootNodes&&(this.__positionTargetAncestorRootNodes.forEach(t=>{t.removeEventListener("scroll",this.__onScroll,!0)}),this.__positionTargetAncestorRootNodes=null),this.__observePositionTargetMove&&(this.__observePositionTargetMove(),this.__observePositionTargetMove=null)}__overlayOpenedChanged(t,o){if(this.__removeUpdatePositionEventListeners(),o&&(o.__overlay=null,xi.unobserve(o),t&&(this.__addUpdatePositionEventListeners(),o.__overlay=this,xi.observe(o))),t){const n=getComputedStyle(this);this.__margins||(this.__margins={},["top","bottom","left","right"].forEach(s=>{this.__margins[s]=parseInt(n[s],10)})),this._updatePosition(),requestAnimationFrame(()=>this._updatePosition())}}__positionSettingsChanged(){this._updatePosition()}__onScroll(t){t.target instanceof Node&&this.contains(t.target)||this._updatePosition()}_updatePosition(){if(!this.positionTarget||!this.opened||!this.__margins)return;const t=this.positionTarget.getBoundingClientRect();if(t.width===0&&t.height===0&&this.opened){this.opened=!1;return}const o=this.__shouldAlignStartVertically(t);this.style.justifyContent=o?"flex-start":"flex-end";const n=this.__isRTL,s=this.__shouldAlignStartHorizontally(t,n),r=!n&&s||n&&!s;this.style.alignItems=r?"flex-start":"flex-end";const a=this.getBoundingClientRect(),l=this.__calculatePositionInOneDimension(t,a,this.noVerticalOverlap,se,this,o),d=this.__calculatePositionInOneDimension(t,a,this.noHorizontalOverlap,re,this,s);Object.assign(this.style,l,d),this.toggleAttribute("bottom-aligned",!o),this.toggleAttribute("top-aligned",o),this.toggleAttribute("end-aligned",!r),this.toggleAttribute("start-aligned",r)}__shouldAlignStartHorizontally(t,o){const n=Math.max(this.__oldContentWidth||0,this.$.overlay.offsetWidth);this.__oldContentWidth=this.$.overlay.offsetWidth;const s=Math.min(window.innerWidth,document.documentElement.clientWidth),r=!o&&this.horizontalAlign==="start"||o&&this.horizontalAlign==="end";return this.__shouldAlignStart(t,n,s,this.__margins,r,this.noHorizontalOverlap,re)}__shouldAlignStartVertically(t){const o=this.requiredVerticalSpace||Math.max(this.__oldContentHeight||0,this.$.overlay.offsetHeight);this.__oldContentHeight=this.$.overlay.offsetHeight;const n=Math.min(window.innerHeight,document.documentElement.clientHeight),s=this.verticalAlign==="top";return this.__shouldAlignStart(t,o,n,this.__margins,s,this.noVerticalOverlap,se)}__shouldAlignStart(t,o,n,s,r,a,l){const d=n-t[a?l.end:l.start]-s[l.end],c=t[a?l.start:l.end]-s[l.start],h=r?d:c,p=h>(r?c:d)||h>o;return r===p}__adjustBottomProperty(t,o,n){let s;if(t===o.end){if(o.end===se.end){const r=Math.min(window.innerHeight,document.documentElement.clientHeight);if(n>r&&this.__oldViewportHeight){const a=this.__oldViewportHeight-r;s=n-a}this.__oldViewportHeight=r}if(o.end===re.end){const r=Math.min(window.innerWidth,document.documentElement.clientWidth);if(n>r&&this.__oldViewportWidth){const a=this.__oldViewportWidth-r;s=n-a}this.__oldViewportWidth=r}}return s}__calculatePositionInOneDimension(t,o,n,s,r,a){const l=a?s.start:s.end,d=a?s.end:s.start,c=parseFloat(r.style[l]||getComputedStyle(r)[l]),h=this.__adjustBottomProperty(l,s,c),u=o[a?s.start:s.end]-t[n===a?s.end:s.start],p=h?`${h}px`:`${c+u*(a?-1:1)}px`;return{[l]:p,[d]:""}}};/**
 * @license
 * Copyright (c) 2022 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pa=i=>class extends ua(ca(i)){static get properties(){return{position:{type:String,reflectToAttribute:!0}}}get _tagNamePrefix(){return"vaadin-popover"}requestContentUpdate(){if(super.requestContentUpdate(),this.positionTarget&&this.owner){const t=getComputedStyle(this.owner);["top","bottom","start","end"].forEach(o=>{this.style.setProperty(`--${this._tagNamePrefix}-offset-${o}`,t.getPropertyValue(`--${this._tagNamePrefix}-offset-${o}`))})}}_updatePosition(){if(super._updatePosition(),!(!this.positionTarget||!this.opened)){if(this.removeAttribute("arrow-centered"),this.position==="bottom"||this.position==="top"){const t=this.positionTarget.getBoundingClientRect(),o=this.$.overlay.getBoundingClientRect(),n=t.width/2-o.width/2;if(this.style.left){const s=o.left+n;s>0&&(this.style.left=`${s}px`,this.setAttribute("arrow-centered",""))}if(this.style.right){const s=parseFloat(this.style.right)+n;s>0&&(this.style.right=`${s}px`,this.setAttribute("arrow-centered",""))}}if(this.position==="start"||this.position==="end"){const t=this.positionTarget.getBoundingClientRect(),o=this.$.overlay.getBoundingClientRect(),n=t.height/2-o.height/2;this.style.top=`${o.top+n}px`}}}};/**
 * @license
 * Copyright (c) 2022 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const fa=g`
  [part='overlay'] {
    max-width: 40ch;
  }

  [part='content'] {
    white-space: pre-wrap;
  }

  :host([position^='top'][top-aligned]) [part='overlay'],
  :host([position^='bottom'][top-aligned]) [part='overlay'] {
    margin-top: var(--vaadin-tooltip-offset-top, 0);
  }

  :host([position^='top'][bottom-aligned]) [part='overlay'],
  :host([position^='bottom'][bottom-aligned]) [part='overlay'] {
    margin-bottom: var(--vaadin-tooltip-offset-bottom, 0);
  }

  :host([position^='start'][start-aligned]) [part='overlay'],
  :host([position^='end'][start-aligned]) [part='overlay'] {
    margin-inline-start: var(--vaadin-tooltip-offset-start, 0);
  }

  :host([position^='start'][end-aligned]) [part='overlay'],
  :host([position^='end'][end-aligned]) [part='overlay'] {
    margin-inline-end: var(--vaadin-tooltip-offset-end, 0);
  }

  @media (forced-colors: active) {
    [part='overlay'] {
      outline: 1px dashed;
    }
  }
`;/**
 * @license
 * Copyright (c) 2022 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */C("vaadin-tooltip-overlay",[Xr,fa],{moduleId:"vaadin-tooltip-overlay-styles"});class _a extends pa(Fe(H(P))){static get is(){return"vaadin-tooltip-overlay"}static get template(){return M`
      <div id="backdrop" part="backdrop" hidden></div>
      <div part="overlay" id="overlay">
        <div part="content" id="content"><slot></slot></div>
      </div>
    `}get _tagNamePrefix(){return"vaadin-tooltip"}ready(){super.ready(),this.owner=this.__dataHost,this.owner._overlayElement=this}requestContentUpdate(){super.requestContentUpdate(),this.toggleAttribute("hidden",this.textContent.trim()==="")}}O(_a);/**
 * @license
 * Copyright (c) 2023 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Bo=i=>class extends i{static get properties(){return{overlayClass:{type:String},_overlayElement:{type:Object}}}static get observers(){return["__updateOverlayClassNames(overlayClass, _overlayElement)"]}__updateOverlayClassNames(t,o){if(!o||t===void 0)return;const{classList:n}=o;if(this.__initialClasses||(this.__initialClasses=new Set(n)),Array.isArray(this.__previousClasses)){const r=this.__previousClasses.filter(a=>!this.__initialClasses.has(a));r.length>0&&n.remove(...r)}const s=typeof t=="string"?t.split(" ").filter(Boolean):[];s.length>0&&n.add(...s),this.__previousClasses=s}};/**
 * @license
 * Copyright (c) 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ma=i=>class extends i{static get properties(){return{position:{type:String},_position:{type:String,value:"bottom"},__effectivePosition:{type:String,computed:"__computePosition(position, _position)"}}}__computeHorizontalAlign(t){return["top-end","bottom-end","start-top","start","start-bottom"].includes(t)?"end":"start"}__computeNoHorizontalOverlap(t){return["start-top","start","start-bottom","end-top","end","end-bottom"].includes(t)}__computeNoVerticalOverlap(t){return["top-start","top-end","top","bottom-start","bottom","bottom-end"].includes(t)}__computeVerticalAlign(t){return["top-start","top-end","top","start-bottom","end-bottom"].includes(t)?"bottom":"top"}__computePosition(t,o){return t||o}};/**
 * @license
 * Copyright (c) 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ga=i=>class extends i{static get properties(){return{for:{type:String,observer:"__forChanged"},target:{type:Object},__isConnected:{type:Boolean,sync:!0}}}static get observers(){return["__targetOrConnectedChanged(target, __isConnected)"]}connectedCallback(){super.connectedCallback(),this.__isConnected=!0}disconnectedCallback(){super.disconnectedCallback(),this.__isConnected=!1}__forChanged(t){t&&(this.__setTargetByIdDebouncer=jt.debounce(this.__setTargetByIdDebouncer,bo,()=>this.__setTargetById(t)))}__setTargetById(t){if(!this.isConnected)return;const o=this.getRootNode().getElementById(t);o?this.target=o:console.warn(`No element with id="${t}" set via "for" property found on the page.`)}__targetOrConnectedChanged(t,o){this.__previousTarget&&(this.__previousTarget!==t||!o)&&this._removeTargetListeners(this.__previousTarget),t&&o&&this._addTargetListeners(t),this.__previousTarget=t}_addTargetListeners(t){}_removeTargetListeners(t){}};/**
 * @license
 * Copyright (c) 2022 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const tt=500;let Vo=tt,Uo=tt,$o=tt;const X=new Set;let pt=!1,J=null,ft=null;class va{constructor(e){this.host=e}get openedProp(){return this.host.manual?"opened":"_autoOpened"}get focusDelay(){const e=this.host;return e.focusDelay!=null&&e.focusDelay>=0?e.focusDelay:Vo}get hoverDelay(){const e=this.host;return e.hoverDelay!=null&&e.hoverDelay>=0?e.hoverDelay:Uo}get hideDelay(){const e=this.host;return e.hideDelay!=null&&e.hideDelay>=0?e.hideDelay:$o}get isClosing(){return X.has(this.host)}open(e={immediate:!1}){const{immediate:t,hover:o,focus:n}=e,s=o&&this.hoverDelay>0,r=n&&this.focusDelay>0;!t&&(s||r)&&!this.__closeTimeout?this.__warmupTooltip(r):this.__showTooltip()}close(e){!e&&this.hideDelay>0?this.__scheduleClose():(this.__abortClose(),this._setOpened(!1)),this.__abortWarmUp(),pt&&(this.__abortCooldown(),this.__scheduleCooldown())}_isOpened(){return this.host[this.openedProp]}_setOpened(e){this.host[this.openedProp]=e}__flushClosingTooltips(){X.forEach(e=>{e._stateController.close(!0),X.delete(e)})}__showTooltip(){this.__abortClose(),this.__flushClosingTooltips(),this._setOpened(!0),pt=!0,this.__abortWarmUp(),this.__abortCooldown()}__warmupTooltip(e){this._isOpened()||(pt?this.__showTooltip():J==null&&this.__scheduleWarmUp(e))}__abortClose(){this.__closeTimeout&&(clearTimeout(this.__closeTimeout),this.__closeTimeout=null),this.isClosing&&X.delete(this.host)}__abortCooldown(){ft&&(clearTimeout(ft),ft=null)}__abortWarmUp(){J&&(clearTimeout(J),J=null)}__scheduleClose(){this._isOpened()&&!this.isClosing&&(X.add(this.host),this.__closeTimeout=setTimeout(()=>{X.delete(this.host),this.__closeTimeout=null,this._setOpened(!1)},this.hideDelay))}__scheduleCooldown(){ft=setTimeout(()=>{ft=null,pt=!1},this.hideDelay)}__scheduleWarmUp(e){const t=e?this.focusDelay:this.hoverDelay;J=setTimeout(()=>{J=null,pt=!0,this.__showTooltip()},t)}}const ya=i=>class extends ma(ga(Bo(i))){static get properties(){return{ariaTarget:{type:Object},context:{type:Object,value:()=>({})},focusDelay:{type:Number},generator:{type:Object},hideDelay:{type:Number},hoverDelay:{type:Number},manual:{type:Boolean,value:!1,sync:!0},opened:{type:Boolean,value:!1,sync:!0},shouldShow:{type:Object,value:()=>(t,o)=>!0},text:{type:String,observer:"__textChanged"},_autoOpened:{type:Boolean,observer:"__autoOpenedChanged",sync:!0},_effectiveAriaTarget:{type:Object,computed:"__computeAriaTarget(ariaTarget, target)",observer:"__effectiveAriaTargetChanged"},__isTargetHidden:{type:Boolean,value:!1},_isConnected:{type:Boolean,sync:!0},_srLabel:{type:Object},_overlayContent:{type:String}}}static get observers(){return["__generatorChanged(_overlayElement, generator, context)","__updateSrLabelText(_srLabel, _overlayContent)"]}static setDefaultFocusDelay(t){Vo=t!=null&&t>=0?t:tt}static setDefaultHideDelay(t){$o=t!=null&&t>=0?t:tt}static setDefaultHoverDelay(t){Uo=t!=null&&t>=0?t:tt}constructor(){super(),this._uniqueId=`vaadin-tooltip-${wo()}`,this._renderer=this.__tooltipRenderer.bind(this),this.__onFocusin=this.__onFocusin.bind(this),this.__onFocusout=this.__onFocusout.bind(this),this.__onMouseDown=this.__onMouseDown.bind(this),this.__onMouseEnter=this.__onMouseEnter.bind(this),this.__onMouseLeave=this.__onMouseLeave.bind(this),this.__onKeyDown=this.__onKeyDown.bind(this),this.__onOverlayOpen=this.__onOverlayOpen.bind(this),this.__targetVisibilityObserver=new IntersectionObserver(t=>{t.forEach(o=>this.__onTargetVisibilityChange(o.isIntersecting))},{threshold:0}),this._stateController=new va(this)}connectedCallback(){super.connectedCallback(),this._isConnected=!0,document.body.addEventListener("vaadin-overlay-open",this.__onOverlayOpen)}disconnectedCallback(){super.disconnectedCallback(),this._autoOpened&&this._stateController.close(!0),this._isConnected=!1,document.body.removeEventListener("vaadin-overlay-open",this.__onOverlayOpen)}ready(){super.ready(),this._srLabelController=new Tt(this,"sr-label","div",{initializer:t=>{t.id=this._uniqueId,t.setAttribute("role","tooltip"),this._srLabel=t}}),this.addController(this._srLabelController)}__computeOpened(t,o,n,s){return s&&(t?o:n)}__autoOpenedChanged(t,o){t?document.addEventListener("keydown",this.__onKeyDown,!0):o&&document.removeEventListener("keydown",this.__onKeyDown,!0)}_addTargetListeners(t){t.addEventListener("mouseenter",this.__onMouseEnter),t.addEventListener("mouseleave",this.__onMouseLeave),t.addEventListener("focusin",this.__onFocusin),t.addEventListener("focusout",this.__onFocusout),t.addEventListener("mousedown",this.__onMouseDown),requestAnimationFrame(()=>{this.__targetVisibilityObserver.observe(t)})}_removeTargetListeners(t){t.removeEventListener("mouseenter",this.__onMouseEnter),t.removeEventListener("mouseleave",this.__onMouseLeave),t.removeEventListener("focusin",this.__onFocusin),t.removeEventListener("focusout",this.__onFocusout),t.removeEventListener("mousedown",this.__onMouseDown),this.__targetVisibilityObserver.unobserve(t)}__onFocusin(t){this.manual||je()&&(this.target.contains(t.relatedTarget)||this.__isShouldShow()&&(this.__focusInside=!0,!this.__isTargetHidden&&(!this.__hoverInside||!this._autoOpened)&&this._stateController.open({focus:!0})))}__onFocusout(t){this.manual||this.target.contains(t.relatedTarget)||(this.__focusInside=!1,this.__hoverInside||this._stateController.close(!0))}__onKeyDown(t){t.key==="Escape"&&(t.stopPropagation(),this._stateController.close(!0))}__onMouseDown(){this.manual||this._stateController.close(!0)}__onMouseEnter(){this.manual||this.__isShouldShow()&&(this.__hoverInside||(this.__hoverInside=!0,!this.__isTargetHidden&&(!this.__focusInside||!this._autoOpened)&&this._stateController.open({hover:!0})))}__onMouseLeave(t){t.relatedTarget!==this._overlayElement&&this.__handleMouseLeave()}__onOverlayMouseEnter(){this._stateController.isClosing&&this._stateController.open({immediate:!0})}__onOverlayMouseLeave(t){t.relatedTarget!==this.target&&this.__handleMouseLeave()}__handleMouseLeave(){this.manual||(this.__hoverInside=!1,this.__focusInside||this._stateController.close())}__onOverlayOpen(){this.manual||this._overlayElement.opened&&!this._overlayElement._last&&this._stateController.close(!0)}__onTargetVisibilityChange(t){const o=this.__isTargetHidden;if(this.__isTargetHidden=!t,o&&t&&(this.__focusInside||this.__hoverInside)){this._stateController.open({immediate:!0});return}!t&&this._autoOpened&&this._stateController.close(!0)}__isShouldShow(){return!(typeof this.shouldShow=="function"&&this.shouldShow(this.target,this.context)!==!0)}__textChanged(t,o){this._overlayElement&&(t||o)&&this._overlayElement.requestContentUpdate()}__tooltipRenderer(t){t.textContent=typeof this.generator=="function"?this.generator(this.context):this.text,this._overlayContent=t.textContent}__computeAriaTarget(t,o){const n=r=>r&&r.nodeType===Node.ELEMENT_NODE;return(Array.isArray(t)?t.some(n):t)?t:o}__effectiveAriaTargetChanged(t,o){o&&[o].flat().forEach(n=>{Co(n,"aria-describedby",this._uniqueId)}),t&&[t].flat().forEach(n=>{Ve(n,"aria-describedby",this._uniqueId)})}__generatorChanged(t,o,n){t&&((o!==this.__oldTextGenerator||n!==this.__oldContext)&&t.requestContentUpdate(),this.__oldTextGenerator=o,this.__oldContext=n)}__updateSrLabelText(t,o){t&&(t.textContent=o)}};/**
 * @license
 * Copyright (c) 2022 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ba extends ya(Fi(F(Nt(P)))){static get is(){return"vaadin-tooltip"}static get template(){return M`
      <style>
        :host {
          display: none;
        }
      </style>
      <vaadin-tooltip-overlay
        renderer="[[_renderer]]"
        theme$="[[_theme]]"
        opened="[[__computeOpened(manual, opened, _autoOpened, _isConnected)]]"
        position-target="[[target]]"
        position="[[__effectivePosition]]"
        no-horizontal-overlap$="[[__computeNoHorizontalOverlap(__effectivePosition)]]"
        no-vertical-overlap$="[[__computeNoVerticalOverlap(__effectivePosition)]]"
        horizontal-align="[[__computeHorizontalAlign(__effectivePosition)]]"
        vertical-align="[[__computeVerticalAlign(__effectivePosition)]]"
        on-mouseenter="__onOverlayMouseEnter"
        on-mouseleave="__onOverlayMouseLeave"
        modeless
      ></vaadin-tooltip-overlay>

      <slot name="sr-label"></slot>
    `}}O(ba);const Ca=g`
  :host([theme~='margin']) {
    margin: var(--lumo-space-m);
  }

  :host([theme~='padding']) {
    padding: var(--lumo-space-m);
  }

  :host([theme~='spacing-xs']) {
    gap: var(--lumo-space-xs);
  }

  :host([theme~='spacing-s']) {
    gap: var(--lumo-space-s);
  }

  :host([theme~='spacing']) {
    gap: var(--lumo-space-m);
  }

  :host([theme~='spacing-l']) {
    gap: var(--lumo-space-l);
  }

  :host([theme~='spacing-xl']) {
    gap: var(--lumo-space-xl);
  }

  :host([theme~='wrap']) {
    flex-wrap: wrap;
  }
`;C("vaadin-horizontal-layout",Ca,{moduleId:"lumo-horizontal-layout"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class wa extends F(H(P)){static get template(){return M`
      <style>
        :host {
          display: flex;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Theme variations */
        :host([theme~='margin']) {
          margin: 1em;
        }

        :host([theme~='padding']) {
          padding: 1em;
        }

        :host([theme~='spacing']) {
          gap: 1em;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-horizontal-layout"}}O(wa);const xa=g`
  :host {
    /* Sizing */
    --lumo-button-size: var(--lumo-size-m);
    min-width: var(--vaadin-button-min-width, calc(var(--_button-size) * 2));
    height: var(--_button-size);
    padding: var(--vaadin-button-padding, 0 calc(var(--_button-size) / 3 + var(--lumo-border-radius-m) / 2));
    margin: var(--vaadin-button-margin, var(--lumo-space-xs) 0);
    box-sizing: border-box;
    /* Style */
    font-family: var(--lumo-font-family);
    font-size: var(--vaadin-button-font-size, var(--lumo-font-size-m));
    font-weight: var(--vaadin-button-font-weight, 500);
    color: var(--_lumo-button-text-color);
    background: var(--_lumo-button-background);
    border: var(--vaadin-button-border, none);
    border-radius: var(--vaadin-button-border-radius, var(--lumo-border-radius-m));
    cursor: var(--lumo-clickable-cursor);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    flex-shrink: 0;
    --_button-size: var(--vaadin-button-height, var(--lumo-button-size));
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
    /* Used by notification */
    --_lumo-button-background: var(--vaadin-button-background, var(--lumo-contrast-5pct));
    --_lumo-button-text-color: var(--vaadin-button-text-color, var(--lumo-primary-text-color));
    --_lumo-button-primary-background: var(--vaadin-button-primary-background, var(--lumo-primary-color));
    --_lumo-button-primary-text-color: var(--vaadin-button-primary-text-color, var(--lumo-primary-contrast-color));
  }

  /* Set only for the internal parts so we don't affect the host vertical alignment */
  [part='label'],
  [part='prefix'],
  [part='suffix'] {
    line-height: var(--lumo-line-height-xs);
  }

  [part='label'] {
    padding: calc(var(--lumo-button-size) / 6) 0;
  }

  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-button-size: var(--lumo-size-s);
  }

  :host([theme~='large']) {
    font-size: var(--lumo-font-size-l);
    --lumo-button-size: var(--lumo-size-l);
  }

  /* For interaction states */
  :host::before,
  :host::after {
    content: '';
    /* We rely on the host always being relative */
    position: absolute;
    z-index: 1;
    inset: 0;
    background-color: currentColor;
    border-radius: inherit;
    opacity: 0;
    pointer-events: none;
  }

  /* Hover */

  @media (any-hover: hover) {
    :host(:hover)::before {
      opacity: 0.02;
    }
  }

  /* Active */

  :host::after {
    transition:
      opacity 1.4s,
      transform 0.1s;
    filter: blur(8px);
  }

  :host([active])::before {
    opacity: 0.05;
    transition-duration: 0s;
  }

  :host([active])::after {
    opacity: 0.1;
    transition-duration: 0s, 0s;
    transform: scale(0);
  }

  /* Keyboard focus */

  :host([focus-ring]) {
    box-shadow:
      0 0 0 calc(1px * var(--_focus-ring-gap-on, 0)) var(--_focus-ring-gap-color, var(--lumo-base-color)),
      0 0 0 calc(var(--_focus-ring-width) + 1px * var(--_focus-ring-gap-on, 0)) var(--_focus-ring-color);
  }

  :host([theme~='primary'][focus-ring]) {
    --_focus-ring-gap-on: 1;
  }

  /* Types (primary, tertiary, tertiary-inline */

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    --_background: transparent !important;
    background: var(--vaadin-button-tertiary-background, var(--_background));
    min-width: 0;
  }

  :host([theme~='tertiary']) {
    border: var(--vaadin-button-tertiary-border, none);
    color: var(--vaadin-button-tertiary-text-color, var(--lumo-primary-text-color));
    font-weight: var(--vaadin-button-tertiary-font-weight, 500);
    padding: var(--vaadin-button-tertiary-padding, 0 calc(var(--_button-size) / 6));
  }

  :host([theme~='tertiary-inline'])::before {
    display: none;
  }

  :host([theme~='tertiary-inline']) {
    margin: 0;
    height: auto;
    padding: 0;
    line-height: inherit;
    font-size: inherit;
  }

  :host([theme~='tertiary-inline']) [part='label'] {
    padding: 0;
    overflow: visible;
    line-height: inherit;
  }

  :host([theme~='primary']) {
    background: var(--_lumo-button-primary-background);
    border: var(--vaadin-button-primary-border, none);
    color: var(--_lumo-button-primary-text-color);
    font-weight: var(--vaadin-button-primary-font-weight, 600);
    min-width: calc(var(--lumo-button-size) * 2.5);
  }

  :host([theme~='primary'])::before {
    background-color: black;
  }

  @media (any-hover: hover) {
    :host([theme~='primary']:hover)::before {
      opacity: 0.05;
    }
  }

  :host([theme~='primary'][active])::before {
    opacity: 0.1;
  }

  :host([theme~='primary'][active])::after {
    opacity: 0.2;
  }

  /* Colors (success, warning, error, contrast) */

  :host([theme~='success']) {
    color: var(--lumo-success-text-color);
  }

  :host([theme~='success'][theme~='primary']) {
    background-color: var(--lumo-success-color);
    color: var(--lumo-success-contrast-color);
  }

  :host([theme~='warning']) {
    color: var(--lumo-warning-text-color);
  }

  :host([theme~='warning'][theme~='primary']) {
    background-color: var(--lumo-warning-color);
    color: var(--lumo-warning-contrast-color);
  }

  :host([theme~='error']) {
    color: var(--lumo-error-text-color);
  }

  :host([theme~='error'][theme~='primary']) {
    background-color: var(--lumo-error-color);
    color: var(--lumo-error-contrast-color);
  }

  :host([theme~='contrast']) {
    color: var(--lumo-contrast);
  }

  :host([theme~='contrast'][theme~='primary']) {
    background-color: var(--lumo-contrast);
    color: var(--lumo-base-color);
  }

  /* Disabled state. Keep selectors after other color variants. */

  :host([disabled]) {
    pointer-events: none;
    color: var(--lumo-disabled-text-color);
  }

  :host([theme~='primary'][disabled]) {
    background-color: var(--lumo-contrast-30pct);
    color: var(--lumo-base-color);
  }

  :host([theme~='primary'][disabled]) [part] {
    opacity: 0.7;
  }

  /* Icons */

  [part] ::slotted(vaadin-icon) {
    display: inline-block;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
  [part] ::slotted(vaadin-icon[icon^='vaadin:']) {
    padding: 0.25em;
    box-sizing: border-box !important;
  }

  [part='prefix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  [part='suffix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  /* Icon-only */

  :host([theme~='icon']:not([theme~='tertiary-inline'])) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([theme~='icon']) [part='prefix'],
  :host([theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='prefix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  :host([dir='rtl']) [part='suffix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  :host([dir='rtl'][theme~='icon']) [part='prefix'],
  :host([dir='rtl'][theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }
`;C("vaadin-button",xa,{moduleId:"lumo-button"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Aa=g`
  :host {
    display: inline-block;
    position: relative;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  :host([hidden]) {
    display: none !important;
  }

  /* Aligns the button with form fields when placed on the same line.
  Note, to make it work, the form fields should have the same "::before" pseudo-element. */
  .vaadin-button-container::before {
    content: '\\2003';
    display: inline-block;
    width: 0;
    max-height: 100%;
  }

  .vaadin-button-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    min-height: inherit;
    text-shadow: inherit;
  }

  [part='prefix'],
  [part='suffix'] {
    flex: none;
  }

  [part='label'] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (forced-colors: active) {
    :host {
      outline: 1px solid;
      outline-offset: -1px;
    }

    :host([focused]) {
      outline-width: 2px;
    }

    :host([disabled]) {
      outline-color: GrayText;
    }
  }
`,Ea=i=>i`
  <div class="vaadin-button-container">
    <span part="prefix" aria-hidden="true">
      <slot name="prefix"></slot>
    </span>
    <span part="label">
      <slot></slot>
    </span>
    <span part="suffix" aria-hidden="true">
      <slot name="suffix"></slot>
    </span>
  </div>
  <slot name="tooltip"></slot>
`;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Pa=i=>i,jo=typeof document.head.style.touchAction=="string",Ae="__polymerGestures",ae="__polymerGesturesHandled",Ee="__polymerGesturesTouchAction",Ai=25,Ei=5,Ta=2,Na=["mousedown","mousemove","mouseup","click"],Sa=[0,1,4,2],Oa=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function We(i){return Na.indexOf(i)>-1}let Ma=!1;(function(){try{const i=Object.defineProperty({},"passive",{get(){Ma=!0}});window.addEventListener("test",null,i),window.removeEventListener("test",null,i)}catch{}})();function ka(i){We(i)}const Ia=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/u),za={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function W(i){const e=i.type;if(!We(e))return!1;if(e==="mousemove"){let o=i.buttons===void 0?1:i.buttons;return i instanceof window.MouseEvent&&!Oa&&(o=Sa[i.which]||0),!!(o&1)}return(i.button===void 0?0:i.button)===0}function La(i){if(i.type==="click"){if(i.detail===0)return!0;const e=U(i);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;const t=e.getBoundingClientRect(),o=i.pageX,n=i.pageY;return!(o>=t.left&&o<=t.right&&n>=t.top&&n<=t.bottom)}return!1}const D={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Da(i){let e="auto";const t=Yo(i);for(let o=0,n;o<t.length;o++)if(n=t[o],n[Ee]){e=n[Ee];break}return e}function qo(i,e,t){i.movefn=e,i.upfn=t,document.addEventListener("mousemove",e),document.addEventListener("mouseup",t)}function et(i){document.removeEventListener("mousemove",i.movefn),document.removeEventListener("mouseup",i.upfn),i.movefn=null,i.upfn=null}const Yo=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:i=>i.composedPath&&i.composedPath()||[],Ke={},G=[];function Ha(i,e){let t=document.elementFromPoint(i,e),o=t;for(;o&&o.shadowRoot&&!window.ShadyDOM;){const n=o;if(o=o.shadowRoot.elementFromPoint(i,e),n===o)break;o&&(t=o)}return t}function U(i){const e=Yo(i);return e.length>0?e[0]:i.target}function Ra(i){const e=i.type,o=i.currentTarget[Ae];if(!o)return;const n=o[e];if(!n)return;if(!i[ae]&&(i[ae]={},e.startsWith("touch"))){const r=i.changedTouches[0];if(e==="touchstart"&&i.touches.length===1&&(D.touch.id=r.identifier),D.touch.id!==r.identifier)return;jo||(e==="touchstart"||e==="touchmove")&&Fa(i)}const s=i[ae];if(!s.skip){for(let r=0,a;r<G.length;r++)a=G[r],n[a.name]&&!s[a.name]&&a.flow&&a.flow.start.indexOf(i.type)>-1&&a.reset&&a.reset();for(let r=0,a;r<G.length;r++)a=G[r],n[a.name]&&!s[a.name]&&(s[a.name]=!0,a[e](i))}}function Fa(i){const e=i.changedTouches[0],t=i.type;if(t==="touchstart")D.touch.x=e.clientX,D.touch.y=e.clientY,D.touch.scrollDecided=!1;else if(t==="touchmove"){if(D.touch.scrollDecided)return;D.touch.scrollDecided=!0;const o=Da(i);let n=!1;const s=Math.abs(D.touch.x-e.clientX),r=Math.abs(D.touch.y-e.clientY);i.cancelable&&(o==="none"?n=!0:o==="pan-x"?n=r>s:o==="pan-y"&&(n=s>r)),n?i.preventDefault():Vt("track")}}function Pi(i,e,t){return Ke[e]?(Ba(i,e,t),!0):!1}function Ba(i,e,t){const o=Ke[e],n=o.deps,s=o.name;let r=i[Ae];r||(i[Ae]=r={});for(let a=0,l,d;a<n.length;a++)l=n[a],!(Ia&&We(l)&&l!=="click")&&(d=r[l],d||(r[l]=d={_count:0}),d._count===0&&i.addEventListener(l,Ra,ka(l)),d[s]=(d[s]||0)+1,d._count=(d._count||0)+1);i.addEventListener(e,t),o.touchAction&&Ua(i,o.touchAction)}function Xe(i){G.push(i),i.emits.forEach(e=>{Ke[e]=i})}function Va(i){for(let e=0,t;e<G.length;e++){t=G[e];for(let o=0,n;o<t.emits.length;o++)if(n=t.emits[o],n===i)return t}return null}function Ua(i,e){jo&&i instanceof HTMLElement&&bo.run(()=>{i.style.touchAction=e}),i[Ee]=e}function Je(i,e,t){const o=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(o.detail=t,Pa(i).dispatchEvent(o),o.defaultPrevented){const n=t.preventer||t.sourceEvent;n&&n.preventDefault&&n.preventDefault()}}function Vt(i){const e=Va(i);e.info&&(e.info.prevent=!0)}Xe({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){et(this.info)},mousedown(i){if(!W(i))return;const e=U(i),t=this,o=s=>{W(s)||(_t("up",e,s),et(t.info))},n=s=>{W(s)&&_t("up",e,s),et(t.info)};qo(this.info,o,n),_t("down",e,i)},touchstart(i){_t("down",U(i),i.changedTouches[0],i)},touchend(i){_t("up",U(i),i.changedTouches[0],i)}});function _t(i,e,t,o){e&&Je(e,i,{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:o,prevent(n){return Vt(n)}})}Xe({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(i){this.moves.length>Ta&&this.moves.shift(),this.moves.push(i)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,et(this.info)},mousedown(i){if(!W(i))return;const e=U(i),t=this,o=s=>{const r=s.clientX,a=s.clientY;Ti(t.info,r,a)&&(t.info.state=t.info.started?s.type==="mouseup"?"end":"track":"start",t.info.state==="start"&&Vt("tap"),t.info.addMove({x:r,y:a}),W(s)||(t.info.state="end",et(t.info)),e&&le(t.info,e,s),t.info.started=!0)},n=s=>{t.info.started&&o(s),et(t.info)};qo(this.info,o,n),this.info.x=i.clientX,this.info.y=i.clientY},touchstart(i){const e=i.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove(i){const e=U(i),t=i.changedTouches[0],o=t.clientX,n=t.clientY;Ti(this.info,o,n)&&(this.info.state==="start"&&Vt("tap"),this.info.addMove({x:o,y:n}),le(this.info,e,t),this.info.state="track",this.info.started=!0)},touchend(i){const e=U(i),t=i.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:t.clientX,y:t.clientY}),le(this.info,e,t))}});function Ti(i,e,t){if(i.prevent)return!1;if(i.started)return!0;const o=Math.abs(i.x-e),n=Math.abs(i.y-t);return o>=Ei||n>=Ei}function le(i,e,t){if(!e)return;const o=i.moves[i.moves.length-2],n=i.moves[i.moves.length-1],s=n.x-i.x,r=n.y-i.y;let a,l=0;o&&(a=n.x-o.x,l=n.y-o.y),Je(e,"track",{state:i.state,x:t.clientX,y:t.clientY,dx:s,dy:r,ddx:a,ddy:l,sourceEvent:t,hover(){return Ha(t.clientX,t.clientY)}})}Xe({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(i){W(i)&&(this.info.x=i.clientX,this.info.y=i.clientY)},click(i){W(i)&&Ni(this.info,i)},touchstart(i){const e=i.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend(i){Ni(this.info,i.changedTouches[0],i)}});function Ni(i,e,t){const o=Math.abs(e.clientX-i.x),n=Math.abs(e.clientY-i.y),s=U(t||e);!s||za[s.localName]&&s.hasAttribute("disabled")||(isNaN(o)||isNaN(n)||o<=Ai&&n<=Ai||La(e))&&(i.prevent||Je(s,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:t}))}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $a=i=>class extends Po(qe(i)){get _activeKeys(){return[" "]}ready(){super.ready(),Pi(this,"down",t=>{this._shouldSetActive(t)&&this._setActive(!0)}),Pi(this,"up",()=>{this._setActive(!1)})}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(t){return!this.disabled}_onKeyDown(t){super._onKeyDown(t),this._shouldSetActive(t)&&this._activeKeys.includes(t.key)&&(this._setActive(!0),document.addEventListener("keyup",o=>{this._activeKeys.includes(o.key)&&this._setActive(!1)},{once:!0}))}_setActive(t){this.toggleAttribute("active",t)}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ja=i=>class extends $a(To(Eo(i))){static get properties(){return{tabindex:{type:Number,value:0,reflectToAttribute:!0}}}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button")}_onKeyDown(t){super._onKeyDown(t),!(t.altKey||t.shiftKey||t.ctrlKey||t.metaKey)&&this._activeKeys.includes(t.key)&&(t.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */C("vaadin-button",Aa,{moduleId:"vaadin-button-styles"});class qa extends ja(F(H(Nt(P)))){static get is(){return"vaadin-button"}static get template(){return Ea(M)}ready(){super.ready(),this._tooltipController=new Ue(this),this.addController(this._tooltipController)}}O(qa);function Ya({currentTarget:i}){i.disableOnClick&&requestAnimationFrame(()=>i.disabled=!0)}window.Vaadin.Flow.disableOnClick={initDisableOnClick:i=>{i.__hasDisableOnClickListener||(i.addEventListener("click",Ya),i.__hasDisableOnClickListener=!0)}};C("vaadin-notification-card",g`
    :host {
      position: relative;
      margin: var(--lumo-space-s);
    }

    [part='overlay'] {
      background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      border-radius: var(--lumo-border-radius-l);
      box-shadow:
        0 0 0 1px var(--lumo-contrast-10pct),
        var(--lumo-box-shadow-l);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      font-weight: 400;
      line-height: var(--lumo-line-height-s);
      letter-spacing: 0;
      text-transform: none;
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    [part='content'] {
      padding: var(--lumo-space-wide-l);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    [part='content'] ::slotted(vaadin-button) {
      flex: none;
      margin: 0 calc(var(--lumo-space-s) * -1) 0 var(--lumo-space-m);
    }

    :host([slot^='middle']) {
      max-width: 80vw;
      margin: var(--lumo-space-s) auto;
    }

    :host([slot$='stretch']) {
      margin: 0;
    }

    :host([slot$='stretch']) [part='overlay'] {
      border-radius: 0;
    }

    @media (min-width: 421px) {
      :host(:not([slot$='stretch'])) {
        display: flex;
      }

      :host([slot$='end']) {
        justify-content: flex-end;
      }

      :host([slot^='middle']),
      :host([slot$='center']) {
        display: flex;
        justify-content: center;
      }
    }

    @keyframes lumo-notification-exit-fade-out {
      100% {
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-fade-in {
      0% {
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-slide-down {
      0% {
        transform: translateY(-200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-exit-slide-up {
      100% {
        transform: translateY(-200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-slide-up {
      0% {
        transform: translateY(200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-exit-slide-down {
      100% {
        transform: translateY(200%);
        opacity: 0;
      }
    }

    :host([slot='middle'][opening]) {
      animation: lumo-notification-enter-fade-in 300ms;
    }

    :host([slot='middle'][closing]) {
      animation: lumo-notification-exit-fade-out 300ms;
    }

    :host([slot^='top'][opening]) {
      animation: lumo-notification-enter-slide-down 300ms;
    }

    :host([slot^='top'][closing]) {
      animation: lumo-notification-exit-slide-up 300ms;
    }

    :host([slot^='bottom'][opening]) {
      animation: lumo-notification-enter-slide-up 300ms;
    }

    :host([slot^='bottom'][closing]) {
      animation: lumo-notification-exit-slide-down 300ms;
    }

    :host([theme='success']) {
      --_focus-ring-gap-color: var(--lumo-success-color);
      --vaadin-focus-ring-color: var(--lumo-success-contrast-color);
    }

    :host([theme='warning']) {
      --_focus-ring-gap-color: var(--lumo-warning-color);
      --vaadin-focus-ring-color: var(--lumo-warning-contrast-color);
    }

    :host([theme='error']) {
      --_focus-ring-gap-color: var(--lumo-error-color);
      --vaadin-focus-ring-color: var(--lumo-error-contrast-color);
    }

    :host([theme='primary']) {
      --_focus-ring-gap-color: var(--lumo-primary-color);
      --vaadin-focus-ring-color: var(--lumo-primary-contrast-color);
    }

    :host([theme~='primary']) [part='overlay'] {
      background: var(--lumo-primary-color);
      color: var(--lumo-primary-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='primary']) {
      --vaadin-button-background: var(--lumo-shade-20pct);
      --vaadin-button-text-color: var(--lumo-primary-contrast-color);
      --vaadin-button-primary-background: var(--lumo-primary-contrast-color);
      --vaadin-button-primary-text-color: var(--lumo-primary-text-color);
    }

    :host([theme~='contrast']) [part='overlay'] {
      background: var(--lumo-contrast);
      color: var(--lumo-base-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='contrast']) {
      --vaadin-button-background: var(--lumo-contrast-20pct);
      --vaadin-button-text-color: var(--lumo-base-color);
      --vaadin-button-primary-background: var(--lumo-base-color);
      --vaadin-button-primary-text-color: var(--lumo-contrast);
    }

    :host([theme~='success']) [part='overlay'] {
      background: var(--lumo-success-color);
      color: var(--lumo-success-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='success']) {
      --vaadin-button-background: var(--lumo-shade-20pct);
      --vaadin-button-text-color: var(--lumo-success-contrast-color);
      --vaadin-button-primary-background: var(--lumo-success-contrast-color);
      --vaadin-button-primary-text-color: var(--lumo-success-text-color);
    }

    :host([theme~='error']) [part='overlay'] {
      background: var(--lumo-error-color);
      color: var(--lumo-error-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='error']) {
      --vaadin-button-background: var(--lumo-shade-20pct);
      --vaadin-button-text-color: var(--lumo-error-contrast-color);
      --vaadin-button-primary-background: var(--lumo-error-contrast-color);
      --vaadin-button-primary-text-color: var(--lumo-error-text-color);
    }

    :host([theme~='warning']) [part='overlay'] {
      background: var(--lumo-warning-color);
      color: var(--lumo-warning-contrast-color);
      box-shadow:
        inset 0 0 0 1px var(--lumo-contrast-20pct),
        var(--lumo-box-shadow-l);
    }

    :host([theme~='warning']) {
      --vaadin-button-background: var(--lumo-shade-20pct);
      --vaadin-button-text-color: var(--lumo-warning-contrast-color);
      --vaadin-button-primary-background: var(--lumo-shade-50pct);
      --vaadin-button-primary-text-color: var(--lumo-primary-contrast-color);
    }
  `,{moduleId:"lumo-notification-card"});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ga=(i,e)=>(i==null?void 0:i._$litType$)!==void 0,Wa=i=>i.strings===void 0;/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Ka(i){if(window.Vaadin&&window.Vaadin.templateRendererCallback){window.Vaadin.templateRendererCallback(i);return}i.querySelector("template")&&console.warn(`WARNING: <template> inside <${i.localName}> is no longer supported. Import @vaadin/polymer-legacy-adapter/template-renderer.js to enable compatibility.`)}/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Xa=i=>class extends Fo(i){static get properties(){return{opened:{type:Boolean,value:!1,sync:!0,observer:"_openedChanged"}}}constructor(){super(),this._boundVaadinOverlayClose=this._onVaadinOverlayClose.bind(this),No&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}_openedChanged(e){e?(document.body.appendChild(this),document.addEventListener("vaadin-overlay-close",this._boundVaadinOverlayClose),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))):(document.body.removeChild(this),document.removeEventListener("vaadin-overlay-close",this._boundVaadinOverlayClose),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener))}_detectIosNavbar(){const e=window.innerHeight,o=window.innerWidth>e,n=document.documentElement.clientHeight;o&&n>e?this.style.bottom=`${n-e}px`:this.style.bottom="0"}_onVaadinOverlayClose(e){const t=e.detail.sourceEvent;t&&t.composedPath().indexOf(this)>=0&&e.preventDefault()}},Ja=i=>class extends Fi(Bo(i)){static get properties(){return{assertive:{type:Boolean,value:!1,sync:!0},duration:{type:Number,value:5e3,sync:!0},opened:{type:Boolean,value:!1,notify:!0,sync:!0,observer:"_openedChanged"},position:{type:String,value:"bottom-start",observer:"_positionChanged",sync:!0},renderer:{type:Function,sync:!0}}}static get observers(){return["_durationChanged(duration, opened)","_rendererChanged(renderer, opened, _overlayElement)"]}static show(e,t){const o=customElements.get("vaadin-notification");return Ga(e)?o._createAndShowNotification(n=>{Bi(e,n)},t):o._createAndShowNotification(n=>{n.innerText=e},t)}static _createAndShowNotification(e,t){const o=document.createElement("vaadin-notification");return t&&Number.isFinite(t.duration)&&(o.duration=t.duration),t&&t.position&&(o.position=t.position),t&&t.assertive&&(o.assertive=t.assertive),t&&t.theme&&o.setAttribute("theme",t.theme),o.renderer=e,document.body.appendChild(o),o.opened=!0,o.addEventListener("opened-changed",n=>{n.detail.value||o.remove()}),o}get _container(){const e=customElements.get("vaadin-notification");return e._container||(e._container=document.createElement("vaadin-notification-container"),document.body.appendChild(e._container)),e._container}get _card(){return this._overlayElement}ready(){super.ready(),this._overlayElement=this.shadowRoot.querySelector("vaadin-notification-card"),Ka(this)}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask(()=>{this.isConnected||(this.opened=!1)})}requestContentUpdate(){!this.renderer||!this._card||this.renderer(this._card,this)}__computeAriaLive(e){return e?"assertive":"polite"}_rendererChanged(e,t,o){if(!o)return;const n=this._oldRenderer!==e;this._oldRenderer=e,n&&(o.innerHTML="",delete o._$litPart$),t&&(this._didAnimateNotificationAppend||this._animatedAppendNotificationCard(),this.requestContentUpdate())}open(){this.opened=!0}close(){this.opened=!1}_openedChanged(e){e?(this._container.opened=!0,this._animatedAppendNotificationCard()):this._card&&this._closeNotificationCard()}__cleanUpOpeningClosingState(){this._card.removeAttribute("opening"),this._card.removeAttribute("closing"),this._card.removeEventListener("animationend",this.__animationEndListener)}_animatedAppendNotificationCard(){this._card?(this.__cleanUpOpeningClosingState(),this._card.setAttribute("opening",""),this._appendNotificationCard(),this.__animationEndListener=()=>this.__cleanUpOpeningClosingState(),this._card.addEventListener("animationend",this.__animationEndListener),this._didAnimateNotificationAppend=!0):this._didAnimateNotificationAppend=!1}_appendNotificationCard(){if(this._card){if(this._container.performUpdate&&this._container.performUpdate(),!this._container.shadowRoot.querySelector(`slot[name="${this.position}"]`)){console.warn(`Invalid alignment parameter provided: position=${this.position}`);return}this._container.bringToFront(),this._card.slot=this.position,this._container.firstElementChild&&/top/u.test(this.position)?this._container.insertBefore(this._card,this._container.firstElementChild):this._container.appendChild(this._card)}}_removeNotificationCard(){this._card&&(this._card.parentNode&&this._card.parentNode.removeChild(this._card),this._card.removeAttribute("closing"),this._container.opened=!!this._container.firstElementChild,this.dispatchEvent(new CustomEvent("closed")))}_closeNotificationCard(){this._durationTimeoutId&&clearTimeout(this._durationTimeoutId),this._animatedRemoveNotificationCard()}_animatedRemoveNotificationCard(){this.__cleanUpOpeningClosingState(),this._card.setAttribute("closing","");const e=getComputedStyle(this._card).getPropertyValue("animation-name");e&&e!=="none"?(this.__animationEndListener=()=>{this._removeNotificationCard(),this.__cleanUpOpeningClosingState()},this._card.addEventListener("animationend",this.__animationEndListener)):this._removeNotificationCard()}_positionChanged(){this.opened&&this._animatedAppendNotificationCard()}_durationChanged(e,t){t&&(clearTimeout(this._durationTimeoutId),e>0&&(this._durationTimeoutId=setTimeout(()=>this.close(),e)))}};/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Za=g`
  :host {
    position: fixed;
    z-index: 1000;
    inset: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    pointer-events: none;
  }

  [region-group] {
    flex: 1 1 0%;
    display: flex;
  }

  [region-group='top'] {
    align-items: flex-start;
  }

  [region-group='bottom'] {
    align-items: flex-end;
  }

  [region-group] > [region] {
    flex: 1 1 0%;
  }

  @media (max-width: 420px) {
    [region-group] {
      flex-direction: column;
      align-items: stretch;
    }

    [region-group='top'] {
      justify-content: flex-start;
    }

    [region-group='bottom'] {
      justify-content: flex-end;
    }

    [region-group] > [region] {
      flex: initial;
    }
  }
`,Qa=g`
  :host {
    display: block;
  }

  [part='overlay'] {
    pointer-events: auto;
  }

  @media (forced-colors: active) {
    [part='overlay'] {
      outline: 3px solid;
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */C("vaadin-notification-container",Za,{moduleId:"vaadin-notification-container-styles"});C("vaadin-notification-card",Qa,{moduleId:"vaadin-notification-card-styles"});class tl extends Xa(H(F(P))){static get template(){return M`
      <div region="top-stretch"><slot name="top-stretch"></slot></div>
      <div region-group="top">
        <div region="top-start"><slot name="top-start"></slot></div>
        <div region="top-center"><slot name="top-center"></slot></div>
        <div region="top-end"><slot name="top-end"></slot></div>
      </div>
      <div region="middle"><slot name="middle"></slot></div>
      <div region-group="bottom">
        <div region="bottom-start"><slot name="bottom-start"></slot></div>
        <div region="bottom-center"><slot name="bottom-center"></slot></div>
        <div region="bottom-end"><slot name="bottom-end"></slot></div>
      </div>
      <div region="bottom-stretch"><slot name="bottom-stretch"></slot></div>
    `}static get is(){return"vaadin-notification-container"}}class el extends H(P){static get template(){return M`
      <div part="overlay">
        <div part="content">
          <slot></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-notification-card"}ready(){super.ready(),this.setAttribute("role","alert")}}class il extends Ja(F(P)){static get template(){return M`
      <style>
        :host {
          display: none !important;
        }
      </style>
      <vaadin-notification-card
        theme$="[[_theme]]"
        aria-live$="[[__computeAriaLive(assertive)]]"
      ></vaadin-notification-card>
    `}static get is(){return"vaadin-notification"}}O(tl);O(el);O(il);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class xt{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,At.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),At.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(e,t,o){return e instanceof xt?e._cancelAsync():e=new xt,e.setConfig(t,o),e}}let At=new Set;const ol=function(i){At.add(i)},nl=function(){const i=!!At.size;return At.forEach(e=>{try{e.flush()}catch(t){setTimeout(()=>{throw t})}}),i};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const sl=function(){let i,e;do i=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),e=nl();while(i||e)};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Si=!1;function rl(){if(qi&&!ji){if(!Si){Si=!0;const i=document.createElement("style");i.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(i)}return!0}return!1}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Ze(i,e,t,o,n){let s;n&&(s=typeof t=="object"&&t!==null,s&&(o=i.__dataTemp[e]));let r=o!==t&&(o===o||t===t);return s&&r&&(i.__dataTemp[e]=t),r}const Qe=y(i=>{class e extends i{_shouldPropertyChange(o,n,s){return Ze(this,o,n,s,!0)}}return e});y(i=>{class e extends i{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(o,n,s){return Ze(this,o,n,s,this.mutableData)}}return e});Qe._mutablePropertyChange=Ze;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Pe=null;function Te(){return Pe}Te.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:Te,writable:!0}});const Go=Re(Te),al=Qe(Go);function ll(i,e){Pe=i,Object.setPrototypeOf(i,e.prototype),new e,Pe=null}const dl=Re(class{});function Wo(i,e){for(let t=0;t<e.length;t++){let o=e[t];if(!!i!=!!o.__hideTemplateChildren__)if(o.nodeType===Node.TEXT_NODE)i?(o.__polymerTextContent__=o.textContent,o.textContent=""):o.textContent=o.__polymerTextContent__;else if(o.localName==="slot")if(i)o.__polymerReplaced__=document.createComment("hidden-slot"),v(v(o).parentNode).replaceChild(o.__polymerReplaced__,o);else{const n=o.__polymerReplaced__;n&&v(v(n).parentNode).replaceChild(o,n)}else o.style&&(i?(o.__polymerDisplay__=o.style.display,o.style.display="none"):o.style.display=o.__polymerDisplay__);o.__hideTemplateChildren__=i,o._showHideChildren&&o._showHideChildren(i)}}class j extends dl{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let t=[];this.children=t;for(let n=this.root.firstChild;n;n=n.nextSibling)t.push(n),n.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let o=this.__templatizeOptions;(e&&o.instanceProps||!o.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let o in this.__hostProps)this._setPendingProperty(o,this.__dataHost["_host_"+o]);for(let o in e)this._setPendingProperty(o,e[o])}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,t,o){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,n=>{n.model=this,o(n)});else{let n=this.__dataHost.__dataHost;n&&n._addEventListenerToNode(e,t,o)}}_showHideChildren(e){Wo(e,this.children)}_setUnmanagedPropertyToNode(e,t,o){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&t=="textContent"?e.__polymerTextContent__=o:super._setUnmanagedPropertyToNode(e,t,o)}get parentModel(){let e=this.__parentModel;if(!e){let t;e=this;do e=e.__dataHost.__dataHost;while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}j.prototype.__dataHost;j.prototype.__templatizeOptions;j.prototype._methodHost;j.prototype.__templatizeOwner;j.prototype.__hostProps;const cl=Qe(j);function Oi(i){let e=i.__dataHost;return e&&e._methodHost||e}function hl(i,e,t){let o=t.mutableData?cl:j;Ne.mixin&&(o=Ne.mixin(o));let n=class extends o{};return n.prototype.__templatizeOptions=t,n.prototype._bindTemplate(i),fl(n,i,e,t),n}function ul(i,e,t,o){let n=t.forwardHostProp;if(n&&e.hasHostProps){const s=i.localName=="template";let r=e.templatizeTemplateClass;if(!r){if(s){let l=t.mutableData?al:Go;class d extends l{}r=e.templatizeTemplateClass=d}else{const l=i.constructor;class d extends l{}r=e.templatizeTemplateClass=d}let a=e.hostProps;for(let l in a)r.prototype._addPropertyEffect("_host_"+l,r.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:pl(l,n)}),r.prototype._createNotifyingProperty("_host_"+l);Yi&&o&&gl(e,t,o)}if(i.__dataProto&&Object.assign(i.__data,i.__dataProto),s)ll(i,r),i.__dataTemp={},i.__dataPending=null,i.__dataOld=null,i._enableProperties();else{Object.setPrototypeOf(i,r.prototype);const a=e.hostProps;for(let l in a)if(l="_host_"+l,l in i){const d=i[l];delete i[l],i.__data[l]=d}}}}function pl(i,e){return function(o,n,s){e.call(o.__templatizeOwner,n.substring(6),s[n])}}function fl(i,e,t,o){let n=t.hostProps||{};for(let s in o.instanceProps){delete n[s];let r=o.notifyInstanceProp;r&&i.prototype._addPropertyEffect(s,i.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:_l(s,r)})}if(o.forwardHostProp&&e.__dataHost)for(let s in n)t.hasHostProps||(t.hasHostProps=!0),i.prototype._addPropertyEffect(s,i.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:ml()})}function _l(i,e){return function(o,n,s){e.call(o.__templatizeOwner,o,n,s[n])}}function ml(){return function(e,t,o){e.__dataHost._setPendingPropertyOrPath("_host_"+t,o[t],!0,!0)}}function Ne(i,e,t){if(bt&&!Oi(i))throw new Error("strictTemplatePolicy: template owner not trusted");if(t=t||{},i.__templatizeOwner)throw new Error("A <template> can only be templatized once");i.__templatizeOwner=e;let n=(e?e.constructor:j)._parseTemplate(i),s=n.templatizeInstanceClass;s||(s=hl(i,n,t),n.templatizeInstanceClass=s);const r=Oi(i);ul(i,n,t,r);let a=class extends s{};return a.prototype._methodHost=r,a.prototype.__dataHost=i,a.prototype.__templatizeOwner=e,a.prototype.__hostProps=n.hostProps,a=a,a}function gl(i,e,t){const o=t.constructor._properties,{propertyEffects:n}=i,{instanceProps:s}=e;for(let r in n)if(!o[r]&&!(s&&s[r])){const a=n[r];for(let l=0;l<a.length;l++){const{part:d}=a[l].info;if(!(d.signature&&d.signature.static)){console.warn(`Property '${r}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class Ko extends P{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=xt.debounce(this.__renderDebouncer,no,()=>this.__render()),ol(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const e=v(this).parentNode;(!e||e.nodeType==Node.DOCUMENT_FRAGMENT_NODE&&!v(e).host)&&this.__teardownInstance()}connectedCallback(){super.connectedCallback(),rl()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const e=this;let t=e._templateInfo?e:v(e).querySelector("template");if(!t){let o=new MutationObserver(()=>{if(v(this).querySelector("template"))o.disconnect(),this.__render();else throw new Error("dom-if requires a <template> child")});return o.observe(this,{childList:!0}),!1}this.__template=t}return!0}__ensureInstance(){let e=v(this).parentNode;if(this.__hasInstance()){let t=this.__getInstanceNodes();if(t&&t.length&&v(this).previousSibling!==t[t.length-1])for(let n=0,s;n<t.length&&(s=t[n]);n++)v(e).insertBefore(s,this)}else{if(!e||!this.__ensureTemplate())return!1;this.__createAndInsertInstance(e)}return!0}render(){sl()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),(!vn||this.notifyDomChange)&&this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(e){}__teardownInstance(){}_showHideChildren(){}}class vl extends Ko{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(e){const t=this.__dataHost||this;if(bt&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const o=t._bindTemplate(this.__template,!0);o.runEffects=(n,s,r)=>{let a=this.__syncInfo;if(this.if)a&&(this.__syncInfo=null,this._showHideChildren(),s=Object.assign(a.changedProps,s)),n(s,r);else if(this.__instance)if(a||(a=this.__syncInfo={runEffects:n,changedProps:{}}),r)for(const l in s){const d=R(l);a.changedProps[d]=this.__dataHost[d]}else Object.assign(a.changedProps,s)},this.__instance=t._stampTemplate(this.__template,o),v(e).insertBefore(this.__instance,this)}__syncHostProperties(){const e=this.__syncInfo;e&&(this.__syncInfo=null,e.runEffects(e.changedProps,!1))}__teardownInstance(){const e=this.__dataHost||this;this.__instance&&(e._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==e&&(this.__instance.__hidden=e,Wo(e,this.__instance.templateInfo.childNodes)),e||this.__syncHostProperties()}}class yl extends Ko{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(e){this.__ctor||(this.__ctor=Ne(this.__template,this,{mutableData:!0,forwardHostProp:function(t,o){this.__instance&&(this.if?this.__instance.forwardHostProp(t,o):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[R(t)]=!0))}})),this.__instance=new this.__ctor,v(e).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let t=v(e[0]).parentNode;if(t){t=v(t);for(let o=0,n;o<e.length&&(n=e[o]);o++)t.removeChild(n)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let e=this.__invalidProps;if(e){this.__invalidProps=null;for(let t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__instance._flushProperties()}}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==e&&(this.__instance.__hidden=e,this.__instance._showHideChildren(e)),e||this.__syncHostProperties()}}const Mi=Gi?vl:yl;customElements.define(Mi.is,Mi);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yt=(i,e)=>{var o;const t=i._$AN;if(t===void 0)return!1;for(const n of t)(o=n._$AO)==null||o.call(n,e,!1),yt(n,e);return!0},Ut=i=>{let e,t;do{if((e=i._$AM)===void 0)break;t=e._$AN,t.delete(i),i=e}while((t==null?void 0:t.size)===0)},Xo=i=>{for(let e;e=i._$AM;i=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(i))break;t.add(i),wl(e)}};function bl(i){this._$AN!==void 0?(Ut(this),this._$AM=i,Xo(this)):this._$AM=i}function Cl(i,e=!1,t=0){const o=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(o))for(let s=t;s<o.length;s++)yt(o[s],!1),Ut(o[s]);else o!=null&&(yt(o,!1),Ut(o));else yt(this,i)}const wl=i=>{i.type==Me.CHILD&&(i._$AP??(i._$AP=Cl),i._$AQ??(i._$AQ=bl))};class xl extends Vi{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,o){super._$AT(e,t,o),Xo(this),this.isConnected=e._$AU}_$AO(e,t=!0){var o,n;e!==this.isConnected&&(this.isConnected=e,e?(o=this.reconnected)==null||o.call(this):(n=this.disconnected)==null||n.call(this)),t&&(yt(this,e),Ut(this))}setValue(e){if(Wa(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}class Al extends xl{constructor(e){if(super(e),e.type!==Me.CHILD)throw new Error(`${this.constructor.directiveName}() can only be used in child bindings`)}update(e,[t,o]){return this.updateContent(e,t,o),$i}updateContent(e,t,o){const{parentNode:n,startNode:s}=e;this.__parentNode=n;const r=o!=null,a=r?this.getNewNode(t,o):null,l=this.getOldNode(e);if(clearTimeout(this.__parentNode.__nodeRetryTimeout),r&&!a)this.__parentNode.__nodeRetryTimeout=setTimeout(()=>this.updateContent(e,t,o));else{if(l===a)return;l&&a?n.replaceChild(a,l):l?n.removeChild(l):a&&s.after(a)}}getNewNode(e,t){return window.Vaadin.Flow.clients[e].getByNodeId(t)}getOldNode(e){const{startNode:t,endNode:o}=e;if(t.nextSibling!==o)return t.nextSibling}disconnected(){clearTimeout(this.__parentNode.__nodeRetryTimeout)}}const Jo=Ui(Al);function El(i,e){return Jo(i,e)}function Pl(i,e,t){Bi(rn`${e.map(o=>Jo(i,o))}`,t)}function Tl(i){const e=i.insertBefore;i.insertBefore=function(t,o){return o&&o.parentNode===this?e.call(this,t,o):e.call(this,t,null)}}window.Vaadin||(window.Vaadin={});var Hi;(Hi=window.Vaadin).FlowComponentHost||(Hi.FlowComponentHost={patchVirtualContainer:Tl,getNode:El,setChildNodes:Pl});class ki extends P{static get template(){return M`
      <style>
        :host {
          animation: 1ms flow-component-renderer-appear;
        }

        @keyframes flow-component-renderer-appear {
          to {
            opacity: 1;
          }
        }
      </style>
      <slot></slot>
    `}static get is(){return"flow-component-renderer"}static get properties(){return{nodeid:Number,appid:String}}static get observers(){return["_attachRenderedComponentIfAble(appid, nodeid)"]}ready(){super.ready(),this.addEventListener("click",function(e){this.firstChild&&typeof this.firstChild.click=="function"&&e.target===this&&(e.stopPropagation(),this.firstChild.click())}),this.addEventListener("animationend",this._onAnimationEnd)}_asyncAttachRenderedComponentIfAble(){this._debouncer=xt.debounce(this._debouncer,Fn,()=>this._attachRenderedComponentIfAble())}_attachRenderedComponentIfAble(){if(this.appid==null)return;if(this.nodeid==null){this.firstChild&&this.removeChild(this.firstChild);return}const e=this._getRenderedComponent();this.firstChild?e?this.firstChild!==e?(this.replaceChild(e,this.firstChild),this._defineFocusTarget(),this.onComponentRendered()):(this._defineFocusTarget(),this.onComponentRendered()):this._asyncAttachRenderedComponentIfAble():e?(this.appendChild(e),this._defineFocusTarget(),this.onComponentRendered()):this._asyncAttachRenderedComponentIfAble()}_getRenderedComponent(){try{return window.Vaadin.Flow.clients[this.appid].getByNodeId(this.nodeid)}catch(e){console.error("Could not get node %s from app %s",this.nodeid,this.appid),console.error(e)}return null}onComponentRendered(){}_defineFocusTarget(){var e=this._getFirstFocusableDescendant(this.firstChild);e!==null&&e.setAttribute("focus-target","true")}_getFirstFocusableDescendant(e){if(this._isFocusable(e))return e;if(e.hasAttribute&&(e.hasAttribute("disabled")||e.hasAttribute("hidden"))||!e.children)return null;for(var t=0;t<e.children.length;t++){var o=this._getFirstFocusableDescendant(e.children[t]);if(o!==null)return o}return null}_isFocusable(e){return e.hasAttribute&&typeof e.hasAttribute=="function"&&(e.hasAttribute("disabled")||e.hasAttribute("hidden"))?!1:e.tabIndex===0}_onAnimationEnd(e){e.animationName.indexOf("flow-component-renderer-appear")===0&&this._attachRenderedComponentIfAble()}}window.customElements.define(ki.is,ki);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Se extends Vi{constructor(e){if(super(e),this.it=de,e.type!==Me.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===de||e==null)return this._t=void 0,this.it=e;if(e===$i)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Se.directiveName="unsafeHTML",Se.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Oe extends Se{}Oe.directiveName="unsafeSVG",Oe.resultType=2;const Nl=Ui(Oe);/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Ii(i){let e=de;if(i){const t=i.cloneNode(!0);t.removeAttribute("id"),e=an`${Nl(t.outerHTML)}`}return e}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Y={},zi=new Set;function Zo(i,e){return(i||"").replace(`${e}:`,"")}function Li(i){return i?i.split(":")[0]||"vaadin":void 0}function Di(i,e){i._icons=[...i.querySelectorAll("[id]")].reduce((t,o)=>{const n=Zo(o.id,e);return t[n]=o,t},{})}const Sl=i=>class extends i{static get properties(){return{name:{type:String,observer:"__nameChanged",sync:!0},size:{type:Number,value:24,sync:!0}}}static get attachedIcons(){return zi}static getIconset(e){return Y[e]}static getIconSvg(e,t){const o=t||Li(e),n=this.getIconset(o);if(!e||!n)return{svg:Ii(null)};const s=Zo(e,o),r=n._icons[s];return{preserveAspectRatio:r?r.getAttribute("preserveAspectRatio"):null,svg:Ii(r),size:n.size,viewBox:r?r.getAttribute("viewBox"):null}}static register(e,t,o){if(!Y[e]){const n=document.createElement("vaadin-iconset");n.appendChild(o.content.cloneNode(!0)),Y[e]=n,Di(n,e),n.size=t,n.name=e,n.__nameChanged(e)}}connectedCallback(){super.connectedCallback(),this.style.display="none";const{name:e}=this;Y[e]=this,Di(this,e),this.__updateIcons(e)}__updateIcons(e){zi.forEach(t=>{e===Li(t.icon)&&t._applyIcon()})}__nameChanged(e,t){t&&(Y[e]=Y[t],delete Y[t]),e&&this.__updateIcons(e)}};/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Qo extends Sl(F(P)){static get template(){return null}static get is(){return"vaadin-iconset"}}O(Qo);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const tn=document.createElement("template");tn.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg"><defs>
<g id="lumo:align-center"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m83 191c0-18 13-33 29-33H721c16 0 29 15 29 33 0 18-13 33-29 34H279C263 442 250 427 250 408zM250 792c0-18 13-33 29-34H721c16 0 29 15 29 34s-13 33-29 33H279C263 825 250 810 250 792z m-83-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:align-left"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m0 191c0-18 13-33 28-33H638c16 0 29 15 29 33 0 18-13 33-29 34H195C179 442 167 427 167 408zM167 792c0-18 13-33 28-34H638c16 0 29 15 29 34s-13 33-29 33H195C179 825 167 810 167 792z m0-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:align-right"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m166 191c0-18 13-33 29-33H805c16 0 29 15 28 33 0 18-13 33-28 34H362C346 442 333 427 333 408zM333 792c0-18 13-33 29-34H805c16 0 29 15 28 34s-13 33-28 33H362C346 825 333 810 333 792z m-166-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:angle-down"><path d="M283 391c-18-16-46-15-63 4-16 18-15 46 3 63l244 224c17 15 43 15 60 0l250-229c18-16 20-45 3-63-16-18-45-20-63-4l-220 203-214-198z"></path></g>
<g id="lumo:angle-left"><path d="M601 710c16 18 15 46-3 63-18 16-46 15-63-4l-224-244c-15-17-15-43 0-59l229-250c16-18 45-20 63-4 18 16 20 45 3 63l-203 220 198 215z"></path></g>
<g id="lumo:angle-right"><path d="M399 275c-16-18-15-46 3-63 18-16 46-15 63 4l224 244c15 17 15 43 0 59l-229 250c-16 18-45 20-63 4-18-16-20-45-3-63l203-220-198-215z"></path></g>
<g id="lumo:angle-up"><path d="M283 635c-18 16-46 15-63-3-16-18-15-46 3-63l244-224c17-15 43-15 60 0l250 229c18 16 20 45 3 63-16 18-45 20-63 3l-220-202L283 635z"></path></g>
<g id="lumo:arrow-down"><path d="M538 646l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166c0 0 0 0 0 0-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 646V312c0-21 17-38 38-37s38 17 37 37v334z"></path></g>
<g id="lumo:arrow-left"><path d="M375 538l111 125c14 15 12 39-3 53-15 14-39 12-53-4l-166-187c0 0 0 0 0 0-13-14-12-36 0-50l166-187c14-15 37-17 53-4 15 14 17 37 3 53L375 463h333c21 0 38 17 38 37 0 21-17 38-38 38h-333z"></path></g>
<g id="lumo:arrow-right"><path d="M625 538h-333c-21 0-38-17-38-38 0-21 17-38 38-37h333l-111-126c-14-15-12-39 3-53 15-14 39-12 53 4l166 187c13 14 13 36 0 50 0 0 0 0 0 0l-166 187c-14 15-37 17-53 4-15-14-17-37-3-53l111-125z"></path></g>
<g id="lumo:arrow-up"><path d="M538 354V688c0 21-17 38-38 37s-38-17-38-38V354l-125 112c-15 14-39 12-53-4-14-15-12-39 4-53l187-166c14-13 36-13 50 0 0 0 0 0 0 0l187 166c15 14 17 37 4 53-14 15-37 17-53 4L538 354z"></path></g>
<g id="lumo:bar-chart"><path d="M175 500h108c28 0 50 22 50 50v233c0 28-22 50-50 50H175c-28 0-50-22-50-50v-233c0-28 22-50 50-50z m33 67c-9 0-17 7-16 16v167c0 9 7 17 16 17h42c9 0 17-7 17-17v-167c0-9-7-17-17-16H208zM446 167h108c28 0 50 22 50 50v566c0 28-22 50-50 50h-108c-28 0-50-22-50-50V217c0-28 22-50 50-50z m33 66c-9 0-17 7-17 17v500c0 9 7 17 17 17h42c9 0 17-7 16-17V250c0-9-7-17-16-17h-42zM717 333h108c28 0 50 22 50 50v400c0 28-22 50-50 50h-108c-28 0-50-22-50-50V383c0-28 22-50 50-50z m33 67c-9 0-17 7-17 17v333c0 9 7 17 17 17h42c9 0 17-7 16-17v-333c0-9-7-17-16-17h-42z"></path></g>
<g id="lumo:bell"><path d="M367 675H292v-258C292 325 366 250 459 250H458V208c0-23 18-42 42-41 23 0 42 18 42 41v42h-1C634 250 708 325 708 417V675h-75v-258c0-51-41-92-91-92h-84C408 325 367 366 367 417V675z m-159 37c0-21 17-38 38-37h508c21 0 37 17 38 37 0 21-17 38-38 38H246C225 750 208 733 208 713z m230 71h125v32c0 17-14 31-32 31h-62c-17 0-32-14-31-31v-32z"></path></g>
<g id="lumo:calendar"><path d="M375 208h250v-20C625 176 634 167 646 167h41C699 167 708 176 708 188V208h74c23 0 41 19 41 42v42C823 315 804 333 782 333H218C196 333 177 315 177 292V250C177 227 196 208 218 208H292v-20C292 176 301 167 313 167h41C366 167 375 176 375 188V208zM229 375h42C283 375 292 384 292 396v41C292 449 282 458 271 458h-42C217 458 208 449 208 437v-41C208 384 218 375 229 375z m125 0h42C408 375 417 384 417 396v41C417 449 407 458 396 458h-42C342 458 333 449 333 437v-41C333 384 343 375 354 375z m125 0h42C533 375 542 384 542 396v41C542 449 532 458 521 458h-42C467 458 458 449 458 437v-41C458 384 468 375 479 375z m-250 125h42C283 500 292 509 292 521v41C292 574 282 583 271 583h-42C217 583 208 574 208 562v-41C208 509 218 500 229 500z m125 0h42C408 500 417 509 417 521v41C417 574 407 583 396 583h-42C342 583 333 574 333 562v-41C333 509 343 500 354 500z m125 0h42c12 0 21 9 21 21v41C542 574 532 583 521 583h-42C467 583 458 574 458 562v-41C458 509 468 500 479 500z m-250 125h42C283 625 292 634 292 646v41C292 699 282 708 271 708h-42C217 708 208 699 208 687v-41C208 634 218 625 229 625z m125 0h42C408 625 417 634 417 646v41C417 699 407 708 396 708h-42C342 708 333 699 333 687v-41C333 634 343 625 354 625z m125 0h42c12 0 21 9 21 21v41C542 699 532 708 521 708h-42C467 708 458 699 458 687v-41C458 634 468 625 479 625z m125-250h42C658 375 667 384 667 396v41C667 449 657 458 646 458h-42C592 458 583 449 583 437v-41C583 384 593 375 604 375z m0 125h42c12 0 21 9 21 21v41C667 574 657 583 646 583h-42C592 583 583 574 583 562v-41C583 509 593 500 604 500z m0 125h42c12 0 21 9 21 21v41C667 699 657 708 646 708h-42C592 708 583 699 583 687v-41C583 634 593 625 604 625z m125 0h42c12 0 21 9 21 21v41C792 699 782 708 771 708h-42C717 708 708 699 708 687v-41C708 634 718 625 729 625z m-500 125h42C283 750 292 759 292 771v41C292 824 282 833 271 833h-42C217 833 208 824 208 812v-41C208 759 218 750 229 750z m125 0h42C408 750 417 759 417 771v41C417 824 407 833 396 833h-42C342 833 333 824 333 812v-41C333 759 343 750 354 750z m125 0h42c12 0 21 9 21 21v41C542 824 532 833 521 833h-42C467 833 458 824 458 812v-41C458 759 468 750 479 750z m125 0h42c12 0 21 9 21 21v41C667 824 657 833 646 833h-42C592 833 583 824 583 812v-41C583 759 593 750 604 750z m125 0h42c12 0 21 9 21 21v41C792 824 782 833 771 833h-42C717 833 708 824 708 812v-41C708 759 718 750 729 750z m0-250h42c12 0 21 9 21 21v41C792 574 782 583 771 583h-42C717 583 708 574 708 562v-41C708 509 718 500 729 500z m0-125h42C783 375 792 384 792 396v41C792 449 782 458 771 458h-42C717 458 708 449 708 437v-41C708 384 718 375 729 375z"></path></g>
<g id="lumo:checkmark"><path d="M318 493c-15-15-38-15-53 0-15 15-15 38 0 53l136 136c15 15 38 15 53 0l323-322c15-15 15-38 0-53-15-15-38-15-54 0l-295 296-110-110z"></path></g>
<g id="lumo:chevron-down"><path d="M533 654l210-199c9-9 9-23 0-32C739 419 733 417 726 417H274C261 417 250 427 250 439c0 6 2 12 7 16l210 199c18 17 48 17 66 0z"></path></g>
<g id="lumo:chevron-left"><path d="M346 533l199 210c9 9 23 9 32 0 4-4 7-10 6-17V274C583 261 573 250 561 250c-6 0-12 2-16 7l-199 210c-17 18-17 48 0 66z"></path></g>
<g id="lumo:chevron-right"><path d="M654 533L455 743c-9 9-23 9-32 0C419 739 417 733 417 726V274C417 261 427 250 439 250c6 0 12 2 16 7l199 210c17 18 17 48 0 66z"></path></g>
<g id="lumo:chevron-up"><path d="M533 346l210 199c9 9 9 23 0 32-4 4-10 7-17 6H274C261 583 250 573 250 561c0-6 2-12 7-16l210-199c18-17 48-17 66 0z"></path></g>
<g id="lumo:clock"><path d="M538 489l85 85c15 15 15 38 0 53-15 15-38 15-53 0l-93-93a38 38 0 0 1-2-2C467 525 462 515 462 504V308c0-21 17-38 38-37 21 0 38 17 37 37v181zM500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265z"></path></g>
<g id="lumo:cog"><path d="M833 458l-81-18c-8-25-17-50-29-75L767 292 708 233l-72 49c-21-12-46-25-75-30L542 167h-84l-19 79c-25 8-50 17-71 30L296 233 233 296l47 69c-12 21-21 46-29 71L167 458v84l84 25c8 25 17 50 29 75L233 708 292 767l76-44c21 12 46 25 75 29L458 833h84l19-81c25-8 50-17 75-29L708 767l59-59-44-66c12-21 25-46 29-75L833 542v-84z m-333 217c-96 0-175-79-175-175 0-96 79-175 175-175 96 0 175 79 175 175 0 96-79 175-175 175z"></path></g>
<g id="lumo:cross"><path d="M445 500l-142-141c-15-15-15-40 0-56 15-15 40-15 56 0L500 445l141-142c15-15 40-15 56 0 15 15 15 40 0 56L555 500l142 141c15 15 15 40 0 56-15 15-40 15-56 0L500 555l-141 142c-15 15-40 15-56 0-15-15-15-40 0-56L445 500z"></path></g>
<g id="lumo:download"><path d="M538 521l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166a38 38 0 0 1 0 0c-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 521V188c0-21 17-38 38-38s38 17 37 38v333zM758 704c0-21 17-38 38-37 21 0 38 17 37 37v92c0 21-17 38-37 37H204c-21 0-38-17-37-37v-92c0-21 17-38 37-37s38 17 38 37v54h516v-54z"></path></g>
<g id="lumo:drag-handle"><path d="M458 292c0 35-28 63-62 62C361 354 333 326 333 292s28-63 63-63c35 0 63 28 62 63Zm0 208c0 35-28 63-62 62-35 0-63-28-63-62s28-63 63-63c35 0 63 28 62 63Zm0 208c0 35-28 63-62 63-35 0-63-28-63-63s28-63 63-62c35 0 63 28 62 62Zm209-416c0 35-28 63-63 62S542 326 542 292s28-63 62-63S667 257 667 292Zm0 208c0 35-28 63-63 62S542 535 542 500s28-63 62-63 63 28 63 63Zm0 208c0 35-28 63-63 63S542 743 542 708s28-63 62-62 63 28 63 62Z"></path></g>
<g id="lumo:dropdown"><path d="M317 393c-15-14-39-13-53 3-14 15-13 39 3 53l206 189c14 13 36 13 50 0l210-193c15-14 17-38 3-53-14-15-38-17-53-3l-185 171L317 393z"></path></g>
<g id="lumo:edit"><path d="M673 281l62 56-205 233c-9 10-38 24-85 39a8 8 0 0 1-5 0c-4-1-7-6-6-10l0 0c14-47 25-76 35-86l204-232z m37-42l52-59c15-17 41-18 58-2 17 16 18 42 3 59L772 295l-62-56zM626 208l-67 75h-226C305 283 283 306 283 333v334C283 695 306 717 333 717h334c28 0 50-22 50-50v-185L792 398v269C792 736 736 792 667 792H333C264 792 208 736 208 667V333C208 264 264 208 333 208h293z"></path></g>
<g id="lumo:error"><path d="M500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265zM479 292h42c12 0 21 9 20 20l-11 217c0 8-6 13-13 13h-34c-7 0-13-6-13-13l-11-217C459 301 468 292 479 292zM483 608h34c12 0 21 9 20 21v33c0 12-9 21-20 21h-34c-12 0-21-9-21-21v-33c0-12 9-21 21-21z"></path></g>
<g id="lumo:eye"><path d="M500 750c-187 0-417-163-417-250s230-250 417-250 417 163 417 250-230 250-417 250z m-336-231c20 22 47 46 78 69C322 644 411 678 500 678s178-34 258-90c31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69C678 356 589 322 500 322s-178 34-258 90c-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19zM500 646c-81 0-146-65-146-146s65-146 146-146 146 65 146 146-65 146-146 146z m0-75c39 0 71-32 71-71 0-39-32-71-71-71-39 0-71 32-71 71 0 39 32 71 71 71z"></path></g>
<g id="lumo:eye-disabled"><path d="M396 735l60-60c15 2 30 3 44 3 89 0 178-34 258-90 31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69-8-5-15-11-23-15l50-51C862 397 917 458 917 500c0 87-230 250-417 250-34 0-69-5-104-15zM215 654C138 603 83 542 83 500c0-87 230-250 417-250 34 0 69 5 104 15l-59 60c-15-2-30-3-45-3-89 0-178 34-258 90-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19 20 22 47 46 78 69 8 5 16 11 24 16L215 654z m271-9l159-159c0 5 1 9 1 14 0 81-65 146-146 146-5 0-9 0-14-1z m-131-131C354 510 354 505 354 500c0-81 65-146 146-146 5 0 10 0 14 1l-159 159z m-167 257L780 179c12-12 32-12 44 0 12 12 12 32 0 44L232 815c-12 12-32 12-44 0s-12-32 0-44z"></path></g>
<g id="lumo:menu"><path d="M167 292c0-23 19-42 41-42h584C815 250 833 268 833 292c0 23-19 42-41 41H208C185 333 167 315 167 292z m0 208c0-23 19-42 41-42h584C815 458 833 477 833 500c0 23-19 42-41 42H208C185 542 167 523 167 500z m0 208c0-23 19-42 41-41h584C815 667 833 685 833 708c0 23-19 42-41 42H208C185 750 167 732 167 708z"></path></g>
<g id="lumo:minus"><path d="M261 461c-22 0-39 18-39 39 0 22 18 39 39 39h478c22 0 39-18 39-39 0-22-18-39-39-39H261z"></path></g>
<g id="lumo:ordered-list"><path d="M138 333V198H136l-43 28v-38l45-31h45V333H138z m-61 128c0-35 27-59 68-59 39 0 66 21 66 53 0 20-11 37-43 64l-29 27v2h74V583H80v-30l55-52c26-24 32-33 33-43 0-13-10-22-24-22-15 0-26 10-26 25v1h-41v-1zM123 759v-31h21c15 0 25-8 25-21 0-13-10-21-25-21-15 0-26 9-26 23h-41c1-34 27-56 68-57 39 0 66 20 66 49 0 20-14 36-33 39v3c24 3 40 19 39 41 0 32-30 54-73 54-41 0-69-22-70-57h43c1 13 11 22 28 22 16 0 27-9 27-22 0-14-10-22-28-22h-21zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>
<g id="lumo:phone"><path d="M296 208l42-37c17-15 44-13 58 4a42 42 0 0 1 5 7L459 282c12 20 5 45-15 57l-7 4c-17 10-25 30-19 48l20 66a420 420 0 0 0 93 157l41 45c13 14 35 17 51 8l7-5c20-12 45-5 57 16L745 777c12 20 5 45-15 57a42 42 0 0 1-8 4l-52 17c-61 21-129 4-174-43l-50-52c-81-85-141-189-175-302l-24-78c-19-62 0-129 49-172z"></path></g>
<g id="lumo:photo"><path d="M208 167h584c69 0 125 56 125 125v416c0 69-56 125-125 125H208c-69 0-125-56-125-125V292c0-69 56-125 125-125z m584 75H208c-28 0-50 22-50 50v416c0 28 22 50 50 50h584c28 0 50-22 50-50V292c0-28-22-50-50-50zM239 740l167-167c12-12 31-14 45-6l73 43 172-201c13-15 34-18 50-7l95 67v92l-111-78-169 199c-12 14-32 17-47 8l-76-43-111 111H229c2-7 5-13 10-18zM458 427C458 490 407 542 344 542S229 490 229 427c0-63 51-115 115-115S458 364 458 427z m-62 0C396 398 373 375 344 375S292 398 292 427c0 29 23 52 52 52s52-23 52-52z"></path></g>
<g id="lumo:play"><path d="M689 528l-298 175c-13 8-34 8-48 0-6-4-10-9-10-14V311C333 300 348 292 367 292c9 0 17 2 24 5l298 175c26 15 26 40 0 56z"></path></g>
<g id="lumo:plus"><path d="M461 461H261c-22 0-39 18-39 39 0 22 18 39 39 39h200v200c0 22 18 39 39 39 22 0 39-18 39-39v-200h200c22 0 39-18 39-39 0-22-18-39-39-39h-200V261c0-22-18-39-39-39-22 0-39 18-39 39v200z"></path></g>
<g id="lumo:redo"><path d="M290 614C312 523 393 458 491 458c55 0 106 22 144 57l-88 88c-3 3-5 7-5 11 0 8 6 15 15 15l193-5c17 0 31-15 31-32l5-192c0-4-1-8-4-11-6-6-16-6-22 0l-66 67C641 406 570 375 491 375c-136 0-248 90-281 215-1 2-1 5-1 8-8 44 45 68 73 32 4-5 7-11 8-16z"></path></g>
<g id="lumo:reload"><path d="M500 233V137c0-9 7-16 15-16 4 0 8 2 10 4l133 140c12 12 12 32 0 45l-133 140c-6 6-15 6-21 0C502 447 500 443 500 438V308c-117 0-212 95-212 213 0 117 95 212 212 212 117 0 212-95 212-212 0-21 17-38 38-38s38 17 37 38c0 159-129 288-287 287-159 0-288-129-288-287 0-159 129-288 288-288z"></path></g>
<g id="lumo:resize-handle"><path d="M772 311c12 12 12 32 0 44L355 772c-12 12-32 12-44 0s-12-32 0-44L728 311c12-12 32-12 44 0Zm0 188c12 12 12 32 0 44l-229 229c-12 12-32 12-44 0-12-12-12-32 0-44l229-229c12-12 32-12 44 0Zm0 187c12 12 12 32 0 44l-42 42c-12 12-32 12-44 0-12-12-12-32 0-44l42-42c12-12 32-12 44 0Z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:search"><path d="M662 603l131 131c16 16 16 42 0 59-16 16-43 16-59 0l-131-131C562 691 512 708 458 708c-138 0-250-112-250-250 0-138 112-250 250-250 138 0 250 112 250 250 0 54-17 104-46 145zM458 646c104 0 188-84 188-188S562 271 458 271 271 355 271 458s84 188 187 188z"></path></g>
<g id="lumo:undo"><path d="M710 614C688 523 607 458 509 458c-55 0-106 22-144 57l88 88c3 3 5 7 5 11 0 8-6 15-15 15l-193-5c-17 0-31-15-31-32L214 400c0-4 1-8 4-11 6-6 16-6 22 0l66 67C359 406 430 375 509 375c136 0 248 90 281 215 1 2 1 5 1 8 8 44-45 68-73 32-4-5-7-11-8-16z"></path></g>
<g id="lumo:unordered-list"><path d="M146 325c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>
<g id="lumo:upload"><path d="M454 271V604c0 21-17 38-37 38s-38-17-38-38V271L254 382c-15 14-39 12-53-3-14-15-12-39 3-53L391 160c14-13 36-13 51-1 0 0 0 0 0 1l187 166c15 14 17 37 3 53-14 15-37 17-53 3L454 271zM675 704c0-21 17-38 37-37 21 0 38 17 38 37v92c0 21-17 38-38 37H121c-21 0-38-17-38-37v-92c0-21 17-38 38-37s38 17 37 37v54h517v-54z"></path></g>
<g id="lumo:user"><path d="M500 500c-69 0-125-56-125-125s56-125 125-125 125 56 125 125-56 125-125 125z m-292 292c0-115 131-208 292-209s292 93 292 209H208z"></path></g>
</defs></svg>`;Qo.register("lumo",1e3,tn);function Ol(i,e){switch(e.type){case"stateKeyChanged":const{key:t,value:o}=e;return{...i,key:o};default:return i}}const Ml=()=>{};var I,it,V,z,ot,nt,st,Et,Pt,rt,at,$,en,on,nn;class kl extends HTMLElement{constructor(){super();T(this,$);T(this,I);T(this,it,!1);T(this,V);T(this,z,Object.create(null));T(this,ot,new Map);T(this,nt,new Map);T(this,st,Ml);T(this,Et,new Map);T(this,Pt);T(this,rt);T(this,at,Promise.resolve());S(this,Pt,{useState:this.useState.bind(this),useCustomEvent:this.useCustomEvent.bind(this),useContent:this.useContent.bind(this)}),S(this,rt,St(this,$,on).bind(this)),St(this,$,nn).call(this)}async connectedCallback(){await m(this,at),S(this,V,ct.createElement(m(this,rt))),!(!this.dispatchEvent(new CustomEvent("flow-portal-add",{bubbles:!0,cancelable:!0,composed:!0,detail:{children:m(this,V),domNode:this}}))||m(this,I))&&(S(this,I,ln.createRoot(this)),St(this,$,en).call(this),m(this,I).render(m(this,V)))}addReadyCallback(t,o){m(this,Et).set(t,o)}async disconnectedCallback(){var t;this.dispatchEvent(new CustomEvent("flow-portal-remove",{bubbles:!0,cancelable:!0,composed:!0,detail:{children:m(this,V),domNode:this}})),S(this,at,Promise.resolve()),await m(this,at),(t=m(this,I))==null||t.unmount(),S(this,I,void 0),S(this,it,!1),S(this,V,void 0)}useState(t,o){if(m(this,ot).has(t))return[m(this,z)[t],m(this,ot).get(t)];const n=this[t]??o;m(this,z)[t]=n,Object.defineProperty(this,t,{enumerable:!0,get(){return m(this,z)[t]},set(a){m(this,z)[t]=a,m(this,st).call(this,{type:"stateKeyChanged",key:t,value:n})}});const s=this.useCustomEvent(`${t}-changed`,{detail:{value:n}}),r=a=>{m(this,z)[t]=a,s({value:a}),m(this,st).call(this,{type:"stateKeyChanged",key:t,value:a})};return m(this,ot).set(t,r),[n,r]}useCustomEvent(t,o={}){if(!m(this,nt).has(t)){const n=s=>{const r=s===void 0?o:{...o,detail:s},a=new CustomEvent(t,r);return this.dispatchEvent(a)};return m(this,nt).set(t,n),n}return m(this,nt).get(t)}useContent(t){return ct.useEffect(()=>{var o;(o=m(this,Et).get(t))==null||o()},[]),ct.createElement("flow-content-container",{name:t,style:{display:"contents"}})}}I=new WeakMap,it=new WeakMap,V=new WeakMap,z=new WeakMap,ot=new WeakMap,nt=new WeakMap,st=new WeakMap,Et=new WeakMap,Pt=new WeakMap,rt=new WeakMap,at=new WeakMap,$=new WeakSet,en=function(){m(this,it)||!m(this,I)||(m(this,I).render(ct.createElement(m(this,rt))),S(this,it,!0))},on=function(){const[t,o]=ct.useReducer(Ol,m(this,z));return S(this,z,t),S(this,st,o),this.render(m(this,Pt))},nn=function(){let t=window.Vaadin||{};t.developmentMode&&(t.registrations=t.registrations||[],t.registrations.push({is:"ReactAdapterElement",version:"24.6.1"}))};class Il extends kl{render(){return dn.jsx(cn,{})}}customElements.define("react-router-outlet",Il);const zl=i=>Promise.resolve(0);window.Vaadin=window.Vaadin||{};window.Vaadin.Flow=window.Vaadin.Flow||{};window.Vaadin.Flow.loadOnDemand=zl;window.Vaadin.Flow.resetFocus=()=>{let i=document.activeElement;for(;i&&i.shadowRoot;)i=i.shadowRoot.activeElement;return!i||i.blur()||i.focus()||!0};
