export default function Nav() {
  return (
    <nav className="flex h-14 bg-black text-white">
      <a
        href="/"
        className="ml-4 p-4 text-white items-center flex  font-bold whitespace-nowrap"
      >
        Meu Portifólio
      </a>
      <ul className="flex justify-end items-center w-full">
        <li>
          <a href="/" className="px-4 hover:text-[18px] duration-300">
            Home
          </a>
        </li>
        <li>
          {/* <a href="#" className="px-4 hover:text-[18px] duration-300">
            About
          </a> */}
        </li>
        <li>
          <a href="/contact" className="px-4 hover:text-[18px] duration-300">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
