import { formatPrice } from "util/formatters"

describe('Testes da função formatPrice para numeros positivos', () => {
    test('formatPrice should format number pt-BR when given 10.1',()=>{
        const result = formatPrice(10.1);
        expect(result).toEqual("10,10")
    })

    test('formatPrice should format number pt-BR when given 0.1',()=>{
        const result = formatPrice(0.1);
        expect(result).toEqual("0,10")
    })
});

describe('Testes da função formatPrice para numeros negativos e zero', () => {
    test('formatPrice should format number pt-BR when given 0.0',()=>{
        const result = formatPrice(0.0);
        expect(result).toEqual("0,00")
    })

    test('formatPrice should format number pt-BR when given -3.7',()=>{
        const result = formatPrice(-3.7);
        expect(result).toEqual("-3,70")
    })
});


