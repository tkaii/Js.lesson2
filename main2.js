function motto() {
  const phrase = '私の好きな言葉は、\'中庸\'です。';
  const main = document.getElementById('main');
  const p = document.createElement('p');
  p.innerHTML = `<p>${phrase}</p>`
  main.appendChild(p);
}

function family() {
  const obj1 = {
    name: "Toshi",
    relationship: "母"
  }
  const main = document.getElementById('main');
  const p = document.createElement('p');
  p.innerHTML = 
    `
    <p>家族の名前：${obj1.name}</p>
    <p>私との関係：${obj1.relationship}</p>
    `
  main.appendChild(p);
}

motto();
family();


