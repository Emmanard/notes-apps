const notesContainer = document.querySelector(".notes-container");
const createNtn = document.querySelector(".ntn");
let notes=document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();


function updatestorage(){
    localStorage.setItem("notes",notesContainer.innerHTML)
}

createNtn.addEventListener("click", ()=>{
    let inputbox = document.createElement("p")
    let img = document.createElement("img")
     inputbox.className="input-box";
    inputbox.setAttribute("contenteditable","true")
    img.src= "images/delete.png";
    notesContainer.appendChild(inputbox).appendChild(img);
})

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updatestorage();
    }
    else if(e.target.tagName === "p"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updatestorage();
            }
        })
    }
})

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertlinebreak");
        event.preventDefault();
    }
})