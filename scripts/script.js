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

    lists.push(text);
    localStorage.setItem("lists", JSON.stringify(lists));
    console.log(`AddData Called ${lists}`);
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
    let name = event.target.parentElement.tagName;
    console.log("PARENT ELEMENT : " + `${name}`);
    if (name === "LI") {
      val.parentElement.remove();
    } else if (name === "BUTTON") {
      val.parentElement.parentElement.remove();
    }
  });
}

// function deleteList(val) {
//   console.log("parent element " + val.parentElement.tagName);

//   let name = val.parentElement.tagName;

//   if (name == "LI") {
//     val.parentElement.remove();
//   } else if ((name = "span")) {
//     val.parentElement.parentElement.remove();
//   }
// }

ButtClick();

// document.getElementById("ul").addEventListener("click", function (e) {
//   let tgt = e.target;
//   if (tgt.tagName.toUpperCase() == "LI") {
//     tgt.parentNode.removeChild(tgt); // or tgt.remove();
//   }
// });
