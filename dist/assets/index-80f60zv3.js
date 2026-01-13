(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function a(){const o=document.getElementById("main-content");for(const s in i){const n=document.createElement("secton");n.className="dashboard__category",n.innerHTML=`
    <h2>${s.toUpperCase()}</h2>
    <section class="dashboard__category-list">
    ${i[s].map(r=>`
        <section class="dashboard__category-item">
        
        <p class="dashboard__category-item-title">${r.name}</p>
        <p>${r.description}</p>
        <a class="dashboard__category-item-link" href="${r.url}" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
</svg>
${r.url} </a>
        </section>
        
        `).join("")}
    
    </section>
    
    
    `,o.appendChild(n)}}let i={};fetch("./data/data.json").then(o=>o.json()).then(o=>{i=o,console.log(o),a()}).catch(o=>{console.error("No data found")});
