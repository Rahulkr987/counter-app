
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const resetvalue = document.getElementById("resetvalue");
const counter = document.getElementById("counter");


let counteValue = 0;

increment .addEventListener('click', () => {
    counteValue++;
    counter.innerText = counteValue;
});

decrement .addEventListener('click', () => {
    counteValue--;
    counter.innerText = counteValue;
});

resetvalue .addEventListener('click', () => {
    counteValue = 0;
    counter.innerText = counteValue;
});
