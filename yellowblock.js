class YellowBlock extends Block{
    constructor(x,y){
        super(x,y,20,30);
    }

    display(){
        fill(250, 255, 0)
        super.display();
    }
}