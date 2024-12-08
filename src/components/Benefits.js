import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { useSelector } from "react-redux";

const Benefits = () => {
   const lang = useSelector((state) => state.lang.value)
   return (
      <Section id="features">
         <div className="container relative z-2">
            <Heading
               className="md:max-w-md lg:max-w-2xl"
         	   title={lang === "en" ? "Chat Smarter, Not Harder with Brainwave" : "الدردشة بشكل أذكى وليس أصعب مع Brainwave"}
            />

            <div className="flex flex-wrap gap-10 mb-10">
               {benefits.map((item) => (
                  <div
                     className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                     style={{
                        backgroundImage: `url(${item.backgroundUrl})`,
                     }}
                     key={item.id}
                  >
                     <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                        <h5 className="h5 mb-5">{lang === "en" ? item.title : item.title_ar}</h5>
                        <p className="body-2 mb-6 text-n-3">{lang === "en" ? item.text : item.text_ar}</p>
                        <div className="flex items-center mt-auto justify-between">
                           <img
                              src={item.iconUrl}
                              width={48}
                              height={48}
                              alt={lang === "en" ? item.title : item.title_ar}
                           />
                           <a href="#home" className="flex items-center">
                              <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                                 {lang === "en" ? "Explore more" : "اكتشف المزيد"}
                              </p>
                              <Arrow />
                           </a>
                        </div>
                     </div>

                     {item.light && <GradientLight />}

                     <div
                        className="absolute inset-0.5 bg-n-8"
                        style={{ clipPath: "url(#benefits)" }}
                     >
                        <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                           {item.imageUrl && (
                              <img
                                 src={item.imageUrl}
                                 width={380}
                                 height={362}
                                 alt={item.title}
                                 className="w-full h-full object-cover"
                              />
                           )}
                        </div>
                     </div>

                     <ClipPath />
                  </div>
               ))}
            </div>
         </div>
      </Section>
   );
};

export default Benefits;
