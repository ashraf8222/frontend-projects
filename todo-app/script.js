let inputString= document.querySelector(".createtask input");
let addbutton= document.querySelector(".createtask button");
let task= document.querySelector(".task");
let input= document.querySelector(".createtask input");
let Total= document.querySelector(".total");
let completed= document.querySelector(".complete");
let Pending= document.querySelector(".Pending");
let total=0,complete=0,pending=0;


addbutton.addEventListener("click",addTasklist);

function addTasklist(){
    if(inputString.value.trim()!==""){
        
        //elements banaya
        const div= document.createElement("div");
        const input= document.createElement("input");
        const p= document.createElement("p");
        const editbutton= document.createElement("button");
        const delbutton= document.createElement("button");

        //event listener lagana hai button pr
        editbutton.addEventListener("click",function(){
            let updateTesk= prompt("Edit task",p.innerText);
            if(updateTesk!=null && updateTesk!=="")
                p.innerText=updateTesk;
        })
        
        delbutton.addEventListener("click",function(){
                div.remove();
                if(!input.checked){ //tick nhi hua
                total--;
                Total.innerText="Total : "+total;
                pending--;
                Pending.innerText="Pending : "+pending;
                }
                else{  
                    total--;
                    complete--;
                    Total.innerText="Total : "+total;
                    completed.innerText="Completed : "+complete;
                }
        })

       //checkbox or event add krna hai
       input.addEventListener("change",function(){
              if(input.checked){ //tick hua hai
                  complete++;
                  completed.innerText="Completed : "+complete;
                  pending=total-complete;
                  Pending.innerText="Pending : "+pending;
              }
              else{
                if(complete!=0){
                    complete--;
                    completed.innerText="Completed : "+complete;
                    pending=total-complete;
                    Pending.innerText="Pending : "+pending;
                }
              }
       })

        //input main checkbox dalo type mai
        input.type="checkbox";
        
        //button ka type set kro
        editbutton.type="button";
        delbutton.type="button";
        
        //button main text dalo
        editbutton.innerHTML= '<i class="fa-solid fa-pen-to-square"></i>';
        delbutton.innerHTML= '<i class="fa-solid fa-trash-can"></i>';
        
        //div ki class set krna hai same toh css mai stule ki hai
        div.classList.add("containtask");
        
        //saare elements ko div ka chid banana hai
        div.appendChild(input);
        div.appendChild(p);
        div.appendChild(editbutton);
        div.appendChild(delbutton);
        
        
        p.innerText= inputString.value;
        task.appendChild(div);

        //dusre note ke liye input ko clean krna 
        inputString.value="";
        total++;
        pending++;
        Total.innerText="Total : "+total;
        Pending.innerText="Pending : "+pending;
    }
}

input.addEventListener("keydown",function(data){
    if(data.key==="Enter")
        addTasklist();
})