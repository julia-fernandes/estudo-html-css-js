     window.alert("Olá! Explore a diversidade e a riqueza natural do nosso país!");

        // função que guarda a inserção de dados do usuário e exibe um alerta com a informação inserida
        function mostrarInsercao(){
            let entrada = window.prompt('Mais informações sobre o bioma:');
            alert('Você solicitou mais informações sobre: ' + entrada);
        }

        //uma variável que contém a imagem que será redimensionada
        let imagem = document.getElementById('img');

        function redimensionarImagemPequena(){
            imagem.style.height = '50px'
            imagem.style.width = '50px'
        }

        function redimensionarImagemMedia(){
            imagem.style.height = '200px'
            imagem.style.width = '200px'
        }

        function redimensionarImagemGrande(){
            imagem.style.height = '800px'
            imagem.style.width = '800px'
        }

        function redimensionarImagemOriginal(){
            imagem.style.height = 'auto'
            imagem.style.width ='500px'
        }

        
        
