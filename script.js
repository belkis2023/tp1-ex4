//we're gonna be using event delegation, maaneha bch n7otou event listener ken lel ul
//l parent maaneha, to keep our code clean


const colList = document.querySelector(".colorList");

function changeColor(event) {
    //event.target will give us the exact list element that was clicked
    if(event.target.tagName === "LI"){
        //16777215 represents the largest possible value in a 24-bit color (RGB) which is #FFFFFF
        let color = "#" + Math.floor(Math.random()*16777215).toString(16);
        //16 represents base 16 (hexadecimal), meaning that the number will be converted into a string using the digits 0-9 and letters a-f
        event.target.style.backgroundColor = color;
    }
}

colList.addEventListener("click", changeColor);