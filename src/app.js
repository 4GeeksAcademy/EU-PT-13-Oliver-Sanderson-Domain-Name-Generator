/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
};

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extensions = [".com", ".net", ".co.uk"];

const generateDomainNames = () => {
  const arr = [];
  for (let p in pronoun) {
    for (let a of adj) {
      noun.forEach(n => {
        for (let e = 0; e < extensions.length; e++) {
          console.log(pronoun[p] + a + n + extensions[e]);
        }
      });
    }
  }
  return arr;
};

generateDomainNames();
