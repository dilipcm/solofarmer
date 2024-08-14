import ProductItem from "./ProductItem";
function ProductScreen(){
    const products = [
        {name:'product1',price:'200',description:'description1 description1'},
        {name:'product2',price:'800',description:'description2 description2'},
        {name:'product3',price:'400',description:'description3 description3'},
        {name:'product4',price:'300',description:'description4 description4'},
        {name:'product5',price:'500',description:'description5 description5'},
    ]
    return (
        <div>
            <h1>All Products</h1>
            <div>
                {products.map((item,index)=>{
                    return <ProductItem  name= {item.name} price={item.price} description={item.description} key={index} />
                })}
            </div>
        </div>
    )
}

export default ProductScreen;