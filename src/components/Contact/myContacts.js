import facebookIMG from "../../images/facebook-icon.png";
import gitIconIMG from "../../images/git-icon.png";
import linkedinIMG from "../../images/linkedin-icon.png";
import emailIMG from "../../images/email-icon.png";

const myContacts = [];
function Contact(name, url, img) {
  this.name = name;
  this.url = url;
  this.img = img;
  myContacts.push(this);
}

const myLinkedin = new Contact(
    "Linkedin",
    "https://www.linkedin.com/in/mateusz-wasil/",
    linkedinIMG
  ),
  myEmail = new Contact("Email", "mailto:wasil.mateusz@gmail.com", emailIMG),
  myFacebook = new Contact(
    "Facebook",
    "https://www.facebook.com/mateuszwasil",
    facebookIMG
  ),
  myGit = new Contact("GitHub", "https://github.com/Wasil47", gitIconIMG);

export default myContacts;
