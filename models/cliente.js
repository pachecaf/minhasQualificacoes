class Cliente {

    constructor(nome, cpf) {
        this.nome = nome
        this.cpf = cpf
    }

    validarCPF() {
        var soma;
        var resto;
        soma = 0;

        if (!this.cpf) return false;

        this.cpf = this.cpf.replace(/(\.)|(\-)/g, "");

        if (this.cpf.length > 11) return false;
        if (this.cpf.length < 11) return false;
        if (this.cpf == "00000000000") return false;
        if (this.cpf == "11111111111") return false;
        if (this.cpf == "22222222222") return false;
        if (this.cpf == "33333333333") return false;
        if (this.cpf == "44444444444") return false;
        if (this.cpf == "55555555555") return false;
        if (this.cpf == "66666666666") return false;
        if (this.cpf == "77777777777") return false;
        if (this.cpf == "88888888888") return false;
        if (this.cpf == "99999999999") return false;

        for (var i = 1; i <= 9; i++) soma = soma + parseInt(this.cpf.substring(i - 1, i)) * (11 - i);
        resto = (soma * 10) % 11;

        if ((resto == 10) || (resto == 11)) resto = 0;
        if (resto != parseInt(this.cpf.substring(9, 10))) return false;

        soma = 0;
        for (var i = 1; i <= 10; i++) soma = soma + parseInt(this.cpf.substring(i - 1, i)) * (12 - i);
        resto = (soma * 10) % 11;

        if ((resto == 10) || (resto == 11)) resto = 0;
        if (resto != parseInt(this.cpf.substring(10, 11))) return false;

        return true;
    }
}

module.exports = Cliente