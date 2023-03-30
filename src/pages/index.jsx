import { useState } from "react";

export default function Home() {
  const [smallWithdraw, setSmallWithdraw] = useState(false);
  const [bigWithdraw, setBigWithdraw] = useState(false);

  return (
    <>
      <div className="w-full sm:max-w-4xl mb-16">
        <h1 className="font-comfortaa_reg text-5xl uppercase pb-8 text-center">
          Big Protec
        </h1>
        <div className="border-2 rounded-2xl font-inter_reg p-4 border-[#58310F] bg-[#d6ba82]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid gap-2 md:grid-rows-2">
              <div className="grid md:row-span-2 grid-cols-1 md:grid-cols-2 gap-2">
                <div className="flex flex-col items-center justify-center bg-[#cd904680] rounded-2xl">
                  <p className="font-bold">protec amount</p>
                  <p className="font-medium">0.00</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-[#cd904680] rounded-2xl">
                  <p className="font-bold">baked bread</p>
                  <p className="font-medium">0.00</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-[#cd904680] rounded-2xl">
                  <p className="font-bold">apr</p>
                  <p className="font-medium">0.00</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-[#cd904680] rounded-2xl">
                  <p className="font-bold">TVL</p>
                  <p className="font-medium">0.00</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-2">
                <button
                  disabled
                  className="rounded-xl py-2 uppercase px-8 uppercase font-comfortaa_bold text-white bg-[#58310f] w-full disabled:opacity-70"
                >
                  claim bread
                </button>
                <button
                  disabled
                  className="rounded-xl py-2 uppercase px-8 uppercase font-comfortaa_bold text-white bg-[#58310f] w-full disabled:opacity-70"
                >
                  compound
                </button>
              </div>
            </div>

            {!bigWithdraw ? (
              <div className="flex flex-col gap-3 bg-[#cd904680] rounded-2xl p-4">
                <div className="flex gap-4">
                  <p
                    onClick={() => setBigWithdraw(false)}
                    className="cursor-pointer text-[#58310f] font-bold"
                  >
                    deposit
                  </p>
                  <p
                    onClick={() => setBigWithdraw(true)}
                    className="cursor-pointer hover:text-[#58310f]"
                  >
                    withdraw
                  </p>
                </div>
                <div className="flex justify-between">
                  <p>available balance:</p>
                  <p>0 BREAD</p>
                </div>
                <div className="flex h-12 items-center">
                  <input
                    className="rounded-l-3xl w-full h-full px-4 border-l-[6px] border-y-[6px] border-[#58310f] font-comfortaa_bold outline-none"
                    placeholder="0.00"
                    type="text"
                  />
                  <button className="px-4 rounded-r-3xl h-full font-comfortaa_bold text-white bg-[#58310f]">
                    MAX
                  </button>
                </div>
                <div>
                  <p className="text-center">
                    <a className="font-medium hover:text-[#58310f]" href="/#">
                      get BREAD ↗️
                    </a>
                  </p>
                </div>
                <button className="rounded-xl py-2 uppercase px-8 uppercase font-comfortaa_bold text-white bg-[#58310f]">
                  approve
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-3 bg-[#cd904680] rounded-2xl p-4">
                <div className="flex gap-4">
                  <p
                    onClick={() => setBigWithdraw(false)}
                    className="cursor-pointer hover:text-[#58310f] "
                  >
                    deposit
                  </p>
                  <p
                    onClick={() => setBigWithdraw(true)}
                    className="cursor-pointer text-[#58310f] font-bold"
                  >
                    withdraw
                  </p>
                </div>
                <div className="flex justify-between">
                  <p>protected amount:</p>
                  <p>0 BREAD</p>
                </div>
                <div className="flex h-12 items-center">
                  <input
                    className="rounded-l-3xl w-full h-full px-4 border-l-[6px] border-y-[6px] border-[#58310f] font-comfortaa_bold outline-none"
                    placeholder="0.00"
                    type="text"
                  />
                  <button className="px-4 rounded-r-3xl h-full font-comfortaa_bold text-white bg-[#58310f]">
                    MAX
                  </button>
                </div>
                <button className="rounded-xl py-2 uppercase px-8 uppercase font-comfortaa_bold text-white bg-[#58310f]">
                  approve
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full sm:max-w-4xl mb-16">
        <h1 className="font-comfortaa_reg text-5xl uppercase pb-8 text-center">
          Smol Protec
        </h1>
        <div className="border-2 rounded-2xl font-inter_reg p-4 border-[#58310F] bg-[#d6ba82]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid gap-2 md:grid-rows-2">
              <div className="grid md:row-span-2 grid-cols-1 md:grid-cols-2 gap-2">
                <div className="flex flex-col items-center justify-center bg-[#cd904680] rounded-2xl">
                  <p className="font-bold">protec amount</p>
                  <p className="font-medium">0.00</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-[#cd904680] rounded-2xl">
                  <p className="font-bold">baked bread</p>
                  <p className="font-medium">0.00</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-[#cd904680] rounded-2xl">
                  <p className="font-bold">apr</p>
                  <p className="font-medium">0.00</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-[#cd904680] rounded-2xl">
                  <p className="font-bold">TVL</p>
                  <p className="font-medium">0.00</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-2">
                <button
                  disabled
                  className="rounded-xl py-2 uppercase px-8 uppercase font-comfortaa_bold text-white bg-[#58310f] w-full disabled:opacity-70"
                >
                  claim bread
                </button>
                <button
                  disabled
                  className="rounded-xl py-2 uppercase px-8 uppercase font-comfortaa_bold text-white bg-[#58310f] w-full disabled:opacity-70"
                >
                  compound
                </button>
              </div>
            </div>

            {!smallWithdraw ? (
              <div className="flex flex-col gap-3 bg-[#cd904680] rounded-2xl p-4">
                <div className="flex gap-4">
                  <p
                    onClick={() => setSmallWithdraw(false)}
                    className="cursor-pointer text-[#58310f] font-bold"
                  >
                    deposit
                  </p>
                  <p
                    onClick={() => setSmallWithdraw(true)}
                    className="cursor-pointer hover:text-[#58310f]"
                  >
                    withdraw
                  </p>
                </div>
                <div className="flex justify-between">
                  <p>available balance:</p>
                  <p>0 BREAD</p>
                </div>
                <div className="flex h-12 items-center">
                  <input
                    className="rounded-l-3xl w-full h-full px-4 border-l-[6px] border-y-[6px] border-[#58310f] font-comfortaa_bold outline-none"
                    placeholder="0.00"
                    type="text"
                  />
                  <button className="px-4 rounded-r-3xl h-full font-comfortaa_bold text-white bg-[#58310f]">
                    MAX
                  </button>
                </div>
                <div>
                  <p className="text-center">
                    <a className="font-medium hover:text-[#58310f]" href="/#">
                      get BREAD ↗️
                    </a>
                  </p>
                </div>
                <button className="rounded-xl py-2 uppercase px-8 uppercase font-comfortaa_bold text-white bg-[#58310f]">
                  approve
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-3 bg-[#cd904680] rounded-2xl p-4">
                <div className="flex gap-4">
                  <p
                    onClick={() => setSmallWithdraw(false)}
                    className="cursor-pointer hover:text-[#58310f] "
                  >
                    deposit
                  </p>
                  <p
                    onClick={() => setSmallWithdraw(true)}
                    className="cursor-pointer text-[#58310f] font-bold"
                  >
                    withdraw
                  </p>
                </div>
                <div className="flex justify-between">
                  <p>protected amount:</p>
                  <p>0 BREAD</p>
                </div>
                <div className="flex h-12 items-center">
                  <input
                    className="rounded-l-3xl w-full h-full px-4 border-l-[6px] border-y-[6px] border-[#58310f] font-comfortaa_bold outline-none"
                    placeholder="0.00"
                    type="text"
                  />
                  <button className="px-4 rounded-r-3xl h-full font-comfortaa_bold text-white bg-[#58310f]">
                    MAX
                  </button>
                </div>
                <button className="rounded-xl py-2 uppercase px-8 uppercase font-comfortaa_bold text-white bg-[#58310f]">
                  approve
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
