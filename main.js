// 座右の銘
let word = "中庸";
const phrase = '私の好きな言葉は、${word}です。';

const obj1 = {
  name: "Toshi",
  relationship: "母"
};

document.body.innerHTML =
  `
  <p>私の好きな言葉は、${word}です。</p>
  <p>家族の名前：${obj1.name}</p>
  <p>私との関係：${obj1.relationship}</p>
  `

var today = new Date();
var Year = today.getFullYear();
var Month = today.getMonth();
var Date = today.getDay();

alert(Year+"年"+Month+"月"+Date+"日");

