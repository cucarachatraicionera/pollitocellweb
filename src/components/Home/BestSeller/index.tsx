import React from "react";
import SingleItem from "./SingleItem";
import Image from "next/image";
import shopData from "@/components/Shop/shopData";

const BestSeller = () => {
  return (
    <section className="overflow-hidden">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* Título de la sección */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <span className="flex items-center gap-2.5 font-medium text-dark mb-1.5">
              <Image
                src="/images/icons/icon-07.svg"
                alt="icono"
                width={17}
                height={17}
              />
              Este mes
            </span>
            <h2 className="font-semibold text-xl xl:text-heading-5 text-dark">
              Más vendidos de PollitoCell
            </h2>
          </div>
        </div>

        {/* Productos más vendidos (limitado de la lista shopData) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7.5">
          {shopData.slice(1, 7).map((item, key) => (
            <SingleItem item={item} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
