"use client";
import React from "react";
import { Product } from "@/types/product";
import Link from "next/link";
import Image from "next/image";

const SingleListItem = ({ item }: { item: Product }) => {
  return (
    <div className="group rounded-lg bg-white shadow-1">
      <div className="flex">
        <div className="shadow-list relative overflow-hidden flex items-center justify-center max-w-[270px] w-full sm:min-h-[270px] p-4">
          <Image src={item.imgs.previews[0]} alt="" width={250} height={250} />
        </div>

        <div className="w-full flex flex-col gap-5 sm:flex-row sm:items-center justify-center sm:justify-between py-5 px-4 sm:px-7.5 lg:pl-11 lg:pr-12">
          <div>
            <h3 className="font-medium text-dark ease-out duration-200 hover:text-blue mb-1.5">
              <Link href="/shop-details">{item.title}</Link>
            </h3>
            <span className="flex items-center gap-2 font-medium text-lg">
              <span className="text-dark">${item.discountedPrice}</span>
              <span className="text-dark-4 line-through">${item.price}</span>
            </span>
          </div>

          <div className="flex items-center gap-2.5 mb-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src="/images/icons/icon-star.svg"
                  alt="star icon"
                  width={15}
                  height={15}
                />
              ))}
            </div>
            <p className="text-custom-sm">({item.reviews})</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleListItem;
