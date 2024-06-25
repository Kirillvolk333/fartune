const wheel=document.querySelector(".wheel");
const startbuuton=document.querySelector(".button");
const box=document.querySelector(".displayBox");
let deg=0;
let zona=45;
const symbols={
    1:"frog",
    2:"snail",
    3:"dolphin",
    4:"ledibug",
    5:"koala",
    6:"unicorn",
    7:"dragon",
    8:"snowman",
}

const winner=(aktualdeg)=>{
    const nam=Math.ceil(aktualdeg/zona);
    box.innerHTML=symbols[nam];
    console.log("WINNE");
};

wheel.addEventListener('transitionend',()=>{
    wheel.classList.remove("blur");
    startbuuton.style.pointerEvents="auto";
    wheel.style.transition="none";
    const aktualdeg=deg%360;
    wheel.style.transform=`rotate(${aktualdeg}deg)`;
    winner(aktualdeg);
});



startbuuton.addEventListener('click',()=>{
    box.innerHTML="----";
    startbuuton.style.pointerEvents="none";
    wheel.style.transition="all 10s ease-out";
    deg=Math.floor(5000+Math.random()*5000);
    wheel.style.transform=`rotate(${deg}deg)`;
    wheel.classList.add("blur");
});
