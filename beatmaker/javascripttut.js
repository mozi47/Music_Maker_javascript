window.addEventListener('load',()=>{
    const sounds= document.querySelectorAll(".sound");
    const pads= document.querySelectorAll(".pad div");
    const visual= document.querySelector(".visual");
    const text= document.querySelector(".visual h1");
    const colors=[
            '#AB00FF',
            '#64DB97',
            '#FF0000',
            '#FFB300',
            '#0091FF',
            '#FF7AFF'
    ];


    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            sounds[index].currentTime=0;
            sounds[index].play();
            createball(index);
        });
    });

    const createball= index =>{
        const balls=document.createElement("div");
        visual.appendChild(balls);
        text.style.color=colors[index];
        balls.style.backgroundColor=colors[index];
        balls.style.animation="jump 1s ease";
        balls.addEventListener('animationend',function(){
            visual.removeChild(this);
        });
    };

});

