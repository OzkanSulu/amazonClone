import React from "react";
import Image from "next/image";
import { SlClose } from "react-icons/sl";
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addCart, deleteFavorite } from "@/store/nextSlice";
import EmptyFav from "../EmptyFav";
import { StateProps } from "@/type";


interface Item {
  brand: string;
  category: string;
  description: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  title: string;
  _id: number;
  quantity: number;
}
interface FavoriteProductsProps {
  item: Item;
}

const FavoritesProducts = ({ item }: FavoriteProductsProps) => {
  const dispatch = useDispatch();
  const {favoriteData} =useSelector((state:StateProps)=>state.next)
  return (
    <div className="flex items-center relative overflow-hidden group">
      <div className="flex flex-col gap-4 rounded-lg relative p-3 items-center border-[2px] border-gray-400">
        <div>
          <Image
            className="object-fit cursor-pointer"
            src={item.image}
            width={300}
            height={200}
            alt=""
          />
          <hr />
          <p className="text-amazon_blue text-xs">{item.category}</p>
          <p className="text-amazon_blue font-semibold text-md">{item.title}</p>
          <div className="flex items-center gap-2  mt-2">
            {item.isNew && (
              <span className=" text-sm line-through text-gray-400">
                $
                {item.oldPrice.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            )}
            <span className="item-md font-semibold text-amazon_blue">
              $
              {item.price.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
          <span className="text-sm text-gray-500 font-bodyFont font-light">
            {item.description.substring(0, 120)}...
          </span>
        </div>
        <button
          onClick={() =>
            dispatch(
              addCart({
                _id: item._id,
                brand: item.brand,
                category: item.category,
                image: item.image,
                description: item.description,
                isNew: item.isNew,
                oldPrice: item.oldPrice,
                price: item.price,
                title: item.title,
                quantity: 1,
              })
            )
          }
          className="w-full h-12 border rounded-md hover:bg-amazon_blue duration-300 border-amazon_blue text-amazon_blue font-semibold hover:text-white "
        >
          <p>add to cart</p>
        </button>
        <div className=" flex flex-col gap-3  rounded-lg border border-amazon_light p-4 absolute top-[10rem] right-1 translate-x-[6rem] group-hover:translate-x-0 duration-3000 transition-transform">
          <FaHeart onClick={() =>
            dispatch(
              deleteFavorite({
                _id: item._id,
                brand: item.brand,
                category: item.category,
                image: item.image,
                description: item.description,
                isNew: item.isNew,
                oldPrice: item.oldPrice,
                price: item.price,
                title: item.title,
                quantity: 1,
              })
            )
          } className="text-amazon_yellow cursor-pointer" />
          <hr />
          <HiShoppingCart
            onClick={() =>
              dispatch(
                addCart({
                  _id: item._id,
                  brand: item.brand,
                  category: item.category,
                  image: item.image,
                  description: item.description,
                  isNew: item.isNew,
                  oldPrice: item.oldPrice,
                  price: item.price,
                  title: item.title,
                  quantity: 1,
                })
              )
            }
            className="cursor-pointer"
          />
        </div>
      </div>
      <div>
        <SlClose
          onClick={() =>
            dispatch(
              deleteFavorite({
                _id: item._id,
                brand: item.brand,
                category: item.category,
                image: item.image,
                description: item.description,
                isNew: item.isNew,
                oldPrice: item.oldPrice,
                price: item.price,
                title: item.title,
                quantity: 1,
              })
            )
          }
          className="text-xl cursor-pointer text-gray-300 hover:text-red-500 absolute right-3 top-4"
        />
      </div>
     
    </div>
  );
};

export default FavoritesProducts;
