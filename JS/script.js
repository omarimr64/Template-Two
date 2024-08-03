"use strict";

let activeButton = "all";
const projectsContainer = document.querySelector(".portfolio .image-container");
const filterButton = document.querySelectorAll(".portfolio .shuffle li");
const data = [
  {
    title: "Mobile Application",
    type: "app",
  },
  {
    title: "Good paper",
    type: "print",
  },
  {
    title: "Dark place",
    type: "photography",
  },
  {
    title: "Awesome website",
    type: "web",
  },
  {
    title: "Super hero",
    type: "photography",
  },
  {
    title: "Big box",
    type: "photography",
  },
  {
    title: "Awesome application",
    type: "app",
  },
  {
    title: "Art design",
    type: "print",
  },
];

const filtering = function () {
  if (activeButton === "all") {
    for (let i = 0; i < data.length; i++) {
      projectsContainer.innerHTML += `
    <div class="box">
      <img src="images/shuffle-0${i + 1}.jpg" />
      <div class="caption">
        <h4>${data[i].title}</h4>
        <p>${data[i].type}</p>
      </div>
    </div>
  `;
    }
  } else {
    for (let i = 0; i < data.length; i++) {
      if (data[i].type === activeButton) {
        projectsContainer.innerHTML += `
        <div class="box">
        <img src="images/shuffle-0${i + 1}.jpg" />
        <div class="caption">
          <h4>${data[i].title}</h4>
          <p>${data[i].type}</p>
        </div>
      </div>`;
      }
    }
  }
};

filtering();

for (let i = 0; i < filterButton.length; i++) {
  filterButton[i].addEventListener("click", () => {
    for (let j = 0; j < filterButton.length; j++) {
      filterButton[j].classList.remove("active");
    }
    filterButton[i].classList.add("active");
    activeButton = filterButton[i].innerHTML;
    projectsContainer.innerHTML = "";
    filtering();
    // console.log(activeButton);
  });
}
