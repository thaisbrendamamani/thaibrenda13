function raices(){
    var n = parseInt( document.getElementById("n").value);
    n=parseInt(n)
    var cad;
    var cad2 = "";
    var m,bandera,text,s=2,j=0;
    for(var x = 1; x <= n;x++){
        bandera=false;
        while(!bandera){
            m=2
            bandera=true;
            while(bandera&&m<x){
                if(s%m==0){
                    bandera=false;
                }
                else{
                    m=m+1;
                }

            }
            if(bandera){
                j++;
                cad = s.toString();
                cad2 = cad2 + cad+", "

                //document.getElementById('gato').innerHTML=cad2
            }
            s++;
        }

    }
    document.getElementById('gato').innerHTML=cad2
    
    //document.write(m);
    //document.write("<h2>"+nw+"</h2>")
    //document.getElementById('gato').innerHTML="No es primo"
    //document.getElementById('raiz').innerHTML=nw

}