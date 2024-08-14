// import image1 from '../../../public/static/ee404d1e0d1d68588168'
import image1 from '../../static/ee404d1e0d1d68588168.jpg'

const ProductItem = ({name,description,price}) => {
    
   return(
    <div className="product-item">
        <img src={image1} alt="Image"/>
        <h3>{name}</h3>
        <p>&#8377;{price}</p>
        <p>{description}</p>
    </div>
   ) 
};

export default ProductItem;