import { allResources } from "./main";

export function resourceList() {
  const dashboard = document.getElementById("main-content");

  for (const category in allResources) {
    const section = document.createElement("secton");
    section.className = "dashboard__category";

    section.innerHTML = `
    <h2>${category.toUpperCase()}</h2>
    <section class="dashboard__category-list">
    ${allResources[category]
      .map(
        (resources) => `
        <section class="dashboard__category-item">
        
        <p class="dashboard__category-item-title">${resources.name}</p>
        <p>${resources.description}</p>
        <a class="dashboard__category-item-link" href="${resources.url}" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
</svg>
${resources.name} </a>
        </section>
        
        `
      )
      .join("")}
    
    </section>
    
    
    `;
    dashboard.appendChild(section);
  }
}
