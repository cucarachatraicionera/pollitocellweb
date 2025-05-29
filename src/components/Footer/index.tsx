import React from "react";
import Image from "next/image";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="overflow-hidden">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="flex flex-wrap xl:flex-nowrap gap-10 xl:gap-19 xl:justify-between pt-17.5 xl:pt-22.5 pb-10 xl:pb-15">
          <div className="max-w-[330px] w-full">
            <h2 className="mb-7.5 text-custom-1 font-medium text-dark">PollitoCell</h2>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex gap-4.5">
                <span>📍</span>
                Cra 79B #12a - 26, Santiago de Cali, Colombia
              </li>
              <li className="flex gap-4.5">
                <span>📱</span>
                <a href="https://wa.me/573044670144" target="_blank" rel="noopener noreferrer">
                  +57 304 467 0144
                </a>
              </li>
              <li className="flex gap-4.5">
                <span>✉️</span>
                <a href="mailto:desarrollo@pinneaplesoft.com">desarrollo@pinneaplesoft.com</a>
              </li>
            </ul>

            <div className="flex items-center gap-4 mt-7.5">
              <a href="#" aria-label="Instagram">
                <Image src="/images/social/instagram.svg" alt="Instagram" width={20} height={20} />
              </a>
              <a href="#" aria-label="Facebook">
                <Image src="/images/social/facebook.svg" alt="Facebook" width={20} height={20} />
              </a>
              <a href="https://wa.me/573044670144" target="_blank" aria-label="WhatsApp">
                <Image src="/images/social/whatsapp.svg" alt="WhatsApp" width={20} height={20} />
              </a>
            </div>
          </div>

          <div className="w-full sm:w-auto">
            <h2 className="mb-7.5 text-custom-1 font-medium text-dark">Mi Cuenta</h2>
            <ul className="flex flex-col gap-3.5 text-sm">
              <li><a href="#">Iniciar sesión</a></li>
              <li><a href="#">Mis pedidos</a></li>
              <li><a href="#">Garantía</a></li>
              <li><a href="#">Tienda</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </div>

          <div className="w-full sm:w-auto">
            <h2 className="mb-7.5 text-custom-1 font-medium text-dark">Enlaces Rápidos</h2>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="#">Términos y condiciones</a></li>
              <li><a href="#">Política de privacidad</a></li>
              <li><a href="#">Cambios y devoluciones</a></li>
              <li><a href="#">Soporte técnico</a></li>
            </ul>
          </div>

          <div className="w-full sm:w-auto">
            <h2 className="mb-7.5 text-custom-1 font-medium text-dark lg:text-right">
              Próximamente App
            </h2>
            <p className="lg:text-right text-custom-sm mb-4">
              Compra y recibe soporte directamente desde nuestra app.
            </p>
          </div>
        </div>
      </div>

      <div className="py-5 xl:py-7.5 bg-gray-1">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <p className="text-dark font-medium">
              &copy; {year} PollitoCell.com – Reparación y Venta Apple. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <p className="font-medium">Pagos seguros con:</p>
              <div className="flex gap-6">
                <Image src="/images/payment/payment-01.svg" alt="Visa" width={66} height={22} />
                <Image src="/images/payment/payment-02.svg" alt="PayPal" width={18} height={21} />
                <Image src="/images/payment/payment-03.svg" alt="MasterCard" width={33} height={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
