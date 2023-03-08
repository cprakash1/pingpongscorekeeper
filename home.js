const btn1=document.getElementById('btn1');
const btn2=document.getElementById('btn2');
const btn3=document.getElementById('btn3');
const player1=document.getElementById('player1');
const player2=document.getElementById('player2');
const finale=document.getElementById('numbers');

let winningScore=parseInt(finale.value);

btn3.addEventListener('click',()=>{
    player1.textContent=0;
    player2.textContent=0;
    player1.style="color:black";
    player2.style="color:black";
    btn1.disabled=false;
    btn2.disabled=false;
});
btn1.addEventListener('click',()=>{
    let a=parseInt(player1.textContent);
    let b=parseInt(player2.textContent);
    if(a==parseInt(winningScore) ||b==parseInt(winningScore)){
        return;
    }
    player1.textContent=a+1;
    if(a+1==winningScore){
        player1.classList.add('winner');
        player2.classList.add('loser');
        btn1.disabled=true;
        btn2.disabled=true;
    }
});
btn2.addEventListener('click',()=>{
    let a=parseInt(player1.textContent);
    let b=parseInt(player2.textContent);
    if(b==parseInt(winningScore)||a==parseInt(winningScore)){
        return;
    }
    player2.textContent=b+1;
    if(b+1==winningScore){
        player2.classList.add('winner');
        player1.classList.add('loser');
        btn1.disabled=true;
        btn2.disabled=true;
    }
});
finale.addEventListener('change',()=>{
    winningScore=parseInt(finale.value);
    player1.textContent=0;
    player2.textContent=0;
    player1.classList.remove('winner','loser');
    player2.classList.remove('winner','loser');
    btn1.disabled=false;
    btn2.disabled=false;
});