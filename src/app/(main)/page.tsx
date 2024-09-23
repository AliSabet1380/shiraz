import Image from "next/image";

const Home = () => {
  return (
    <>
      <section className="min-h-screen space-y-32 px-4 lg:max-w-screen-xl lg:mx-auto pt-20 pb-20">
        <div className="w-full flex flex-col space-y-10 lg:flex-row items-center justify-between">
          <Image
            src={"/home.jpg"}
            className="rounded-full w-80 h-80"
            alt="image"
            width={400}
            height={400}
          />
          <div className="flex flex-col items-end space-y-3">
            <h2 className="text-xl lg:text-3xl font-semibold">
              به وبلاگ شیراز خوش آمدید
            </h2>
            <span className="text-muted-foreground font-medium max-w-lg text-end">
              این وبلاگ توسط فاطمه غضنفری جهت آشنایی با شیراز و آداب و رسوم آن،
              غذا ها، مشاهیر و همچنین ضرب المثل های شیرازی طراحی شده است
            </span>
          </div>
        </div>

        <div className="w-full space-y-7">
          <h2 className="text-center text-xl lg:text-2xl font-semibold text-gray-700">
            تاریخچه شیراز
          </h2>
          <div className="mx-auto max-w-4xl text-center space-y-5">
            <p className="text-black/90">
              شیراز، یکی از قدیمی ترین شهرهای ایران است و تایخچه آن به هزاران سال
              پیش بازمیگردد. این شهر در استان فارس واقع شده و به عنوان پایتخت
              استان فارس شناخته می شود. شیراز به عنوان یکی از مراکز فرهنگی، ادبی
              و تارخی ایران معروف است.
            </p>
            <p className="text-black/90">
              شیراز در زمان هخامنشیان، به عنوان پایتخت این امپراتوری شناخته
              می‌شد. در دوران اسلامی، شیراز به عنوان یکی از مراکز فرهنگ و دانش
              بسیار معروف بود. در دورهٔ صفویه، شیراز به عنوان مرکز فرهنگ و هنر
              شناخته می‌شد و در آن زمان شاعران و هنرمندان بزرگی همچون حافظ و
              سعدی در این شهر فعالیت داشتند.
            </p>
            <p className="text-black/90">
              در دورهٔ قاجار، شیراز به عنوان یکی از مراکز فرهنگی و سیاسی مهم
              ایران شناخته می‌شد. تحولات سیاسی و فرهنگی در دوران پهلوی نیز تأثیر
              بسزایی بر شیراز گذاشت. در حال حاضر، شیراز به عنوان یکی از مقاصد
              گردشگری مهم در ایران شناخته می‌شود به دلیل آثار تاریخی، فرهنگی،
              هنری و طبیعت زیبای آن.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-600 pb-36 px-4 pt-8  bg-slate-100">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between space-y-5">
          <span className="text-lg font-medium text-muted-foreground ">
            پروژه پایانی دانشگاه پیام نور - ترم بهمن 1402
          </span>
          <div className="flex flex-col items-center lg:items-end space-y-1">
            <span className="text-gray-700">نویسنده: فاطمه غضنفری</span>
            <span className="text-gray-700">
              استاد راهنما: استاد مهدی آتش باز
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
