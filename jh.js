//Jornada do heroi

const prompt = require("prompt-sync")();
console.clear();
console.log("SEJA BEM VINDO AO JORNADA DO HERÓI\n");
const nome = prompt("Digite o seu nome: ");
console.clear();
console.log(`Bem-vindo(a) ${nome}!\n.Você é um lutador de MuayThai e precisa se esforçar para ganhar as lutas.\nEntão apenas responda apenas SIM ou NÃO.\n`);

console.log(
  `Você é um lutado de MuayThai e esta se preparando para lutar. Falta alguns dias para a luta, como treinador tem que decidir qual a melhor forma d treinar sem se machucar.\n`
);

const question = ['É dia de treino no camp, vai correr 50km? (S/N))', 'Chegou da corrida, treinamento de clinch? (S/N)', 'Terminou o treinamento de clinch, treinar fazendo flexão? (S/N)', 'Terminou o treinamento, agora treinar abdominais? (S/N)', 'Por último, treinamento tecnico? (S/N)']

let scoreSim = 0;
let questions = 's' || 'n';


for (let i = 0; i <= 4 ; i++) {
  questions = prompt(question[i]).toLowerCase();
    if (question == 's') {
      scoreSim++;
    }else if (question == 'n') {
      scoreSim = sim;
    }
}

  while(questions != 's' && questions != 'n') {
    console.log("Você digitou um valor inválido, digite novamente");
    questions = prompt(question[i]).toLowerCase();
    if (questions == 's') {
      scoreSim++;
    }else{
      scoreSim = sim;
    }
  }


if (sim == 5) {
  console.log(`Parabéns ${nome}!!!. Você é um novo campeão. Você é um verdadeiro herói por ter se esforçado bastante nos treinos!`)
}
else if (sim == 4) {
  console.log(`Legal ${nome}, Não foi dessa vez quase chegou perto de ser torna um campeão!`)
}
else if (sim == 3) {
  console.log(`${nome}, você treinou pouco mais tendo mais empenho ns treinos, você consegue ter um bom resultado!`)
}
else if (sim <= 2 && sim != 0) {
  console.log(`${nome}, assim complica sem se dedicar aos treinos pois vai ser difícil de alcançar um bom resultado na luta! Se esforça um pouco mais!`)
}
else {
  console.log(`${nome}... ${nome}... Se não começar treinar sério não vai poder competir!`)
}
