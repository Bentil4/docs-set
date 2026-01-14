import { resourceList } from "./resourcesList";

// Fetch data
export let allResources = {};
fetch("./data/data.json")
  .then((response) => response.json())
  .then((data) => {
    allResources = data;

    resourceList(allResources);
    initHamburgerMenu();
    searchResources();
  })
  .catch((error) => {
    (console.error("No data found"), error);
  });

// Hamburger menu functionality
function initHamburgerMenu() {
  const hamburger = document.querySelector(".dashboard__humburg");
  const sidebar = document.querySelector(".dashboard__sidebar");

  if (hamburger && sidebar) {
    hamburger.addEventListener("click", () => {
      sidebar.classList.toggle("sidebar--open");
      hamburger.classList.toggle("hamburger--open");
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener("click", (e) => {
      if (
        !hamburger.contains(e.target) &&
        !sidebar.contains(e.target) &&
        sidebar.classList.contains("sidebar--open")
      ) {
        sidebar.classList.remove("sidebar--open");
        hamburger.classList.remove("hamburger--open");
      }
    });
  }
}

// Search functionality
function searchResources() {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase();
      const filteredResources = filterResources(allResources, query);
      resourceList(filteredResources);
    });
  }
}

//Filter resources based on a query string.
function filterResources(resources, query) {
  const filtered = {};
  for (const category in resources) {
    const filteredItems = resources[category].filter((resource) =>
      resource.name.toLowerCase().includes(query)
    );
    if (filteredItems.length > 0) {
      filtered[category] = filteredItems;
    }
  }
  return filtered;
}
