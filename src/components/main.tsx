import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default function Main() {
  return (
    <div className="w-full h-screen bg-slate-950 flex  justify-between ">
      <div className="w-full bg-slate-900 m-2 p-2 rounded-xl flex justify-evenly">
        <div className=" w-[500px] h-[550px] mt-46 justify-center items-center">
          <p className="font-bold text-white text-4xl pt-6 font-regular text-center">
            Enzo Gutiérrez <br />
            <span className="mr-32">Pereira</span>
          </p>
          <p className="mt-12 text-green-500 font-mono font-bold text-left text-wrap ml-32 flex">
            Programador com experiência em JavaScript, TypeScript, Python, C,
            C#, C++, Java, SQL, criando soluções eficientes e inovadoras.
          </p>

          <a href="https://github.com/neozmmv" className="items-center">
            <img
              src="/github.png"
              className="w-16 h-16 ml-64 mt-12 hover:scale-120 duration-300 hover:drop-shadow-[0px_0px_10px_rgba(0,0,0,1.5)]"
            />
          </a>
        </div>

        <div className=" w-[500px] h-[550px] mt-40 justify-center items-start text-center flex">
          <img src="/neoz.jpg" className="rounded-full" />
        </div>
      </div>
    </div>
  );
}
