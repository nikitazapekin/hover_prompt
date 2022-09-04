let help = document.getElementById("help");
let hh = document.querySelector(".hh");
help.addEventListener("mouseover", () => {
setTimeout(() => {
    hh.style.display="block";
}, 1000)

} )
help.addEventListener("mouseout", () => {
setTimeout( ()=> {
    hh.style.display="none";
}, 1000)
} )
