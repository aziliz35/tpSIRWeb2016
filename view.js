

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