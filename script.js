var nouvo = document.querySelector(".nouvo");
var main = document.querySelector(".main");
nouvo.addEventListener('mouseover', function(){
    setTimeout(appear, 2200);
})

function appear(){
    main.style.opacity = '1';
}
