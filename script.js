
/*let val = document.getElementById("money");

let money = parseInt(val.innerHTML, 10);
console.debug(money);


function buy(input,cost) {
  let amount = parseInt(input.value, 10);
  if (!isNaN(amount)) {
    money -= cost*amount;
    val.innerHTML = money;
  }
}

function sell(input,cost) {
  let amount = parseInt(input.value, 10);
  if (!isNaN(amount)) {
    money += cost*amount;
    val.innerHTML = money;
  }
}*/
let val = document.getElementById("money");

// Retrieve the money value from localStorage or set it to 100 if not present
let money = parseInt(localStorage.getItem("money")) || 100;
val.innerHTML = money;
console.debug(money);

function updateMoney() {
  val.innerHTML = money;
  localStorage.setItem("money", money);
}

function buy(input, cost) {
  let amount = parseInt(input.value, 10);
  if (!isNaN(amount)) {
    money -= cost * amount;
    updateMoney();
  }
}

function sell(input, cost) {
  let amount = parseInt(input.value, 10);
  if (!isNaN(amount)) {
    money += cost * amount;
    updateMoney();
  }
}