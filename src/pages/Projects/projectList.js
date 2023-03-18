import SneakexImage from "../../assets/images/sneakex.png";
import ShiktonImage from "../../assets/images/shikton.png";
import TdigitalImage from "../../assets/images/tdigital.png";

export const projectList = [
  {
    id: 1,

    description:
      "I developed an experimental webshop project for SNEAKEX, a sneakers shop, using React JS, TypeScript, and Bootstrap. The website is under development and will soon have Stripe integration for secure payments. I also utilized React context to manage the state of the website. The project features a homepage, product pages, and shopping cart functionality. Further developments are underway to make the website fully functional and responsive.",
    image: SneakexImage,
    technologies: ["React JS", "TypeScript", "Bootstrap"],
    demoLink: "https://spectacular-medovik-3664c7.netlify.app/",
    codeLink: "https://github.com/hanifb1360/sneakex",
  },
  {
    id: 2,

    description:
      "The project I worked on is a web application built with React JS as the frontend framework, Strapi as the backend CMS, and Stripe as the payment gateway.<br/><br/> The application is styled using Sass, a CSS preprocessor that provides a more efficient and flexible way to write CSS. The backend of the application is deployed on Render.com, a cloud platform that simplifies the deployment process with a user-friendly interface. The frontend is deployed on Firebase, a scalable and secure platform for web and mobile applications.",
    image: ShiktonImage,
    technologies: ["React JS", "Strapi", "Stripe", "Firebase"],
    demoLink: "https://shikton-webshop.web.app/",
    codeLink: "https://github.com/hanifb1360/e-commerce-shikton",
  },
  {
    id: 3,

    description:
      "This project uses Gatsby.js and WordPress to create a lightning-fast and easy-to-use website with reusable UI elements. By incorporating web components, we achieve faster development times, improved consistency, and easier maintenance, resulting in a powerful and scalable website that provides an excellent user experience for businesses and organizations seeking to enhance their online presence.",
    image: TdigitalImage,
    technologies: ["Gatsby JS", "WordPress", "Sass"],
    demoLink: "https://www.tdigital.se/",
    codeLink: "",
  },
];
