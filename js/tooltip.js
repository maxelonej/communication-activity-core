const projectContainers = document.querySelectorAll(
  '.container[data-type="project"]'
);

let mediaQueryList = window.matchMedia("(min-width: 1024px)");

if (mediaQueryList.matches) {
  projectContainers.forEach((container) => {
    const tooltipContainer = container.querySelector(".tooltip-container");
    const link = container.querySelector(".button-link");

    container.addEventListener("mouseover", () => {
      fetch(link.href)
        .then((response) => response.text())
        .then((html) => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, "text/html");
          const projectIntroContainer = doc.querySelector(
            '.container[data-type="project-intro"]'
          );

          if (projectIntroContainer) {
            // title
            const titleElements =
              projectIntroContainer.querySelectorAll(".title");
            titleElements.forEach((titleElement) => {
              titleElement.classList.remove("title");
              titleElement.classList.add("title--text");
            });

            // tags
            const tagsElements =
              projectIntroContainer.querySelectorAll(".tags");
            tagsElements.forEach((tagsElement) => {
              tagsElement.style.display = "none";
            });

            // buttons
            const buttonsElements =
              projectIntroContainer.querySelectorAll(".button");
            buttonsElements.forEach((buttonsElement) => {
              buttonsElement.style.display = "none";
            });

            const tooltipContent = projectIntroContainer.innerHTML;
            tooltipContainer.innerHTML = tooltipContent;
          } else {
            tooltipContainer.innerHTML = `<p class="text">${link.href.substring(link.href.lastIndexOf("/") + 1)} не найден...</p>`;
          }
        });
    });
  });
}
