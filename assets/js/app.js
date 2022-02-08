//links

const links = document.querySelectorAll(".link");
// console.log(links);

links.forEach((link) => {
  link.onclick = function () {
    document.querySelector(".link.active").classList.remove("active");
    link.classList.add("active");
  };
});

//create dynamic project card

const projectContainer = document.querySelector(".project-container");
// console.log(projectContainer);

projects.forEach((project) => {
  projectContainer.innerHTML += `
  <div class="project-card" data-tags="#all, ${project.tags}">
    <a href="${project.linkProject}" target="_blank">
      <img src="./assets/img/${project.image}" alt="">
      <div class="project-content">
        <div class="project-name">${project.name}</div>
        <span class="tags">${project.tags}</span>
      </div>
    </a>
  </div>
      `;
});

//filter
const filters = document.querySelectorAll(".filter-btn");

filters.forEach((filterBtn) => {
  filterBtn.addEventListener("click", () => {
    let id = filterBtn.getAttribute("id");
    let projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((card) => {
      if (card.getAttribute("data-tags").includes(id)) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }

      filters.forEach((btn) => btn.classList.remove("active"));
      filterBtn.classList.add("active");
    });
  });
});

//responsive toggle button
const toggleBtn = document.querySelector(".toggle-btn");
const linkContainer = document.querySelector(".links-container");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  linkContainer.classList.toggle("show");
});
