import{i as a,S as c}from"./assets/vendor-dcc8fa28.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();function m(){const t=document.getElementById("loader");t.style.display="block"}function n(){const t=document.getElementById("loader");t.style.display="none"}m();function u(t,r){const o=`https://pixabay.com/api/?${new URLSearchParams({key:"43803497-a801e9cfe7ea9bdd19d306bb3",q:r.value,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(o).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{t(e),n()}).catch(e=>{console.error("Error:",e),a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),n()})}const d=document.querySelector(".list"),f=t=>{const r=t.hits.map(i=>`
      <li class="item-list">
        <a href="${i.largeImageURL}" class="item-list-link">
            <img class="item-list-img" src="${i.webformatURL}" alt="${i.tags}">
        </a>
        <div class='markup-info'>
            <div class="item-list-info-text">
                <h3 class="item-list-title">Likes</h3>
                <p class="item-list-text">${i.likes}</p>
            </div>
            <div class="item-list-info-text">
                <h3 class="item-list-title">Views</h3>
                <p class="item-list-text">${i.views}</p>
            </div>
            <div class="item-list-info-text">
                <h3 class="item-list-title">Comments</h3>
                <p class="item-list-text">${i.comments}</p>
            </div>
            <div class="item-list-info-text">
                <h3 class="item-list-title">Downloads</h3>
                <p class="item-list-text">${i.downloads}</p>
            </div>
        </div>
      </li>
    `).join("");d.innerHTML=r,p.refresh()},p=new c(".item-list-link",{captionsData:"alt",captionDelay:250,overlayOpacity:.8}),h=()=>{const t=document.querySelector(".input");t.value=""},y=document.querySelector(".searchButton");y.addEventListener("click",t=>{t.preventDefault();const r=document.querySelector(".input");u(f,r),h()});
//# sourceMappingURL=commonHelpers.js.map
