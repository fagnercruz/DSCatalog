import { render, screen } from "@testing-library/react";
import ButtonIcon from "..";
import ProductPrice from "components/ProductPrice";
import { hasUncaughtExceptionCaptureCallback } from "process";
import ProductCard from "components/ProductCard";
import { Product } from "types/Product";
import { Category } from "types/Category";

describe('Testes de componentes', () => {
    test('ButtonIcon shoud render button with given text', () => {
        const texto = "texto de exemplo";
        render( <ButtonIcon text={texto} /> );
        expect(screen.getByText(texto)).toBeInTheDocument();
    })
});

