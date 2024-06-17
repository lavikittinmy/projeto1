function setup() {
    createCanvas(888, 888);
      background('red');
    
  }
  
  function draw() {
  
    stroke('black');
     fill('black');
    
      if(mouseIsPressed){
       circle(mouseX, mouseY, 10, 10);
     }
  }