
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import SidebarMenu from "./SidebarMenu";
import Footer from "./Footer";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [active, setActive] = useState<boolean>(false);
    const location = useLocation();
    const pathname = location.pathname;

    const toggleActive = (): void => {
        setActive(!active);
    };

    const isAuthPage = [
        "/authentication/sign-in",
        "/authentication/sign-up",
        "/authentication/forgot-password",
        "/authentication/reset-password",
        "/authentication/confirm-email",
        "/authentication/lock-screen",
        "/authentication/logout",
        "/coming-soon",
        "/",
        "/front-pages/features",
        "/front-pages/team",
        "/front-pages/faq",
        "/front-pages/contact",
    ].includes(pathname);

    return (
        <>
            <div className={`main-content-wrap transition-all ${active ? "active" : ""}`}>
                {!isAuthPage && <SidebarMenu toggleActive={toggleActive} />}

                <div className="main-content transition-all flex flex-col overflow-hidden min-h-screen">
                    {!isAuthPage && <Header toggleActive={toggleActive} />}

                    <div key={pathname} className="animate-fade-in-up">
                        {children}
                    </div>

                    {!isAuthPage && <Footer />}
                </div>
            </div>
        </>
    );
};

export default Layout;
