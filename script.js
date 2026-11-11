function show() {
    let height=document.getElementById('height').value
    let breath =document.getElementById('breath').value
    let displayarea=document.getElementById('display')
    let area =0.5*breath*height
     displayarea.innerHTML=`<p>${area}</p>`
}

function square() {
    let lenght=document.getElementById('lenght').value
    let displayarea=document.getElementById('display2')
    let area =lenght*lenght
    displayarea.innerHTML=`<p>${area}</p>`
}

function circle() {
    let radius= document.getElementById('radius').value
    let displayarea=document.getElementById('display3')
    let area = Math.PI*radius**2
     displayarea.innerHTML=`<p>${area}</p>`
} 

function quadilateral() {
    let diagonal=document.getElementById('diagonal').value
    let height1=Number(document.getElementById('height1').value)
    let height2= Number(document.getElementById('height2').value)
    let displayarea=document.getElementById('display4')
    let area =0.5*diagonal*(height1 + height2)
     displayarea.innerHTML=`<p>${area}</p>`

}

function rhombus() {
    let diagonal1=document.getElementById('diagonal1').value
    let diagonal2=document.getElementById('diagonal2').value
    let displayarea=document.getElementById('display5')
    let area=0.5*diagonal1*diagonal2
    displayarea.innerHTML=`<p>${area}</p>`


}

function trapezium() {
    let a=Number(document.getElementById('firstparallelside').value)
    let b=Number(document.getElementById('secondparallelside').value)
    let diagonal=Number(document.getElementById('height3').value)
    let displayarea= document.getElementById('display6')
    let area=0.5*(a+b)*diagonal
    displayarea.innerHTML=`<p>${area}</p>`
}

function parallelogram() {
    let base =document.getElementById('base').value
    let height=document.getElementById('height4').value
    let displayarea=document.getElementById('display7')
    let area=base*height
    displayarea.innerHTML=`<p>${area}</p>`
}

function bmi() {
let weight =document.getElementById('weight').value
let height=document.getElementById('height5').value
let displayarea=document.getElementById('display8')
    let area=weight/height**2
    displayarea.innerHTML=`<p>${area}</p>`
}

