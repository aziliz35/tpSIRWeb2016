
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;
	this.currenttype="";// variable pour tester sur le type de la forme (Ligne ou Recangle)

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	
	this.onInteractionStart=function(DnD){
	//initialiser la couleur et l'épaisseur
		this.currLineWidth=document.getElementById("spinnerWidth").value;
		this.currColour =document.getElementById("colour").value;
		console.log(this.currLineWidth,this.currColour);
		
	//tester la forme choisi (ligne ou rectangle)
 		if(document.getElementById("butLine").checked){
 			this.currentshape = new Ligne(DnD.x1,DnD.y1,DnD.x2,DnD.y2,this.currColour,this.currLineWidth);
 		}else if (document.getElementById("butRect").checked){
 			this.currentshape = new Rectangle(0,0,DnD.x1,DnD.y1,this.currLineWidth,this.currColour); }


 }.bind(this);
 
 this.onInteractionUpdate = function(DnD) {
 		//récupérer les coordonnées 
 		if(document.getElementById("butLine").checked){
 			this.currentshape.x1=DnD.x1;
 			this.currentshape.y1=DnD.y1;
 			this.currentshape.x2=DnD.x2;
 			this.currentshape.y2=DnD.y2;
 			this.currenttype="Ligne";
 		}else if (document.getElementById("butRect").checked){
 			this.currentshape.x1=DnD.x1;
 			this.currentshape.y1=DnD.y1;
 			this.currentshape.width=DnD.x2 - DnD.x1;
 			this.currentshape.height=DnD.y2 - DnD.y1;
 			 this.currenttype="Rectangle";
 		}
 	}.bind(this);
 	
 	this.onInteractionEnd = function() {
 			//dessiner la forme
 			this.currentshape.paint(ctx);
 			updateShapeListe(drawing);
 	}.bind(this);
};


