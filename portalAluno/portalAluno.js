function calculodenotas() {
    var notaP1Bim1 = parseFloat(document.getElementById("notaP1-1Bim").value);
    var notaP2Bim1 = parseFloat(document.getElementById("notaP2-1Bim").value);
    var notaP1Bim2 = parseFloat(document.getElementById("notaP1-2Bim").value);
    var notaP2Bim2 = parseFloat(document.getElementById("notaP2-2Bim").value);
    var notaP1Bim3 = parseFloat(document.getElementById("notaP1-3Bim").value);
    var notaP2Bim3 = parseFloat(document.getElementById("notaP2-3Bim").value);
    var notaP1Bim4 = parseFloat(document.getElementById("notaP1-4Bim").value);
    var notaP2Bim4 = parseFloat(document.getElementById("notaP2-4Bim").value);
    var pontosextras = parseFloat(document.getElementById("pontosextras").value);


    var nome = (document.getElementById("nome").value);
    var pontos = (notaP1Bim1+notaP2Bim1)/2 + (notaP1Bim2+notaP2Bim2)/2 + (notaP1Bim3+notaP2Bim3)/2 +  (notaP1Bim4+notaP2Bim4)/2 + (pontosextras);

    if (pontos >= 28) 
        document.getElementById("resultado").innerHTML = 'Aprovado direto!'

    else 
        document.getElementById("resultado").innerHTML =  'Prova Final'
    
            
}
           

