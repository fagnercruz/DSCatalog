import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import { Link } from 'react-router-dom';


import './styles.css';


const ProductDetails = () => {


  return (
    <div className="product-details-container">
      <div className="base-card product-details-card">
        <Link to="/products">
          <div className="goback-container">
            <ArrowIcon />
            <h2>VOLTAR</h2>
          </div>
        </Link>
        <div className="row">
          <div className="col-xl-6">
           
              <>
                <div className="img-container">
                  <img src="" alt="" />
                </div>
                <div className="name-price-container">
                  <h1>P</h1>
                  
                </div>
              </>
           
          </div>
          <div className="col-xl-6">
              <div className="description-container">
                <h2>Descrição do produto</h2>
                <p>p</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
