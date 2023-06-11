import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-lg font-bold">Contáctanos</h4>
            <p className="mt-2">Dirección: Calle Principal #123, Ciudad</p>
            <p className="mt-2">Teléfono: 123-456-7890</p>
            <p className="mt-2">Correo electrónico: info@escuelaingles.com</p>
          </div>
          <div>
            <h4 className="text-lg font-bold">Síguenos en redes sociales</h4>
            <div className="mt-2 flex justify-between  w-[250px]">
              <a href="#">
                <FaFacebook className="text-white text-3xl" />
              </a>
              <a href="#">
                <FaTwitter className="text-white text-3xl" />
              </a>
              <a href="#">
                <FaInstagram className="text-white text-3xl" />
              </a>
              <a href="#">
                <FaYoutube className="text-white text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
