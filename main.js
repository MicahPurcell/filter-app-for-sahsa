function preload() {
    img=loadImage("https://i.postimg.cc/XYMm5FzX/Screenshot-20220606-205238-Whats-App.jpg")
    }
    
    function setup() {
    createCanvas(400,400)
    tintColor=""
    }
    
    function draw() {
    image(img,0,0,400,400)
    tint(tintColor)
    }

    function applyFilter(){
        tintColor= document.getElementById("inputColor").value
    }

    function take_snapshot(){
        save("micah(experiment1).jpg")
    }
