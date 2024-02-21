import React from 'react'
import AppStoreImg from "../../assets/app_store-aoAyJ2T_.png";
import PlayStoreImg from "../../assets/play_store-25MAnoNl.png";
import BgPng from "../../assets/coffee-beans-bg-Mg2HxwYr.png";


const backgroundStyle = {
    backgroundImage: `url(${BgPng})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
}
const AppStore = () => {
  return (
    <>
    <div className="py-14" style={backgroundStyle}>
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2
            items-center gap-4">
                <div className="space-y-6 max-w-xl mx-auto">
                    {/* Text section */}
                    <h1 className="text-2xl text-center sm:text-left sm:text-4xl 
                    font-semibold text-white/90 pl-3">
                         Coffee Cafe is available for Android and IOS</h1>
               
                {/* Logo section */}
                <div className="flex flex-wrap justify-center sm:justify-start items-center">
                    <a href="#">
                        <img src={AppStoreImg} alt="App Store Image" 
                        className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"/>
                    </a>
                    <a href="#">
                        <img src={PlayStoreImg} alt="App Store Image" 
                        className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"/>
                    </a>
                </div>
            </div>
            {/* Empty div */}
            <div></div>
          </div>
        </div>
    </div>
    </>
  )
}

export default AppStore