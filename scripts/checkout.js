// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time


let dataArr=JSON.parse(localStorage.getItem("movie"))||[];

console.log(dataArr.length)
let money=JSON.parse(localStorage.getItem("amount"))||0

document.getElementById("wallet").innerText=money;

function myFunc(){
    let seats = document.getElementById("number_of_seats").value;
    console.log(seats);
    let total = Number(seats)*100;
    if(total<=money && seats!=='' && dataArr.length!=0){
        money-=total;
        alert("Booking successful!");
        localStorage.setItem("amount",JSON.stringify(money));
        document.getElementById("wallet").innerHTML=money;
        localStorage.removeItem('movie');
        window.location.reload();
    }else if(seats===''){
        alert("please select seat")
    }else if(dataArr.length==0){
        alert("please choose a movie")
    }else{
        alert("Insufficient Balance!")
    }  
}

let mainDiv=document.getElementById("movie");

dataArr.map(function(ele,i){
    let main=document.createElement("div")
    
    let img=document.createElement("img")
    img.src=ele.Poster;

    let title=document.createElement("h2")
    title.innerText=ele.Title

    main.append(title,img)
    mainDiv.append(main)
    
})