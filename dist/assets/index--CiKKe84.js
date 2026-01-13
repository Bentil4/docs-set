(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function c(){const t=document.getElementById("main-content");for(const o in i){const s=document.createElement("secton");s.className="dashboard__category",s.innerHTML=`
    <h2>${o.toUpperCase()}</h2>
    <section class="dashboard__category-list">
    ${i[o].map(n=>`
        <section class="dashboard__category-item">
        
        <p class="dashboard__category-item-title">${n.name}</p>
        <p>${n.description}</p>
        <a class="dashboard__category-item-link" href="${n.url}" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
</svg>
${n.name} </a>
        </section>
        
        `).join("")}
    
    </section>
    
    
    `,t.appendChild(s)}}let i={};fetch("./data/data.json").then(t=>t.json()).then(t=>{i=t,console.log(t),c(),l()}).catch(t=>{console.error("No data found")});function l(){const t=document.querySelector(".dashboard__humburg"),o=document.querySelector(".dashboard__sidebar");t&&o&&(t.addEventListener("click",()=>{o.classList.toggle("sidebar--open"),t.classList.toggle("hamburger--open")}),document.addEventListener("click",s=>{!t.contains(s.target)&&!o.contains(s.target)&&o.classList.contains("sidebar--open")&&(o.classList.remove("sidebar--open"),t.classList.remove("hamburger--open"))}))}
