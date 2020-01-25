var m, f; 
function setup()
{ createCanvas(400,400);
 m = createSprite(200,100,30,60); 
 f = createSprite(200,200,30,30);
 m.debug = true;
 f.debug = true;
}
function draw() {
  background("black"); 
  m.x = mouseX; 
  m.y = mouseY;
  if(m.x - f.x < m.width/2 + f.width/2 && m.y - f.y < m.height/2 + f.height/2 && f.x - m.x < m.width/2 + f.width/2 && f.y - m.y < m.height/2 + f.height/2){
    m.shapeColor = "red"; 
    f.shapeColor = "red";
  }
  else{ m.shapeColor = "green";
       f.shapeColor = "green";
      }
  drawSprites();
}
