function preload() {
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.hide();

}

function draw() {
  image(video, 0, 0, 640, 480);
  
  circle(20,20,50);
  circle(620, 20, 50);
  circle(20, 460, 50);
  circle(620, 460, 50);

  rect(10, 10, 610, 30);
  rect(10, 10, 30, 450);
  rect(10, 450, 610, 30);
  rect(610, 10, 30, 610);
}

function take_snapshot(){    
  save('bday pic');
}
