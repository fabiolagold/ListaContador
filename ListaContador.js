let ListaAlunos = ["Marina", "Frederico", "Victor", "Ismael", "Pablo", "Erick"]

for (let aluno in ListaAlunos) {

  if (aluno % 2 == 0) {
    console.log(aluno + ": IMPAR: " + ListaAlunos[aluno])
  } else {
    console.log(aluno + ": PAR: " + ListaAlunos[aluno])
  }
}