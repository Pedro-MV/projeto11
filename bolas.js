class Bola{
    constructor(x,y,raio){
        this.body=Bodies.circle(x,y,raio)
        World.add (world, this.body)
        this.raio=raio
    }
    criar(){
        fill ("red")
        var pos=this.body.position
        ellipse(pos.x,pos.y,this.raio)

    }
}