let div = document.querySelector("div");
div.addEventListener("mouseout",function()
{
    console.log("you are outside the div now!");
});
let pointer = document.querySelector(".pointer");
let pos = Math.floor(Math.random()*100);
pointer.style.position = "relative";
pointer.style.left = `${pos}px`;
pointer.style.top = `${pos}px`;
let move = document.querySelector(".move");
function movement(event)
{
    if(event.code == "KeyU")
    {
        console.log("up");
        move.style.top = `${move.style.top}-10px`;
    }
    else if(event.code == "KeyR")
    {
        console.log("right");
        move.style.left = `${move.style.left}+20px`
    }
    else if(event.code == "KeyD")
    {
        console.log("down");
        move.style.top = `${move.style.top}+20px`;
    }
    else if(event.code = "KeyL")
    {
        console.log("left");
        move.style.left = `${move.style.left}-10px`
    }
    else
    {
        alert("Press right key!");
    }
}
let inp = document.querySelector(".game input");
inp.addEventListener("keypress",movement);

let div2 = document.querySelector('.scroll');
div2.addEventListener("scroll",function()
{
    div2.style.backgroundColor = "white";
});
let input = document.querySelector("#name");
input.addEventListener("input",function(event)
{
    let h2 = document.querySelector("h2");
    h2.innerHTML = this.value;
})