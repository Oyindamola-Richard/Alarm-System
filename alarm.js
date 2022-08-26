const song = new Audio('crazy-chicken.mp3');

const timeDisp = ()=>{
    const time = new Date();
    
    const hour = timeFormat((time.getHours()))
    const minutes = timeFormat((time.getMinutes()))
    const seconds = timeFormat((time.getSeconds()))
    clock.innerHTML = `${hour} : ${minutes} : ${seconds}`
}
setInterval(timeDisp, 1000);

const timeFormat = (timer)=>{
    if(timer<10){
    return '0'+timer
    }
    else{
        return timer
    }
}


const setAlarm = ()=>{
    let alarmHrs = hours.value;
    let alarmMin = minutes.value;
    alarmTime = new Date();
    
    if(alarmHrs == alarmTime.getHours() && alarmMin == alarmTime.getMinutes()){
        // alert("wake up")
        song.play()
    }
    setInterval("setAlarm()", 1000);
}
const snooze = ()=>{
    
}

const hey = ()=>{
    alert('Answer this Question')
    var wake = prompt('DO YOU HAVE CLASS TODAY?','yes or no')
    if(wake == "no"){
        alert('REST ON BRUV')
        location.reload() 
    }
    else if (wake == "yes"){
        alert('WAKE UP ALAYE')
    }
    
}