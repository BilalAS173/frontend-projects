const button = document.getElementById("btn");

let accountNumber="";
const base64string =
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAADUlEQVR42mP8z8BQDwAF/gJ+0L78WQAAAABJRU5ErkJggg=="
button.addEventListener("click", () => {
    accountNumber = "AC" + Math.floor(Math.random() * 900000000) + 100000000;

    ctx.drawImage(img, 0,0, canvas.width, canvas.height);
    ctx.font = "40px Arial";
    ctx.fillStyle = "darkblue";
    ctx.fillText(accountNumber, 30, 50);

    canvas.style.display="block";
    img.style.display="none"

});

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const img = document.getElementById("scenery");

img.addEventListener("load", () => {
    canvas.width = 500;
canvas.height = 300;
ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
ctx.font = "40px Arial";
ctx.fillStyle = "darkblue";
ctx.fillText(accountNumber, 30, 50);
});

img.src="data:image/png;base64, " + base64string

const downloadbtn= document.getElementById("downloadbtn");
const base64output= document.getElementById("base64output");

downloadbtn.addEventListener("click", ()=> {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
ctx.font = "40px Arial";
ctx.fillStyle = "yellow";
    ctx.fillText(accountNumber, 30, 50);
    console.log("Account Number displayed!");
    const base64image=canvas.toDataURL("image/png");
    
    //show the base64 string
    base64output.value=base64image;

    //download the image
    const link=document.createElement("a");
    link.download="img_001.png";
    link.href=base64image;
    link.click();
})

