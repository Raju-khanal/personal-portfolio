let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    btn.innerText = "Downloaded"
    alert("clicked download");
})
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");

btn1.addEventListener("click", () => {
    btn1.innerText = "Viewed";
    alert("Wait");
});
btn2.addEventListener("click", () => {
    btn2.innerText = "Viewed";
    alert("Wait");
});
btn3.addEventListener("click", () => {
    btn3.innerText = "Viewed";
    alert("Wait");
});
btn4.addEventListener("click", () => {
    btn4.innerText = "Viewed";
    alert("Wait");
});

