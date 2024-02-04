const button = document.querySelector(".no");
const img=document.querySelector(".image");

function image(){
    document.querySelector(".btn-container").style.display="flex";
    img.src="./images/yesImg.gif";
    //img.style.zIndex="1";
}



button.addEventListener('mouseover', function () {
    button.style.position = "absolute";
    button.style.left = `${Math.ceil(Math.random() * 90)}%`;
    button.style.top = `${Math.ceil(Math.random() * 90)}%`;
});
button.addEventListener('click', function () {
    alert('you clicked me')
})
document.querySelector(".yes").addEventListener('click',image);
