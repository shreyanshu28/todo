let lists = [];
let list = JSON.parse(localStorage.getItem("lists")) || [];

function getData() {
  if (list !== "null") {
    for (let index = 0; index < list.length; index++) {
      const element = list[index];
      CreateList(element);
    }
  }
  document.getElementById("input-field").value = "";
}

function addData(event) {
  if (event.keyCode == 13) {
    let text = document.getElementById("input-field").value;

    CreateList(text);

    document.getElementById("input-field").value = "";

    console.log(`AddData Called ${text}`);
    lists.push(text);
    list.push(text);
    localStorage.setItem("lists", JSON.stringify(lists));
    localStorage.setItem("lists", JSON.stringify(list));
  }
}

function CreateList(value) {
  let node = document.createElement("li");
  let textnode = document.createTextNode(`${value}`);
  let butt = document.createElement("button");
  butt.innerHTML = `<i class="fas fa-trash"></i>`;
  node.appendChild(textnode);
  node.appendChild(butt);
  document.getElementById("ul").appendChild(node);
}

function ButtClick() {
  document.querySelector(".list").addEventListener("click", function (event) {
    console.log("TAG SELECTED : " + event.target.tagName);
    // console.log(this.id);
    // deleteList(event.target);

    val = event.target;
    // let tgt = event.target.parentElement;
    let name = val.parentElement.tagName;
    console.log("PARENT ELEMENT : " + `${name}`);
    if (name === "LI") {
      val.parentElement.remove();
      // removeItem(val);
      let idx = lists.indexOf(val.parentElement.textContent);
      list.splice(idx, 1);
      localStorage.setItem("lists", JSON.stringify(list));
    } else if (name === "BUTTON") {
      val.parentElement.parentElement.remove();
      // removeItem(val);
      let idx = lists.indexOf(val.parentElement.parentElement.textContent);
      list.splice(idx, 1);
      localStorage.setItem("lists", JSON.stringify(list));
    }
  });
}

ButtClick();

document
  .getElementById("themeSwitch")
  .addEventListener("change", function (Event) {
    event.target.checked
      ? document.body.setAttribute("data-theme", "dark")
      : document.body.removeAttribute("data-theme");
  });
