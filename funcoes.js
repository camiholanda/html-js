console.log(alunos)

//estrutura a partir do cifrão, programa interpreta o que há
//variavel com valor turma
let conteudo = `Turma: ${alunos.turma}<br>
Número de alunos: ${alunos.numeroAlunos}<br>
Total real de alunos: ${alunos.alunos.length}`

//procurar div como painel
//selecionar DIV
let div = document.getElementById('painel')

//abaixo é  elemento HTML dentro da div
//Definir conteúdo da DIV
div.innerHTML = conteudo


