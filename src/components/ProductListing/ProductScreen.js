import ProductItem from "./ProductItem";
import Box from "@mui/material/Box";
function ProductScreen(){
    const products = [
        {name:'product1',price:'200',description:'description1'},
        {name:'product2',price:'800',description:'description2'},
        {name:'product3',price:'400',description:'description3'},
        {name:'product4',price:'300',description:'description4'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product2',price:'800',description:'description2'},
        {name:'product3',price:'400',description:'description3'},
        {name:'product4',price:'300',description:'description4'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product2',price:'800',description:'description2'},
        {name:'product3',price:'400',description:'description3'},
        {name:'product4',price:'300',description:'description4'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product2',price:'800',description:'description2'},
        {name:'product3',price:'400',description:'description3'},
        {name:'product4',price:'300',description:'description4'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product2',price:'800',description:'description2'},
        {name:'product3',price:'400',description:'description3'},
        {name:'product4',price:'300',description:'description4'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product2',price:'800',description:'description2'},
        {name:'product3',price:'400',description:'description3'},
        {name:'product4',price:'300',description:'description4'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product2',price:'800',description:'description2'},
        {name:'product3',price:'400',description:'description3'},
        {name:'product4',price:'300',description:'description4'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product2',price:'800',description:'description2'},
        {name:'product3',price:'400',description:'description3'},
        {name:'product4',price:'300',description:'description4'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product2',price:'800',description:'description2'},
        {name:'product3',price:'400',description:'description3'},
        {name:'product4',price:'300',description:'description4'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product2',price:'800',description:'description2'},
        {name:'product3',price:'400',description:'description3'},
        {name:'product4',price:'300',description:'description4'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product2',price:'800',description:'description2'},
        {name:'product3',price:'400',description:'description3'},
        {name:'product4',price:'300',description:'description4'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'},
        {name:'product5',price:'500',description:'description5'}
    
    ]
    return (
            <Box sx= {{
                display:'flex',
                flexWrap: 'wrap',
                flexDirection:'row',
                p:2,
                bgColor:'background.paper'
                }}>
                {products.map((item,index)=>{
                    return <ProductItem 
                    key={index}
                    sx={{
                        bgColor:"background.paper",
                        borderRadius:2
                    }}
                    name= {item.name} 
                    price={item.price} 
                    description={item.description} 
                    />
                })}
            </Box>
    )
}

export default ProductScreen;