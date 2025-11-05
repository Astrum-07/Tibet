import React from "react";
import Logo from "../assets/img/logo.png";
const Header = () => {
  return (
    <div className=" xe:h-screen xs:h-[120vh] bg-cover bg-center"  
      style={{ backgroundImage: "url('/src/assets/img/herobg.png')" }}>
      <header className="bg-[rgba(188,238,197,0.2)] backdrop-blur-[6px]  py-3 sticky top-0 z-50 ">
        <div className="mycontainer">
          <nav className="navbar flex items-center justify-between">
            <nav>
              <img src={Logo} alt="" />
            </nav>
            <nav>
              <ul className="xd:flex items-center gap-4 hidden ">
                <li className="font-semibold text-lg text-[#fdfdfd]">
                  Главная
                </li>
                <li className="font-semibold text-lg text-[#fdfdfd]">
                  Про гида
                </li>
                <li className="font-semibold text-lg text-[#fdfdfd]">
                  Программа тура
                </li>
                <li className="font-semibold text-lg text-[#fdfdfd]">
                  Стоимость
                </li>
                <li className="font-semibold text-lg text-[#fdfdfd]">Блог</li>
                <li className="font-semibold text-lg text-[#fdfdfd]">
                  Контакты
                </li>
              </ul>
            </nav>

            <nav className="flex items-center gap-5">
              <button className="animate-pulse xr:block hidden rounded w-[157px] h-11 bg-[#1a3e3e] font-semibold text-base leading-[125%] tracking-[0.01em] text-[#fdfdfd] px-6 py-3">
                Консультация
              </button>
               <nav className="xd:hidden block text-2xl text-white">
              <i class="fa-solid fa-bars"></i>
            </nav>
            </nav>

           
          </nav>
        </div>
      </header>

        <div className="mycontainer">
        <div className="parent xd:mt-120 sl:mt-80 xs:mt-30 ">
          <h1 className=" font-bold xd:text-[50px] xm:text-[40px] xs:text-[30px] xs:text-2xl leading-[120%] tracking-[0.02em] text-[#fdfdfd] mb-9">
            Насладись прогулкой в горах с командой единомышленников
          </h1>
          <form className="grid xd:grid-cols-4 xm:grid-cols-3 xe:grid-cols-2  backdrop-blur-[6px] gap-6 bg-[rgba(255,255,255,0.2)] rounded-[10px] xe:p-12 xs:p-6">
            <div className=" flex items-start flex-col gap-2">
                <select className="xe:w-[213px] xs:w-full h-[52px] border p-3 outline-none rounded-lg border-solid border-[#e1e3e4] font-bold text-base leading-[150%] text-[#fdfdfd]" name="" id="">
                    <option value="jk">Локация для тура</option>
                    <option value="jk">Локация для тура</option>
                    <option value="jk">Локация для тура</option>
                </select> 

                <p className="font-normal text-sm leading-[150%] text-[#fdfdfd]">выберите из списка</p>
            </div>

            <div className=" flex items-start flex-col gap-2">
                <select className="xe:w-[213px] xs:w-full h-[52px] border p-3 outline-none rounded-lg border-solid border-[#e1e3e4] font-bold text-base leading-[150%] text-[#fdfdfd]" name="" id="">
                    <option value="jk">Дата похода</option>
                    <option value="jk">Дата похода</option>
                    <option value="jk">Локация для тура</option>
                </select> 

                <p className="font-normal text-sm leading-[150%] text-[#fdfdfd]">укажите диапазон</p>
            </div>

            <div className=" flex items-start flex-col gap-2">
                <select className="xe:w-[213px] xs:w-full h-[52px] border p-3 outline-none rounded-lg border-solid border-[#e1e3e4] font-bold text-base leading-[150%] text-[#fdfdfd]" name="" id="">
                    <option value="jk">Участники</option>
                    <option value="jk">Участники</option>
                    <option value="jk">Локация для тура</option>
                </select> 

                <p className="font-normal text-sm leading-[150%] text-[#fdfdfd]">минимум 4 человека</p>
            </div>
            <button className="xe:w-[213px] xs:w-full h-[52px] animate-bounce rounded bg-[#fdfdfd] font-bold text-base leading-[125%] tracking-[0.01em] text-[#1a3e3e] px-9 py-4">Найти программу</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
