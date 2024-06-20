/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
class Root {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speedX = Math.random() * 4 - 2;
        this.speedY = Math.random() * 4 - 2;
        this.maxSize = Math.random() * 1;
        this.size = Math.random() * 3 + 7;
        this.vs = Math.random() * 0.2 + 0.05;
        this.angleX = Math.random() * 6.2;
        this.vax = Math.random() * 0.6 - 0.3;
        this.angleY = Math.random() * 6.2;
        this.vay = Math.random() * 0.6 - 0.3;
        this.lightness = 10;
        this.brushcolor = brushcolor;
    }
    update() {
        this.x += this.speedX + Math.sin(this.angleX);
        this.y += this.speedY + Math.sin(this.angleY);
        this.size -= this.vs;
        this.angleX += this.vax;
        this.angleY += this.vay;
        if (this.lightness < 70) this.lightness += 0.5;
        if (this.size > this.maxSize) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = 'hsl(' + brushcolor.innerHTML + ',100%,' + this.lightness + '%)';
            if (document.getElementById('fill').checked)ctx.fill();
            if (document.getElementById('stroke').checked)ctx.stroke();
            requestAnimationFrame(this.update.bind(this));
        }
    }
}
class Block {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.maxSize = Math.random() * 1;
        this.size = Math.random() * 3 + 10;
        this.vs = Math.random() * 0.2 + 0.05;
        this.lightness = 10;
        this.brushcolor = brushcolor;
    }
    update() {
       this.x += this.speedX + (Math.random()*5 - 2.5);
       this.y += this.speedY + (Math.random()*5 - 2.5);
        this.size -= this.vs;
        if (this.lightness < 70) this.lightness += 0.5;
        if (this.size > this.maxSize) {
            ctx.fillStyle = 'hsl(' + brushcolor.innerHTML + ',100%,' + this.lightness + '%)';
            if (document.getElementById('fill').checked) ctx.fillRect(this.x, this.y, this.size, this.size);
            if (document.getElementById('stroke').checked)ctx.strokeRect(this.x, this.y, this.size, this.size);
            requestAnimationFrame(this.update.bind(this));
        }
    }
}
window.addEventListener('mousemove', function(e){
    const root = new Block(e.x, e.y);
    root.update();
})
window.addEventListener('scroll', function(e){
    brushcolor.innerHTML++;
})
var brushcolor = document.getElementById("brush-color");
var slider = document.getElementById("brush-color-slider").oninput = function(){
    brushcolor.innerHTML = this.value
}
