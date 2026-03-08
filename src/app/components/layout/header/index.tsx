"use client";

import Logo from "../logo";

const Header = () => {
    const handleDownloadPDF = () => {
        window.print();
    };

    return (
        <header className="navbar top-0 left-0 z-999 w-full absolute">
            <div className="container px-4 sm:px-6">
                <nav className="py-4 sm:py-5 md:py-7">
                    <div className="flex items-center gap-3 sm:gap-4 md:gap-8">
                        <div className="flex-shrink-0">
                            <Logo />
                        </div>

                        {/* Button now fits content width and wraps text if needed */}
                        <button
                            onClick={handleDownloadPDF}
                            className="relative overflow-hidden cursor-pointer py-2 px-3 sm:py-2 sm:px-4 md:py-3 md:px-5 lg:py-5 lg:px-7 border border-primary rounded-full group w-fit max-w-[200px] sm:max-w-none"
                        >
                            <span className="relative z-10 text-xs sm:text-sm md:text-base lg:text-xl font-medium text-black group-hover:text-white transition-colors duration-300 block text-center">
                                Download PDF Resume
                            </span>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;