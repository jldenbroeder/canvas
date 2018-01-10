// Tracé du drapeau
var c = document.getElementById("canvas1"); // Capture du canva
var ctx = c.getContext("2d"); // Initialisation 2D
ctx.beginPath(); // Début du tracé
ctx.fillStyle = 'blue'; // Couleur de remplissage
ctx.fillRect(0, 0, 100, 200); // Rectangle
ctx.fillStyle = 'red';
ctx.fillRect(100, 0, 100, 200);
ctx.fillStyle = 'green';
ctx.fillRect(200, 0, 100, 200);
ctx.closePath(); // Fin du tracé

// Tracé du drapeau
var c = document.getElementById("canvas2");
var ctx = c.getContext("2d");
// Voile arrière
ctx.beginPath();
ctx.moveTo(50, 325); // Position du point de départ
ctx.lineTo(250, 100); // Tracé d'une ligne
ctx.lineTo(250, 325);
ctx.lineTo(50, 325);
ctx.fillStyle = 'rgb(171, 125, 172)';
ctx.fill(); // Initialisation du remplissage
ctx.stroke(); // Initialisation du contour
ctx.closePath();
// Voile avant
ctx.beginPath();
ctx.moveTo(250, 325);
ctx.lineTo(400, 250);
ctx.lineTo(250, 100);
ctx.lineTo(250, 325);
ctx.fillStyle = 'rgb(90, 149, 146)';
ctx.fill();
ctx.stroke();
ctx.closePath();
// Mat
ctx.beginPath();
ctx.moveTo(250,75);
ctx.lineTo(250,350);
ctx.strokeStyle = "sienna";
ctx.lineWidth = 10; // Largeur de ligne
ctx.lineCap = "round"; // pointes arrondies
ctx.stroke();
ctx.closePath();
// Coque
ctx.beginPath();
ctx.moveTo(50,350);
ctx.lineTo(150,450); // \
ctx.lineTo(350,450); // \___
ctx.lineTo(450,350); // \___/
ctx.fillStyle = "peru";
ctx.strokeStyle = "sienna";
ctx.lineWidth = 5; // Largeur de ligne
ctx.lineCap = "round";
ctx.fill();
ctx.stroke();
ctx.closePath();




// var c = document.getElementById("canvas2");
// var ctx = c.getContext("2d");
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(200, 200);
// ctx.moveTo(200, 50);
// ctx.lineTo(50, 200);
// ctx.fillStyle = "red";
// ctx.stroke();//On trace seulement les lignes.
// ctx.closePath();
