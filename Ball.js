class Ball {
    constructor(x,y,r){
        let options = {
            restitution: 0.95
        }
        this.body = Bodies.circle(x,y,r, options)
        this.r = r
        World.add(world, this.body)
    }
    show(){
        var pos = this.body.positon
        push()
        ellipseMode(RADIUS)
        fill("yellow")
        ellipse(pos.x,pos.y, this.r, this.r)
        pop()
    }
}