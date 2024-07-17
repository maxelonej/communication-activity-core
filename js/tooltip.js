const projectContainers = document.querySelectorAll('.container[data-type="project"]');

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
          const projectIntroContainer = doc.querySelector('.container[data-type="project-intro"]');
          if (projectIntroContainer) {
            const tooltipContent = projectIntroContainer.innerHTML;
            tooltipContainer.innerHTML = tooltipContent;
          }
        });
    });
  });
}