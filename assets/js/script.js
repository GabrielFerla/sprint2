function validaTema(){
 
    //verifica qual classe esta no id
    if(document.getElementById('changeColor').classList.contains("backgroundDark")){
        //se for dark muda para light
        document.getElementById('changeColor').classList.remove("backgroundDark");
        document.getElementById('changeColor').classList.add("backgroundLight");

    }else{
        //se for light muda para dark
        document.getElementById('changeColor').classList.remove("backgroundLight");
        document.getElementById('changeColor').classList.add("backgroundDark");
    }

}

