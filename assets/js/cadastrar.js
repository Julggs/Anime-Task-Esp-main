const campoEpisodio= document.querySelector("#episodios")

campoEpisodio.addEventListener("input", function(){ // Input para ver tem tempo real
    const labelEpisodios = document.querySelector("label[for ='qtdEpisodios']")
    labelEpisodios.innerHTML = `Quantidade de episódios: ${campoEpisodio.value}`
    calcular()
}) 
document.querySelector("#botao-cadastrar").addEventListener("click", () => {
    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    
    const tarefa = {
        Titulo: document.querySelector("#nome").value,
        Descricao: document.querySelector("#descricao").value,
        Episodios: document.querySelector("#episodios").value
    }

    tarefas.push(tarefa)

    localStorage.setItem("tarefas", JSON.stringify(tarefas))
    window.location.href="index.html"

})


function calcular() {

    let epi = campoEpisodio.value
    let min = epi * 60
    let hr = min / 60

    let hrtotal = hr / 2

    console.log(hrtotal)
}

