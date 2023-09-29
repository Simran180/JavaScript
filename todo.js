let input = document.querySelector("input");
let btn = document.querySelector("button");
btn.addEventListener("click",function()
{
    let ul = document.querySelector("ul");
    // ul.innerHTML = `${ul.innerHTML} <li>${input.value}</li>`; THIS IS ALSO RIGHT

    let li = document.createElement("li");
    let dltbtn = document.createElement("button");
    dltbtn.innerText = "Delete this task";
    li.innerText = input.value;
    ul.appendChild(li);
    li.appendChild(dltbtn);
    dltbtn.addEventListener("click",function()
    {
        li.remove();
    })
});
//Event Delegation:
// let button = document.querySelectorAll('ul button');
// console.dir(button);
// for(btns of button)
// {
//     btns.addEventListener("click",function()
//     {
//         console.log("button was clicked");
//     })
// }

let ul = document.querySelector('ul');
ul.addEventListener("click",function(event)
{
    if(event.target.nodeName == "BUTTON")
    {
        console.log("button was clicked");
        let parent = event.target.parentElement;
        parent.remove();
    }
});