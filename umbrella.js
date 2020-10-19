class Umbrella {
   constructor(x, y, radius, animation) {
      var options = {
         isStatic: true,
         restitution: 0.2,
      }

      this.animation = animation;
      this.radius = radius;

      this.radius = radius;

      this.body = Bodies.circle(x + 20, y - 85, radius, options);
      World.add(world, this.body);

      this.man = createSprite(x, y);
      this.man.scale = 0.6;
      this.man.addAnimation('walking', this.animation);

   }

}