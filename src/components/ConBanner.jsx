import React from "react";
import { Link, useLocation } from "react-router-dom";

const ConBanner = ({ title = "Contact Us" }) => {
    const location = useLocation();

    // pathname split → ["", "contact"]
    const pathnames = location.pathname.split("/").filter(Boolean);

    return (
        <section className="bg-[#F6F5FF] py-10 lg:py-16">
            <div className="max-w-6xl mx-auto px-4">

                {/* Title */}
                <h1 className="text-[#101750] font-josefin font-bold 
                               text-2xl sm:text-3xl lg:text-4xl">
                    {title}
                </h1>

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 mt-2 text-sm sm:text-base">

                    <Link to="/" className="text-gray-600 hover:text-[#FB2E86]">
                        Home
                    </Link>

                    {pathnames.map((name, index) => {
                        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                        const isLast = index === pathnames.length - 1;

                        return (
                            <React.Fragment key={routeTo}>
                                <span className="text-gray-400">.</span>

                                {isLast ? (
                                    <span className="text-[#FB2E86] font-medium capitalize">
                                        {name}
                                    </span>
                                ) : (
                                    <Link
                                        to={routeTo}
                                        className="text-gray-600 hover:text-[#FB2E86] capitalize"
                                    >
                                        {name}
                                    </Link>
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ConBanner;
