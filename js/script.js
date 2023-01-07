const buttonCalcular = document.getElementById('calcular');

function calcularValorHora() {
  const salario = document.getElementById('salario').value;
  const horasDiaria = document.getElementById('horasDiaria').value;
  const resultado = document.getElementById('resultado');

  if (salario !== '' && horasDiaria !== '') {
    document.getElementById('container').style.display = 'none';
    document.getElementById('container_resultado').style.display = 'flex';

    const horasSemana = horasDiaria * 5;
    const horasMes = horasSemana * 5;
    const valorHoraTrabalhada = salario / horasMes;

    resultado.textContent = `O valor da sua hora trabalhada é de R$ ${valorHoraTrabalhada}`;
  } else {
    alert('Verifique se todos os campos foram preenchidos!')
  }
}
buttonCalcular.addEventListener('click', calcularValorHora);