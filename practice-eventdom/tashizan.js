function keisan() {
    let a = document.querySelector('input[name="left"]');
    left = a.value;
    let m = Number(left); 
    let c = document.querySelector('input[name="right"]');
    right = c.value;
    let n = Number(right);
    kotae = m + n;
    let p = document.querySelector('span#answer');
    p.textContent = kotae;
}

l = document.querySelector('button#calc');
l.addEventListener('click',keisan);