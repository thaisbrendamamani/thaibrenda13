function raices(){
    const numb = [];
    var i = 0;
    var s = 0;
    var ra = 0;
    var m = 1;
    var n = parseInt( document.getElementById("n").value);
    //const n = prompt("Dedfine la cantidad de terminos: ");
    var nw = 2/Math.PI
    while(i < n){
        i+=1;
        ra = (Math.pow((2 + ra),(1/2)));
        m= m*(ra/2);
        //document.write(m);
    }
    var h = Math.round(m*1000000000000000)/1000000000000000;
    var g = Math.round(nw*1000000000000000)/1000000000000000;
    if(h==g){
        document.getElementById('raiz').innerHTML='Muy aproximado'
    }
    else{
        document.getElementById('raiz').innerHTML='Aproximado casi identico'
    }
    
    //document.write(m);
    //document.write("<h2>"+nw+"</h2>")
    document.getElementById('gato').innerHTML=m+" ---- "+nw
    //document.getElementById('raiz').innerHTML=nw

}