export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 pt-20">
      <div className="h-screen flex items-center flex-col">
        <img
          src="/background-all.svg"
          alt="Background"
          className="w-full mb-12"
        />
        <div className="flex flex-col items-center text-center  text-xl md:text-2xl lg:text-4xl w-full md:w-2/3 lg:w-1/2 justify-center">
          <span className="text-[#2BAFF6]">
            Ever wondered what it’s like to live in the futuristic utopia of
            BOLT 12?
          </span>
          <span className="text-[#E64500]">Let’s take a look!</span>
        </div>
      </div>
      {/* User Stories */}
      <div className="flex flex-col items-center w-full mt-24">
        <div className="flex  justify-start items-center w-full gap-20">
          <img src="/users/alice.svg" alt="Alice" className="w-1/3" />
          <div className="flex flex-col gap-4 w-2/5">
            <h2 className="text-4xl text-[#6D4FA6]">
              Reusable Payment Requests
            </h2>
            <span>
              Now that I can just slap my QR code on my tip jar, my band finally
              can finally receive tips in bitcoin! Gone are the days of making a
              new QR code for every fan that wants to tip us after gig, and
              watching 75% of them lose interest after they saw how long it took
              us to make BOLT11 invoices.
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
