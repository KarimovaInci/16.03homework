let input=document.querySelector("#todo");
let addBtn=document.querySelector(".btn-primary");
let list=document.querySelector("ul");
let errormsg=document.querySelector(".errormsg");
let clearAll = document.querySelector(".btn-dark");

addBtn.addEventListener("click",function (e)  {
    e.preventDefault ();
    let li = document.createElement("li");
    li.classList.add("list-group-item");
    li.classList.add("d-flex");
    li.classList.add("justify-content-between");
    li.classList.add("align-items-center");
    let span = document.createElement("span");
    span.classList.add("lead");
    span.textContent = input.value;
    let button = document.createElement("button");
    button.classList.add("btn");
    button.classList.add("btn-primary");
    button.classList.add("delete");
    button.style.marginRight = "5px";
    button.innerHTML=`<i class="fa-sharp fa-solid fa-trash"></i>`;
    let markBtn=document.createElement("button");
    markBtn.classList.add("btn");
    markBtn.classList.add("btn-info");
    markBtn.innerHTML=`<i class="fa-sharp fa-solid fa-square-check"></i>`;

    let btnWrapper=document.createElement("div");
    btnWrapper.append(button,markBtn)
    
    
    
    
    li.append(span,btnWrapper);
    list.append(li);
    input.value="";

    let deleteBtns = document.querySelectorAll(".delete");
    deleteBtns.forEach(deleteBtn => {
        deleteBtn.addEventListener("click",function (e) {
            e.target.parentElement.parentElement.parentElement.remove();
            
        });    
    });

    let markBtns=document.querySelectorAll(".btn-info");
    markBtns.forEach(markBtn => {
        markBtn.addEventListener("click",function (e) {
            let donetodo= e.target.parentElement.parentElement.previousElementSibling
            donetodo.style.textDecoration = "line-through";            
        });


    });
});    

    input.addEventListener("keyup", function (e) {
        if (e.target.value.trim().length<4) {
        errormsg.style.display="block";
        addBtn.setAttribute("disabled","")

        }
        else{
        errormsg.style.display="none"; 
        addBtn.removeAttribute("disabled");       
        }  
    })

    