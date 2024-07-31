const searchInput = document.querySelector(".search-input");
const clearIcon = document.querySelector(
  ".search-competition img:nth-child(3)"
);

if (searchInput) {
  searchInput.addEventListener("input", () => {
    filterCompetencies(searchInput.value);
    if (searchInput.value !== "") {
      clearIcon.classList.add("active");
    } else {
      clearIcon.classList.remove("active");
    }
  });

  searchInput.addEventListener("blur", () => {
    if (searchInput.value === "") {
      clearIcon.classList.remove("active");
    }
  });
}

if (clearIcon) {
  clearIcon.addEventListener("click", () => {
    clearIcon.classList.remove("active");
    searchInput.value = "";
    // searchInput.focus();
    filterCompetencies(""); // reset filtering
  });
}

const options = document.querySelectorAll(".option");

const filterCompetencies = (searchValue) => {
  options.forEach((option) => {
    const label = option.querySelector(".text").textContent.toLowerCase();
    if (label.includes(searchValue.toLowerCase())) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
};
