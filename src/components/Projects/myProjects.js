import reactAppsImg from "../../images/react-apps.JPG";
import blogImg from "../../images/blog.JPG";
import dotsImg from "../../images/particules.JPG";

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

const reactApps = new Project(
  "React Apps",
  "React, Bootstrap",
  "Simple Apps in React: ToDo + Weather Api",
  reactAppsImg,
  "https://github.com/Wasil47/React-ToDo-Weather",
  "https://wasil47.github.io/React-ToDo-Weather/"
);
const blog = new Project(
  "Blog",
  "Node.js, Bootstrap, MongoDB, ejs",
  "Small BLOG project. You can add posts to static page (array in app.js) or to mongo database.",
  blogImg,
  "https://github.com/Wasil47/Blog",
  "https://blog-mongo.herokuapp.com/"
);

const dots = new Project (
  "Particules/Dots",
  "JavaScript canvas",
  "Made for fun, trying to use it as BG on my portfolio but mobilephones were lagging. Going to improve it one day.",
  dotsImg,
  "https://github.com/Wasil47/dots-particules",
  "https://wasil47.github.io/dots-particules/"
)

export default myProjects;
