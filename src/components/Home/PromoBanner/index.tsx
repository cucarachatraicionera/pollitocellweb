import React from "react";
import Image from "next/image";

const PromoBanner = () => {
  return (
    <section className="overflow-hidden py-20">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* Banner principal promocional */}
        <div className="relative z-1 overflow-hidden rounded-lg bg-[#F5F5F7] py-12.5 lg:py-17.5 xl:py-22.5 px-4 sm:px-7.5 lg:px-14 xl:px-19 mb-7.5">
          <div className="max-w-[550px] w-full">
            <span className="block font-medium text-xl text-dark mb-3">
              iPhone 14 Plus & 14 Pro Max
            </span>

            <h2 className="font-bold text-xl lg:text-heading-4 xl:text-heading-3 text-dark mb-5">
              ¡Hasta 10% de descuento!
            </h2>

            <p>
              En <strong>PollitoCell</strong> encuentras los mejores precios en
              iPhones con garantía. El iPhone 14 viene con chip A15 Bionic y GPU
              de 5 núcleos: potencia y rendimiento asegurado.
            </p>

            <a
              href="https://wa.link/r0bnfv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex font-medium text-custom-sm text-white bg-blue py-[11px] px-9.5 rounded-md ease-out duration-200 hover:bg-blue-dark mt-7.5"
            >
              VER OFERTA
            </a>
          </div>

          <Image
            src="/images/promo/promo-01.png"
            alt="Imagen promoción iPhone"
            className="absolute bottom-0 right-4 lg:right-26 -z-1"
            width={274}
            height={350}
          />
        </div>

        <div className="grid gap-7.5 grid-cols-1 lg:grid-cols-2">
          {/* Banner pequeño: servicio técnico */}
          <div className="relative z-1 overflow-hidden rounded-lg bg-[#DBF4F3] py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10">
            <Image
              src="/images/promo/promo-02.png"
              alt="Imagen reparación"
              className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-10 -z-1"
              width={241}
              height={241}
            />

            <div className="text-right">
              <span className="block text-lg text-dark mb-1.5">
                Reparación Especializada Apple
              </span>

              <h2 className="font-bold text-xl lg:text-heading-4 text-dark mb-2.5">
                Técnicos Certificados
              </h2>

              <p className="font-semibold text-custom-1 text-teal">
                Servicio rápido y garantizado
              </p>

              <a
                href="https://wa.link/r0bnfv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex font-medium text-custom-sm text-white bg-teal py-2.5 px-8.5 rounded-md ease-out duration-200 hover:bg-teal-dark mt-9"
              >
                SOLICITA SOPORTE
              </a>
            </div>
          </div>

          {/* Banner pequeño: accesorios */}
          <div className="relative z-1 overflow-hidden rounded-lg bg-[#FFECE1] py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10">
            <Image
              src="/images/promo/promo-03.png"
              alt="Imagen accesorios"
              className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-8.5 -z-1"
              width={200}
              height={200}
            />

            <div>
              <span className="block text-lg text-dark mb-1.5">
                Audífonos y Accesorios
              </span>

              <h2 className="font-bold text-xl lg:text-heading-4 text-dark mb-2.5">
                Hasta <span className="text-orange">30%</span> de descuento
              </h2>

              <p className="max-w-[285px] text-custom-sm">
                Productos seleccionados en promoción: estuches, cargadores y
                más, con envío rápido desde Cali.
              </p>

              <a
                href="https://wa.link/r0bnfv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex font-medium text-custom-sm text-white bg-orange py-2.5 px-8.5 rounded-md ease-out duration-200 hover:bg-orange-dark mt-7.5"
              >
                VER PRODUCTOS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
