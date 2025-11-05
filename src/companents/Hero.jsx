import React from "react";
import Heror from "../assets/img/hero.png";
const Hero = () => {
  return (
    <div>
     <section className="my-20">
        <div className="mycontainer">
             <div className="parent flex md:flex-row flex-col items-center justify-between md:gap-3 gap-10">
        <div className="left">
          <img src={Heror} alt="" />
        </div>

        <div className="right md:w-[50%] flex items-start flex-col gap-5">
          <p className=" font-normal text-2xl leading-[83%] text-[#f2be22]">
            о нашем походе
          </p>
          <h3 className="font-extrabold text-[32px] leading-[120%] text-[#18121e]">
            Исследуйте все горные массивы мира вместе с нами
          </h3>
          <p className="font-normal text-lg leading-[150%] text-[#18121e]">
            Его корни уходят в один фрагмент классической латыни 45 года н.э.,
            то есть более двух тысячелетий назад. Ричард МакКлинток, профессор
            латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из
            самых странных слов в Lorem Ipsum, "consectetur"и занялся его
            поисками в классической латинской литературе.
          </p>
          <button className=" font-semibold text-base leading-[125%] tracking-[0.01em] text-[#fdfdfd] rounded bg-[#1a3e3e] px-9 py-4">Программа тура</button>
        </div>
      </div>
        </div>
     </section>
    </div>
  );
};

export default Hero;
