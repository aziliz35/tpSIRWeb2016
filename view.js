

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

 var id=0;//id de l'élément de la liste 
function updateShapeListe (Drawing){
 	var contenuhtml=""; // la ligne html a ajouté dans liste ShapeListe

 	if(pencil.currenttype=="Rectangle"){
 			//alert(pencil.currenttype);
 			contenuhtml="<li class='list-unstyled' id=id"+id+">Rectangle "+id+": <button type='button' class='btn btn-default' onClick='drawing.deleteform("+id+")'><span class='glyphicon glyphicon-remove-sign'></span></button></li>";
 		}
 		if(pencil.currenttype=="Ligne"){
 			//alert(pencil.currenttype);
 			contenuhtml="<li class='list-unstyled' id=id"+id+">Ligne "+id+": <button type='button' class='btn btn-default' onClick='drawing.deleteform("+id+")'><span class='glyphicon glyphicon-remove-sign'></span></button></li>";
			
 		}
 		id++;
		 
 	 document.getElementById('shapeList').innerHTML+=contenuhtml; //ajouter dans la liste

 };
Drawing.prototype.deleteform = function(id){
 	//alert(id);
 	var index = document.getElementById('id'+id);
 	index.remove();//supprimer l'élément et le button de la liste 
	this.deleteSh(id-1); // supprimer la forme 

	ctx.clearRect(0, 0, canvas.width, canvas.height);
  	ctx.fillRect(0, 0, canvas.width, canvas.height);
	drawing.paint(ctx); // recréer canvas
		
 };
