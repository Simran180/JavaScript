//Event bubbling:
let div = document.querySelector('div');
let ul = document.querySelector('ul');
let li = document.querySelectorAll('li');
div.addEventListener("click",function(event)
{
    console.log("div was clicked");
});
ul.addEventListener("click",function(event)
{
    event.stopPropagation();
    console.log("ul was clicked");
});
for(lis of li)
{
    lis.addEventListener("click",function(event)
{
    event.stopPropagation();
    console.log("li was clicked");
});
}

