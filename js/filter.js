const filters = document.querySelector(".all-filters");

// link to competencies in all filters
const competencies = document.querySelector(
  ".filter[data-type='competencies']"
);

// competencies content
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
const resetCompetenciesFilters = document.querySelector(".reset-link");
const resetAllFilters = document.querySelector(".reset-button");

resetAllFilters.addEventListener("click", () => {
  const checkboxes = document.querySelectorAll(
    '.option input[type="checkbox"]'
  );
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
});

resetCompetenciesFilters.addEventListener("click", () => {
  const competenciesCheckboxes = document.querySelectorAll(
    '.competencies-filters__filters .option input[type="checkbox"]'
  );
  competenciesCheckboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
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
  // searchInput.focus();
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

// exit from full page filters (mobile only)
const exitFilters = document.querySelector(".exit-filters");
const openFilters = document.querySelector(".open-filters");
const openFiltersButton = document.querySelector(".open-filters .button");
const filtersContainer = document.querySelector(".filters");

exitFilters.addEventListener("click", () => {
  filtersContainer.classList.remove("active");
  if (window.innerWidth <= 600) {
    document.body.style.overflow = "auto";
  }
});

openFilters.addEventListener("click", () => {
  filtersContainer.classList.add("active");
  if (window.innerWidth <= 600) {
    document.body.style.overflow = "hidden";
  }
});

const mq = window.matchMedia("(max-width: 1075px)");

document.addEventListener("click", (e) => {
  if (
    mq.matches &&
    !openFiltersButton.contains(e.target) &&
    !filtersContainer.contains(e.target)
  ) {
    filtersContainer.classList.remove("active");
  }
});
