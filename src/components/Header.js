import { useLocation } from "react-router-dom";
import { brainwave } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLang } from "../slices/langSlice";

const Header = () => {
   const lang = useSelector((state) => state.lang.value);
   const dispatch = useDispatch();
   const [openNavigation, setOpenNavigation] = useState(false);
   const pathname = useLocation();

   useEffect(() => {
      let lang = localStorage.getItem("lang");
      if (!lang) {
         localStorage.setItem("lang", "en");
         lang = "en";
         dispatch(setLang(lang));
      } else {
         dispatch(setLang(lang));
      }
   });

   const handlePageScrolling = (overlay, position) => {
      document.body.style.position = position;
      document.body.style.overflow = overlay;
   };

   const toggleNavigation = () => {
      if (openNavigation) {
         setOpenNavigation(false);
         handlePageScrolling("", "");
      } else {
         setOpenNavigation(true);
         handlePageScrolling("hidden", "relative");
      }
   };

   const handleClick = () => {
      if (!openNavigation) return;
      handlePageScrolling("", "");
      setOpenNavigation(false);
   };

   const changeLang = (lang) => {
      dispatch(setLang(lang));
      localStorage.setItem("lang", lang);
      if (openNavigation) {
         handleClick();
      }
   };

   return (
      <div
         className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
            openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
         }`}
      >
         <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
            <a className="block w-[12rem] xl:mr-8" href="/">
               <img src={brainwave} width={190} height={40} alt="Brainwave" />
            </a>
            <nav
               className={`${
                  openNavigation ? "flex" : "hidden"
               } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
            >
               <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                  {navigation.map((item) => (
                     <a
                        key={item.id}
                        href={item.url}
                        onClick={handleClick}
                        className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                           item.onlyMobile ? "lg:hidden" : ""
                        } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                           item.url === pathname.hash
                              ? "z-2 lg:text-n-1"
                              : "lg:text-n-1/50"
                        } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                     >
                        {lang === "en" ? item.title : item.title_ar}
                     </a>
                  ))}
                  <button
                     onClick={() => changeLang(lang === "ar" ? "en" : "ar")}
                     className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold`}
                  >
                     {lang === "ar" ? "EN" : "AR"}
                  </button>
               </div>
               <HamburgerMenu />
            </nav>
            <a
               href="#signup"
               className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
            >
               {lang === "en" ? "New account" : "حساب جديد"}
            </a>
            <Button className="hidden lg:flex" href="#login">
               {lang === "en" ? "Sign in" : "تسجيل الدخول"}
            </Button>
            <Button
               className="ml-auto lg:hidden"
               px="px-3"
               onClick={toggleNavigation}
            >
               <MenuSvg openNavigation={openNavigation} />
            </Button>
         </div>
      </div>
   );
};

export default Header;
