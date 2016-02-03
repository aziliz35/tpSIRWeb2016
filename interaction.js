
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
	
	this.x1 = 0;
	this.y1 = 0;
	this.x2 = 0;
	this.y2=0;
	this.dessiner=false;
	

	// Developper les 3 fonctions gérant les événements
	
	this.pression = function(evt) {
	this.dessiner=true;
	 var posMouse = getMousePosition(canvas, evt)
	 this.x1=posMouse.x;
	 this.y1=posMouse.y;
	 console.log(this.dessiner);
	 //afficher les coordonn�es 
	 console.log(this.x1,this.y1);
	 }.bind(this);
	 
	 this.deplacement= function(evt) {
	 this.dessiner=true;
	 var posMouse = getMousePosition(canvas, evt)
	 this.x2=posMouse.x;
	 this.y2=posMouse.y;
	 console.log(this.dessiner);
	 //afficher les coordonn�es 
	 console.log(this.x1,this.y1);
	 }.bind(this);
	 
	 this.relachement= function(evt) {
	 this.dessiner=false;
	 console.log(this.dessiner);
	  //afficher les coordonn�es 
	 console.log(this.x1,this.y1);
	 }.bind(this);

	// Associer les fonctions précédentes aux évènements du canvas.
	
	canvas.addEventListener("mousedown", this.pression, false);
	canvas.addEventListener("mousemove", this.deplacement, false);
	canvas.addEventListener("mouseup", this.relachement, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



