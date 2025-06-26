 // 答え
let kotae = Math.floor(Math.random()*10) + 1;

// 入力回数（予想回数）
let kaisu = 1;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let l = document.querySelector('button#print');
l.addEventListener('click',hantei);
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
// 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let yoso1 = document.querySelector('input[name="kazu"]').value;
  let yoso = Number(yoso1);
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  let k = document.querySelector('span#kaisu');
  let a = document.querySelector('span#answer');
  let j = document.querySelector('p#result');

  k.textContent = kaisu;
  a.textContent = yoso;
    
  if (kaisu > 3) {
      j.textContent = "ゲームは終わっています。";
      return;
  } else if (kaisu > 3 && yoso !== kotae) {
      j.textContent = "正解は " + kotae + " でした。";
  } else {
      if (kotae > yoso){
        j.textContent = "予想より大きいです。"
      } else if (yoso == kotae){
        j.textContent = "正解です。おめでとう!";
        return;
      }else {
        j.textContent = "予想より小さいです。";
      } 
    }
    kaisu ++;
    if (kaisu > 3 && yoso !== kotae) {
      j.textContent = "正解は " + kotae + " でした。";

    }

}
