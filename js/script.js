/**
 * 1. the first listener with DomContentLoaded, this is to make that the html is loaded before the javascript runs.
 * 2. the first if with mouse over, this is to check if your html is does exist when you mouse it over.
 * 3. the third is the conditional statement with the use of ===
 */

document.addEventListener("DOMContentLoaded", function(){
    const btn = document.querySelector("button");
    const txt =  document.querySelector("p");

    if(btn){
        btn.addEventListener("mouseover", function(){
            console.log("Mouse over!");
        });
    } else {
        console.error("Error: Button does not exist!");
    }


    function updateBtn(){
        if(btn.textContent === "Start Machine"){
            btn.textContent = "Stop Machine";
            txt.textContent = "The machine has started!";
        } else {
            btn.textContent = "Start Machine";
            txt.textContent = "The machine is stopped!";
        }
    }

    btn.addEventListener("click", updateBtn);
});

