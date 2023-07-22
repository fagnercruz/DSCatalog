import ProductCard from 'components/ProductCard';
import { Link } from 'react-router-dom';
import { Product } from 'types/Product';
import './style.css';
import { useEffect, useState } from 'react';
import { SpringPage } from 'types/vendor/spring';
import axios from 'axios';
import { AxiosParams } from 'types/vendor/axios';
import { BASE_URL } from 'utils/requests';

const Catalog = () => {

  //Hook para paginação do spring
  const [page, setPage] = useState<SpringPage<Product>>();


  useEffect(()=>{

    // constante com os paramentros pa requisição
    const params : AxiosParams = {
      method: 'GET',
      url: `${BASE_URL}/products`,
      params: {
        page: 0,
        size: 12
      }
    }

    // como vou passar paramentros acima, naõ precisa chamar o metodo get
    axios(params)
      .then(resultado => {
        setPage(resultado.data);
      })

  },[]);

  return (
    <div className="container my-4 catalog-container">

      <div className='row catalog-title-container'>
        <h1>Catálogo de produtos</h1>
      </div>

      <div className="row">
        {page?.content.map((produto) => {
            return (
              <div className="col-sm-6 col-lg-4 col-xl-3" key={produto.id}>
                <Link to={`/products/${produto.id}`} >
                  <ProductCard produto={produto}/>
                </Link>
              </div>
            );
        })}     
      </div>

    </div>
  );
};

export default Catalog;
