function dadosTela(){
   
    largura = document.getElementById("demo").innerText = screen.width
    altura = document.getElementById("demo2").innerText = screen.height
   
    document.getElementById("demo").innerText = ""
    document.getElementById("demo2").innerText = ""
   
    console.log(largura, altura)
}
//function velocidade(){
   // alert("Olá")
//}

//elemento.style.left = posicao


//function tempo(){
  //  console.log("testeTempo")
//}


function deslocarObjeto(){

    if(posicao >= 1920){
        clearInterval(timer)
    }


    posicao += incremento
   console.log(posicao)
   elemento.style.left = String(posicao) + "px"

}

function start(){
    posicao = 0;
    elemento.style.left = "0px"
    //console.log(posicao)
    incremento = parseInt(document.getElementById("passo").value)
  
  
    var milisegundos = document.getElementById("velocidade").value
    
    clearInterval(timer)
    timer = setInterval(deslocarObjeto, parseInt(milisegundos))

}

