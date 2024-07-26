var timer=document.getElementById("timer");
(function Start(event)
{
    var sec=0;
    timer=setInterval(()=>
    {
    timer.innerHTML-"00:"+sec;
    sec++;
    }, 1000)//each sec

})