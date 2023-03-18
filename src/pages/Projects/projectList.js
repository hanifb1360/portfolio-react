import SneakexImage from "../../assets/images/sneakex.png";
import ShiktonImage from "../../assets/images/shikton.png";
import TdigitalImage from "../../assets/images/tdigital.png";

export const projectList = [
  {
    id: 1,
    title: "Sneakex",
    description:
      "I developed an experimental webshop project for SNEAKEX, a sneakers shop, using React JS, TypeScript, and Bootstrap. The website is under development and will soon have Stripe integration for secure payments. I also utilized React context to manage the state of the website. The project features a homepage, product pages, and shopping cart functionality. Further developments are underway to make the website fully functional and responsive.",
    image: SneakexImage,
    technologies: ["React JS", "TypeScript", "Bootstrap"],
    demoLink: "https://example.com/demo",
    codeLink: "https://github.com/example/project1",
  },
  {
    id: 2,
    title: "Shikton",
    description:
      "The project I worked on is a web application built with React JS as the frontend framework, Strapi as the backend CMS, and Stripe as the payment gateway.<br/><br/> The application is styled using Sass, a CSS preprocessor that provides a more efficient and flexible way to write CSS. The backend of the application is deployed on Render.com, a cloud platform that simplifies the deployment process with a user-friendly interface. The frontend is deployed on Firebase, a scalable and secure platform for web and mobile applications.<br/><br/> The application allows users to create an account, browse through a list of products, and purchase them using Stripe as the payment method. The products are managed through Strapi, which provides an easy-to-use interface for content creation and management. The user interface is designed to be responsive, accessible, and user-friendly, with a clean and modern design.<br/><br/> The application also includes features such as user authentication, cart management, and order tracking. Overall, this project demonstrates the use of modern web development technologies to build a scalable, secure, and functional web application that provides a seamless user experience.",
    image: ShiktonImage,
    technologies: ["React JS", "Strapi", "Stripe", "Sass", "Firebase"],
    demoLink: "https://shikton-webshop.web.app/",
    codeLink: "https://github.com/hanifb1360/e-commerce-shikton",
  },
  {
    id: 3,
    title: "tDigital",
    description:
      "Our project utilizes the latest web technologies to create a dynamic and engaging website. Gatsby.js, a modern website framework that uses React and GraphQL, is used to generate static files that are lightning-fast and optimized for performance.<br/><br/> WordPress is integrated with Gatsby.js to provide an easy-to-use content management system, making it simple to manage and publish content online. In addition, our project takes advantage of web components to create reusable UI elements that can be easily integrated into different parts of the website.<br/><br/> Web components are a set of standardized browser features that enable the creation of reusable components for web applications. This allows for faster development times and improved consistency throughout the website. By combining Gatsby.js, WordPress, and web components, we have created a powerful and scalable website that provides a great user experience. The use of web components also allows for more efficient development and easier maintenance, making it a great solution for businesses and organizations looking to improve their online presence.",
    image: TdigitalImage,
    technologies: ["Gatsby JS", "WordPress", "Sass"],
    demoLink: "https://www.tdigital.se/",
    codeLink: "https://github.com/example/project1",
  },
];
