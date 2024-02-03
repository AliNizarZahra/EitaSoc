let metros = 50;
function soccol(imgNome){
    if (metros>9){
    alert(`Ele está a ${metros} metros da sua casa`);
    metros -= 10;
    }
    else{
        alert("Você deveria ter fugido");
        document.getElementById("imgUm").src="medo.jpg";
    }
}
