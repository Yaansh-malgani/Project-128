LeftX = 0;
LeftY = 0;
RightX = 0;
RightY = 0;

music1 = "music.mp3";
music2 = "music2.mp3";

function preload()
{
    music1 = loadSound("music.mp3");
    music2 = loadSound("music2.mp3");
}

function setup() 
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}

function modelLoaded()
{
    console.log("PoseNet is initialized.")
}

function gotposes(results) 
{
    if(results.length > 0 )
    {
        LeftX = results[0].pose.leftWrist.x;
        LeftY = results[0].pose.leftWrist.y;
        console.log("Left Wrist X = " + LeftX + " Left Wrist Y = " + LeftY);

        RightX = results[0].pose.rightWrist.x;
        RightY = results[0].pose.rightWrist.y;
        console.log("Right Wrist X = " + RightX + " Right Wrist Y = " + RightY);
    }

}


function draw() {
    image(video, 0, 0, 600, 500);
}