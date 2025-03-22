import Nav from "@/components/nav";

export default function Contact() {
  return (
    <>
      <Nav />
      <div className="w-full h-screen bg-slate-950 flex justify-between ">
        <div className="w-full bg-slate-900 m-2 p-2 rounded-xl flex justify-center align-center">
          <div className=" bg-slate-950 sm:mr-0 rounded-4xl w-auto h-68 p-6 sm:w-[500px] sm:h-[280px] mt-40 flex-col justify-center ">
            <h1 className="font-bold text-white text-3xl pt-6 font-regular text-center">
              Entre em contato por:
            </h1>
            <h2 className="font-mono text-white text-xl mt-22 font-regular text-center">
              E-mail: enzogp2005@gmail.com
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
