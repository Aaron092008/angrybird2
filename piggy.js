class Piggy

{
    constructor(x,y,w,h){
        var boxF={
            restitution:0.8
          }
         this.piggy = Bodies.rectangle(x,y,w,h,boxF)
         World.add(myworld,this.piggy)
         this.w=w
         this.h=h
         this.img2=loadImage("enemy.png")
      }
      display(){
          push ()
          translate (this.piggy.position.x,this.piggy.position.y)
          rotate (this.piggy.angle)
        imageMode(CENTER)
        image (this.img2,0,0,this.w,this.h)
        pop ()
      }
}