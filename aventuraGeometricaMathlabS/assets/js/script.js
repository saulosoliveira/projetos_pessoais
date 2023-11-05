function calcCirculo(){
    let raioCirculo = document.getElementById("raio").value;

    raioCirculo = parseInt(raioCirculo);

    let area = (raioCirculo * raioCirculo) * Math.PI;

    document.getElementById("resultado").textContent = area.toFixed(2);
}

function calcTronco(){
    let baseMaior = document.getElementById("baseMaior").value;
    let baseMenor = document.getElementById("baseMenor").value;
    let areaLateral = document.getElementById("areaLateral").value;
    
    baseMaior = parseInt(baseMaior);
    baseMenor = parseInt(baseMenor);
    areaLateral = parseInt(areaLateral);

    let area = baseMaior + baseMenor + areaLateral;

    document.getElementById("resultado").textContent = area;
}

function calcRetangulo(){
    let ladoMaior = document.getElementById("ladoMaior").value;
    let ladoMenor = document.getElementById("ladoMenor").value;

    ladoMaior = parseInt(ladoMaior);
    ladoMenor = parseInt(ladoMenor);

    let result = ladoMaior * ladoMenor;

    document.getElementById("resultado").textContent = result;
}

function calcCoroa(){
    let raioExterno = document.getElementById("raioExterno").value;
    let raioInterno = document.getElementById("raioInterno").value;

    raioExterno = parseInt(raioExterno);
    raioInterno = parseInt(raioInterno);

    raioExterno = raioExterno * raioExterno;
    raioInterno = raioInterno * raioInterno;

    let area = (raioExterno - raioInterno) * Math.PI;

    document.getElementById("resultado").textContent = area.toFixed(2);
}

function calcTrapezoid(){
    let baseMaior = parseInt(document.getElementById("baseMaior").value);
    let baseMenor = parseInt(document.getElementById("baseMenor").value);
    let altura = parseInt(document.getElementById("alturaTrapezoid").value);

    let area = ((baseMaior + baseMenor) / 2) * altura;

    document.getElementById("resultado").textContent = area.toFixed(2);
 
}

function calcPoligon(){
    /*querySelector vai verificar qual elemento dentre os radio buttom foi selecionado dentro do agrupamento    
    " name='choose' ", me possibilitando uma futura verificação*/
    let choose = document.querySelector('input[name="choose"]:checked');
    let valorEscolhido = choose.value;
    let comprimentoLado = parseFloat(document.getElementById("comprimentoLado").value);

    if(valorEscolhido == "1"){
        let nLados = 5;
        let anguloInterno = 360 / nLados;
        let apotema = (comprimentoLado / 2) * Math.tan(anguloInterno /2);
        let areaTriangulo = (comprimentoLado * apotema) / 2;
        let areaTotal = areaTriangulo * nLados;

        document.getElementById("resultado").textContent = areaTotal.toFixed(2);

    }else if(valorEscolhido == "2"){
        let nLados = 6;
        let anguloInterno = 360 / nLados;
        let apotema = (comprimentoLado / 2) * Math.tan(anguloInterno /2);
        let areaTriangulo = (comprimentoLado * apotema) / 2;
        let areaTotal = areaTriangulo * nLados;
        
        document.getElementById("resultado").textContent = areaTotal.toFixed(2);

    }else if(valorEscolhido == "3"){
        let nLados = 7;
        let anguloInterno = 360 / nLados;
        let apotema = (comprimentoLado / 2) * Math.tan(anguloInterno /2);
        let areaTriangulo = (comprimentoLado * apotema) / 2;
        let areaTotal = areaTriangulo * nLados;

        document.getElementById("resultado").textContent = areaTotal.toFixed(2);
    }
}

function calcQuadrado(){
    let lado = document.getElementById("ladoQuadrado").value;
    lado = parseInt(lado);

    let area = lado * lado;

    document.getElementById("resultado").textContent = area;
}

function calcSetorCircular(){
    let raioMaior = parseFloat(document.getElementById("raioMaior").value);
    let angulo = parseFloat(document.getElementById("angulo").value);
    let raioSetor = parseFloat(document.getElementById("raioSetor").value);
    
    let areaSetorCircular = (angulo/360) * Math.PI * raioSetor**2;
    


}