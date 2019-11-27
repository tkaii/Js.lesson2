// 座右の銘
const phrase = '私の好きな言葉は、\'中庸\'です。';
console.log(phrase);

document.body.innerHTML =
  `
  <p>${phrase}</p>
  `

const obj1 = {
  name: "Toshi",
  relationship: "母"
};

document.body.innerHTML =
  `
  <p>家族の名前：${obj1.name}</p>
  <p>私との関係：${obj1.relationship}</p>
  `


const today = new Date();
const Year = today.getFullYear();
const Month = today.getMonth();
const Date = today.getDay();

alert(Year+"年"+Month+"月"+Date+"日");
