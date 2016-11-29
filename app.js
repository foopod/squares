var ctx;
var canvas;


function run(){
    
    //Loop 100 times
    for(var i = 0; i<10; i++){
        drawSquare(Math.random()*canvas.width-25, Math.random()*canvas.height-25, '#0c0a6e', Math.random()*100);
        drawSquare(Math.random()*canvas.width-25, Math.random()*canvas.height-25, '#162283', Math.random()*100);
        drawSquare(Math.random()*canvas.width-25, Math.random()*canvas.height-25, '#254198', Math.random()*100);
        drawSquare(Math.random()*canvas.width-25, Math.random()*canvas.height-25, '#3864ad', Math.random()*100);
        drawSquare(Math.random()*canvas.width-25, Math.random()*canvas.height-25, '#4d89c2', Math.random()*100);
        drawSquare(Math.random()*canvas.width-25, Math.random()*canvas.height-25, '#66bod7', Math.random()*100);
        drawSquare(Math.random()*canvas.width-25, Math.random()*canvas.height-25, '#83d6ec', Math.random()*100);
    }
}




//Setting up the canvas and kicking off our run method
function init(){
    canvas = document.getElementById('app');
	ctx = canvas.getContext('2d');
    resizeCanvas();
    
    setInterval(run, 33);
}


/*===================================*/
/*             Utilities             */
/*===================================*/

function drawSquare(x,y,color,size){
    ctx.fillStyle =color;
    ctx.fillRect(x,y,size,size);    
}

function resizeCanvas(e) {
	canvas.width = document.body.clientWidth;
	canvas.height = document.body.clientHeight;
}