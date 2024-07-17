const projectContainers = document.querySelectorAll(
  '.container[data-type="project"]'
);

const mq = window.matchMedia("(min-width: 1024px)");

if (mq.matches) {
  projectContainers.forEach((container) => {
    const tooltipContainer = container.querySelector(".tooltip-container");
    const link = container.querySelector(".button-link");

    container.addEventListener("mouseover", () => {
      fetch(link.href)
        .then((response) => response.text())
        .then((html) => {
          const projectIntroContainer = new DOMParser()
            .parseFromString(html, "text/html")
            .querySelector('.container[data-type="project-intro"]');
          if (projectIntroContainer) {
            const tooltipContent = projectIntroContainer.innerHTML;
            if (tooltipContent !== "") {
              tooltipContainer.innerHTML = tooltipContent;
              // Show the tooltip only if it has content
              tooltipContainer.style.display = "block";
            }
          }
        });
    });
  });
}