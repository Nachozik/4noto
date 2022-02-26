const startButton = document.getElementById('start');
const log = document.getElementById('log');
let vertical = prompt("Высота");
let horizontal = prompt("Ширина");
let mex = 0;
let mey = 0;

for (let i=0;i<vertical;i++){
    let creatorY = document.createElement('div');
    creatorY.classList.add('x'+i);
    creatorY.classList.add('x');
    for (let j = 0; j<horizontal; j++){
        let creatorX = document.createElement('div');
        creatorX.classList.add('y'+j);
        creatorX.classList.add('y');
        if (j%2===1){
            creatorX.classList.add("secondRow")
        }
        creatorX.innerText = i+","+j;
        creatorY.append(creatorX);
    }
    log.append(creatorY);
}
vertical--;
horizontal--;

function resetMe(){
    me = document.querySelector('.x'+mex+' .y'+mey);
    me.innerHTML="Я";
    me.setAttribute('id', 'me');
}
function unsetMe(){
    me.innerHTML=mex+","+mey;
    me.setAttribute('id', 'null')
}

let me = document.querySelector('.x'+mex+' .y'+mey);
me.innerHTML="Я";
const moveDownRight = document.querySelector('#down .right');
moveDownRight.onclick = () =>{
    unsetMe();
    if (mey%2===1&&mey+1>horizontal||mey%2===1&&mex+1>vertical){
        console.log("Стоим")
    }else if(mey%2===1&&mey+1<=horizontal&&mex+1<=vertical){
        mex+=1;
        mey+=1;
    } else if(mey+1<=horizontal){
        mey+=1;
    }
    resetMe();
};
const moveDown = document.querySelector('#down .down');
moveDown.onclick = () =>{
    unsetMe();
    if(mex+1<=vertical){
        mex+=1;
    } else {
        console.log("Стоим")
    }
    resetMe();
};
const moveDownLeft = document.querySelector('#down .left');
moveDownLeft.onclick = () =>{
    unsetMe();
    if(mey%2===1&&mex+1>vertical){
        console.log("Стоим");
    }else if(mey%2===1&&mex+1<=vertical&&mey-1>=0){
        mex+=1;
        mey-=1;
    } else if(mey-1>=0){
        mey-=1;
    }
    resetMe();
};
const moveUpRight = document.querySelector('#up .right');
moveUpRight.onclick = () =>{
    unsetMe();
    if(mey%2===1&&mey+1<=horizontal){
        mey+=1;
    } else if(mey+1<=horizontal&&mex-1>=0){
        mex-=1;
        mey+=1;
    } else {
        console.log("Стоим")
    }
    resetMe();
};
const moveUp = document.querySelector('#up .up');
moveUp.onclick = () =>{
    unsetMe();
    if((mex-1)>=0){
    mex-=1;
    } else {
        console.log("Стоим")
    }
    resetMe();
};
const moveUpLeft = document.querySelector('#up .left');
moveUpLeft.onclick = () =>{
    unsetMe();
    if(mey%2===1&&mey-1>=0){
        mey-=1;
    } else if(mey-1>=0&&mex-1>=0){
        mey-=1;
        mex-=1;
    } else {
        console.log("Стоим")
    }
    resetMe();
};
