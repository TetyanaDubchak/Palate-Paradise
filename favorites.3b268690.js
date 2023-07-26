function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},t.parcelRequired7c6=o),o("8FnLx");var a=o("tgDFu");var s={recipesListContainer:document.querySelector(".fav-list"),categoriesContainer:document.querySelector(".fav-categories"),noFavoritesMessage:document.querySelector(".fav-empty"),paginationElement:document.getElementById("pagination"),allButton:document.querySelector(".common-btn"),categoriesList:document.querySelector(".fav-categories"),renderedRecipesBox:document.getElementById("fav-rendered-card"),heroImage:document.querySelector(".fav-hero")};function r(e){const t=localStorage.getItem(e);return JSON.parse(t)}function c(){return window.innerWidth<768?9:12}function l(e,t){const n={};for(let i=0;i<e.length;i+=t){n[Math.floor(i/t)+1]=e.slice(i,i+t)}return n}var d=o("fT9c6"),u=o("fb9GJ");var g=function(t,n,i,o){const a={totalItems:n*i,itemsPerPage:n,visiblePages:window.innerWidth<768?2:3,page:t,centerAlign:!1,omitMiddlePages:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn pag-page">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}} move-button"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}} prev-button"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip more-button"><span class="tui-ico-ellip">...</span></a>'}};new(e(u))("pagination",a).on("afterMove",(({page:e})=>{o(e)}))},f=(d=o("fT9c6"),o("gjiCh"));function p(e=1){(0,f.showLoader)();const t=r("favoriteRecipes");if(s.allButton.style.display=t&&t.length?"block":"none",!t||0===t.length)return s.noFavoritesMessage.classList.remove("visually-hidden"),s.allButton.classList.add("visually-hidden"),void(window.innerWidth<768&&s.heroImage.classList.add("visually-hidden"));const n=c(),i=l(t,n),o=Object.keys(i).length;s.paginationElement.style.display=o>1?"block":"none",g(e,n,o,p);const a=i[e].map((({title:e,description:t,preview:n,rating:i,id:o,category:a})=>(0,d.renderingFavRec)(e,t,n,i,o,a))).join("");s.recipesListContainer.innerHTML=a,s.noFavoritesMessage.classList.add("visually-hidden"),(0,f.hideLoader)()}f=o("gjiCh");let v="";f=o("gjiCh");function m(e){return`<button class="fav-button">${e}</button>`}function y(e){(0,f.showLoader)();const t=e.closest("div.recipe-item").dataset.category,n=r("favoriteRecipes"),i=n.find((e=>e.category===t)),o=[...refs.categoriesContainer.children].find((e=>e.textContent===t));!i&&o?o.remove():i&&!o&&refs.categoriesContainer.insertAdjacentHTML("beforeend",m(t)),refs.allButton.style.display=n&&n.length?"block":"none",(0,f.hideLoader)()}f=o("gjiCh");new(0,a.default);function h(){(0,f.showLoader)();const e=function(){const e=localStorage.getItem("favoriteRecipes"),t=JSON.parse(e);if(!t||0===t.length)return"";return t.flatMap((e=>e.category)).filter(((e,t,n)=>n.indexOf(e)===t)).reduce(((e,t)=>e+m(t)),"")}(),t=r("favoriteRecipes");s.recipesListContainer.innerHTML="",s.categoriesContainer.innerHTML=t&&t.length?`<button class="fav-button common-btn is-active" name="main-cat-btn">All categories</button>${e}`:"",p(),(0,f.hideLoader)()}function L(e){const t=e.dataset.info,n=(JSON.parse(localStorage.getItem("favoriteRecipes"))||[]).filter((e=>e.id!==t));localStorage.setItem("favoriteRecipes",JSON.stringify(n)),h()}window.addEventListener("load",(function(){const e=document.querySelectorAll(".menu-nav-links");e[0].classList.contains("header-accent")&&(e[0].classList.remove("header-accent"),e.length>1&&e[1].classList.add("header-accent"))})),document.addEventListener("click",(function(e){e.target.closest(".heart-btn")&&function(e){const t=e.target;L(t),t.classList.remove("active")}(e)})),s.renderedRecipesBox.addEventListener("click",(function({target:e}){if(!e.closest("button"))return;const t=e.closest("button");"favoriteRecipes"===t.name&&(L(t),y(e))})),s.categoriesList.addEventListener("click",(function(e){if((0,f.showLoader)(),e.target.classList.contains("is-active"))return;let t,n=[];s.recipesListContainer.innerHTML="",e!==Number(e)&&"BUTTON"===e.target.nodeName&&(!function({target:e}){const t=document.querySelector(".is-active");t?t.classList.remove("is-active"):s.allButton.classList.add("is-active"),e.classList.add("is-active")}(e),v="main-cat-btn"===e.target.name?"":e.target.textContent);const i=localStorage.getItem("favoriteRecipes");if(n=JSON.parse(i),!n||0===n.length)return void(s.categoriesContainer.style.display="none");if(!v)return void p();t=[...n.filter((e=>e.category===v))];let o=1;Number(e)===e&&(o=e);const a=c(),r=l(t,a),u=Object.keys(r).length;s.paginationElement.style.display=u>1?"block":"none",g(o,a,u,p);const m=r[o].reduce(((e,{title:t,description:n,preview:i,rating:o,id:a,category:s})=>e+(0,d.renderingFavRec)(t,n,i,o,a,s)),"");s.recipesListContainer.innerHTML=m,(0,f.hideLoader)()})),document.addEventListener("DOMContentLoaded",h),o("a1JXa");const b=document.querySelector(".scroll-to-top"),w=document.querySelector(".fav-list");let C=window.pageYOffset;b.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"}),b.style.display="none"})),window.addEventListener("scroll",(function(){const e=window.innerHeight,t=w.offsetHeight,n=window.scrollY;b.style.display=n<=C||n+e>=t?"block":"none",(0===n||n>C)&&(b.style.display="none"),C=n})),o("cOsqO"),o("eRvZ4");
//# sourceMappingURL=favorites.3b268690.js.map