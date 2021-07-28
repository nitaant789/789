noseX = 0;
noseY = 0;

function preload(){
  clown_nose = loadImage=('https://www.google.com/imgres?imgurl=https%3A%2F%2Fpngimg.com%2Fuploads%2Fmoustache%2Fmoustache_PNG16.png&imgrefurl=https%3A%2F%2Fpngimg.com%2Fimage%2F55057&tbnid=FxvQy3itzDFyTM&vet=12ahUKEwiaibiI7YXyAhVBIysKHVMzDvEQMygGegUIARC8AQ..i&docid=Y2QgxgY9njTaqM&w=2800&h=1900&q=mustache%20png%20images&ved=2ahUKEwiaibiI7YXyAhVBIysKHVMzDvEQMygGegUIARC8AQ');
}
function setup(){
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
function modelLoaded() {
 console.log("POSE NET IS INITIALIZED"); 
}
function gotPoses(results) 
{
    if (results.length > 0) 
    {
      console.log(results);
      noseX = results[0].pose.nose.x-5;
      noseY = results[0].pose.nose.y-5;
      console.log("nose x= "+ noseX);
      console.log("nose y= "+ noseY);
    }
}
}
function draw(){
image(video, 0, 0, 300, 300);
image(clown_nose, noseX, noseY, 30, 30);
}
function take_snapshot(){
    save('myFilterImageClown.png');
}
