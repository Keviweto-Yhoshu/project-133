status = "";
item = "";
objects = [];

function preload(){
    item = loadImage("TV.jpg");
}

function setup(){
    canvas = createCanvas(650,360);
    canvas.center();

    object_detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Laded!");
    status = true;
    object_detector.Detect(item, gotResults);
}

function gotResults(){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}

function draw(){
    image(item, 0,0,650,360);
    if (status != ""){
        for(i = 0; i <objects.length; i++){
            document.getElementById(status).innerHTML = "Status: Objects Detected";

            fill("#fc0809");
            percent = floor(objects[i].confidence * 100);
                text(objects[i].label + " " + percent + "%" , objects[i].x, objects[i].y);
                noFill();
                stroke("#fc0809");
                rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}