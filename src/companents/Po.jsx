import React from "react";

const Po = () => {
  return (
    <div>
      <section className="my-20">
        <div className="mycontainer">
          <p className=" font-normal text-2xl leading-[83%] text-center text-[#f2be22]">
            по версии отдыхающих
          </p>
          <h4 className=" font-extrabold text-[32px] leading-[120%] text-center text-[#18121e] my-6">
            Популярные направления
          </h4>

          <div className="boxes grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 justify-between">
            <div
              className=" h-[500px] rounded-[50px]  bg-cover bg-center relative"
              style={{ backgroundImage: "url('/public/river.png')" }}
            >
              <div className="absolute right-0 top-10 w-[65px] h-8 backdrop-blur-sm bg-[rgba(253,253,253,0.4)] px-2 py-1 rounded-[4px_0_0_4px]">
                <i class="fa-solid fa-star text-yellow-400"></i> 4.9
              </div>

              <div className=" flex items-center justify-between backdrop-blur-[6px] bg-[rgba(255,255,255,0.2)] rounded-[0_0_32px_32px] p-6 absolute bottom-0 w-full">
                <div className="">
                  <h4 className=" font-bold text-2xl leading-[120%] text-[#fdfdfd] rounded-[4px_0_0_4px]">
                    Озеро возле гор
                  </h4>
                  <p className=" font-normal text-sm leading-[129%] text-[#fdfdfd]">
                    романтическое приключение
                  </p>
                </div>

                <p className="font-bold text-xl leading-[120%] text-[#fdfdfd] bg-[rgba(255,255,255,0.3)] rounded w-[86px] h-10 px-4 py-2">
                  480 $
                </p>
              </div>
            </div>

            <div
              className=" h-[500px] rounded-[50px]  bg-cover bg-center relative"
              style={{ backgroundImage: "url('/public/cosmos.png')" }}
            >
              <div className="absolute right-0 top-10 w-[65px] h-8 backdrop-blur-sm bg-[rgba(253,253,253,0.4)] px-2 py-1 rounded-[4px_0_0_4px]">
                <i class="fa-solid fa-star text-yellow-400"></i> 4.5
              </div>

              <div className=" flex items-center justify-between backdrop-blur-[6px] bg-[rgba(255,255,255,0.2)] rounded-[0_0_32px_32px] p-6 absolute bottom-0 w-full">
                <div className="">
                  <h4 className=" font-bold text-2xl leading-[120%] text-[#fdfdfd] rounded-[4px_0_0_4px]">
                    Ночь в горах
                  </h4>
                  <p className=" font-normal text-sm leading-[129%] text-[#fdfdfd]">
                    в компании друзей
                  </p>
                </div>

                <p className="font-bold text-xl leading-[120%] text-[#fdfdfd] bg-[rgba(255,255,255,0.3)] rounded w-[86px] h-10 px-4 py-2">
                500 $
                </p>
              </div>
            </div>

            <div
              className=" h-[500px] rounded-[50px]  bg-cover bg-center relative"
              style={{ backgroundImage: "url('/public/women.png')" }}
            >
              <div className="absolute right-0 top-10 w-[65px] h-8 backdrop-blur-sm bg-[rgba(253,253,253,0.4)] px-2 py-1 rounded-[4px_0_0_4px]">
                <i class="fa-solid fa-star text-yellow-400"></i> 5.0
              </div>

              <div className=" flex items-center justify-between backdrop-blur-[6px] bg-[rgba(255,255,255,0.2)] rounded-[0_0_32px_32px] p-6 absolute bottom-0 w-full">
                <div className="">
                  <h4 className=" font-bold text-2xl leading-[120%] text-[#fdfdfd] rounded-[4px_0_0_4px]">
                    Йога в горах
                  </h4>
                  <p className=" font-normal text-sm leading-[129%] text-[#fdfdfd]">
                    для тех, кто забоится о себе
                  </p>
                </div>

                <p className="font-bold text-xl leading-[120%] text-[#fdfdfd] bg-[rgba(255,255,255,0.3)] rounded w-[86px] h-10 px-4 py-2">
                 230 $
                </p>
              </div>
            </div>
          </div>

         <div className="text-center my-5"> <button className="font-semibold text-base leading-[125%] tracking-[0.01em] text-[#fdfdfd] rounded w-[244px] h-[52px] bg-[#1a3e3e] px-9 py-4 ">Рейтинг направлений</button></div>
        </div>
      </section>
    </div>
  );
};

export default Po;
