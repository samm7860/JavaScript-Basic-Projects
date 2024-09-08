const clock=document.getElementById('clock');
setInterval(function(){             //setInterval method give exact time after every 1000ms(1sec)
    let date=new Date()
    clock.innerHTML=date.toLocaleTimeString()
},1000);


