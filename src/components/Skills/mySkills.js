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
    "Thanks to good knowledge of Flexbox and Grid my websites are responsive. I use SASS/SCSS as a preprocessor",
    cssImg
  ),
  jsSkill = new Skill(
    "Junior",
    "JavaScript",
    "I learn & discover new things every day. I'm familiar with = [loops, ()=>{}, async, promise, HTML DOM];",
    jsImg
  ),
  nodeSkill = new Skill(
    "Junior",
    "Node.js",
    "I've spent some time with Node.js, mainly using Express.js",
    nodeImg
  ),
  bootstrapSkill = new Skill(
    "Junior",
    "Bootstrap",
    "I've used Bootstrap few times. I can read it's documentation or find necessary information pretty fast",
    bootstrapImg
  ),
  gitSkill = new Skill(
    "Junior",
    "GIT",
    "Basics of Git & GitHub (branch, merge, push, pull request, etc.)",
    gitImg
  ),
  vscSkill = new Skill("Junior", "VSC", "Basics of VS Code", vscImg),
  mongodbSkill = new Skill(
    "Junior",
    "MongoDB",
    "Thanks to MongoDB, which I used in few projects, I have basic knowledge about NoSQL databases",
    mongodbImg
  ),
  reactSkill = new Skill(
    "Beginner",
    "React",
    "Few projects in React - portfolio for example. I know hooks, how to pass states etc.",
    reactImg
  ),
  angularSkill = new Skill(
    "Beginner",
    "Angular",
    "My immediate goal is to learn Angular",
    angularImg
  );

export default mySkills;
