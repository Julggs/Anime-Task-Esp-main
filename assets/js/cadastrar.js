const campoEpisodio= document.querySelector("#episodios")

campoEpisodio.addEventListener("input", function(){ // Input para ver tem tempo real
    const labelEpisodios = document.querySelector("label[for ='qtdEpisodios']")
    labelEpisodios.innerHTML = `Quantidade de episódios: ${campoEpisodio.value}`
    convHoras()
}) 
document.querySelector("#botao-cadastrar").addEventListener("click", () => {
    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    
    const tarefa = {
        id: Date.now(),
        Titulo: document.querySelector("#nome").value,
        Descricao: document.querySelector("#descricao").value,
        Episodios: document.querySelector("#episodios").value,
        concluida: false
    }

    tarefas.push(tarefa)

    localStorage.setItem("tarefas", JSON.stringify(tarefas))
    window.location.href="index.html"
    calcularEstatisticas()
})

function convHoras(duracaoEmEpisodios) {
    let duracaoEmMinutos = duracaoEmEpisodios * 20; 
    let horas = Math.floor(duracaoEmMinutos / 60);
    let minutos = duracaoEmMinutos % 60;
    if (horas === 0) {
      return `${minutos} minutos`;
    } else if (minutos === 0) {
      return `${horas} horas`;
    } else {
      return `${horas} horas e ${minutos} minutos`;
    }
  }
  function calcularDuracao() {
    let duracaoInput = document.getElementById('episodios');
    let duracaoEpisodio = parseInt(duracaoInput.value);
    let duracaoConvertida = convHoras(duracaoEpisodio);
    let resultadoElement = document.querySelector('output');
    resultadoElement.textContent = `Tempo estimado de ${duracaoConvertida}`;
  }
  document.getElementById('episodios').addEventListener('input', calcularDuracao);

