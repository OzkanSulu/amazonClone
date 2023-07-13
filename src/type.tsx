export interface StoreProduct{
    brand:string;
    category:string;
    description:string;
    image:string;
    isNew:boolean;
    oldPrice:number;
    price:number;
    title:string;
    _id:number;
    quantity:1,
}

export interface ProductProps{
    brand:string;
    category:string;
    description:string;
    image:string;
    isNew:boolean;
    oldPrice:number;
    price:number;
    title:string;
    _id:number;
    quantit:1,
}

export interface StateProps{
    productData:[],
    favoriteData:[],
    userInfo: null | string,
    next:any,
}