let imgs = document.querySelectorAll(".actions img");
let userDis = document.querySelector(".user img");
let botDis = document.querySelector(".bot img");
imgs.forEach((img) => {
  img.onclick = () => {
    let userValue = img.getAttribute("alt");
    startGame(userValue);
    userDis.src = img.src;
  };
});
let userScore = 0;
let botScore = 0;

function startGame(user) {
  let imgArr = ["paper", "stone", "scissor"];
  let userEle = document.querySelector(".points .user");
  let botEle = document.querySelector(".points .bot");
  let p = document.querySelector("p");

  let randomPosi = imgArr[Math.floor(Math.random() * imgArr.length)];

  if (
    (user === "paper" && randomPosi === "stone") ||
    (user === "stone" && randomPosi === "scissor") ||
    (user === "scissor" && randomPosi === "paper")
  ) {
    userScore += 1;
    p.innerHTML = `You wins this round!`;
  } else if (user === randomPosi) {
    p.innerHTML = `It's a tie!`;
  } else {
    botScore += 1;
    p.innerHTML = `Bot wins this round!`;
  }

  botDis.src = `./Photos/${randomPosi}.png`;

  userEle.innerHTML = userScore;
  botEle.innerHTML = botScore;
}
