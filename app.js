function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Obtém o valor digitado pelo usuário no campo de pesquisa e o converte para minúsculas
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
  
    // Verifica se o usuário digitou algum termo de pesquisa
    if (!campoPesquisa) {
      // Se não digitou, exibe uma mensagem informando que nada foi encontrado
      section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome da brincadeira</p>";
      return; // Interrompe a função
    }
  
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = ""; 
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado (brincadeira) no conjunto de dados
    for (let dado of dados) {
      // Converte o título, descrição e tags do dado para minúsculas para facilitar a comparação
      let titulo = dado.titulo.toLowerCase();
      let descricao = dado.descricao.toLowerCase();
      let tags = dado.tags.toLowerCase();
  
      // Verifica se o termo de pesquisa está presente no título, descrição ou tags
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Se o termo de pesquisa foi encontrado, cria um elemento HTML para exibir o resultado
        resultados += `
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
          </div>
        `;
      }
    }
  
    // Verifica se foram encontrados resultados
    if (!resultados) {
      // Se não encontrou resultados, exibe uma mensagem informando
      resultados = "<p>Nada foi encontrado</p>";
    }
  
    // Atualiza o conteúdo da seção com os resultados da pesquisa
    section.innerHTML = resultados;
  }
