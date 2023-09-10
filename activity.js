let btn = document.querySelector("#clr");
let ele1 = document.querySelector("h2");
let ele2 = document.querySelector("div");
btn.addEventListener("click",function()
{
    let a = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let c = Math.floor(Math.random()*255);
    ele1.innerText = `rgb(${a},${b},${c})`;
    ele2.style.backgroundColor = `rgb(${a},${b},${c})`;
} );
ele2.addEventListener("mouseenter",()=>{alert("inside color");});
//this in event listener:
btn.addEventListener("mouseenter",function (){
    alert(this.innerText);
    this.style.backgroundColor = "pink";});
function changecolor()
{
    this.style.backgroundColor = "blue";
}
let h3 = document.querySelector("h3");
let p = document.querySelector('p');
let h1 = document.querySelector("h1");
h1.addEventListener("click",changecolor);
h3.addEventListener("click",changecolor);
p.addEventListener("click",changecolor);
//keyboard events:
//we have a default event in the callback function:
h3.addEventListener("click",function(event)
{
    console.log(event);
});
h3.addEventListener("dblclick",function(event)
{
    console.log(event);
});
let inp = document.querySelector('#form');
// inp.addEventListener("keypress",function(even)
// {
//     console.log("key was pressed");
//     console.log(even.code);
//     console.log(even.key);
// })
// inp.addEventListener("keydown",function(even)
// {
//     console.log("key was released");
//     console.log(even.key);
// })
//ArrowUp for forward ArrowDown for backward ArrowLeft for left ArrowRight for right
// inp.addEventListener("keyup",function(ev) // keyup keydown are able to detect arrow events but keypress not
// {
//     if(ev.code == "ArrowUp")
//     {
//         console.log("moved upward");
//     }
//     else if(ev.code == "ArrowDown")
//     {
//         console.log("moved downward");
//     }
//     else if(ev.code == "ArrowLeft")
//     {
//         console.log("moved left");
//     }
//     else if(ev.code == "ArrowRight")
//     {
//         console.log("moved right");
//     }
//     else
//     {
//         console.log("pressed wrong key");
//     }
// });
let form = document.querySelector('form');
form.addEventListener("submit",function(event)
{
    event.preventDefault();
    // console.dir(form.elements);
    // console.log("form sumbitted");
    // let name = document.querySelector("#form");
    // let pass = document.querySelector("#form1");
    // let details = document.querySelector("#form2");
    // alert(`your name is ${name.value} password is ${pass.value} and details are ${details.value}`);
    
    
    // let inpp = document.querySelectorAll('.form');
    // for(input of inpp)
    // {
    //     console.log(input);
    //     console.log(input.value);
    // }
    // for(let i = 0; i < form.length; i++)
    // {
    //        console.log(form[i]);
    //        console.log(this.elements[i].value); //form.element[0].value
    // }

    console.log(inp,"hi");
    //change event: track the event when it's value is changed
    inp.addEventListener("change",function(event)
    {
        console.log("using change value changed");
        console.log(this.value);
    })
});
//input event: track every change:
    inp.addEventListener("input",function()
    {
        console.log("using input value changed");
        console.log(this.value);
    })