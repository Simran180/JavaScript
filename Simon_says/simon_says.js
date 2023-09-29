let gameseq = [];
let userseq = [];
let started = false;
let level = 0;
let highscore = 0;
let h2 = document.querySelector("h2");

//step1 : to start the game on pressing any key
document.addEventListener("keypress",function()
{
    if(!started)
    {
        started = true;
    }
    levelUp();
})
//step2: to flash any random button on starting the game
function btnflash(btn)
{
    btn.classList.add("flash");
    setTimeout(function()
    {
        btn.classList.remove("flash");
    },500);
}
// to generate the random color:
function levelUp()
{
    userseq = [];
    level++;
    h2.innerHTML = `Level ${level}`;
    let ran = Math.floor(Math.random()*4)+1;
    let flash_div = document.querySelector(`.child${ran}`);
    gameseq.push(`child${ran}`);
    btnflash(flash_div);
}

//step3: adding event listner on buttons:

function btnpress()
{
    btnflash(this);
    let btn = this.getAttribute("id");
    userseq.push(btn);
    checkans(userseq.length-1);
}

let allbtns = document.querySelectorAll(".child");
for(btn of allbtns)
{
    btn.addEventListener("click",btnpress);
}

//step4: matching sequence:
function checkans(index)
{
    if(userseq[index] == gameseq[index])
    {
        if(userseq.length == gameseq.length)
        {
            setTimeout(levelUp,1000);
        }
    }
    else
    {
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        },500);
        highscore = Math.max(highscore,level);
        h2.innerHTML = `Game Over! your score was <b>${level} highest score = ${highscore} Press any key to start again!`;
        //when game is over we have to reset game!
        reset();
    }
}
//to restart the game
function reset()
{
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}