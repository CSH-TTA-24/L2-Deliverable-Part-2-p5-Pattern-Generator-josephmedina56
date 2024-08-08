function setup() {
  createCanvas(500, 500);
  background(220,220,220);

  ellipse(250, 250, 25, 25);
}

function draw() {
   let r = random(0, 255);
   let g = random(0, 255);
   let b = random(0, 255);
   fill(r, g, b);
  let newb1 = random(0, 255);
  let newb2 = random(0, 255);
  let newb3 = random(0, 255);
stroke(newb1,newb2,newb3)
  line(250, 250, mouseX, mouseY)
   // ellipse(mouseX, mouseY, newb, newb);

}


function mouseClicked() {
  //  let r = random(0, 255);
  //  let g = random(0, 255);
  //  let b = random(0, 255);
  //  fill(r, g, b);
  // let newb = random(25, 100);


  //  ellipse(mouseX, mouseY, newb, newb);
}
