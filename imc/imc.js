

    var nome = prompt('Digite o seu nome:');
    var altura = prompt('Digite a sua altura em centímetros:');
    var peso = prompt('Digite a seu peso:');
 

    altura = parseFloat(altura);
    peso = parseFloat(peso);
    
    IMC = peso / Math.pow(altura,2); 
    document.write('Nome: ' + nome + '<br>');
    document.write('Altura: ' + altura + ' m' + '<br>');
    document.write('Peso: ' + peso + ' kg' + '<br>');
    document.write('IMC é: ' + IMC.toFixed(2) + '<br>');

       
    if (IMC < 18.5) {
        document.write('Situação: Abaixo do peso');

    } else if (IMC >= 18.5 && IMC <= 24.999) {
        document.write('Situação: Normal');

    } else if (IMC >= 25.0 && IMC <= 29.999) {
        document.write('Situação: Sobrepeso');
    
    } else if (IMC >= 30.0 && IMC <= 34.999) {
        document.write('Situação: Obesidade');

    } else if (IMC >= 40.0) {
        document.write('Situação: Obesidade grave');
    }
    