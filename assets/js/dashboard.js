

function calcularEstatisticas(){
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    const pendentes = tarefas.filter(t => t.concluida == false)
    const qtdePendente = pendentes.length
    document.querySelector("#qtde-pendente").innerHTML = qtdePendente
    
    const concluidas = tarefas.filter(t => t.concluida == true)
    const qtdeConcluida = concluidas.length
    document.querySelector("#qtde-concluida").innerHTML = qtdeConcluida
    
    const totalEpisodios = tarefas.reduce((total, t) => total += +t.Episodios, 0)
    document.querySelector("#total-episodios").innerHTML = totalEpisodios
    
    const meusEpisodios = concluidas.reduce((total, t) => total += +t.Episodios, 0)
    document.querySelector("#meus-episodios").innerHTML = meusEpisodios

}

calcularEstatisticas()