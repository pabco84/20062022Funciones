ele = document.getElementById("ele1")
ele.addEventListener("click", function() {pintar('yellow')}); 
pintar = function (color = "green"){
        ele.style.backgroundColor = color;
        }
pintar('green');

