import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className=" bg-[#1a3e3e] py-20">
        <div className="mycontainer">
          <div className="parent flex md:flex-row flex-col items-start justify-between md:gap-1 gap-8">
            <div className="bo md:w-[30%] bo2 flex flex-col gap-3">
              <h4 className="font-bold text-xl leading-[120%] text-[#f3f5f4]">
                Компания «РумТибет»
              </h4>
              <p className="font-normal text-sm leading-[143%] text-white">
                Его корни уходят в один фрагмент классической латыни 45 года
                н.э., то есть более двух тысячелетий назад. Ричард МакКлинток,
                профессор латыни из колледжа Hampden-Sydney.
              </p>
              <div className=" flex items-center gap-5">
                <a
                  className="font-semibold text-sm leading-[129%] underline text-white"
                  href="mailto:info@domain.com"
                >
                  info@domain.com
                </a>
                <a
                  className="text-sm leading-[129%] underline text-white"
                  href="tel:+7 (123) 456-78-90"
                >
                  +7 (123) 456-78-90
                </a>
              </div>
              <div className=""></div>
            </div>

            <div className="bo2  flex flex-col gap-3">
              <h4 className="font-bold text-xl leading-[120%] text-[#f3f5f4]">
                Наши услуги
              </h4>
              <p className="font-normal text-sm leading-[129%] text-[#fdfdfd] hover:text-[#f2be22] transition-[1s] cursor-pointer">/ Прогулки в горы летом </p>
              <p className="font-normal text-sm leading-[129%] text-[#fdfdfd] hover:text-[#f2be22] transition-[1s] cursor-pointer">/ Зимние походы в горы </p>
              <p className="font-normal text-sm leading-[129%] text-[#fdfdfd] hover:text-[#f2be22] transition-[1s] cursor-pointer">/ Посещение храмов в горах </p>
              <p className="font-normal text-sm leading-[129%] text-[#fdfdfd] hover:text-[#f2be22] transition-[1s] cursor-pointer">/ Экстремальные виды туризма </p>
              <p className="font-normal text-sm leading-[129%] text-[#fdfdfd] hover:text-[#f2be22] transition-[1s] cursor-pointer">/ Походы в джунглях Амазонии</p>
              <p className="font-normal text-sm leading-[129%] text-[#fdfdfd] hover:text-[#f2be22] transition-[1s] cursor-pointer">/ Поездка в Африку</p>
            </div>

              <div className="bo2 flex flex-col gap-3">
              <h4 className="font-bold text-xl leading-[120%] text-[#f3f5f4]">
                Важно для путешествий
              </h4>
              <p className="font-normal text-sm leading-[129%] text-[#fdfdfd] hover:text-[#f2be22] transition-[1s] cursor-pointer">/ Как собрать в долгий поход?</p>
              <p className="font-normal text-sm leading-[129%] text-[#fdfdfd] hover:text-[#f2be22] transition-[1s] cursor-pointer">/ Жизненно важные предметы для похода </p>
              <p className="font-normal text-sm leading-[129%] text-[#fdfdfd] hover:text-[#f2be22] transition-[1s] cursor-pointer">/ Медицинская страховка, гарантии безопасности </p>
              <p className="font-normal text-sm leading-[129%] text-[#fdfdfd] hover:text-[#f2be22] transition-[1s] cursor-pointer">/ Если вы врач - загляните сюда </p>


            </div>
          </div>
        </div>

       
      </footer>

       <div className="bg-[#18121e] py-5">
            <div className="mycontainer flex items-center justify-between xe:flex-row flex-col gap-3 ">
                <p className=" font-semibold text-sm leading-[129%] text-white">ИП Константинопольский К.К., 2023</p>
                <p className="font-semibold text-sm leading-[129%] underline text-white">Политика обработки персональных данных</p>
            </div>
        </div>
    </div>
  );
};

export default Footer;
