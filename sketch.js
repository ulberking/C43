var h,m,s,hA,mA,sA

function setup() {
  createCanvas(500,500);
  angleMode(DEGREES)
 
}

function draw() {
  background(0); 
  translate (250,250)
  rotate (-90)
  h = hour()
  m = minute()
  s = second()
  hA=map (h%12,0,12,0,360)
  mA=map(m,0,60,0,360)
  sA=map(s,0,60,0,360)
  push ()
  stroke ("green")
  strokeWeight(5)
  rotate (sA)
  line (0,0,180,0)
  pop ()
  push ()
  stroke ("pink")
  strokeWeight(5)
  rotate (mA)
  line (0,0,130,0)
  pop ()
  push ()
  stroke ("blue")
  strokeWeight(5)
  rotate (hA)
  line (0,0,80,0)
  pop ()
  
noFill()
stroke("green")
  arc (0,0,400,400,0,sA)
  noFill()
stroke("pink")
  arc (0,0,380,380,0,mA)
  noFill()
stroke("blue")
  arc (0,0,340,340,0,hA)
}