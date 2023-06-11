import React from "react";

const LandingPage = () => {
  return (
    <div>
      <div className="bg-blue-900 px-6 pb-10 text-white">
        <h1 className="text-4xl text-center mx-4 p-4">learn with me</h1>
        <div className="flex justify-center mb-10 mx-auto w-56 h-56 rounded-[50%] overflow-hidden ">
          <img
            className="w-full h-full"
            src="https://i.pinimg.com/736x/df/fd/fa/dffdfa5382fed79ec98bb7176b660463.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4">
          <p>
            Este proyecto se inicia debido a que siempre quise aprender ingles
            pero de una manera mas directa segun mis ideas de una manera más
            matematica, siempre senti que se me hacia dificil este idioma porque
            mi manera de ver las cosas es siempre con logica detras de todo y lo
            que siempre note en los metodos tradiconales es que me hacia sentir
            que no estaba avanzando y que el camino seria muy dificil y que en
            cualquier momento me rendiria como en algunos momentos me paso y
            como nos ha pasado a muchos.
          </p>
          <h2>bases del metodo</h2>
          <p>
            El metodo consta de generar interes en entender pequeños fracmentos
            de historias basado en nuestros nivel
          </p>
          <h3>En que nivel quieres iniciar</h3>
          <div className="pl-4 flex flex-col">
            <a href="#">Biginer</a>
            <a href="#">Basic</a>
            <a href="#">Pre-intermediate</a>
            <a href="#">Intermediate</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
