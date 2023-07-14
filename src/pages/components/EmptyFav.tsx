import React from "react";
import Link from "next/link";

const EmptyFav = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="text-lg font-semibold text-amazon_blue">No favorites found!!!</div>
      <div>
        <Link
          className="text-lg text-amazon_yellow px-4 flex justify-center p-4 items-center h-12 text-semibold border-[2px] border-amazon_yellow"
          href="/"
        >
          Go to shopping
        </Link>
      </div>{" "}
    </div>
  );
};

export default EmptyFav;
