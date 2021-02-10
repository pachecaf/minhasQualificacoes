const Cliente = require("../models/cliente")

test('Ao digitar um CPF válido para um cliente, o mesmo precisa retornar verdadeiro', () => {
    var cliente = new Cliente("Danilo", "384.960.460-87")
    expect(cliente.validarCPF()).toBe(true);
});

test('Ao digitar um CPF válido sem pontos para um cliente, o mesmo precisa retornar verdadeiro', () => {
    var cliente = new Cliente("Danilo", "38496046087")
    expect(cliente.validarCPF()).toBe(true);
});

test('Ao digitar um CPF inválido sem pontos para um cliente, o mesmo precisa retornar falso', () => {
    var cliente = new Cliente("Danilo", "38496046047")
    expect(cliente.validarCPF()).toBe(false);
});

test('Ao digitar um CPF 00000000000, o mesmo precisa retornar falso', () => {
    var cliente = new Cliente("Danilo", "00000000000")
    expect(cliente.validarCPF()).toBe(false);
});

test('Ao digitar um CPF 000000000000, o mesmo precisa retornar falso', () => {
    var cliente = new Cliente("Danilo", "000000000000")
    expect(cliente.validarCPF()).toBe(false);
});

test('Ao digitar um CPF 11111111111, o mesmo precisa retornar falso', () => {
    var cliente = new Cliente("Danilo", "11111111111")
    expect(cliente.validarCPF()).toBe(false);
});