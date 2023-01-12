const openMenu = document.querySelector(".open-menu .btn");
const closeMenu = document.querySelector(".close-menu");
const menuItems = document.querySelector(".menu-items");
const navMobile = document.querySelectorAll('#nav-mobile li')


openMenu.addEventListener("click", () => {
  menuItems.classList.add("open");
  openMenu.classList.add("close");
});
closeMenu.addEventListener("click", () => {
  menuItems.classList.remove("open");
  openMenu.classList.remove("close");
});
navMobile.forEach(li => {
  li.addEventListener('click', ()=>{
    menuItems.classList.remove("open");
    openMenu.classList.remove("close");
  })
});

const featuredSpeaker = [
  {
    title: "speaker1",
    img: "./assets/images/Shawn-img.png",
    name: "Shawn Wang ",
    status: "Software Engineer at Amazon",
    detail:
      "With years of experience, David will be enlightening us on the future of frontend development.",
  },
  {
    title: "speaker2",
    img: "./assets/images/Emma-img.png",
    name: "Emma Bostian  ",
    status: "Software Engineer at Spotify",
    detail:
      "I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck.",
  },
  {
    title: "speaker3",
    img: "./assets/images/sir-tim.jpg",
    name: "Sir Tim Berners-Lee ",
    status: "Inventor of the World Wide Web",
    detail:
      "I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck.",
  },
  {
    title: "speaker4",
    img: "./assets/images/steve-wozniak.jpg",
    name: "Sir Tim Berners-Lee ",
    status: "Co-founder of Apple",
    detail:
      "I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck.",
  },
  {
    title: "speaker5",
    img: "./assets/images/Thomas Dohmke 1(1).jpg",
    name: "Thomas Dohmke ",
    status: "CEO, GitHub",
    detail:
      "I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck.",
  },
  {
    title: "speaker6",
    img: "./assets/images/joel-spolsky.jpg",
    name: "Joel Spolsky ",
    status: "Founder of Stack Overflow, Trello, Glitch, and HASH",
    detail:
      "I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck.",
  },
];

// Speaker Section

const speakerSection = document.getElementById("speakers");
const speakerTitle = document.createElement("div");
speakerTitle.className = "title flex";
speakerSection.appendChild(speakerTitle);
const title = document.createElement("h3");
title.innerText = "Featured Speakers";
const bar = document.createElement("span");
bar.className = "bar";

speakerTitle.appendChild(title);
speakerTitle.appendChild(bar);

const speakerContainer = document.createElement("section");
speakerContainer.className = "speaker";
const btnMore = document.createElement("div");
btnMore.className = "btn-more flex";
const buttonMore = document.createElement("button");
btnMore.appendChild(buttonMore);
const moreText = 'MORE <i class="fa-solid fa-chevron-down"></i>';
const lessText = 'LESS <i class="fa-solid fa-chevron-up"></i>';
buttonMore.innerHTML = moreText;

let num = window.innerWidth >= 768 ? featuredSpeaker.length : 2;

// Create function to generate the speakers Section
const generateSpeakers = () => {
  for (let i = 0; i <featuredSpeaker.slice(0, num).length ; i += 1) {
    const { img, name, status, detail } = featuredSpeaker[i];
    const speaker = document.createElement("section");
    speaker.className = "speaker";
    const speakerItem = document.createElement("div");
    speakerItem.className = "speaker-item flex";

    const profileContainer = document.createElement("div");
    profileContainer.className = "profile-container";
    const prfileImg = document.createElement("img");
    prfileImg.className = "prfile-img";
    prfileImg.src = img;
    const bgImg = document.createElement("div");
    bgImg.className = "bg-img";
    const speakDetails = document.createElement("div");
    speakDetails.className = "details flex";
    const speakName = document.createElement("h3");
    speakName.textContent = name;

    const speakStatus = document.createElement("h6");
    speakStatus.textContent = status;
    const bar = document.createElement("span");
    bar.className = "bar";
    const speakDetail = document.createElement("p");
    speakDetail.textContent = detail;

    // Append Child to the parent

    speakerSection.append(speaker, btnMore);
    // speakerTitle.append(title, bar);

    speaker.appendChild(speakerItem);
    speakerItem.append(profileContainer, speakDetails);
    profileContainer.append(prfileImg, bgImg);
    speakDetails.append(speakName, speakStatus, bar, speakDetail);
  }
};

generateSpeakers();

btnMore.addEventListener("click", () => {
  if (buttonMore.innerHTML === moreText) {
    num = featuredSpeaker.length;
    speakerSection.innerHTML = "";
    buttonMore.innerHTML = lessText;

    generateSpeakers();
  } else if (buttonMore.innerHTML === lessText) {
    num = 2;
    speakerSection.innerHTML = "";
    buttonMore.innerHTML = moreText;
    generateSpeakers();
  }
});

window.addEventListener('resize', ()=>{
 if (window.innerWidth< 768) {
  num =2
  speakerSection.innerHTML = "";
  generateSpeakers()
 }else{
  num = featuredSpeaker.length
  speakerSection.innerHTML = "";
  generateSpeakers()
 }
})
