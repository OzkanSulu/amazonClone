import React from "react";
import Image from "next/image";
import { LuMinus, LuPlus, LuTrash2 } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "@/store/nextSlice";

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
interface CartProductsProps {
  item: Item;
}

function CartProducts({ item }: CartProductsProps) {
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-100 rounded-md flex items-center gap-4">
      <Image
        className="object-cover"
        src={item.image}
        alt=""
        width={150}
        height={150}
      />
      <div className="flex flex-4 items-center gap-4 px-2">
        <div className="flex flex-col gap-1">
          <p className="text-lg font-semibold text-amazon_blue">{item.title}</p>
          <p className="text-sm text-gray-600">{item.description}</p>
          <p className="text-sm text-gray-800">
            Unit:{" "}
            <span className="font-semibold text-amazon_blue">
              $
              {item.price.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </p>
          <div className="flex items-center gap-6">
            <div className="flex justify-between items-center w-28 rounded-full px-4 py-1 border border-gray-300 shadow-lg shadow-gray-300 mt-1">
              <span
               
                className="cursor-pointer border border-transparent duration-200 hover:rounded-full hover:bg-red-400 hover:text-white"
              >
                <LuMinus />
              </span>
              <span>{item.quantity}</span>
              <span  className="cursor-pointer border border-transparent duration-200 hover:rounded-full hover:bg-green-400 hover:text-white">
                <LuPlus />
              </span>
            </div>
            <span className="text-red-400 cursor-pointer hover:scale-105 duration-300">
              <LuTrash2 />
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-1 pr-9">
        <span>
          $
          {(item.price * item.quantity).toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
      </div>
    </div>
  );
}

export default CartProducts;
