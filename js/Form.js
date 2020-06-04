class Form {
  constructor() {
    this.title = createElement('h2')
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h3');

  }

hide(){
  this.greeting.hide();
  this.input.hide();
  this.button.hide();
}


  display(){

    this.title.html("Car Racing Game");
    this.title.position(130, 0);
    
    this.input.position(130, 160);
    this.button.position(250, 200);

    this.button.mousePressed(()=>{
      this.input.hide();
     this.button.hide();

      var name = input.value();
      
      playerCount+=1;
      player.update(name)
      player.updateCount(playerCount);
      this.greeting.html("Hello " + name )
      this.greeting.position(130, 160)
    });

  }
}
