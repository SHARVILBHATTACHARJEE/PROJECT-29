class Cons{
    constructor(bodyA,pointB){
    var prop={
 bodyA:bodyA,
 pointB:pointB,
 length:10,
 stiffness:0.4
    }
    this.cons=Constraint.create(prop)
    this.pointB=pointB
    World.add(world,this.cons)
    }
    display(){
        if(this.cons.bodyA){
           line(this.cons.bodyA.position.x,this.cons.bodyA.position.y,this.pointB.x,this.pointB.y)
      }
    }
    
    disconnect(){
    this.cons.bodyA=null
    }
    attach(body){
    this.cons.bodyA=body
    }
}