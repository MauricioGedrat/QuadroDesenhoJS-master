let currentColor  = 'black'
let candraw= false;
let mouseX= 0
let mouseY=0


let screen = document.querySelector('#tela')
let ctx = screen.getContext('2d')

document.querySelectorAll('.colorArea .color').forEach(item=>{
    item.addEventListener('click',colorClick)
})

screen.addEventListener('mousedown',mouseDown)
screen.addEventListener('mousemove',mouseMove)
screen.addEventListener('mouseup',mouseUp)
document.querySelector('.clear').addEventListener('click',clearS)




function colorClick(e){
    let color = e.target.getAttribute('data-color')
    currentColor = color;

    document.querySelector('.color.active').classList.remove('active')
    e.target.classList.add('active')
}

function mouseDown(e) {
    candraw=true;
    mouseX = e.pageX - screen.offsetLeft 
    mouseY  = e.pageY - screen.offsetTop
}

function mouseMove(e){
    if(candraw){
        draw(e.pageX, e.pageY)
}
}

function mouseUp() {
   candraw=false

}

function draw(x,y){
    let pointX = x- screen.offsetLeft;
    let pointY = y -screen.offsetTop;

ctx.beginPath()
ctx.lineWidth =5;
ctx.lineJoin="round"
ctx.moveTo(mouseX,mouseY)
ctx.lineTo(pointX,pointY)
ctx.closePath()
ctx.strokeStyle = currentColor;
ctx.stroke()

mouseX = pointX
mouseY = pointY

}
function clearS(){
    ctx.setTransform(1,0,0,1,0,0)
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}