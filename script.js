const Days = {
    "new-year": "01 Jan ${new Date().getFullYear()+1}",
    "Christmas": "",
    1: "some value"
};
  
function getDateOfChoice() {
    let events=document.getElementById('select-event');
    let choice=events.options[events.selectedIndex].value;
    let date;
    switch(choice) {
        case "new-year":
            date=`01 Jan ${new Date().getFullYear()+1}`;
            document.body.style.backgroundImage = "url('assets/new-year.jpg')";
            break;
        case "my-birth-day":
            year = (Date.now() > Date.parse(`08 Mar ${new Date().getFullYear()}`)) ? new Date().getFullYear()+1:new Date().getFullYear();
            date=`08 Mar ${year}`
            document.body.style.backgroundImage = "url('assets/birthday.jpg')";
            break;
        case "Christmas":
            year = (Date.now() > Date.parse(`25 Dec ${new Date().getFullYear()}`)) ? new Date().getFullYear()+1:new Date().getFullYear();
            date=`25 Dec ${year}`;
            document.body.style.backgroundImage = "url('assets/christmas.jpg')";
            break;
        default:
            date=`01 Jan ${new Date().getFullYear()+1}`;
    }
    console.log(date);
    return date;
}

function countdown(){
    let now=Date.now();
    let event=Date.parse(getDateOfChoice())
    let milisecondsBetween=event-now;
    let days=Math.floor(milisecondsBetween/(1000*60*60*24));
    let hours=Math.floor((milisecondsBetween/(1000*60*60))%24);
    let mins=Math.floor(((milisecondsBetween/(1000*60)))%60);
    let seconds=Math.floor(((milisecondsBetween/(1000)))%60);


    let numberDays=document.getElementById('Days');
    numberDays.innerHTML=days;

    let numberHours=document.getElementById('Hours');
    numberHours.innerHTML=hours;

    let numberMins=document.getElementById('Mins');
    numberMins.innerHTML=mins;

    let numberSeconds=document.getElementById('Seconds');
    numberSeconds.innerHTML=seconds;
    
}

setInterval(countdown,1000);
