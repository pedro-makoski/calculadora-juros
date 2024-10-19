function to_number(value) {
    let res = parseFloat(value.replace(',', '.'))

    if(isNaN(res)) {
        return 0;
    } 

    return res; 
}

class Juros{
    constructor(capital, taxa, periodo) {
        this.taxa = to_number(taxa);
        this.capital = to_number(capital);
        this.periodo = to_number(periodo);
    }

    juros_simples() {
        this.juros = ((this.taxa/100)*this.capital*this.periodo).toFixed(2);
        this.montante = (parseFloat(this.juros)+this.capital).toFixed(2);

        return [this.juros, this.montante];
    }

    juros_compostos() {
        this.montante = (this.capital*((1+(this.taxa/100))**this.periodo)).toFixed(2);
        this.juros = (parseFloat(this.montante)-this.capital).toFixed(2);

        return [this.juros, this.montante];
    }
}