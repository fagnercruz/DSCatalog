export const formatadorPreco = (valor : number) => {
    const paramentros = {
        minimumFractionDigits : 2, 
        maximumFractionDigits : 2//, 
        //style: 'currency', 
        //currency:'BRL'
    };

    return new Intl.NumberFormat('pt-BR', paramentros).format(valor);
}