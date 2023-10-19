window.addEventListener("load", atualizar)

function atualizar(){
    document.querySelector("#lista-tarefas").innerHTML = ""
    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    tarefas.forEach(tarefa => criarCard(tarefa))
}

function criarCard(tarefa) {
    const card = document.createElement("div")
    card.classList.add("col", "s12", "m6")

    card.innerHTML = `
        <div class="card ${tarefa.concluida ? '#558b2f light-green darken-3' : ''}">
            <div class="card-content">
                <span class="card-title">${tarefa.Titulo}</span>
                <p>${tarefa.Descricao}</p>
                <span data-badge-caption="Episódios" class="badge blue white-text ${tarefa.concluida ? '#558b2f light-green darken-4' : ''}">${tarefa.Episodios}</span>
                <span data-badge-caption="Minutos" class="badge blue white-text ${tarefa.concluida ? '#558b2f light-green darken-4' : ''}" ">${convHoras(tarefa.Episodios).minutos}</span>
                <span data-badge-caption="Horas" class="badge blue white-text ${tarefa.concluida ? '#558b2f light-green darken-4' : ''}"">${convHoras(tarefa.Episodios).horas}</span>
            </div>
            <div class="card-action">
                <a href="#" class="btn red" onClick="apagar(${tarefa.id})">
                    <i class="material-icons">delete</i>
                </a>
                <a href="#" class="btn green" onClick="concluir(${tarefa.id})">
                    <i class="material-icons">check</i>
                </a>
            </div>
        </div>
    `;
    document.querySelector("#lista-tarefas").appendChild(card)
}
function convHoras(duracaoEmEpisodios) {
    let duracaoEmMinutos = duracaoEmEpisodios * 20
    let horas = Math.floor(duracaoEmMinutos / 60)
    let minutos = duracaoEmMinutos % 60

    return {
        horas: horas,
        minutos: minutos
    };

}
