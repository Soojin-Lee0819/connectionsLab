//endgame class
class endgame{
    display(){
        fill(0,150);
        rect(0,0,width,height,width/20);
        fill(255);
        textSize(width/20);
        text("Congratulations!",width/2,height/2-width/20);
        text("Score: "+ score,width/2,height/2 );
        textSize(width/30);
        text("Click any key to restart",width/2,height/2+width/20 );
    }

}