<script>$(document).foundation();</script>;

// accordion section

const chevronIcons = document.querySelectorAll(
  ".accordion-link .chevron-down-outline"
);

chevronIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const answer = icon.closest(".accordion-link").querySelector(".answer");
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = "20rem"; // Adjust the max height as needed
    }
  });
});

// --------------------------------------------------------------------------------

// MAP FUNCTIONALITY

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-button");
  const mapIframe = document.querySelector("iframe");
  const searchForm = document.querySelector(".search-form");

  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const searchTerm = searchInput.value;
    const mapURL = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d16248869.764090814!2d-0.659277356415363!3d5.793566685576677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1695287690752!5m2!1sen!2sng&q=${encodeURIComponent(
      searchTerm
    )}`;
    mapIframe.src = mapURL;
  });
});
