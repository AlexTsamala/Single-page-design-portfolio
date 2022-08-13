const leftBUtton = document.getElementById("left-slide-button");
const rightBUtton = document.getElementById("right-slide-button");
const firstPicture = document.getElementById('slide-2');
const middlePicture = document.getElementById("slide-3");
const lastPicture = document.getElementById("slide-4");
let n = 1;


rightBUtton.addEventListener('click',(event)=>{
    if(n===1){
        setTimeout(()=>{
        firstPicture.src = "./assets/image-slide-1.jpg"
        middlePicture.src = "./assets/image-slide-2.jpg"
        lastPicture.src = "./assets/image-slide-3.jpg"},300)
        n=2
    }else if(n===2){
        setTimeout(()=>{
        firstPicture.src = "./assets/image-slide-5.jpg"
        middlePicture.src = "./assets/image-slide-1.jpg"
        lastPicture.src = "./assets/image-slide-2.jpg"},300)
        n=3;
    }else if(n===3){
        setTimeout(()=>{
        firstPicture.src = "./assets/image-slide-4.jpg"
        middlePicture.src = "./assets/image-slide-5.jpg"
        lastPicture.src = "./assets/image-slide-1.jpg"},300)
        n=4;
    }else if(n===4){
        setTimeout(()=>{
        firstPicture.src = "./assets/image-slide-3.jpg"
        middlePicture.src = "./assets/image-slide-4.jpg"
        lastPicture.src = "./assets/image-slide-5.jpg"},300)
        n=5;
    }else if(n===5){
        setTimeout(()=>{
        firstPicture.src = "./assets/image-slide-2.jpg"
        middlePicture.src = "./assets/image-slide-3.jpg"
        lastPicture.src = "./assets/image-slide-4.jpg"},300)
        n=1;
    }
})

leftBUtton.addEventListener('click',(event)=>{
    if(n===1){
        setTimeout(()=>{
        firstPicture.src = "./assets/image-slide-3.jpg"
        middlePicture.src = "./assets/image-slide-4.jpg"
        lastPicture.src = "./assets/image-slide-5.jpg"},300)
        n=5
    }else if(n===2){
        setTimeout(()=>{
        firstPicture.src = "./assets/image-slide-2.jpg"
        middlePicture.src = "./assets/image-slide-3.jpg"
        lastPicture.src = "./assets/image-slide-4.jpg"},300)
        n=1;
    }else if(n===3){
        setTimeout(()=>{
        firstPicture.src = "./assets/image-slide-1.jpg"
        middlePicture.src = "./assets/image-slide-2.jpg"
        lastPicture.src = "./assets/image-slide-3.jpg"},300)
        n=2;
    }else if(n===4){
        setTimeout(()=>{
        firstPicture.src = "./assets/image-slide-5.jpg"
        middlePicture.src = "./assets/image-slide-1.jpg"
        lastPicture.src = "./assets/image-slide-2.jpg"},300)
        n=3;
    }else if(n===5){
        setTimeout(()=>{
        firstPicture.src = "./assets/image-slide-4.jpg"
        middlePicture.src = "./assets/image-slide-5.jpg"
        lastPicture.src = "./assets/image-slide-1.jpg"},300)
        n=4;
    }
})
