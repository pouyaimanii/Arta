"use client"
import Image from "next/image";
import { Icon } from '@iconify/react';
import Link from "next/link";
import { Separator } from "@/components/ui/separator"
import { Fullscreen } from "lucide-react";
// import { Icon } from '@iconify/react';

export default function Home() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 items-center mt-20">
          <div className="flex flex-row items-center gap-5">
            <Link href={`/`}>صفحه اصلی</Link>
            <Link href={`/`}>درباره ما</Link>
            <Link href={`/`}>تماس با ما</Link>
            <Link href={`/`}>پروژه ها</Link>
            <Link href={`/`}>بلاگ</Link>

          </div>
          <div className="flex justify-center">
            <Image src="/images/logo.png" alt="لوگو" width={200} height={200} />
          </div>
          <div className="flex flex-row items-center justify-end gap-10">
            <Link href={`/`}>021-55555</Link>
            <Separator orientation="vertical" className="text-gray-500" />
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl text-primary-content">Responsive</button>


          </div>

        </div>

        <div className="flex flex-row justify-between items-center mt-32">
          <div className="grid grid-cols-1">
            <h1>نام آوراان اندیشه آرتا</h1>
            <div className="mt-8">
              <p className="mb-4">لورم ایپسوم متن ساختگی با ساختار سادگی در متن ها</p>
              <p className="mb-4">لورم ایپسوم متن ساختگی با ساختار سادگی در متن ها</p>
              <p className="mb-4">لورم ایپسوم متن ساختگی با ساختار سادگی در متن ها</p>
              <p className="mb-4">لورم ایپسوم متن ساختگی با ساختار سادگی در متن ها</p>
            </div>
            <div className="flex flex-row items-center gap-4 mt-8">
              <button className="btn btn-md" >درباره ما</button>
              <button className="btn btn-md" >محصولات ما</button>
            </div>

          </div>
          <div>
            <Image src="/images/hirosection.png" alt="هیرو سکشن" width={800} height={800} />
          </div>

        </div>


        <div className="grid grid-cols-1">
          <h2 className="flex justify-center">محصولات اندیشه آرتا</h2>
          <div className="flex justify-center mt-12">
            <Image src="/images/flash.png" alt="فلش" width={30} height={30} />
          </div>

          <div className="flex flex-row justify-between items-center gap-16">
            <Image src="/images/1.png" alt="1" width={700} height={700} />

            <div className="grid grid-cols-1">
              <h2>لورم ایپسوم متن ساختگی با تولید</h2>
              <p className="mt-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
              <div className="mt-8">
                <p className="mb-8">لورم ایپسوم متن ساختگی</p>
                <p className="mb-8">لورم ایپسوم متن ساختگی</p>
                <p className="mb-8">لورم ایپسوم متن ساختگی</p>
              </div>
              <div className="flex flex-row items-center gap-4 mt-8">
                <button className="btn btn-md" >اطلاعات بیشتر</button>
                <button className="btn btn-md" >مشاوره رایگان</button>
              </div>
            </div>

          </div>

        </div>


        <div className="grid grid-cols-1">
          {/* <h2 className="flex justify-center">محصولات اندیشه آرتا</h2> */}
          <div className="flex justify-center mt-12">
            <Image src="/images/flash.png" alt="فلش" width={30} height={30} />
          </div>

          <div className="flex flex-row justify-between items-center gap-16">

            <div className="grid grid-cols-1">
              <h2>لورم ایپسوم متن ساختگی با تولید</h2>
              <p className="mt-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
              <div className="mt-8">
                <p className="mb-8">لورم ایپسوم متن ساختگی</p>
                <p className="mb-8">لورم ایپسوم متن ساختگی</p>
                <p className="mb-8">لورم ایپسوم متن ساختگی</p>
              </div>
              <div className="flex flex-row items-center gap-4 mt-8">
                <button className="btn btn-md" >اطلاعات بیشتر</button>
                <button className="btn btn-md" >مشاوره رایگان</button>
              </div>
            </div>
            <Image src="/images/1.png" alt="1" width={700} height={700} />

          </div>

        </div>


        <div className="grid grid-cols-1">
          <h2 className="flex justify-center">محصولات اندیشه آرتا</h2>
          <div className="flex justify-center mt-12">
            <Image src="/images/flash.png" alt="فلش" width={30} height={30} />
          </div>

          <div className="flex flex-row justify-between items-center gap-16">
            <Image src="/images/1.png" alt="1" width={700} height={700} />

            <div className="grid grid-cols-1">
              <h2>لورم ایپسوم متن ساختگی با تولید</h2>
              <p className="mt-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
              <div className="mt-8">
                <p className="mb-8">لورم ایپسوم متن ساختگی</p>
                <p className="mb-8">لورم ایپسوم متن ساختگی</p>
                <p className="mb-8">لورم ایپسوم متن ساختگی</p>
              </div>
              <div className="flex flex-row items-center gap-4 mt-8">
                <button className="btn btn-md" >اطلاعات بیشتر</button>
                <button className="btn btn-md" >مشاوره رایگان</button>
              </div>
            </div>

          </div>

        </div>


        <div className="grid grid-cols-1 mt-64">
          <h2 className="flex justify-center">پروژه های اندیشه آرتا</h2>

          <div className="grid grid-cols-2 gap-4 mt-16">
            <div className="flex flex-row items-center bg-slate-600 gap-4 p-4">
              <Image src="/images/3.jpg" alt="2" width={250} height={250} />
              <div className="grid grid-cols-1">
                <h2 >پروژه لورم ایپسوم متن ساختگی</h2>
                <p className="mt-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ...</p>
                <div className="flex flex-row justify-between items-center mt-4">
                  <p>نام شرکت</p>
                  <p>محصول شماره 2</p>
                  <button className="btn btn-md" >مشاهده جزییات</button>


                </div>
              </div>
            </div>



            {/* <div className="flex flex-row items-center bg-slate-600">
              <Image src="/images/3.jpg" alt="2" width={250} height={250} />
              <div className="grid grid-cols-1">
                <h2 >پروژه لورم ایپسوم متن ساختگی</h2>
                <p className="mt-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ...</p>
                <div className="flex flex-row justify-between items-center mt-6">
                  <p>نام شرکت</p>
                  <p>محصول شماره 2</p>
                  <button className="btn btn-md" >مشاهده جزییات</button>


                </div>
              </div>
            </div>

            <div className="flex flex-row items-center bg-slate-600">
              <Image src="/images/3.jpg" alt="2" width={250} height={250} />
              <div className="grid grid-cols-1">
                <h2 >پروژه لورم ایپسوم متن ساختگی</h2>
                <p className="mt-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ...</p>
                <div className="flex flex-row justify-between items-center mt-6">
                  <p>نام شرکت</p>
                  <p>محصول شماره 2</p>
                  <button className="btn btn-md" >مشاهده جزییات</button>


                </div>
              </div>
            </div>

            <div className="flex flex-row items-center bg-slate-600">
              <Image src="/images/3.jpg" alt="2" width={250} height={250} />
              <div className="grid grid-cols-1">
                <h2 >پروژه لورم ایپسوم متن ساختگی</h2>
                <p className="mt-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ...</p>
                <div className="flex flex-row justify-between items-center mt-6">
                  <p>نام شرکت</p>
                  <p>محصول شماره 2</p>
                  <button className="btn btn-md" >مشاهده جزییات</button>


                </div>
              </div>
            </div> */}

          </div>

        </div>

        <div className="flex flex-row justify-between items-center mt-32">
          <div className="grid grid-cols-1">
            <h2>از مشاوره رایگان بهره مند شوید!</h2>
            <p>برای مشاوره انتخاب محصولات مناسب برای پروژه خود، فـــرم زیر را پر کنید!</p>
          </div>
          <Image src="/images/hedphone.jpg" alt="phone" width={500} height={500}/>
        </div>


      </div>
      <div className="relative w-full aspect-[3/1] mt-64">
        <Image src="/images/baner.png" alt="بنر" fill  className="object-center" />
      </div>

      <div className="container mx-auto mt-32">
          <div className="grid grid-cols-1 ">
            <h2 className="flex justify-center">تیم تخصصی اندیشه آرتا</h2>
            <div className="flex flex-row items-center gap-2">
                <div className="flex flex-col justify-center items-center bg-gray-500">
                  {/* <div className="flex flex-col justify-center items-center"> */}
                  <Image src="/images/profile.png" className="mt-4" alt="پروفایل" width={100} height={100} />
                  <h2 className="mt-4">محمد اقبال</h2>
                  <h3 className="mt-2">مدیریت راه آهن میعاد</h3>
                  <p className="mt-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                  {/* </div> */}
                </div>
                <div className="flex flex-col justify-center items-center bg-gray-500">
                  {/* <div className="flex flex-col justify-center items-center"> */}
                  <Image src="/images/profile.png" className="mt-4" alt="پروفایل" width={100} height={100} />
                  <h2 className="mt-4">محمد اقبال</h2>
                  <h3 className="mt-2">مدیریت راه آهن میعاد</h3>
                  <p className="mt-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                  {/* </div> */}
                </div>
                <div className="flex flex-col justify-center items-center bg-gray-500">
                  {/* <div className="flex flex-col justify-center items-center"> */}
                  <Image src="/images/profile.png" className="mt-4" alt="پروفایل" width={100} height={100} />
                  <h2 className="mt-4">محمد اقبال</h2>
                  <h3 className="mt-2">مدیریت راه آهن میعاد</h3>
                  <p className="mt-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                  {/* </div> */}
                </div>
                <div className="flex flex-col justify-center items-center bg-gray-500">
                  {/* <div className="flex flex-col justify-center items-center"> */}
                  <Image src="/images/profile.png" className="mt-4" alt="پروفایل" width={100} height={100} />
                  <h2 className="mt-4">محمد اقبال</h2>
                  <h3 className="mt-2">مدیریت راه آهن میعاد</h3>
                  <p className="mt-4 px-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                  {/* </div> */}
                </div>
                
            </div>
          </div>
      </div>


      <div className="mt-64 grid grid-cols-3 bg-gray-600 p-10">
        
        <div className="flex flex-col justify-start items-start mr-20">
          <Image src="/images/logo.png" alt="logo" width={150} height={150} className="mt-10"/>
          <div className="flex flex-row items-center justify-start gap-10 mt-8">
              <Icon icon="meteor-icons:instagram" />
              <Icon icon="meteor-icons:telegram" />
              <Icon icon="meteor-icons:whatsapp" />
              <Icon icon="meteor-icons:x" />
              <Icon icon="meteor-icons:youtube" />
              
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div className="flex flex-row items-center gap-10">
            <p>صفحه اصلی</p>
            <p>محصولات</p>
            <p>بلاگ</p>
            <p>درباره ما</p>
            <p>تماس باما</p>
          </div>
          <h2 className="mt-12">درباره ما</h2>
          <p className="mt-2">درباره ما لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است بیشتر بخوانید</p>
        </div>
        <div className="flex flex-col justify-start items-start mr-20">
          <p>راه ارتباطی</p>
          <p className="mt-2">تلفن : 0215555555555555</p>
          <p className="mt-2">آدرس : تهران-خیابان تهران- کوچه تهران-شرکت</p>
          <p className="mt-2">ایمیل : example@gmail.com</p>
        </div>
        
      </div>

    </div>
  );
}
