if (document.querySelector('resultado').classList.contains(': Menor!'))
    document.querySelector('resultado').classList.remove(': Menor!');

function maioroumenor() {
    let idade = parseInt(document.getElementById('idade').value);

    if (idade >= 18) {
        document.getElementById('resultado').innerHTML = 'Maior, entrada permitida !'
    } else {
        document.getElementById('resultado').innerHTML = 'Ops!  volte quando completar 18 anos!'
      }
}
