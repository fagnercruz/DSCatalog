import './styles.css';

//import ProductImg from 'assets/images/product.png';
import ProductPrice from 'components/ProductPrice';
import { Product } from 'types/Product';

type Props = {
    produto : Product;
}

const ProductCard = ({produto} : Props) => {

    return (
        <div className="base-card product-card">
            <div className="card-top-container">
                <img src={produto.imgUrl} alt={produto.name} />
            </div>
            <div className="card-bottom-container">
                <h6>{produto.name}</h6>
                <ProductPrice valor={produto.price} />
            </div>
        </div>
    );
}

export default ProductCard;