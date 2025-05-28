"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const CounDown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "December, 31, 2024";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="overflow-hidden py-20">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="relative overflow-hidden z-1 rounded-lg bg-[#D0E9F3] p-4 sm:p-7.5 lg:p-10 xl:p-15">
          <div className="max-w-[422px] w-full">
            <span className="block font-medium text-custom-1 text-blue mb-2.5">
              ¡No te lo pierdas!
            </span>

            <h2 className="font-bold text-dark text-xl lg:text-heading-4 xl:text-heading-3 mb-3">
              Oferta limitada en PollitoCell
            </h2>

            <p>
              Aprovecha nuestros descuentos especiales en celulares Apple, accesorios y servicio técnico. ¡Solo hasta fin de año!
            </p>

            {/* Contador regresivo */}
            <div className="flex flex-wrap gap-6 mt-6">
              <div>
                <span className="min-w-[64px] h-14.5 font-semibold text-xl lg:text-3xl text-dark rounded-lg flex items-center justify-center bg-white shadow-2 px-4 mb-2">
                  {days < 10 ? "0" + days : days}
                </span>
                <span className="block text-custom-sm text-dark text-center">
                  Días
                </span>
              </div>

              <div>
                <span className="min-w-[64px] h-14.5 font-semibold text-xl lg:text-3xl text-dark rounded-lg flex items-center justify-center bg-white shadow-2 px-4 mb-2">
                  {hours < 10 ? "0" + hours : hours}
                </span>
                <span className="block text-custom-sm text-dark text-center">
                  Horas
                </span>
              </div>

              <div>
                <span className="min-w-[64px] h-14.5 font-semibold text-xl lg:text-3xl text-dark rounded-lg flex items-center justify-center bg-white shadow-2 px-4 mb-2">
                  {minutes < 10 ? "0" + minutes : minutes}
                </span>
                <span className="block text-custom-sm text-dark text-center">
                  Minutos
                </span>
              </div>

              <div>
                <span className="min-w-[64px] h-14.5 font-semibold text-xl lg:text-3xl text-dark rounded-lg flex items-center justify-center bg-white shadow-2 px-4 mb-2">
                  {seconds < 10 ? "0" + seconds : seconds}
                </span>
                <span className="block text-custom-sm text-dark text-center">
                  Segundos
                </span>
              </div>
            </div>
            {/* Fin contador */}

            <a
              href="#"
              className="inline-flex font-medium text-custom-sm text-white bg-blue py-3 px-9.5 rounded-md ease-out duration-200 hover:bg-blue-dark mt-7.5"
            >
              ¡Ver ofertas!
            </a>
          </div>

          <Image
            src="/images/countdown/countdown-bg.png"
            alt="fondo gráfico"
            className="hidden sm:block absolute right-0 bottom-0 -z-1"
            width={737}
            height={482}
          />
          <Image
            src="/images/countdown/countdown-01.png"
            alt="producto en promoción"
            className="hidden lg:block absolute right-4 xl:right-33 bottom-4 xl:bottom-10 -z-1"
            width={411}
            height={376}
          />
        </div>
      </div>
    </section>
  );
};

export default CounDown;
