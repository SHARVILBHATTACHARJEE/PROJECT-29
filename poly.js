class Polygon{
    constructor(){
        this.body=Bodies.circle(50,200,29)
        World.add(world,this.body)
        this.image=loadImage("polygon.png")
    }
    display(){
        fill("red")
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,70,70)
    }
}