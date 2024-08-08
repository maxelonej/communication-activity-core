// search competencies + competition
const input = document.querySelector("input");
const tags = document.querySelectorAll(".tag");
const competitions = document.querySelectorAll(
  '.container[data-type="competition"]'
);
const titles = document.querySelectorAll(".competition-content h1.title");

if (input) {
  input.addEventListener("input", () => {
    const searchValue = input.value.toLowerCase();

    tags.forEach((tag) => {
      const tagText = tag.textContent.toLowerCase();
      if (tagText.includes(searchValue)) {
        tag.style.display = "flex";
      } else {
        tag.style.display = "none";
      }
    });

    titles.forEach((title, index) => {
      const titleText = title.textContent.toLowerCase();
      if (titleText.includes(searchValue)) {
        competitions[index].style.display = "flex";
      } else {
        competitions[index].style.display = "none";
      }
    });
  });

  document
    .querySelector(".search-competition img[alt='Закрыть']")
    .addEventListener("click", () => {
      document
        .querySelectorAll('.tag, .container[data-type="competition"]')
        .forEach((element) => {
          element.style.display = "flex";
        });
    });
}
