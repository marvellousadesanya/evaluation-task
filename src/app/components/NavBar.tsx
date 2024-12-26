import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="sticky top-0 border-b border-[#939393]/30  text-white bg-[#0E0E11] z-30 py-3 flex justify-between items-center px-7 uppercase text-sm">
      <div>
        <Image src="/img/logo.svg" alt="logo" width={100} height={40} />
      </div>

      <div className="hidden sm:flex  justify-center gap-8 items-center">
        <div>Works</div>
        <div>Expertise</div>
        <div>About</div>
        <div>Insights</div>
      </div>

      <div className="justify-end">Contact</div>
    </nav>
  );
}
