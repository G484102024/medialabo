
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  let programs = data.list.g1;

  for (let program of programs) {
    console.log("タイトル:", program.title);
    console.log("サブタイトル:", program.subtitle);
    console.log("開始時刻:", program.start_time);
    console.log("終了時刻:", program.end_time);
    console.log("サービス名:", program.service.name);
    console.log("エリア:", program.area.name);
    console.log("出演者:", program.act || "情報なし");
    console.log("------");
  }
}

// 課題5-1 の関数 printDom() はここに記述すること

function printDom(data) {
  let oldDiv = document.getElementById('result');
  if (oldDiv) {
    oldDiv.remove();
  }

  let div = document.createElement('div');
  div.id = 'result';
  document.body.insertAdjacentElement('beforeend',div);

  if (!data.list || (data.list && Object.keys(data.list).length === 0)) {
  div.textContent = '該当する番組が見つかりません';
  return;
}

  const keys = Object.keys(data.list);
  const programs = data.list[keys[0]];

  for (let program of programs) {
    let item = document.createElement('div');
    item.style.marginBottom = '1em';

    let title = document.createElement('p');
    title.textContent = 'タイトル: ' + program.title;
    item.insertAdjacentElement('beforeend',title);

    let subtitle = document.createElement('p');
    subtitle.textContent = 'サブタイトル: ' + program.subtitle;
    item.insertAdjacentElement('beforeend',subtitle);

    let start = document.createElement('p');
    start.textContent = '開始時刻: ' + program.start_time;
    item.insertAdjacentElement('beforeend',start);

    let end = document.createElement('p');
    end.textContent = '終了時刻: ' + program.end_time;
    item.insertAdjacentElement('beforeend',end);

    let service = document.createElement('p');
    service.textContent = 'サービス名: ' + program.service.name;
    item.insertAdjacentElement('beforeend',service);

    let area = document.createElement('p');
    area.textContent = 'エリア: ' + program.area.name;
    item.insertAdjacentElement('beforeend',area);

    let act = document.createElement('p');
    act.textContent = '出演者: ' + (program.act || '情報なし');
    item.insertAdjacentElement('beforeend',act);

    let line = document.createElement('hr');
    item.insertAdjacentElement('beforeend',line);

    div.insertAdjacentElement('beforeend',item);
  }
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
document.getElementById("tv-form").addEventListener("submit", function (event) {
    event.preventDefault();
    sendRequest();
});    

// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
    const service = document.getElementById("service").value;
    const genre = document.getElementById("genre").value;

    const url = `https://www.nishita-lab.org/web-contents/jsons/nhk/${service}-${genre}-j.json`;

    axios.get(url)
        .then(showResult)   
        .catch(showError)   
        .then(finish);      
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
    const data = resp.data;
    if (typeof data === 'string') {
    data = JSON.parse(data);
  }
    printDom(data);
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