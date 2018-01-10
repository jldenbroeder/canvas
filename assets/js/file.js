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

// Bateau
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
ctx.moveTo(250, 75);
ctx.lineTo(300, 90);
ctx.lineTo(250, 105);
ctx.lineTo(250, 75);
ctx.fillStyle = 'rgb(182, 0, 0)';
ctx.fill();
ctx.stroke();
ctx.closePath();
// Fagnon
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
ctx.lineCap = "round"; // extrémités arrondies
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
// Maison
var c = document.getElementById("canvas3");
var ctx = c.getContext("2d");
// Murs entrée
ctx.beginPath();
ctx.fillStyle = 'rgb(241, 208, 134)';
ctx.moveTo(10,400);
ctx.lineTo(150,450); // ___
ctx.lineTo(150,300); // |
ctx.lineTo(10,250); // ___
ctx.lineTo(10,400); // |
ctx.fill();
ctx.stroke();
ctx.closePath();
// Porte
ctx.beginPath();
ctx.fillStyle = 'peru';
ctx.moveTo(75,423);
ctx.lineTo(130,443); //
ctx.lineTo(130,323); //
ctx.lineTo(75,303); //
ctx.lineTo(75,423); //
ctx.fill();
ctx.stroke();
ctx.closePath();
// Murs côté
ctx.beginPath();
ctx.fillStyle = 'rgb(241, 208, 134)';
ctx.moveTo(150,450);
ctx.lineTo(400,350); //
ctx.lineTo(400,200); //
ctx.lineTo(150,300); //
ctx.lineTo(150,450); //
ctx.fill();
ctx.stroke();
ctx.closePath();
// Toit
ctx.beginPath();
ctx.fillStyle = 'rgb(133, 1, 1)';
ctx.moveTo(140,310);
ctx.lineTo(415,200); //
ctx.lineTo(335,100); //
ctx.lineTo(60,210); //
ctx.lineTo(140,310); //
ctx.fill();
ctx.stroke();
ctx.closePath();
// Poutre
ctx.beginPath();
ctx.fillStyle = 'rgb(173, 78, 0)';
ctx.moveTo(140,310);
ctx.lineTo(60,210); //
ctx.lineTo(60,230); //
ctx.lineTo(140,330); //
ctx.lineTo(140,310); //
ctx.fill();
ctx.stroke();
ctx.closePath();
