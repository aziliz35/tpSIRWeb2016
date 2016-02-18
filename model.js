
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !


function Drawing() {
 this.formes= [];
}


function Shape(color,size){
this.color=color;
this.size=size;
}


function Ligne(x1,y1,x2,y2,size,color){

Shape.call(this,size,color);

this.x1=x1;
this.y1=y1;
this.x2=x2;
this.y2=y2;
}


function Rectangle(width,height,x1,y1,size,color){

Shape.call(this,size,color);

this.width=width;
this.height=height;
this.x1=x1;
this.y1=y1;
}

Ligne.prototype = new Shape;
Ligne.prototype.constructor = Ligne; 
Rectangle.prototype = new Shape;
Rectangle.prototype.constructor = Rectangle; 

