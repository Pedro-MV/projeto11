class Cesta{
    constructor(x,y,largura,altura){
        this.body=Bodies.rectangle(x,y,largura,altura, {isStatic:true})
        World.add(world, this.body)
        this.largura=largura
        this.altura=altura
    }
    criar(){
        fill ("yellow")
        var pos = this.body.position
        rect(pos.x,pos.y,this.largura,this.altura)
    }
}
