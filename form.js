class Form{
    constructor(){
        this.input = createInput("Please Type Your Name Here");
        this.button = createButton("Continue");
        this.message = createElement('h2');
        this.image =  "Images/Space Image.jpg";
        this.bgimage = createimg(this.image);
        this.tutorial = createButton("click here for the Tutorial!")
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.message.hide();
    }
   
   hiding() {
       
       this.button.mousePressed(()=>{
            hide ();
       })
    this.tutorial.mousePressed(()=>{
        
    })
    }
    

    display(){
        this.input.position(displayWidth/2-40,displayHeight/2-60);
        var buttonPosition = this.input.position(displayWidth/2-40,displayHeight/2-60);
        this.button.position(buttonPosition+50,buttonPosition);
        this.tutorial.position(displayWidth-100,displayHeight-250);
    }
}