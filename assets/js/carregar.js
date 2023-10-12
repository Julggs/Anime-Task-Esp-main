window.addEventListener("load", () => {
    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

    tarefas.forEach(tarefa => criarCard(tarefa))
})
function criarCard(tarefa){

}