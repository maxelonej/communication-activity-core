const buttons = document.querySelectorAll(".wrapper[data-type='tags'] .button");
const cards = document.querySelectorAll('#events .container[data-type="card"]');

if (buttons.length && cards.length) {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const tag = button.getAttribute("data-tag");
      const isActive = button.getAttribute("data-type") === "active";

      buttons.forEach((btn) => btn.setAttribute("data-type", "inactive"));

      if (!isActive) {
        button.setAttribute("data-type", "active");
      }

      cards.forEach((card) => {
        const cardTags = card.getAttribute("data-tags").split(" ");
        if (isActive || cardTags.includes(tag)) {
          animateCard(card, true);
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

function animateCard(card, show) {
  if (show) {
    card.style.display = "flex";
    card.style.opacity = 0;

    requestAnimationFrame(() => {
      card.animate(
        [
          { opacity: 0, transform: "translateY(-20px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        {
          duration: 800,
          easing: "ease-in-out",
        }
      );
      card.style.opacity = 1;
    });
  }
}
