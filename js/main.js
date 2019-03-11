document.addEventListener('DOMContentLoaded', () => {
    let canvas = document.getElementById('canvas')
    let ctx = canvas.getContext('2d');
    ctx.moveTo(0,0);
    ctx.lineTo(200,200);
    ctx.stroke();
})