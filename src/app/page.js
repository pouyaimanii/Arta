import Image from "next/image";
import { Icon } from '@iconify/react';

export default function Home() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between mt-4 md:mt-[2%] items-center bg-white p-4 md:p-10">
        <div className="flex flex-col md:flex-row justify-start gap-3 md:gap-8 text-gray text-base md:text-lg font-medium leading-line-tight tracking-tight items-center mb-4 md:mb-0">
          <div className=" relative group cursor-pointer">
            <p className="hover:text-black">صفحه اصلی</p>
            <span className="absolute bottom-0 left-0 rounded-xl w-full h-1 bg-red transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
          </div>
          <div className=" relative group cursor-pointer">
            <p className="hover:text-black">درباره ما</p>
            <span className="absolute bottom-0 left-0 rounded-xl w-full h-1 bg-red transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
          </div>
          <div className=" relative group cursor-pointer">
            <p className="hover:text-black">تماس با ما</p>
            <span className="absolute bottom-0 left-0 rounded-xl w-full h-1 bg-red transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
          </div>
          <div className=" relative group cursor-pointer">
            <p className="hover:text-black">پروژه ها</p>
            <span className="absolute bottom-0 left-0 rounded-xl w-full h-1 bg-red transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
          </div>
          <div className=" relative group cursor-pointer">
            <p className="hover:text-black">بلاگ</p>
            <span className="absolute bottom-0 left-0 rounded-xl w-full h-1 bg-red transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
          </div>
          
          
        </div>
        
        <div className="w-[30%] md:w-[15.42%] h-auto md:h-[5.55%] mb-4 md:mb-0">
          <img src="images/logo.png" alt="logo" className="w-full h-auto" />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5">
          <div className="flex flex-row justify-center text-text-header gap-2">
            <p className="text-black text-sm md:text-base">55555_021</p>
            <Icon icon="material-symbols:phone-in-talk-sharp" className="w-5 md:w-6 h-5 md:h-6 text-gray" />
          </div>
          
          <div className="hidden md:block bg-gray h-[36px] w-[5px] rounded-xl"></div>
          
          <div>
            <button className="btn btn-sm md:btn-md bg-red flex flex-row items-center rounded-xl font-normal text-white px-3 md:px-4 py-2">
              <Icon icon="material-symbols:package-2" className="w-5 md:w-6 h-5 md:h-6 text-gray-700 mr-2" />
              محصولات
            </button>
          </div>
        </div>
      </div>







      <div className="flex flex-row justify-between items-center">
        <div className="grid grid-cols-1 gap-10">
          <div className="flex flex-row justify-center items-start text-5xl">
          <h1>نام آوران اندیشه آرتا</h1>
          {/* <div className=""></div> */}
          </div>
          <div className="grid gap-6">
            <div className="flex flex-row items-center">
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهمون</p>
            </div>
            <div className="flex flex-row items-center">
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهمون</p>
            </div>
            <div className="flex flex-row items-center">
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهمون</p>
            </div>
            <div className="flex flex-row items-center">
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهمون</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-5">
          <button className="btn btn-sm md:btn-md bg-red flex flex-row items-center rounded-xl font-normal text-white px-3 md:px-4 py-2">
              <Icon icon="material-symbols:package-2" className="w-5 md:w-6 h-5 md:h-6 text-gray-700 mr-2" />
              محصولات
            </button>
            <button className="btn btn-sm md:btn-md bg-background flex flex-row items-center rounded-xl font-normal text-black px-3 md:px-4 py-2">
              <Icon icon="material-symbols:package-2" className="w-5 md:w-6 h-5 md:h-6 text-gray-700 mr-2" />
              محصولات
            </button>
          
          </div>
          
          
        </div>
        <div>

        </div>
      </div>

    </div>
  );
}
