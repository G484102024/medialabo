
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log("開始時間 " + data.list.g1[0].start_time);
  console.log("結束時間 " + data.list.g1[0].end_time);
  console.log("チャンネル " + data.list.g1[0].service.name);
  console.log("番組名 "+data.list.g1[0].title);
  console.log("番組サブタイトル " + data.list.g1[0].subtitle);
  console.log("番組説明文 " + data.list.g1[0].content);
  console.log("出演者 " + data.list.g1[0].act);

  console.log("開始時間 " + data.list.g1[1].start_time);
  console.log("結束時間 " + data.list.g1[1].end_time);
  console.log("チャンネル " + data.list.g1[1].service.name);
  console.log("番組名 "+data.list.g1[1].title);
  console.log("番組サブタイトル " + data.list.g1[1].subtitle);
  console.log("番組説明文 " + data.list.g1[1].content);
  console.log("出演者 " + data.list.g1[1].act);
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  let cha = document.querySelector('#output');
  cha.innerHTML = '';  // 清空内容

  let ul = document.createElement('ul');
  cha.insertAdjacentElement('beforeend', ul);  // 拼写修正

  let li1 = document.createElement("li");
  li1.textContent = '開始時間: ' + data.list.g1[0].start_time;
  ul.insertAdjacentElement('beforeend', li1);

  let li2 = document.createElement("li");
  li2.textContent = '結束時間: ' + data.list.g1[0].end_time;
  ul.insertAdjacentElement('beforeend', li2);

  let li3 = document.createElement("li");
  li3.textContent = 'チャンネル: ' + data.list.g1[0].service.name;
  ul.insertAdjacentElement('beforeend', li3);

  let li4 = document.createElement("li");
  li4.textContent = '番組名: ' + data.list.g1[0].title;
  ul.insertAdjacentElement('beforeend', li4);

  let li5 = document.createElement("li");
  li5.textContent = '番組サブタイトル: ' + data.list.g1[0].subtitle;
  ul.insertAdjacentElement('beforeend', li5);

  let li6 = document.createElement("li");
  li6.textContent = '番組説明文: ' + data.list.g1[0].content;
  ul.insertAdjacentElement('beforeend', li6);

  let li7 = document.createElement("li");
  li7.textContent = '出演者: ' + data.list.g1[0].act;
  ul.insertAdjacentElement('beforeend', li7);
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
document.querySelector('#anniu').addEventListener('click', sendRequest);

// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let selected = document.querySelector('#xuan').value;
  let url = '';

  if (selected === 'first' || selected === 'second') {
    url = 'https://www.nishita-lab.org/web-contents/jsons/nhk/g1-0000-j.json';
  } else {
    alert('検索結果を選択してください。');
    return;
  }

  axios.get(url)
    .then(showResult)
    .catch(showError)
    .then(finish);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;
  let realData = (typeof data === 'string') ? JSON.parse(data) : data;
  let selected = document.querySelector('#xuan').value;
  if (selected === 'first') {
    printDom({ list: { g1: [realData.list.g1[0]] } });
  } else if (selected === 'second') {
    printDom({ list: { g1: [realData.list.g1[1]] } });
  }
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はテレビ番組表のデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること