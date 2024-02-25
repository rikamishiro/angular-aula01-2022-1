import { ClassNamePorValorPipe } from './class-name-por-valor.pipe';

describe('ClassNamePorValorPipe', () => {

  let pipe: ClassNamePorValorPipe;
  beforeEach(() => {
    pipe = new ClassNamePorValorPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('getClassnamePorValor', () => {

    it('deve retornar "zero" para 0', () => {
      expect(pipe.transform(0.00)).toBe('zero');
    });

    it('deve retornar "zero" para valores próximos a 0', () => {
      expect(pipe.transform(0.004999999)).toBe('zero');
    });

    it('deve retornar "zero" para valores próximos a 0', () => {
      expect(pipe.transform(-0.004999999)).toBe('zero');
    });

    it('deve retornar "positivo" para valores positivos', () => {
      expect(pipe.transform(0.005)).toBe('positivo');
    });

    it('deve retornar "negativo" para valores negativos', () => {
      expect(pipe.transform(-1.00)).toBe('negativo');
    });

  });

});
