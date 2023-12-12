import Image from "next/image";

function Hero() {
  return (
    <header className="bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
      <div className="flex-1 flex flex-col gap-10">
        <Image
          src="./logo.svg"
          alt="logo"
          width={101}
          height={96}
          className="object-contain"
        />
        <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%] break-keep">
          연휴동안 볼만한 <span className="red-gradient">애니메이션</span> 모음
        </h1>
      </div>
      <div className="lg:flex-1 relative w-full h-[50vh] justify-center">
        <Image src="/anime.png" alt="anime" fill className="object-contain" />
      </div>
    </header>
  );
}

export default Hero;
