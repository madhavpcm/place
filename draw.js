// Write your code here

function spiral(steps, angle) {
   const widthInc = 5 / steps;
   let w = 0.1;
   while (steps-- > 0) {
      width(w);
      forward(random(1,10));
      right(angle--);
      w += widthInc;
   }
}

function fun(count) {
   while (count-- > 0) {
      colour(
         random(0,255),
         random(0,255),
         random(0,255),
         Math.random()
      );
      goto(random(-150, 150), random(-150, 150));
      angle(random(0,360));
      spiral(random(100, 1000), random(5, 90));
   }
}

function demo(count) {
   hideTurtle();
   redrawOnMove(false);
   fun(count);
   redrawOnMove(true);
   draw();
}

demo(100)