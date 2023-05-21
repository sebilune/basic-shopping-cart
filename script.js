const ul = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");

function addItem() {
  let inputValue = input.value;
  input.value = "";

  const li = document.createElement("li");
  const span = document.createElement("span");
  const btnTwo = document.createElement("button");

  span.textContent = inputValue;
  btnTwo.textContent = "Remove";

  ul.appendChild(li);
  li.appendChild(span);
  li.appendChild(btnTwo);

  btnTwo.addEventListener("click", () => li.remove());

  input.focus();
}

btn.addEventListener("click", addItem);
