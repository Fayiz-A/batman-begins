class Drop {
   constructor(x, y, radius) {
      var options = {
         isStatic: false,
         restitution: 0.3,
      }

      this.radius = radius;

      this.body = Bodies.circle(x, y, radius, options);
      World.add(world, this.body);
   }

   display() {
      var pos = this.body.position;
      var angle = this.body.angle;

      push();
      fill('blue');

      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      ellipse(0, 0, this.radius, this.radius);
      pop();
   }
}