import { Cliente } from './cliente';

describe('Cliente', () => {

  let cliente: Cliente;

  beforeEach(() => {
    cliente = new Cliente(
      'Maria das Couves',
      99.99,
      new Date(),
    );
  });

  it('should create an instance', () => {
    expect(cliente).toBeTruthy();
  });

  describe('Crédito pré-aprovado', () => {

    it('deve retornar 00.00 para clientes com saldo negativo', () => {
      cliente.saldo = -1.00;
      expect(cliente.creditoPreAprovado).toBe(0.00);
    })

    it('deve retornar 00.00 para clientes com baixo saldo positivo', () => {
      cliente.saldo = 1.00;
      expect(cliente.creditoPreAprovado).toBe(0.00);
    })

    it('deve retornar 100.00 para clientes com saldo positivo suficiente', () => {
      cliente.saldo = 50.00;
      expect(cliente.creditoPreAprovado).toBe(100.00);
    })

  });
});
