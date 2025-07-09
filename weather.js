
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log("経度: " + data.coord.lon);
  console.log("緯度: " + data.coord.lat);
  console.log("天気: " + data.weather[0].description);
  console.log("最低気温: " + data.main.temp_min);
  console.log("最高気温: " + data.main.temp_max);
  console.log("湿度: " + data.main.humidity + "%");
  console.log("風速: " + data.wind.speed + "m/s");
  console.log("風向: " + data.wind.deg + "度");
  console.log("都市名: " + data.name);

}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  let d=document.querySelector("div#result");
  d.textContent = '';
  

  let ul = document.createElement('ul');
  
  
  d.insertAdjacentElement('beforeend', ul);
  

  let li1 = document.createElement('li');
  li1.textContent = '都市名: ' + data.name;
  ul.insertAdjacentElement('beforeend', li1);

  let li2 = document.createElement('li');
  li2.textContent = '経度: ' + data.coord.lon;
  ul.insertAdjacentElement('beforeend', li2);

  let li3 = document.createElement('li');
  li3.textContent = '緯度: ' + data.coord.lat;
  ul.insertAdjacentElement('beforeend', li3);

  let li4 = document.createElement('li');
  li4.textContent = '天気: ' + data.weather[0].description;
  ul.insertAdjacentElement('beforeend', li4);

  let li5 = document.createElement('li');
  li5.textContent = '最高気温: ' + data.main.temp_max + '°C';
  ul.insertAdjacentElement('beforeend', li5);

  let li6 = document.createElement('li');
  li6.textContent = '最低気温: ' + data.main.temp_min + '°C';
  ul.insertAdjacentElement('beforeend', li6);

  let li7 = document.createElement('li');
  li7.textContent = '湿度: ' + data.main.humidity + '%';
  ul.insertAdjacentElement('beforeend', li7);

  let li8 = document.createElement('li');
  li8.textContent = '風速: ' + data.wind.speed + ' m/s';
  ul.insertAdjacentElement('beforeend', li8);

  let li9 = document.createElement('li');
  li9.textContent = '風向: ' + data.wind.deg + '°';
  ul.insertAdjacentElement('beforeend', li9);

}



// 課題6-1 のイベントハンドラ登録処理は以下に記述




// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {

}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {

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
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};
