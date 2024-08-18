import React from "react";

const MainHeader = () => {
    return (
        <div className="flex items-center h-screen my-auto bg-[#FFF5E6]">
            <div className="p-5 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-3 ">
                    <div className="p-5 flex md:justify-center md:items-center flex-col">
                        <div className="text-start">
                            <p className="text-2xl md:text-4xl font-medium md:mb-4">Craftwarelab</p>
                            <h2 className="text-6xl md:text-7xl font-extrabold text-wrap break-words md:mb-4">Crafting the<br /> Digital<br /> Landscape</h2>
                            <span className="md:mb-2 brak-words text-sm font-light block">We build custom software, mobile apps, websites, and digital products.</span>
                            <a href="#contact">
                                <button className="p-2 bg-primary text-black font-semibold bg-[#feb400] break-words ">Start a Project</button>
                            </a>
                        </div>
                    </div>
                    <div>
                        <img className="top-0 left-0 w-full object-cover md:p-16 p-5" src="/workmen.jpg" alt="hero" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;