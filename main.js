noseX = 0;
noseY = 0;
difference = 0;

rightwristX = 0;
leftwristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 500);
    canvas.position(560, 160);
    posenet = ml5.poseNet(video, modelLoaded);
    

}

function modelLoaded() {
    console.log('Pose net is initialized');
}
