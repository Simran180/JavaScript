let mybtn = document.querySelector('#btn');
console.log(mybtn.style);
mybtn.style.backgroundcolor = "green";
console.log(mybtn.style);
let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta<b> practice";
document.querySelector('body').append(p);
let btns = document.querySelectorAll("#btn");
function seewhat()
{
   alert("tunnnntunnnn");
}
for(btnn of btns)
{
    btnn.onclick = function abc()
    {
        alert("Don't click my button!");
    }
    // btnn.onmouseenter = seewhat;//assign name only don't add paranthesis
}
//DOM EVENTS: events are signals that something has occured
//onclick , onmousepointer
//addEventListner: to add multiple tasks to event , onlclick and onmouseenter etc can add only one
for(i of btns)
{
    // i.onclick = ()=>{alert("hello ");};
    // i.onclick = ()=>{alert("hieee");};
    i.addEventListener("click",()=>{alert("hello");});
    i.addEventListener("click",()=>{alert("hieee");});
}