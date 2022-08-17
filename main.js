function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110,350);
    video = createCapture(VIDEO);
    video.hide();
    corner_shape = "";
}

function draw(){
    image(video,0,0,640,480);
    cshape(corner_shape);
    sshape(side_shape);
}

function take_snapshot(){
    save('my_framedPicture.png');
}


function corner_shape(){
    corner_shape = document.getElementById("corner_shape").value;
}