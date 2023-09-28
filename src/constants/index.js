import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  meta,
  starbucks,
  tesla,
  shopify,
  tripguide,
} from "../assets";

import pinfinity from "../assets/projects/pinfinity.png";
import ai_art from "../assets/projects/ai-art.png";
import library from "../assets/projects/library.png";
import chat from "../assets/projects/chat.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "Good knowledge of Stylings and Logical Programming",
    name: "Baljeet Singh",
    designation: "Professor",
    company: "Chitkara University",
    image:
      "https://images.pexels.com/photos/12824199/pexels-photo-12824199.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    testimonial: "Good knowledge of Problem solving skills",
    name: "Manirup Manna",
    designation: "Friend",
    company: "Chitkara University",
    image:
      "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const projects = [
  {
    name: "Pinfinity",
    description:
      "Web-based platform that allows users to easily share, organize, and discover photos with their friends and followers. Implemented key features such as upload, comments ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Sanity_Client",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Google_API",
        color: "red-text-gradient",
      },
    ],
    image: pinfinity,
    source_code_link: "https://github.com/gopal24-colab/Pinfinity",
  },
  {
    name: "AI Art Gallery",
    description:
      "The AI Art Gallery project is a web application that leverages the power of artificial intelligence to create and showcase unique pieces of artwork.Using user prompts create new artwork using Open AI",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Open AI",
        color: "green-text-gradient",
      },
      {
        name: "Node JS",
        color: "pink-text-gradient",
      },
    ],
    image: ai_art,
    source_code_link: "https://github.com/gopal24-colab/ai-art-gallery",
  },
  {
    name: "Swift Mart - A Ecommerce Website",
    description:
      "A comprehensive Ecommerce platform that allows users to add items in cart, order, and rate the items.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Redux Toolkit",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Node JS",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/gopal24-colab/Swift-Market",
  },
  {
    name: "Chat Hub - A simple real time Chat application",
    description:
      "User can chat with single user And can create a group chat to talk with group members",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Socket.io",
        color: "green-text-gradient",
      },
      {
        name: "Chakra UI",
        color: "pink-text-gradient",
      },
      {
        name: "Node JS",
        color: "blue-text-gradient",
      },
    ],
    image: chat,
    source_code_link: "https://github.com/gopal24-colab/ChatHub",
  },
  {
    name: "Library Mangement Application",
    description:
      "A simple library management application where user can borrow books and return books featured",
    tags: [
      {
        name: "Node JS",
        color: "blue-text-gradient",
      },
      {
        name: "Express JS",
        color: "green-text-gradient",
      },
      {
        name: "EJS",
        color: "pink-text-gradient",
      },
    ],
    image: library,
    source_code_link: "https://github.com/gopal24-colab/Library-Management",
  },
];

export { services, technologies, experiences, testimonials, projects };
