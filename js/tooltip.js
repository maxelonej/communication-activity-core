const projectContainers = document.querySelectorAll(
  '.container[data-type="project"]'
);

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
          tooltipContainer.innerHTML = projectIntroContainer.innerHTML;
        } else {
          console.error("Failed to extract project intro container");
        }
      })
      .catch((error) => {
        console.error("Error fetching content:", error);
      });
  });
});