const modal = document.getElementById('resultados');
const botao_juros_simples = document.getElementById('juros-simples');
const botao_juros_compostos = document.getElementById('juros-compostos');
const botao_fechar_modal = document.getElementById('exit-button');
const juros_result = document.querySelector('.juros');
const montante_result = document.querySelector('.montante');

function show_it(type_juros) { // 0 - Simples 1 - Composta
    let taxa_value = document.getElementById('taxa').value;
    let periodo_value = document.getElementById('periodo').value;
    let capital_value = document.getElementById('capital').value;

    let res = new Juros(capital_value, taxa_value, periodo_value);

    modal.showModal();
    botao_fechar_modal.blur();

    if(type_juros == 0) {
        juros_result.innerHTML = res.juros_simples()[0];
        montante_result.innerHTML = res.juros_simples()[1];
    } else {
        juros_result.innerHTML = res.juros_compostos()[0];
        montante_result.innerHTML = res.juros_compostos()[1];
    }
}

botao_juros_simples.addEventListener('click', () => {
    show_it(0);
})

botao_juros_compostos.addEventListener('click', () => {
    show_it(1);
})

botao_fechar_modal.addEventListener('click', () => {
    modal.close();
})