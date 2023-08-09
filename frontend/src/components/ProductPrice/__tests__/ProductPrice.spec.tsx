import { render, screen } from "@testing-library/react";
import ProductPrice from "..";

test('should render productPrice', () => {
    const preco = 1200.8
    render(<ProductPrice price={preco} />);
    expect(screen.getByText("R$")).toBeInTheDocument();
    expect(screen.getByText('1.200,80')).toBeInTheDocument();
})