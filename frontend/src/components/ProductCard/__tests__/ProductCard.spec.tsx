import { render, screen } from "@testing-library/react";
import { Category } from "types/Category";
import { Product } from "types/Product";
import ProductCard from "..";

test('should render ProductCard', ()=>{

    const categorias : Category[] = [ {id: 1, name: 'Eletrônicos'} ]
    const produto : Product =  {
        id: 1,
        name: 'Master System III Compact',
        description: 'Video game Master System III Compact com Sonic na memória',
        price: 399.9,
        imgUrl: 'https://www.sega-brasil.com.br/Tectoy/images/8/8d/Master_system_evolution_02.jpg',
        date: '2004-09-16',
        categories: categorias
    }

    render(<ProductCard product={produto} />);

    expect(screen.getByText(produto.name)).toBeInTheDocument();
    expect(screen.getByAltText(produto.name)).toBeInTheDocument();
    expect(screen.getByText("R$")).toBeInTheDocument();
    expect(screen.getByText("399,90")).toBeInTheDocument();


})