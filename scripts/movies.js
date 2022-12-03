// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let money=JSON.parse(localStorage.getItem("amount"))||0
document.querySelector("#wallet").innerText=money;

// ==================================================================================================>
let id;
function debou(){
  clearInterval(id);
  id=setTimeout(function(){
    myfunc()
  },1000)
}

function myfunc(){
    let movie=document.getElementById("search").value
    const url=`https://www.omdbapi.com/?apikey=884e255e&type=movie&s=${movie}`      

    fetch(url)
    .then(function(res){
        return res.json()
    }).then(function(res){
        console.log(res)
        mySearch(res.Search)
    });

}

let mainDiv=document.getElementById("movies")

function mySearch(data){
    mainDiv.innerHTML="";

    data.map(function(ele,i){
        let div=document.createElement("div")

        let img=document.createElement("img")
        img.setAttribute("class","movie_tab")
        img.src=ele.Poster

        let title=document.createElement("h3")
        title.setAttribute("class","movie_tab")
        title.innerText=ele.Title

        let btn=document.createElement("button")
        btn.setAttribute("class","book_now")
        btn.innerText="Book now";
        btn.addEventListener("click",function(){
            book(ele,i);
        })
        div.append(img,title,btn)
        mainDiv.append(div)
    })
}




let dataArr=JSON.parse(localStorage.getItem("movie"))||[];

function book(ele,i){
    localStorage.removeItem("movie");
    dataArr.push(ele)
    localStorage.setItem("movie",JSON.stringify(dataArr))
    window.location.href="checkout.html";
}