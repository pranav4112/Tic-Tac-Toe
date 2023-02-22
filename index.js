let playButtons = document.querySelectorAll('.play-surface');

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');
let btn7 = document.getElementById('btn7');
let btn8 = document.getElementById('btn8');
let btn9 = document.getElementById('btn9');

let resultContent = document.getElementById('content');

let restart = document.getElementById('restart');
let turn=0;

playButtons.forEach(button => {
    button.addEventListener('click',()=>{
        turn++;
        if(turn%2 != 0){
            button.innerHTML = "x";
            button.disabled = true;
        }
        else {
            button.innerHTML = "o";
            button.disabled = true;
        }

        check(); 
    })
})

restart.addEventListener('click',()=>{
    for(b of playButtons){
        b.innerHTML = "";
        b.disabled = false;
    }
    turn = 0;
})

function check(){
    if(btn1.innerHTML == btn2.innerHTML && btn1.innerHTML == btn3.innerHTML && btn1.innerHTML != ""){
        result(btn1);
    }
    else if(btn4.innerHTML == btn5.innerHTML && btn4.innerHTML == btn6.innerHTML && btn4.innerHTML != ""){
        result(btn4);
    }
    else if(btn7.innerHTML == btn8.innerHTML && btn7.innerHTML == btn9.innerHTML && btn7.innerHTML != ""){
        result(btn7);
    }
    else if(btn1.innerHTML == btn4.innerHTML && btn1.innerHTML == btn7.innerHTML && btn1.innerHTML != ""){
        result(btn1);
    }
    else if(btn2.innerHTML == btn5.innerHTML && btn2.innerHTML == btn8.innerHTML && btn2.innerHTML != ""){
        result(btn2);
    }
    else if(btn3.innerHTML == btn6.innerHTML && btn3.innerHTML == btn9.innerHTML && btn3.innerHTML != ""){
        result(btn3);
    }
    else if(btn1.innerHTML == btn5.innerHTML && btn1.innerHTML == btn9.innerHTML && btn1.innerHTML != ""){
        result(btn1);
    }
    else if(btn3.innerHTML == btn5.innerHTML && btn3.innerHTML == btn7.innerHTML && btn3.innerHTML != ""){
        result(btn3);
    }
    else if(turn==9){
        draw();
    }
}

function result(value){
    document.querySelector('.container').style.opacity = "0.05";
    document.querySelector('.result').style.visibility = "visible";

    resultContent.innerHTML = `Congrats..&#128515; <br> <span>'${value.innerHTML}'</span> Wins`;

    playButtons.forEach(button =>{
        button.disabled = true;
    })
    restart.disabled = true;
    restart.style.cursor = "default";
    
}

function draw(){
    document.querySelector('.container').style.opacity = "0.05";
    document.querySelector('.result').style.visibility = "visible";

    resultContent.innerHTML = `Well Played..&#128526; <br> Match Draw`;

    playButtons.forEach(button =>{
        button.disabled = true;
    })
    restart.disabled = true;
    restart.style.cursor = "default";
}

again.addEventListener('click',()=>{
    for(b of playButtons){
        b.innerHTML = "";
        b.disabled = false;
    }
    restart.disabled = false;
    turn = 0;

    document.querySelector('.container').style.opacity = "1";
    document.querySelector('.result').style.visibility = "hidden";
    restart.style.cursor = "pointer";
})