const filters = document.querySelector(".all-filters");

// link to competencies in all filters
const competencies = document.querySelector(
  ".filter[data-type='competencies']"
);

// comptenecies content
const filtersCompetencies = document.querySelector(".competencies-filters");

// filter competencies in filters
competencies.addEventListener("click", () => {
  // hide all filters
  filters.classList.add("active");
  // show competencies filters
  filtersCompetencies.classList.add("active");
});

// back to filters
const backToFilters = document.querySelector(".filter-header__arrow");
backToFilters.addEventListener("click", () => {
  // show all filters
  filters.classList.remove("active");
  // hide competencies filters
  filtersCompetencies.classList.remove("active");
});

// reset chosen filters
const resetLink = document.querySelector(".reset-link");

resetLink.addEventListener("click", () => {
  const checkboxes = document.querySelectorAll(
    '.option input[type="checkbox"]'
  );
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
  searchInput.value = "";
  filterCompetencies(""); // reset filtering
});

// clear search input value
const searchInput = document.getElementById("search-competencies");
const clearIcon = document.querySelector(".search-clear");

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

clearIcon.addEventListener("click", () => {
  clearIcon.classList.remove("active");
  searchInput.value = "";
  searchInput.focus();
  filterCompetencies(""); // reset filtering
});

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
