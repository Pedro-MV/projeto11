class Solo{
    constructor(x,y,largura,altura){
        this.body=Bodies.rectangle(x,y,largura,altura, {isStatic:true})
        World.add(world, this.body)
        this.largura=largura
        this.altura=altura
    }
    criar(){
        fill ("blue")
        var pos = this.body.position
        rect(pos.x,pos.y,this.largura,this.altura)
    }
}
