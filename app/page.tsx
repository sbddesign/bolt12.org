export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 pt-20">
      <img
        src="/background-all.svg"
        alt="Background"
        className="w-full mb-12"
      />
      <div className="flex flex-col items-center text-center  text-xl md:text-2xl lg:text-4xl w-full md:w-2/3 lg:w-1/2 justify-center">
        <span className="text-[#2BAFF6]">
          Ever wondered what it’s like to live in the futuristic utopia of BOLT
          12?
        </span>
        <span className="text-[#E64500]">Let’s take a look!</span>
      </div>
    </main>
  );
}
