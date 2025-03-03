const image = document.getElementById("imageChange");

const images = ["goofyahh","nice","Marcus"]
var image_length = images.length;
var x = 0;

function ChangeImage(){
    image.src="Images/"+images[x] + ".png";
    x = x+1;

    if(x==image_length){
        x = 0;
    }
}

function GoToMarshmallowBoy(){
    window.open("https://pingem.itch.io/marshmallow-boy");
}