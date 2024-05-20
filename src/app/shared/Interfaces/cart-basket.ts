export interface CartBasket 
{
    id: string,
    items: [
        {
        id:number,
        productName: string,
        price: number,
        quantity: number,
        pictureUrl: "images/products/big.webp",
        brand: string,
        type: string
        },
    ]    
}
