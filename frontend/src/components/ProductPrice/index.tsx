import { formatadorPreco } from 'utils/formatadores';
import './styles.css';

type Props = {
    valor : number;
}

const ProductPrice = ({valor} : Props) => {

    return (
        <div className="product-price-container">
            <span>R$</span>
            <h3>{formatadorPreco(valor)}</h3>
        </div>
    );
}

export default ProductPrice;
