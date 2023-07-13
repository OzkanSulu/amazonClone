import { ProductProps } from "@/type";
import Banner from "./components/Header/Banner";
import Product from "./components/Product";

interface Props{
  productData:ProductProps;
}

export default function Home({productData}:Props) {
  //console.log(productData);
  return (
    <main className="bg-gray-300">
      
      <div className='max-w-screen-2xl max-auto'>
       <Banner/>
       <div className="relative z-20 mb-10 sm:-mt-10 lg:-mt-36 px-6 ">
       <Product productData={productData}/>
       </div>
      </div>
      
    </main>
  )
}

//fetching

export const getServerSideProps =async () => {
  const res=await fetch("https://fakestoreapiserver.reactbd.com/tech");
  const productData = await res.json();
  return {props:{productData}}
}