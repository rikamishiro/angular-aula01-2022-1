import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'classNamePorValor',
  standalone: true,
})
export class ClassNamePorValorPipe implements PipeTransform {

  /**
   * Calcula a classe CSS de acordo com o valor especificado.
   * Se positivo, retorna 'positivo'...
   *
   * @param valor Valor para o qual será gerada a classe CSS.
   * @returns Classe CSS respectiva ao valor especificado.
   */
  transform(
    valor: number,
    ...args: unknown[]
  ): string {
    if (valor >= 0.005){
      return 'positivo';
    } else if (valor <= -0.005) {
      return 'negativo';
    } else {
      return 'zero';
    }
  }

}
