import React from "react";
import Peoplebi from "../assets/img/people.png";
import Shit from "../assets/img/shit.png";
import Hung from "../assets/img/hung.png";
import Flover from "../assets/img/flover.png";
const Nashe = () => {
  return (
    <div>
      <section className="my-20">
        <div className="mycontainer">
          <div className="p flex items-center md:flex-row flex-col  justify-between md:gap-4 gap-9">
            <div className="l flex items-start  flex-col md:gap-8 gap-3 md:w-[50%]">
              <p className="font-normal text-2xl leading-[83%] text-[#f2be22]">
                наше предложение
              </p>
              <h3 className=" font-extrabold text-[32px] leading-[120%] text-[#18121e]">
                Лучшие программы для тебя
              </h3>
              <p className=" font-normal text-lg leading-[150%] text-[#18121e]">
                Его корни уходят в один фрагмент классической латыни 45 года
                н.э., то есть более двух тысячелетий назад. Ричард МакКлинток,
                профессор латыни из колледжа.
              </p>

              <div className=" flex items-center gap-5">
                <img src={Peoplebi} alt="" />
                <div className="">
                  
                  <h4 className=" font-bold text-lg leading-[111%] tracking-[0.01em] text-[#18121e]">
                    Опытный гид
                  </h4>
                  <p className=" font-normal text-sm leading-[143%] text-black">
                    Для современного мира базовый вектор развития предполагает
                    независимые способы реализации соответствующих условий
                    активизации.
                  </p>
                </div>
              </div>


              <div className=" flex items-center gap-5">
                <img src={Shit} alt="" />
                <div className="">
                  
                  <h4 className=" font-bold text-lg leading-[111%] tracking-[0.01em] text-[#18121e]">
                   Безопасный поход
                  </h4>
                  <p className=" font-normal text-sm leading-[143%] text-black">
                    Для современного мира базовый вектор развития предполагает
                    независимые способы реализации соответствующих условий
                    активизации.
                  </p>
                </div>
              </div>


              <div className=" flex items-center gap-5">
                <img src={Hung} alt="" />
                <div className="">
                  
                  <h4 className=" font-bold text-lg leading-[111%] tracking-[0.01em] text-[#18121e]">
                   Лояльные цены
                  </h4>
                  <p className=" font-normal text-sm leading-[143%] text-black">
                    Для современного мира базовый вектор развития предполагает
                    независимые способы реализации соответствующих условий
                    активизации.
                  </p>
                </div>
              </div>
            </div>

            <div className="r">
                <img src={Flover} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nashe;
