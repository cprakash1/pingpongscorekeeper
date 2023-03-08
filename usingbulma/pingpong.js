const p1={
    display:document.getElementById('player1'),
    butto:document.getElementById('btn1')
};
const p2={
    display:document.getElementById('player2'),
    butto:document.getElementById('btn2')
};
const select=document.querySelector('#playto');
let winningScore=parseInt(select.value);
const reset=document.querySelector('#btn3');

function restart(arr){
    arr.forEach(element => {
        element.display.textContent=0;
        element.display.classList.remove('has-text-success','has-text-danger');
        element.butto.disabled=false;
    });
}
function UpdateScore(player,opponent){
    player.display.textContent=parseInt(player.display.textContent)+1;
    if(parseInt(player.display.textContent)==winningScore){
        player.display.classList.add('has-text-success');
        opponent.display.classList.add('has-text-danger');
        player.butto.disabled=true;
        opponent.butto.disabled=true;
    }
}

select.addEventListener('change',()=>{
    winningScore=select.value;
    restart([p1,p2]);
});
reset.addEventListener('click',()=>{
    restart([p1,p2]);
});
p1.butto.addEventListener('click',()=>{
    UpdateScore(p1,p2);
});
p2.butto.addEventListener('click',()=>{
    UpdateScore(p2,p1);
});