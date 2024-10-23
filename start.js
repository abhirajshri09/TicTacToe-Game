let a = 1;
let con = document.querySelector("#container");
let check = 0;
let result = document.querySelector("#result");
con.addEventListener("click", function (event) {
  if (event.target.classList.contains("boxes")) {
    if (a == 9) {
      result.innerText = "No one wins!";
      con.style.pointerEvents = "none";
    }
    if (a % 2 == 0) {
      event.target.innerText = "O";
      a++;
    } else {
      event.target.innerText = "X";
      a++;
    }
    event.target.style.pointerEvents = "none";
    event.target.style.textAlign = "centre";
    event.target.style.justifyContent = "center";
    event.target.style.alignItems = "center";
    event.target.style.display = "flex";
    event.target.style.color = "black";
    event.target.style.fontSize = "50px";

    for (let i = 0; i <= 2; i++) {
      let xcount = 0;
      let ocount = 0;
      for (let j = 0; j <= 2; j++) {
        if (con.children[i].children[j].innerText == "X") {
          xcount++;
        } else if (con.children[i].children[j].innerText == "O") {
          ocount++;
        }
      }
      if (xcount == 3 || ocount == 3) {
        if (xcount == 3) {
          check = 1;
        } else {
          check = 2;
        }
        break;
      }
    }

    for (let j = 0; j <= 2; j++) {
      let xcount = 0;
      let ocount = 0;
      for (let i = 0; i <= 2; i++) {
        if (con.children[i].children[j].innerText == "X") {
          xcount++;
        } else if (con.children[i].children[j].innerText == "O") {
          ocount++;
        }
      }
      if (xcount == 3 || ocount == 3) {
        if (xcount == 3) {
          check = 1;
        } else {
          check = 2;
        }
        break;
      }
    }

    if (
      con.children[0].children[0].innerText == "X" &&
      con.children[1].children[1].innerText == "X" &&
      con.children[2].children[2].innerText == "X"
    ) {
      check = 1;
    }
    if (
      con.children[0].children[2].innerText == "X" &&
      con.children[1].children[1].innerText == "X" &&
      con.children[2].children[0].innerText == "X"
    ) {
      check = 1;
    }

    if (
      con.children[0].children[0].innerText == "O" &&
      con.children[1].children[1].innerText == "O" &&
      con.children[2].children[2].innerText == "O"
    ) {
      check = 2;
    }
    if (
      con.children[0].children[2].innerText == "O" &&
      con.children[1].children[1].innerText == "O" &&
      con.children[2].children[0].innerText == "O"
    ) {
      check = 2;
    }

    if (check == 1) {
      console.log("PLAYER 1 WINS");
      result.innerText = "Player 1 wins!";
      con.style.pointerEvents = "none";
    } else if (check == 2) {
      console.log("PLAYER 2 WINS");
      result.innerText = "Player 2 wins!";
      con.style.pointerEvents = "none";
    }
  }

  let restart = document.querySelector("#restart");
  restart.addEventListener("click", function () {
    location.reload();
  });
});
