
        var hotel;
        var nomeUsuario;
        var nomeHospede;
        var senhaCorreta = 2678;
        var precoFinal;
        var valorDiaria;
        var quantidadeDias; 
        var valorPadrao;
        var todosOsHospedes = [];
        var diaEvento;
        var horaEvento;
        var alcoolWayne;
        var gasolinaWayne;
        var alcoolStark;
        var gasolinaStark;

        nomeHotel();

        function nomeHotel(){
            hotel = prompt('Informe o nome do Hotel');

            if(hotel !== ''){
                alert(`O nome do Hotel é: ${hotel}`);
                loginFuncionario();

            } else {
                alert('Digite um nome válido.');
                nomeHotel();
            }
        }

        function loginFuncionario(){
            nomeUsuario = prompt('Informe seu nome de usuário');

            if(nomeUsuario !== ''){
                var senha = parseInt(prompt('Informe a senha'));
                
                if(senha === senhaCorreta){
                    alert(`Bem-vindo ao Hotel ${hotel}, ${nomeUsuario}. É um imenso prazer ter você por aqui!`);
                    menuInicio();

                } else {
                    alert('Senha Incorreta.');
                    loginFuncionario();
                }

            } else {
                alert('Insira um nome de usuário válido.');
                loginFuncionario();
            }
        }

        function menuInicio(){
            var operacoes = parseInt(prompt('Menu Inicial \n O que deseja? \n 1. Reservar Quartos \n 2. Cadastro Simples \n 3. Cadastrar e Pesquisar \n 4. Eventos \n 5. Buffet \n 6. Auditório \n 7. Restaurante \n 8. Abastecer Carro \n 9. Ar Condicionado \n 10. Sair'));

            switch (operacoes){
                case 1:
                    reservarQuartos();
                    break;

                case 2:
                    cadastroSimples();
                    break;

                case 3:
                    cadastrarPesquisar();
                    break;

                case 4:
                    eventos();
                    break;

                case 5:
                    buffet();
                    break;

                case 6:
                    auditorio();
                    break;

                case 7:
                    restaurante(); 
                    break;

                case 8:
                    abastecerCarro();
                    break;

                case 9:
                    arCondicionado();
                    break;

                case 10:
                    sairDoSistema();
                    break;

                default:
                    erro();
                break;
            }
        }

        function sairDoSistema(){
            var confirmar = confirm('Deseja mesmo sair?');

            if(confirmar){
                alert(`Muito obrigado e até logo, ${nomeUsuario}.`);
                window.close();

            } else {
                menuInicio();
            }
        }

        function erro(){
            alert('Opção inválida. Escolha entre 1 e 10');
            menuInicio();
        }
        
        function reservarQuartos(){
            valorDiaria = parseFloat(prompt('Qual o valor de uma diária?'));

            if(isNaN(valorDiaria) || valorDiaria === ''){
                alert(`Valor Inválido, ${nomeUsuario}.`);
                reservarQuartos();

            } else if(valorDiaria <= 0){
                alert(`Valor Inválido, ${nomeUsuario}.`);
                reservarQuartos();

            } else {
                quantidadeDias = parseInt(prompt('Quantas diárias serão necessárias?'));

                if(isNaN(quantidadeDias) || quantidadeDias === ''){
                    alert(`Valor Inválido, ${nomeUsuario}.`);
                    reservarQuartos();

                } else if(quantidadeDias <= 0 || quantidadeDias > 30){
                    alert(`Valor Inválido, ${nomeUsuario}.`);
                    reservarQuartos();

                } else {
                    precoFinal = valorDiaria * quantidadeDias;
                    alert(`O valor de ${quantidadeDias} dias de hospedagem é de R$ ${precoFinal.toFixed(2)}`);
                    reservarQuartos2();
                }
            }
        }

        function reservarQuartos2(){
            nomeHospede = prompt('Qual é o nome do hóspede?');

            if(nomeHospede === ''){
                alert('Você informou um nome inválido.');
                reservarQuartos2();

            } else{
                var confirmar = prompt(`${nomeUsuario}, você confirma a hospedagem para ${nomeHospede} por ${quantidadeDias} dias? S/N`).toUpperCase();

                if(confirmar === 'S'){
                    alert(`${nomeUsuario}, reserva efetuada para ${nomeHospede}. O valor total é de R$ ${precoFinal.toFixed(2)}`);
                    menuInicio();

                } else if(confirmar === 'N'){
                    alert(`${nomeUsuario}, reserva não efetuada.`);
                    menuInicio();

                } else {
                    alert('Opção inválida. Digite "S" para sim e "N" para não.');
                    reservarQuartos();
                }
            }
        }

        function cadastroSimples(){

            valorPadrao = parseFloat(prompt('Qual o valor padrão da diária?'));

            if(isNaN(valorPadrao) || valorPadrao === ''){
                alert(`Valor Inválido, ${nomeUsuario}.`);
                cadastroSimples();

            } else if(valorPadrao <= 0){
                alert(`Valor Inválido, ${nomeUsuario}.`);
                cadastroSimples();

            } else {
                cadastroSimples2();
            }
        }

        function cadastroSimples2(){
            var somaTotal = 0;
            var gratuidade = 0;
            var metadeDiaria = 0;

            while(true){
                nomeHospede = prompt(`Qual o nome do hóspede?`);

                if((nomeHospede.toUpperCase()) === "PARE"){
                    break;

                } else if(nomeHospede === ''){
                    cadastroSimples2();

                } else {
                    var idadeHospede = parseInt(prompt('Qual a idade do hóspede?'));

                    if(isNaN(idadeHospede) || idadeHospede === ''){
                        alert(`Valor Inválido, ${nomeUsuario}.`);
                        cadastroSimples2();

                    } else if(idadeHospede < 0){
                        alert(`Valor Inválido, ${nomeUsuario}.`);
                        cadastroSimples2();

                    } else if(idadeHospede <= 6){
                        alert(`${nomeHospede} foi cadastrado(a) com sucesso! ${nomeHospede} possui gratuidade.`);
                        gratuidade++;

                    } else if(idadeHospede > 60){
                        alert(`${nomeHospede} foi cadastrado(a) com sucesso! ${nomeHospede} paga meia.`);
                        somaTotal += valorPadrao/2 ;
                        metadeDiaria++;

                    } else {
                        alert(`${nomeHospede} foi cadastrado(a) com sucesso!`);
                        somaTotal += valorPadrao;
                    }  
                }
            }
            alert(`${nomeUsuario}, o valor total das hospedagens é: R$ ${somaTotal}; ${gratuidade} Gratuidade(s); ${metadeDiaria} meia(s).`);
            menuInicio();
        }
      
        function cadastrarPesquisar(){
            var opcoes = parseInt(prompt('Selecione uma das opções: \n 1. Cadastrar \n 2. Pesquisar \n 3. Listar \n 4. Sair'));

            switch (opcoes){
                case 1:
                    cadastrarHospedes();
                    break;

                case 2:
                    pesquisarHospedes();
                    break;

                case 3:
                    listarTodosHospedes();
                    break;

                case 4:
                    sairCadastro();
                    break;

                default:
                    erroCadastrarPesquisar();
                    break;
            }
        }

        function cadastrarHospedes(){
           nomeHospede = prompt('Qual o nome do hóspede?');
           
           if(nomeHospede === ''){
                alert('Informe um nome válido.');
                cadastrarHospedes();

            } else if(todosOsHospedes.length >= 15){
                alert("Número máximo de hóspedes cadastrados.");
                cadastrarPesquisar();

            } else {
                todosOsHospedes.push(nomeHospede);
                alert(`Hóspede ${nomeHospede} foi cadastrado(a) com sucesso!`);
                cadastrarPesquisar();
            }
        }

        function pesquisarHospedes(){
            nomeHospede = prompt('Qual o nome do hóspede?');

            if(nomeHospede === ''){
                alert('Informe um nome válido.');
                pesquisarHospedes();

            } else if(todosOsHospedes.includes(nomeHospede)){
                alert(`Hóspede ${nomeHospede} foi encontrado(a)!`);
                cadastrarPesquisar();

            } else {
                alert(`Hóspede ${nomeHospede} não foi encontrado(a).`);
                cadastrarPesquisar();
            }
        }

        function listarTodosHospedes(){
            var i = 0;

            alert('Listar Hospedes Cadastrados:');
            for(var i = 0; i < todosOsHospedes.length; i++){
               alert(todosOsHospedes[i]);
            }
            cadastrarPesquisar();
        }

        function sairCadastro(){
            var confirma = confirm('Deseja sair?');

            if(confirma){
                menuInicio();

            } else {
                cadastrarPesquisar();
            }
        }

        function erroCadastrarPesquisar(){
            alert('Por favor, informe um número entre 1 e 4');
            cadastrarPesquisar();
        }

        function eventos(){
            var custoPorHora = 10.50;
            var custoTotal = 0;

            var duracaoEvento = parseInt(prompt('Qual a duração do evento em horas?'));

            if(isNaN(duracaoEvento) || duracaoEvento === ''){
                alert('Informe apenas números.');
                eventos();

            } else if (duracaoEvento < 0){
                alert(`Valor Inválido, ${nomeUsuario}.`);
                eventos();

            } else{
                var quantidadeGarcons = parseInt(prompt('Quantos garçons serão necessários?'));

                if(isNaN(quantidadeGarcons) || quantidadeGarcons === ''){
                    alert('Informe apenas números.');
                    eventos(); 

                } else if(quantidadeGarcons < 0){
                    alert(`Valor Inválido, ${nomeUsuario}.`);
                    eventos();

                } else {
                    custoTotal = (quantidadeGarcons * custoPorHora) * duracaoEvento;
                    alert(`Custo Total: R$ ${custoTotal.toFixed(2)}`);

                    var confirmar = prompt('Gostaria de efetuar a reserva? S/N').toUpperCase();

                    if(confirmar === "S"){
                        alert(`${nomeUsuario}, reserva efetuada com sucesso.`);
                        menuInicio();

                    } else if(confirmar === "N"){
                        alert(`${nomeUsuario}, reserva não efetuada.`);
                        menuInicio();

                    } else{
                        alert('Opção inválida. Digite "S" para sim e "N" para não.');
                        menuInicio();
                    }
                }
            }
        }
        
        function buffet(){
            var quantidadeConvidados = parseInt(prompt('Qual o número de convidados para o evento?'));

            if(quantidadeConvidados > 350){
                alert('Quantidade de convidados superior à capacidade máxima.');
                buffet();

            } else if(quantidadeConvidados < 0){
                alert('Valor Inválido.');
                buffet();
            } else {
                var cafeLitros = quantidadeConvidados * 0.2;
                var aguaLitros = quantidadeConvidados * 0.5;
                var quantidadeSalgados = quantidadeConvidados * 7;

                var cafePreco = cafeLitros * 0.80;
                var aguaPreco = aguaLitros * 0.40;
                var salgadoPreco = (quantidadeSalgados * 34)/100;

                var precoTotalEvento = cafePreco + aguaPreco + salgadoPreco;

                alert(`O evento precisará de ${cafeLitros} litros de café, ${aguaLitros} litros de água e ${quantidadeSalgados} salgados. O custo total do evento será de R$ ${precoTotalEvento.toFixed(2)}.`);

                var confirmar = prompt('Gostaria de efetuar a reserva? S/N').toUpperCase();

                if(confirmar === 'S'){
                    alert(`${nomeUsuario}, reserva efetuada com sucesso.`);
                    menuInicio();

                } else if(confirmar === 'N'){
                    alert(`${nomeUsuario}, reserva não efetuada.`);
                    menuInicio();

                } else{
                    alert('Opção inválida. Digite "S" para sim e "N" para não.');
                    buffet();
                }
            }
        }

        function auditorio(){
            var cadeiras = 0;
            var convidados = parseInt(prompt('Qual o número de convidados para o seu evento?'));

            if(isNaN(convidados) || convidados === ''){
                alert(`Valor Inválido, ${nomeUsuario}.`);
                auditorio();

            } else if(convidados < 0){
                alert(`Valor Inválido, ${nomeUsuario}.`);
                auditorio();

            } else if(convidados > 350){
                alert('Quantidade de convidados superior à capacidade máxima.');
                menuInicio();

            } else{
                if(convidados <= 150){
                    alert('Use o auditório Laranja.');
                    confirmarAuditorio();

                } else if(convidados > 150 && convidados <= 220){
                    cadeiras = convidados - 150;

                    alert(`Use o auditório Laranja (inclua mais ${cadeiras} cadeiras).`);
                    confirmarAuditorio();

                } else if(convidados <= 350){
                    alert('Use o auditório Colorado.');
                    confirmarAuditorio();
                }
            }
        }

        function confirmarAuditorio(){
            var confirmar = prompt('Gostaria de efetuar a reserva? S/N').toUpperCase();

            if(confirmar === 'S'){
                alert(`${nomeUsuario}, reserva efetuada com sucesso.`);
                menuInicio();

            } else if(confirmar === 'N'){
                alert(`${nomeUsuario}, reserva não efetuada.`);
                menuInicio();

            } else{
                alert('Opção inválida. Digite "S" para sim e "N" para não.');
                confirmarAuditorio();
            }
        }

        function restaurante(){
            diaEvento = prompt('Qual o dia do evento? (informe em minúsculas, sem acento)').toLowerCase();

            if(diaEvento === 'segunda' || diaEvento === 'terça' || diaEvento === 'quarta' || diaEvento === 'quinta' || diaEvento === 'sexta'){
                
                horaEvento = parseInt(prompt('Qual é a hora do evento?'));

                if(horaEvento >= 7 && horaEvento <= 23){
                    alert('Restaurante Disponível.');
                    restauranteEmpresa();

                } else {
                    alert('Restaurante Indisponível.');
                    menuInicio();
                }

            } else if(diaEvento === 'sabado' || diaEvento === 'domingo'){

                horaEvento = parseInt(prompt('Qual é a hora do evento?'));

                if(horaEvento >= 7 && horaEvento <= 15){
                    alert('Restaurante Disponível.');
                    restauranteEmpresa();

                } else {
                    alert('Restaurante Indisponível.');
                    menuInicio();
                }

            } else {
                alert('Dia Inválido.');
                restaurante();
            }
        }

        function restauranteEmpresa(){

            var nomeEmpresa = prompt('Qual o nome da empresa?');

            if(nomeEmpresa !== ''){
                alert(`Restaurante reservado para ${nomeEmpresa}: ${diaEvento} às ${horaEvento}hs`);
                menuInicio();

            } else{
                alert('Informe um nome válido.');
                restauranteEmpresa();
            }
        }

        function abastecerCarro(){
            alcoolWayne = parseFloat(prompt('Qual o valor do álcool no posto Wayne Oil?'));
            if(isNaN(alcoolWayne) || alcoolWayne === ''){
                alert('Valor Inválido.');
                abastecerCarro();

            } else if(alcoolWayne <= 0){
                alert('Valor Inválido.');
                abastecerCarro();

            } else{
                gasolinaWayne = parseFloat(prompt('Qual o valor da gasolina no posto Wayne Oil?'));
                if(isNaN(gasolinaWayne) || gasolinaWayne === ''){
                    alert('Valor Inválido.');
                    abastecerCarro();

                } else if(gasolinaWayne <= 0){
                    alert('Valor Inválido.');
                    abastecerCarro();

                } else{
                    alcoolStark = parseFloat(prompt('Qual o valor do álcool no posto Stark Petrol?'));
                    if(isNaN(alcoolStark) || alcoolStark === ''){
                        alert('Valor Inválido.');
                        abastecerCarro();

                    } else if(alcoolStark <= 0){
                        alert('Valor Inválido.');
                        abastecerCarro();

                    } else {
                        gasolinaStark = parseFloat(prompt('Qual o valor da gasolina no posto Stark Petrol'));
                        if(isNaN(gasolinaStark) || gasolinaStark === ''){
                            alert('Valor Inválido.');
                            abastecerCarro();

                        } else if(gasolinaStark <= 0){
                            alert('Valor Inválido.');
                            abastecerCarro();

                        } else{
                            abastecerCarro2();
                        }
                    }
                }
            }
        }

        function abastecerCarro2(){
            var litrosAbastecidos = 42;
            var totalAlcoolWayne = alcoolWayne * litrosAbastecidos;
            var totalGasolinaWayne = gasolinaWayne * litrosAbastecidos;
            var totalAlcoolStark = alcoolStark * litrosAbastecidos;
            var totalGasolinaStark = gasolinaStark * litrosAbastecidos;

            let combustivelWayne, precoTotalWayne;
            if(totalAlcoolWayne / totalGasolinaWayne < 0.7){
                combustivelWayne = "álcool";
                precoTotalWayne = totalAlcoolWayne;
            } else {
                combustivelWayne = "gasolina";
                precoTotalWayne = totalGasolinaWayne;
            }

            let combustivelStark, precoTotalStark;
            if(totalAlcoolStark / totalGasolinaStark < 0.7){
                combustivelStark = "álcool";
                precoTotalStark = totalAlcoolStark;
            } else {
                combustivelStark = "gasolina";
                precoTotalStark = totalGasolinaStark;
            }

            let postoMaisBarato;
            if(precoTotalWayne < precoTotalStark){
                postoMaisBarato = "Wayne Oil";
                alert(`${nomeUsuario}, é mais barato abastecer com ${combustivelWayne} no posto ${postoMaisBarato}.`);
                menuInicio();
            } else{
                postoMaisBarato = "Stark Petrol";
                alert(`${nomeUsuario}, é mais barato abastecer com ${combustivelStark} no posto ${postoMaisBarato}.`);
                menuInicio();
            }
        }
        
        function arCondicionado(){
            var menorOrcamento = Infinity; 
            var nomeEmpresaMenorOrcamento = "";

            while(true){
                var nomeEmpresa = prompt('Qual o nome da empresa?');
                var valorPorAparelho = parseFloat(prompt('Qual o valor por aparelho?'));
                var quantidadeAparelhos = parseInt(prompt('Qual a quantidade de aparelhos?'));
                var percentualDesconto = parseFloat(prompt('Qual a porcentagem de desconto?'));

                if(percentualDesconto > 0){
                    var quantiMinimaDesconto = parseInt(prompt('Qual o número mínimo de aparelhos para conseguir o desconto?'));
                }

                var valorTotal = valorPorAparelho * quantidadeAparelhos;

                if(quantidadeAparelhos > quantiMinimaDesconto){
                    var desconto = (percentualDesconto / 100) * valorTotal;
                    valorTotal -= desconto;
                }

                if(valorTotal < menorOrcamento){
                    menorOrcamento = valorTotal;
                    nomeEmpresaMenorOrcamento = nomeEmpresa;
                }

                alert(`O serviço da empresa ${nomeEmpresa} custará R$ ${valorTotal.toFixed(2)}`);

                var continuar = prompt('Deseja informar novos dados? S/N').toUpperCase();
                if(continuar !== 'S'){
                    break;
                }
            }

            alert(`O orçamento de menor valor é o de ${nomeEmpresaMenorOrcamento} por R$ ${menorOrcamento.toFixed(2)}`);
            menuInicio();
        }
   
