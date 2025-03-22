import Link from "next/link";

export default function Main() {
  return (
    <div className="w-full h-screen bg-slate-950 flex justify-between">
      <div className="w-full bg-slate-900 m-2 p-2 rounded-xl flex flex-col sm:flex-row justify-evenly items-center">
        <div className="w-full sm:w-[500px] sm:h-[550px] sm:mt-24 flex flex-col justify-center items-center">
          <p className="font-bold text-white text-3xl sm:text-4xl pt-6 text-center">
            Enzo Gutiérrez <br />
            <span className="sm:mr-32">Pereira</span>
          </p>
          <p className="mt-6 sm:mt-12 text-green-500 font-mono font-bold text-base sm:text-lg text-left ml-4 sm:ml-32">
            Programador com experiência em JavaScript, TypeScript, Python, C,
            C#, C++, Java, SQL, criando soluções eficientes e inovadoras.
          </p>

          {/* Imagem mobile */}
          <div className="w-full flex justify-center mt-10 sm:hidden">
            <img src="/neoz.jpg" className="rounded-full w-46 sm:w-auto" />
          </div>

          <Link href="https://github.com/neozmmv">
            <img
              src="/github.png"
              className="w-18 sm:w-22 h-18 sm:h-22 mt-12 sm:mt-12 sm:ml-16 hover:scale-110 duration-300 hover:drop-shadow-[0px_0px_10px_rgba(0,0,0,1.5)]"
            />
          </Link>
        </div>

        {/* Imagem desktop */}
        <div className="hidden sm:flex w-[500px] h-[550px] mt-40 justify-center items-start text-center">
          <img src="/neoz.jpg" className="rounded-full" />
        </div>
      </div>
    </div>
  );
}
