class OrangeBlock extends Block{
    constructor(x,y){
        super(x,y,20,30);
    }

    display(){
        fill(255, 161, 0)
        super.display();
    }
}