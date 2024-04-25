const rc = rough.svg(document.querySelector("#svg"));

const addButton = document.querySelector("#button");

const addellipse = document.querySelector("#button2")

const addstop = document.querySelector("#button3")

var config = {
    "x" : 400,
    "y" : 100,
    "gap" : 30,
    "width" : 300,
    "height" : 100
}

let kwadrat = rc.rectangle(0,0,300,300,{fill: 'rgba(200,0,0,0.50)', fillStyle:"solid"})

svg.appendChild(kwadrat)

kwadrat.addEventListener("click",()=>{

    console.log("witaj świecie!")


})



addButton.addEventListener("click",()=>{
    dodkwadrat(config.x,config.y,config.width,config.height,)

})
    
    function dodkwadrat(x,y,width,height){
        
    let kwadrat = rc.rectangle(x,y,width,height,{fill: 'rgba(200,0,0,0.50)', fillStyle:"solid"})

    svg.appendChild(kwadrat)

    let line = rc.line(x+width/2,y+height,x+width/2,y+height+config.gap)

    svg.appendChild(line)

    config.y = height + config.gap + config.y
}

dodellipse(config.x,config.y,config.width,config.height,)



    function dodellipse(x,y,width,height){

        let ellipse = rc.ellipse(x+width/2,y+height/2,width,height,)
        svg.appendChild(ellipse)

        let line = rc.line(x+width/2,y+height,x+width/2,y+height+config.gap)

        svg.appendChild(line)


        config.y = height + config.gap + config.y
    }

    addellipse.addEventListener("click",()=>{
        dodwybor(config.x,config.y,config.width,config.height,)
    
    })

    function dodwybor(x,y,width,height){

        d = height
        a = d/Math.sqrt(2)

        R = d/2
        r = a/2
        let x1 = R-r


        let diament = rc.rectangle(x+width/2-a/2,y+x1,a,a,{fill: 'rgba(200,0,0,0.50)', fillStyle:"solid"})
        diament.setAttribute("transform",`rotate(45,${x+width/2-a/2+r},${y+x1+r})`)
        svg.appendChild(diament)


        let line = rc.line(x+width/2,y+height,x+width/2,y+height+config.gap)

        svg.appendChild(line)
        

        config.y = height + config.gap + config.y
    }

    function dodstop(x,y,width,height){

        let ellipse = rc.ellipse(x+width/2,y+height/2,width,height,)
        svg.appendChild(ellipse)


        config.y = height + config.gap + config.y
    }

    addstop.addEventListener("click",()=>{
        dodstop(config.x,config.y,config.width,config.height,)
    
    })