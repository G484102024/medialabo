//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];

//////////////// ここから下にプログラムを書きたそう!
function show(){
	let l = document.createElement('p');
	l.textContent =campus.address;
	let u = document.querySelector('h2#addr');
	u.insertAdjacentElement('afterend',l); 

	let c =document.createElement('ul');  
	b = document.querySelector('h2#dept');
	b.insertAdjacentElement('afterend',c);

	for (const s of gakka) {
		a = document.createElement('li');  
		a.textContent = s.name;
		c.insertAdjacentElement('beforeend',a);
	}
	e = document.querySelector('button#show');
	e.remove();  
}
k = document.querySelector('button#show');
k.addEventListener('click', show); 


