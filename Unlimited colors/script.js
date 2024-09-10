const randomColor=function(){
    const hex="0123456789ABCDEF"
    let color='#'
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]         // it get the value between 1 and 16
    }
    return color
};
let IntervalId
const startChanging=function(){
    IntervalId=setInterval(changeBgColor,1000)
    function changeBgColor(){
        document.body.style.backgroundColor=randomColor();
    }
};

const stopChanging=function(){
        clearInterval(IntervalId)
        IntervalId=null
};
 document.querySelector('#start').addEventListener('click',startChanging)
 document.querySelector('#stop').addEventListener('click',stopChanging)

 

