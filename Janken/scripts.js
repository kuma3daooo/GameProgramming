// カウンタの初期値
let winCount = 0;
let loseCount = 0;
let drowCount = 0;
let AllCount = 0;
let guCount = 0;
let paCount = 0;
let chokiCount = 0;

// 要素の取得
let myHandgu = document.getElementById("mgu");
let myHandpa = document.getElementById("mpa");
let myHandchoki = document.getElementById("mchoki");

let youHandgu = document.getElementById("gu");
let youHandchoki = document.getElementById("choki");
let youHandpa = document.getElementById("pa");

// 結果表示要素の取得
let uptxt = document.getElementById("result");
let winPoint = document.getElementById("winP");
let losePoint = document.getElementById("loseP");
let drowPoint = document.getElementById("drowP");
let allPoint = document.getElementById("AllP");
let winPercent = document.getElementById("percent");
let Sgucount = document.getElementById("Sgu");
let Spacount = document.getElementById("Spa");
let Schokicount = document.getElementById("Schoki");

// 相手の手をランダムに選ぶ
function startjanken(yourchoice) {
    const hands = ["gu", "choki", "pa"];
    const randomHands = Math.floor(Math.random() * hands.length);
    
    // コンソールに相手の手を出力
    console.log("enemy hand is:", hands[randomHands]);

    // 自分の手を表示
    if (yourchoice === "gu") {
        myHandgu.style.display = 'block';
        myHandpa.style.display = 'none';
        myHandchoki.style.display = 'none';
    } else if (yourchoice === "pa") {
        myHandpa.style.display = 'block';
        myHandgu.style.display = 'none';
        myHandchoki.style.display = 'none';
    } else if (yourchoice === "choki") {
        myHandchoki.style.display = 'block';
        myHandgu.style.display = 'none';
        myHandpa.style.display = 'none';
    }

    // 相手の手を表示
    if (hands[randomHands] === "pa") {
        youHandpa.style.display = 'block';
        youHandgu.style.display = 'none';
        youHandchoki.style.display = 'none';
    } else if (hands[randomHands] === "choki") {
        youHandchoki.style.display = 'block';
        youHandgu.style.display = 'none';
        youHandpa.style.display = 'none';
    } else if (hands[randomHands] === "gu") {
        youHandgu.style.display = 'block';
        youHandpa.style.display = 'none';
        youHandchoki.style.display = 'none';
    }

    // 勝敗判定
    if (yourchoice === "pa" && hands[randomHands] === "gu") {
        console.log("my hand is:", yourchoice);
        console.log("win");
        uptxt.textContent = "結果: You Win!!";
        winCount++;
    } else if (yourchoice === "pa" && hands[randomHands] === "choki") {
        console.log("my hand is:", yourchoice);
        console.log("lose");
        uptxt.textContent = "結果: You Lose!!";
        loseCount++;
    } else if (yourchoice === "gu" && hands[randomHands] === "choki") {
        console.log("my hand is:", yourchoice);
        console.log("win");
        uptxt.textContent = "結果: You Win!!";
        winCount++;
    } else if (yourchoice === "gu" && hands[randomHands] === "pa") {
        console.log("my hand is:", yourchoice);
        console.log("lose");
        uptxt.textContent = "結果: You Lose!!";
        loseCount++;
    } else if (yourchoice === "choki" && hands[randomHands] === "pa") {
        console.log("my hand is:", yourchoice);
        console.log("win");
        uptxt.textContent = "結果: You Win!!";
        winCount++;
    } else if (yourchoice === "choki" && hands[randomHands] === "gu") {
        console.log("my hand is:", yourchoice);
        console.log("lose");
        uptxt.textContent = "結果: You Lose!!";
        loseCount++;
    } else if (yourchoice === hands[randomHands]) {
        console.log("my hand is:", yourchoice);
        console.log("drow");
        uptxt.textContent = "結果: Drow";
        drowCount++;
    } else {
        console.log("my hand is:", yourchoice);
        console.log("error");
        uptxt.textContent = "エラーが発生しました！";
    }

    // 試合数の増加
    AllCount++;

    // 使用回数のカウントと表示
    if (yourchoice === "gu") {
        guCount++;
        Sgucount.textContent = guCount + "回";
    } else if (yourchoice === "pa") {
        paCount++;
        Spacount.textContent = paCount + "回";
    } else if (yourchoice === "choki") {
        chokiCount++;
        Schokicount.textContent = chokiCount + "回";
    }

    // 勝敗数の表示
    winPoint.textContent = "勝利数: " + winCount + "回";
    losePoint.textContent = "敗北数: " + loseCount + "回";
    drowPoint.textContent = "あいこの数: " + drowCount + "回";
    allPoint.textContent = "試合数: " + AllCount + "回";

    // 勝率の計算と表示
    let winPercentage = (AllCount > 0) ? ((winCount / AllCount) * 100).toFixed(2) : 0;
    winPercent.textContent = "勝率: " + winPercentage + "％";

    console.log("No. " + AllCount);
}
