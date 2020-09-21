class Polygon {
    constructor(x, y, radius) {
        var options = {
            isStatic: false
        }
        this.body = Bodies.rectangle(x, y, this.width, this.height, options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(CENTER);
        circle(0, 0, this.radius);
        pop();
    }
}