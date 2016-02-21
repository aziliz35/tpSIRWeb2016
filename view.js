

Rectangle.prototype.paint = function(ctx) {
 //TODO Manager color
 ctx.strokeStyle = this.color;
 ctx.lineWidth = this.size;
 ctx.rect(this.width, this.height,this.x1, this.y1);
 ctx.stroke();
};

Ligne.prototype.paint = function(ctx) {
 //TODO Manager color
 ctx.strokeStyle = this.color;
 ctx.lineWidth = this.size;
 ctx.beginPath();
 ctx.moveTo(this.x1, this.y1);
 ctx.lineTo(this.x2, this.y2);
 ctx.stroke();

};

Drawing.prototype.paint = function(ctx) {
 console.log(this.getForms());
 ctx.fillStyle = '#F0F0F0'; // set canvas' background color
 ctx.fillRect(0, 0, canvas.width, canvas.height);
 this.getForms().forEach(function(eltDuTableau) {
 // now fill the canvas
 eltDuTableau.paint(ctx);
 });


};


function updateShapeListe (Drawing){
 	var contenuhtml=""; // la ligne html a ajouté dans liste ShapeListe
 	var idform=document.getElementById('shapeList').childNodes.length;//la taille de la liste  (id de la forme)
 	//alert(listform);
 	
 		if(pencil.currenttype=="Rectangle"){
 			//alert(pencil.currenttype);
 			contenuhtml="<li class='list-unstyled' id='shapeList("+idform+")'>Rectangle "+idform+": <button type='button' class='btn btn-default'><span class='glyphicon glyphicon-remove-sign'></span></button></li>";
 		}
 		if(pencil.currenttype=="Ligne"){
 			//alert(pencil.currenttype);
 			contenuhtml="<li class='list-unstyled' id='shapeList("+idform+")'>Ligne "+idform+": <button type='button' class='btn btn-default'><span class='glyphicon glyphicon-remove-sign'></span></button></li>";
 		}
 		
		 
 	 document.getElementById('shapeList').innerHTML+=contenuhtml; //ajouter dans la liste

 };