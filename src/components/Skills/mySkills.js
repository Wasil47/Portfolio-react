import htmlImg from "../../images/html5.png";
import cssImg from "../../images/css3.png";
import jsImg from "../../images/js2.png";
import nodeImg from "../../images/node2.png";
import bootstrapImg from "../../images/bootstrap.png";
import mongodbImg from "../../images/mongodb.png";
import gitImg from "../../images/git.png";
import vscImg from "../../images/vsc.png";
import reactImg from "../../images/react.png";
import angularImg from "../../images/angular.png";
import reduxImg from "../../images/redux.png";
import mysqlImg from "../../images/mysql.png";
import postmanImg from "../../images/postman.png";
import mysqlWorkbenchImg from "../../images/mysql-workbench.png";

const mySkills = [];
function Skill(level, tittle, content, img) {
  this.level = level;
  this.tittle = tittle;
  this.content = content;
  this.img = img;
  mySkills.push(this);
}

// skill list
const htmlSkill = new Skill(
    "Regular",
    "HTML",
    "I'm familiar with Semantic HTML, RWD and mobile first",
    htmlImg
  ),
  cssSkill = new Skill(
    "Regular",
    "CSS",
    "Thanks to good knowledge of Flexbox and Grid my websites are responsive. I use Sass as a preprocessor",
    cssImg
  ),
  jsSkill = new Skill(
    "Junior",
    "JavaScript",
    "I have strong javascript (ES6) basics, I know when and how to use its built-in methods and functions. I am able to write dynamic pages in pure (vanilla) JS",
    jsImg
  ),
  reactSkill = new Skill(
    "Junior",
    "React",
    "Solid knowledge, I know React design principles and patterns, I understand and know how to use hooks, states, forms etc.",
    reactImg
  ),
  nodeSkill = new Skill(
    "Junior",
    "Node.js",
    "I've spent some time with Node.js mainly using Express.js, I am able to create backend for blogs, websites and simple eCommerce",
    nodeImg
  ),
  bootstrapSkill = new Skill(
    "Junior",
    "Bootstrap",
    "I use it to improve and accelerate work on a project, I can quickly search the documentation and find the information I need",
    bootstrapImg
  ),
  mongodbSkill = new Skill(
    "Junior",
    "MongoDB",
    "Strong basics, Thanks to MongoDB, which I used in few projects, I have basic knowledge about NoSQL databases",
    mongodbImg
  ),
  gitSkill = new Skill(
    "Beginner",
    "GIT",
    "Basics of Git & GitHub (branch, checkout, merge, push, pull request, etc.)",
    gitImg
  ),
  angularSkill = new Skill(
    "Beginner",
    "Angular",
    "Basic knowledge, design patterns, structure",
    angularImg
  ),
  reduxSkill = new Skill(
    "Beginner",
    "Redux",
    "Basics of creating and using reducers, actions, selector, dispatch",
    reduxImg
  ),
  mySqlSkill = new Skill(
    "Beginner",
    "MySQL",
    "Basic knowledge of SQL databases, commands, creating tables, connecting and sending server-database queries",
    mysqlImg
  ),
  vscSkill = new Skill(
    "Beginner",
    "VSC",
    "Visual Studio Code - code editor I use most often",
    vscImg
  ),
  postmanSkill = new Skill(
    "Beginner",
    "Postman",
    "I use Postman to send queries like GET, POST etc.",
    postmanImg
  ),
  mySqlWorkbenchSkill = new Skill(
    "Beginner",
    "Workbench",
    "I use MySQL Workbench to add, edit and send queries and receive data from mySQL databases",
    mysqlWorkbenchImg
  );

export default mySkills;
