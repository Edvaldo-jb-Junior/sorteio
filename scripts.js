const button = document.querySelector(".button-sorteio")

function sorteioAleatorio(){

    const min = Math.ceil(document.querySelector(".input-mim").value)
    const max = Math.floor(document.querySelector(".input-max").value)
    
    if(min >= max){
        alert ("O valor minino não pode ser maior que o valor maximo")
    } else{
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    

button.addEventListener("click", Swal.fire({
    title: result,
    text: "Parabéns",
    icon: "success",
    customClass: 'swal-wide',
    }))
}

}

