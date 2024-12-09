import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import { useSelector } from "react-redux";

const Collaboration = () => {
  const lang = useSelector((state) => state.lang.value)
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
            {lang === "en" ? "AI Chat App for seamless collaboration" : "تطبيق الدردشة بالذكاء الاصطناعي للتعاون السلس"}
          </h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ltr:ml-5 rtl:mr-5">{lang === "en" ? item.title : item.title_ar}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{lang === "en" ? item.text : item.text_ar}</p>
                )}
              </li>
            ))}
          </ul>

          <Button>{lang === "en" ? "Try it now" : "جربها الآن"}</Button>
        </div>

        <div className="ltr:lg:ml-auto rtl:lg:mr-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {lang === "en" ? "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter." : "بفضل الأتمتة الذكية والأمان من الدرجة الأولى، يعد هذا هو الحل الأمثل للفرق التي تتطلع إلى العمل بشكل أكثر ذكاءً."}
          </p>

          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full rtl:-translate-x-full ltr:-translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={brainwaveSymbol}
                    width={48}
                    height={48}
                    alt="brainwave"
                  />
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
