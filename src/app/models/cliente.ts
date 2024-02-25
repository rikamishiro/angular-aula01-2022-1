export class Cliente {
  constructor(
    public nome: string,
    public saldo: number,
    public ultimoLogin: Date,
  ) {
  }

  public get creditoPreAprovado(): number {
    return this.saldo >= 50 ? 100 : 0;
  }

}
