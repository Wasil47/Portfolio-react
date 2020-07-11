import reactAppsImg from "../../images/react-apps.JPG";
import blogImg from "../../images/blog.JPG";
import dotsImg from "../../images/particules.JPG";
import portfolioReactImg from "../../images/portfolio-react.JPG";
import ecommerceImg from "../../images/ecommerce.JPG";

const myProjects = [];
function Project(name, tech, content, img, gitUrl, liveUrl) {
  this.name = name;
  this.tech = tech;
  this.content = content;
  this.img = img;
  this.gitUrl = gitUrl;
  this.liveUrl = liveUrl;
  myProjects.push(this);
}

const ecommerce = new Project(
  "eCommerce",
  "React, Node.js + express, Bootstrap, mySQL",
  "Simple eCommerce project. Frontend in React + Bootstrap;\n Backend in Node.js + Express + mySQL",
  ecommerceImg,
  "https://github.com/Wasil47/eCommerce",
  "https://ecommerce-react-nodejs.herokuapp.com/"
);

const blog = new Project(
  "Blog",
  "Node.js, Bootstrap, MongoDB, ejs",
  "Small BLOG project. You can add posts to static page (array in app.js) or to mongo database.",
  blogImg,
  "https://github.com/Wasil47/Blog",
  "https://blog-mongo.herokuapp.com/"
);

const dots = new Project(
  "Particules/Dots",
  "JavaScript canvas",
  "Made for fun, trying to use it as BG on my portfolio but mobilephones were lagging. Going to improve it one day.",
  dotsImg,
  "https://github.com/Wasil47/dots-particules",
  "https://wasil47.github.io/dots-particules/"
);

const reactApps = new Project(
  "React Apps",
  "React",
  "Simple Apps in React: ToDo + Weather Api",
  reactAppsImg,
  "https://github.com/Wasil47/React-ToDo-Weather",
  "https://wasil47.github.io/React-ToDo-Weather/"
);

const portfolioReact = new Project(
  "myPortfolio - React",
  "React, Sass (scss), JS",
  "My one-page portfolio create with React",
  portfolioReactImg,
  "https://github.com/Wasil47/myPortfolio-react",
  "https://wasil47.github.io/myPortfolio-react/"
);

export default myProjects;
