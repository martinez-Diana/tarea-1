var val1,val2,res, h3

h3=document.getElementById("res")

function SUMAR(){
    val1= parseFloat(document.getElementById("v1").value)
    val2= parseFloat(document.getElementById("v2").value)

    if(isNaN(val1) || isNaN(val2))
    {
        if(isNaN(val1)){
            h3.innerHTML="Valores no validos en la caja 1"
            document.getElementById("v1").focus()
            return
        }else{
            h3.innerHTML="Valores no validos en la caja 2"
            document.getElementById("v2").focus()
            return
        }
    }
    res=val1+val2
    h3.innerHTML=res
}
function RESTAR(){
    val1= parseFloat(document.getElementById("v1").value)
    val2= parseFloat(document.getElementById("v2").value)

    if(isNaN(val1) || isNaN(val2))
    {
        if(isNaN(val1)){
            h3.innerHTML="Valores no validos en la caja 1"
            document.getElementById("v1").focus()
            return
        }else{
            h3.innerHTML="Valores no validos en la caja 2"
            document.getElementById("v2").focus()
            return
        }
    }
    res=val1-val2
    h3.innerHTML=res
}
function MULTIPLICAR(){
    val1= parseFloat(document.getElementById("v1").value)
    val2= parseFloat(document.getElementById("v2").value)

    if(isNaN(val1) || isNaN(val2))
    {
        if(isNaN(val1)){
            h3.innerHTML="Valores no validos en la caja 1"
            document.getElementById("v1").focus()
            return
        }else{
            h3.innerHTML="Valores no validos en la caja 2"
            document.getElementById("v2").focus()
            return
        }
    }
    res=val1* val2
    h3.innerHTML=res
}
function DIVIDIR(){
    val1= parseFloat(document.getElementById("v1").value)
    val2= parseFloat(document.getElementById("v2").value)

    if(isNaN(val1) || isNaN(val2))
    {
        if(isNaN(val1)){
            h3.innerHTML="Valores no validos en la caja 1"
            document.getElementById("v1").focus()
            return
        }else{
            h3.innerHTML="Valores no validos en la caja 2"
            document.getElementById("v2").focus()
            return
        }
    }
    res=val1/val2
    h3.innerHTML=res
}

