var plusbutton=document.querySelector(".plusbutton")
var popupcontainer=document.querySelector(".popupcontainer")
function popupopen(){
    popupcontainer.style.display="block"
} 
var cancelbutton=document.querySelector(".cancelbutton")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupcontainer.style.display="none"
})
var container=document.querySelector(".container")
var inputbookname=document.getElementById("inputbookname")
var inputauthorname=document.getElementById("inputauthorname")
var inputdiscription=document.getElementById("inputdiscription")
var addbutton=document.querySelector(".addbutton")
addbutton.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${inputbookname.value}</h2>
    <h5>${inputauthorname.value}</h5>
    <p>${inputdiscription.value}</p>
    <button class="deletebutton" onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupcontainer.style.display="none"

})

function deletebook(event){
    event.target.parentElement.remove()
}