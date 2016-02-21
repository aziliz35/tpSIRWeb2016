
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !


function Drawing() {
 this.formes= [];
 	this.addSh = function(form){
 		this.formes.push(form);//ajouter une forme dans formes[]
 	};
 this.deleteSh= function(id){
 	
		this.formes.splice(id,1);
		//alert(JSON.stringify(this.formes));//afficher les shapes de formes
 	};
}


function Shape(color,size,type){
this.color=color;
this.size=size;
this.type=type;
}


function Ligne(x1,y1,x2,y2,size,color){

Shape.call(this,size,color,"Ligne");

this.x1=x1;
this.y1=y1;
this.x2=x2;
this.y2=y2;
}


function Rectangle(width,height,x1,y1,size,color){

Shape.call(this,size,color),"Rectangle";

this.width=width;
this.height=height;
this.x1=x1;
this.y1=y1;
}


Ligne.prototype = new Shape;
Ligne.prototype.constructor = Ligne; 
Rectangle.prototype = new Shape;
Rectangle.prototype.constructor = Rectangle; 

