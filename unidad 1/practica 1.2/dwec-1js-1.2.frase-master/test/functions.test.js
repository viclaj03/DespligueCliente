const funciones = require('../scripts/functions');

describe('Funciones sobre la frase "Una frase para probar"', () => {
    const frase = 'Una frase para probar';
    const frase2 = 'La ruta nos aporto otro paso natural';

    test('letras de frase devuelve 21', () => {
      expect(funciones.letras(frase)).toBe(21);
    });
    test('palabras devuelve 4', () => {
      expect(funciones.palabras(frase)).toBe(4);
    });
    test('maysc devuelve UNA FRASE PARA PROBAR', () => {
      expect(funciones.maysc(frase)).toBe('UNA FRASE PARA PROBAR');
    });
    test('titulo devuelve Una Frase Para Probar ', () => {
      expect(funciones.titulo(frase)).toBe('Una Frase Para Probar');
    });
    test('letrasReves devuelve raborp arap esarf anU', () => {
      expect(funciones.letrasReves(frase)).toBe('raborp arap esarf anU');
    });
    test('palabrasReves devuelve probar para frase Una', () => {
      expect(funciones.palabrasReves(frase)).toBe('probar para frase Una');
    });

    test('Un no palíndromo devuelve FALSE', () => {
      expect(funciones.palindromo(frase)).toBeFalsy();
    });
    test('Un palíndromo devuelve TRUE', () => {
      expect(funciones.palindromo(frase2)).toBeTruthy();
    });
});
