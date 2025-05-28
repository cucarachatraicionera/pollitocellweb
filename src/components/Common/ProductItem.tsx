"use client";
import React from "react";
import Image from "next/image";
import { Product } from "@/types/product";
import Link from "next/link";

const ProductItem = ({ item }: { item: Product }) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden flex items-center justify-center rounded-lg bg-[#F6F7FB] min-h-[270px] mb-4">
        <Image src={item.imgs.previews[0]} alt="" width={250} height={250} />
      </div>

      <div className="flex items-center gap-2.5 mb-2">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Image
              key={i}
              src="/images/icons/icon-star.svg"
              alt="star icon"
              width={14}
              height={14}
            />
          ))}
        </div>
        <p className="text-custom-sm">({item.reviews})</p>
      </div>

      <h3 className="font-medium text-dark ease-out duration-200 hover:text-blue mb-1.5">
        <Link href="/shop-details"> {item.title} </Link>
      </h3>

      <span className="flex items-center gap-2 font-medium text-lg">
        <span className="text-dark">${item.discountedPrice}</span>
        <span className="text-dark-4 line-through">${item.price}</span>
      </span>
    </div>
  );
};

export default ProductItem;
