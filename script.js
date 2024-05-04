// Nav bar show and hide code
let openNav = document.querySelector("#open-nav");
let closeNav = document.querySelector("#close-nav");
let navBar = document.querySelector("#header-right");

openNav.addEventListener("click", (e) => {
  navBar.style.left = "0";
});
closeNav.addEventListener("click", (e) => {
  navBar.style.left = "-100%";
});

// Creating and Showing all Course module cards in second section
let moduleContainer = document.querySelector('#modules-container');
let cards = [
  {
    img: "images/Digital-Marketing-Introduction.jpg",
    heading: "Digital Marketing Introduction",
    link: "#",
  },
  {
    img: "images/Digital-Marketing-Vs.jpg",
    heading: "Digital Marketing Vs. Traditional Marketing",
    link: "#",
  },
  {
    img: "images/Blogging-Freelancing-to-Make-Money.jpg",
    heading: "Blogging & Freelancing to Make Money",
    link: "#",
  },
  {
    img: "images/Search-Engine-Optimization.jpg",
    heading: "Search Engine Optimization",
    link: "#",
  },
  {
    img: "images/Social-Media-Marketing.jpg",
    heading: "Social Media Marketing",
    link: "#",
  },
  {
    img: "images/Digital-Marketing-Tools.jpg",
    heading: "Digital Marketing Tools",
    link: "#",
  },
  {
    img: "images/Google-Display-Ads.jpg",
    heading: "Google & Display Ads",
    link: "#",
  },
  {
    img: "images/E-Mail-Marketing.jpg",
    heading: "E-Mail Marketing",
    link: "#",
  },
  {
    img: "images/Content-Marketing.jpg",
    heading: "Content Marketing",
    link: "#",
  },
  {
    img: "images/Affiliate-Marketing.jpg",
    heading: "Affiliate Marketing",
    link: "#",
  },
  {
    img: "images/Website-Planning-Process.jpg",
    heading: "Website Planning Process",
    link: "#",
  },
  {
    img: "images/Video-Marketing.jpg",
    heading: "Video Marketing",
    link: "#",
  },
];

cards.forEach((item) => {
  let card = document.createElement("div");
  card.classList.add("module-card");
  card.innerHTML = `<div class="module-img">
    <img src=${item.img} alt="">
</div>
<h2>${item.heading}</h2>
<a href=${item.link} class="btns">Know More</a>`;

moduleContainer.appendChild(card)
});
