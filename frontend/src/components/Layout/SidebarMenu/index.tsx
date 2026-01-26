
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

interface SidebarMenuProps {
  toggleActive: () => void;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ toggleActive }) => {
  const { pathname } = useLocation();

  // Initialize openIndex to 0 to open the first item by default
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <>
      <div className="sidebar-area bg-white dark:bg-[#0c1427] fixed z-[7] top-0 h-screen transition-all rounded-r-md">
        <div className="logo bg-white dark:bg-[#0c1427] border-b border-gray-100 dark:border-[#172036] px-[25px] pt-[19px] pb-[15px] absolute z-[2] right-0 top-0 left-0">
          <Link
            to="/dashboard/ecommerce"
            className="transition-none relative flex items-center outline-none"
          >
            <img
              src="/images/logo-icon.svg"
              alt="logo-icon"
              width={26}
              height={26}
            />
            <span className="font-bold text-black dark:text-white relative ltr:ml-[8px] rtl:mr-[8px] top-px text-xl">
              TrigreExam
            </span>
          </Link>

          <button
            type="button"
            className="burger-menu inline-block absolute z-[3] top-[24px] ltr:right-[25px] rtl:left-[25px] transition-all hover:text-primary-500"
            onClick={toggleActive}
          >
            <i className="material-symbols-outlined">close</i>
          </button>
        </div>

        <div className="pt-[89px] px-[22px] pb-[20px] h-screen overflow-y-scroll sidebar-custom-scrollbar">
          <div className="accordion">
            <span className="block relative font-medium uppercase text-gray-400 mb-[8px] text-xs">
              Main
            </span>

            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <Link
                to="/dashboard"
                className={`accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c] ${pathname === "/dashboard" ? "active" : ""
                  }`}
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  dashboard
                </i>
                <span className="title leading-none">Dashboard</span>
              </Link>
            </div>

            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <Link
                to="/my-courses"
                className={`accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c] ${pathname === "/my-courses" ? "active" : ""
                  }`}
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  school
                </i>
                <span className="title leading-none">My Courses</span>
              </Link>
            </div>



            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <Link
                to="/my-results"
                className={`accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c] ${pathname === "/my-results" ? "active" : ""
                  }`}
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  bar_chart
                </i>
                <span className="title leading-none">My Results</span>
              </Link>
            </div>

            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <Link
                to="/my-purchases"
                className={`accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c] ${pathname === "/my-purchases" ? "active" : ""
                  }`}
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  shopping_cart
                </i>
                <span className="title leading-none">My Purchases</span>
              </Link>
            </div>

            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <Link
                to="/announcements"
                className={`accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c] ${pathname === "/announcements" ? "active" : ""
                  }`}
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  campaign
                </i>
                <span className="title leading-none">Announcements</span>
              </Link>
            </div>

            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <Link
                to="/settings"
                className={`accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c] ${pathname === "/settings" ? "active" : ""
                  }`}
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  settings
                </i>
                <span className="title leading-none">Settings</span>
              </Link>
            </div>

            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <Link
                to="/help"
                className={`accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c] ${pathname === "/help" ? "active" : ""
                  }`}
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  help
                </i>
                <span className="title leading-none">Help</span>
              </Link>
            </div>

            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className={`accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c] ${openIndex === 1 ? "open" : ""
                  }`}
                type="button"
                onClick={() => toggleAccordion(1)}
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  note_stack
                </i>
                <span className="title leading-none">Fornt Pages</span>
              </button>

              <div
                className={`accordion-collapse ${openIndex === 1 ? "open" : "hidden"
                  }`}
              >
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="/"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/" ? "active" : ""
                          }`}
                      >
                        Home
                      </a>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="/front-pages/features"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/front-pages/features" ? "active" : ""
                          }`}
                      >
                        Features
                      </a>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="/front-pages/team"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/front-pages/team" ? "active" : ""
                          }`}
                      >
                        Our Team
                      </a>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="/front-pages/faq"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/front-pages/faq" ? "active" : ""
                          }`}
                      >
                        FAQ’s
                      </a>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="/front-pages/contact"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/front-pages/contact" ? "active" : ""
                          }`}
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <span className="block relative font-medium uppercase text-gray-400 mb-[8px] text-xs [&:not(:first-child)]:mt-[22px]">
              MODULES
            </span>

            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className={`accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c] ${openIndex === 22 ? "open" : ""
                  }`}
                type="button"
                onClick={() => toggleAccordion(22)}
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  emoji_emotions
                </i>
                <span className="title leading-none">Icons</span>
              </button>

              <div
                className={`accordion-collapse ${openIndex === 22 ? "open" : "hidden"
                  }`}
              >
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/icons/material-symbols"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/icons/material-symbols" ? "active" : ""
                          }`}
                      >
                        Material Symbols
                      </Link>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/icons/remixicon"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/icons/remixicon" ? "active" : ""
                          }`}
                      >
                        RemixIcon
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className={`accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c] ${openIndex === 23 ? "open" : ""
                  }`}
                type="button"
                onClick={() => toggleAccordion(23)}
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  qr_code_scanner
                </i>
                <span className="title leading-none">UI Elements</span>
              </button>

              <div
                className={`accordion-collapse ${openIndex === 23 ? "open" : "hidden"
                  }`}
              >
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/ui-elements/alerts"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/ui-elements/alerts" ? "active" : ""
                          }`}
                      >
                        Alerts
                      </Link>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/ui-elements/avatars"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/ui-elements/avatars" ? "active" : ""
                          }`}
                      >
                        Avatars
                      </Link>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/ui-elements/accordion"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/ui-elements/accordion" ? "active" : ""
                          }`}
                      >
                        Accordion
                      </Link>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/ui-elements/badges"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/ui-elements/badges" ? "active" : ""
                          }`}
                      >
                        Badges
                      </Link>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/ui-elements/buttons"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/ui-elements/buttons" ? "active" : ""
                          }`}
                      >
                        Buttons
                      </Link>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/ui-elements/spinner"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/ui-elements/spinner" ? "active" : ""
                          }`}
                      >
                        Spinner
                      </Link>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/ui-elements/breadcrumb"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/ui-elements/breadcrumb" ? "active" : ""
                          }`}
                      >
                        Breadcrumb
                      </Link>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/ui-elements/dropdowns"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/ui-elements/dropdowns" ? "active" : ""
                          }`}
                      >
                        Dropdowns
                      </Link>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/ui-elements/images"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/ui-elements/images" ? "active" : ""
                          }`}
                      >
                        Images
                      </Link>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/ui-elements/modal"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/ui-elements/modal" ? "active" : ""
                          }`}
                      >
                        Modal
                      </Link>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/ui-elements/pagination"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/ui-elements/pagination" ? "active" : ""
                          }`}
                      >
                        Pagination
                      </Link>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/ui-elements/progress"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/ui-elements/progress" ? "active" : ""
                          }`}
                      >
                        Progress
                      </Link>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/ui-elements/tooltips"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/ui-elements/tooltips" ? "active" : ""
                          }`}
                      >
                        Tooltips
                      </Link>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/ui-elements/tabs"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/ui-elements/tabs" ? "active" : ""
                          }`}
                      >
                        Tabs
                      </Link>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/ui-elements/typography"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/ui-elements/typography" ? "active" : ""
                          }`}
                      >
                        Typography
                      </Link>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/ui-elements/videos"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/ui-elements/videos" ? "active" : ""
                          }`}
                      >
                        Videos
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <Link
                to="/tables"
                className={`accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c] ${pathname === "/tables" ? "active" : ""
                  }`}
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  table_chart
                </i>
                <span className="title leading-none">Tables</span>
              </Link>
            </div>

            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className={`accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c] ${openIndex === 24 ? "open" : ""
                  }`}
                type="button"
                onClick={() => toggleAccordion(24)}
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  forum
                </i>
                <span className="title leading-none">Forms</span>
              </button>

              <div
                className={`accordion-collapse ${openIndex === 24 ? "open" : "hidden"
                  }`}
              >
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/forms/input-select"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/forms/input-select" ? "active" : ""
                          }`}
                      >
                        Input & Select
                      </Link>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/forms/checkboxes-radios"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/forms/checkboxes-radios"
                          ? "active"
                          : ""
                          }`}
                      >
                        Checkboxes & Radios
                      </Link>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/forms/rich-text-editor"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/forms/rich-text-editor" ? "active" : ""
                          }`}
                      >
                        Rich Text Editor
                      </Link>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/forms/file-uploader"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/forms/file-uploader" ? "active" : ""
                          }`}
                      >
                        File Uploader
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className={`accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c] ${openIndex === 25 ? "open" : ""
                  }`}
                type="button"
                onClick={() => toggleAccordion(25)}
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  pie_chart
                </i>
                <span className="title leading-none">Charts</span>
              </button>

              <div
                className={`accordion-collapse ${openIndex === 25 ? "open" : "hidden"
                  }`}
              >
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/charts/line-charts"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/charts/line-charts" ? "active" : ""
                          }`}
                      >
                        Line
                      </Link>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/charts/area-charts"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/charts/area-charts" ? "active" : ""
                          }`}
                      >
                        Area
                      </Link>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/charts/column-charts"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/charts/column-charts" ? "active" : ""
                          }`}
                      >
                        Column
                      </Link>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/charts/mixed-charts"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/charts/mixed-charts" ? "active" : ""
                          }`}
                      >
                        Mixed
                      </Link>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/charts/radialbar-charts"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/charts/radialbar-charts" ? "active" : ""
                          }`}
                      >
                        RadialBar
                      </Link>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/charts/radar-charts"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/charts/radar-charts" ? "active" : ""
                          }`}
                      >
                        Radar
                      </Link>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/charts/pie-charts"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/charts/pie-charts" ? "active" : ""
                          }`}
                      >
                        Pie
                      </Link>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/charts/polar-charts"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/charts/polar-charts" ? "active" : ""
                          }`}
                      >
                        Polar
                      </Link>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/charts/more-charts"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/charts/more-charts" ? "active" : ""
                          }`}
                      >
                        More
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className={`accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c] ${openIndex === 26 ? "open" : ""
                  }`}
                type="button"
                onClick={() => toggleAccordion(26)}
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  lock_open
                </i>
                <span className="title leading-none">Authentication</span>
              </button>

              <div
                className={`accordion-collapse ${openIndex === 26 ? "open" : "hidden"
                  }`}
              >
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="/authentication/sign-in"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/authentication/sign-in" ? "active" : ""
                          }`}
                      >
                        Sign In
                      </a>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="/authentication/sign-up"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/authentication/sign-up" ? "active" : ""
                          }`}
                      >
                        Sign Up
                      </a>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="/authentication/forgot-password"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/authentication/forgot-password"
                          ? "active"
                          : ""
                          }`}
                      >
                        Forgot Password
                      </a>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="/authentication/reset-password"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/authentication/reset-password"
                          ? "active"
                          : ""
                          }`}
                      >
                        Reset Password
                      </a>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="/authentication/confirm-email"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/authentication/confirm-email"
                          ? "active"
                          : ""
                          }`}
                      >
                        Confirm Email
                      </a>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="/authentication/lock-screen"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/authentication/lock-screen"
                          ? "active"
                          : ""
                          }`}
                      >
                        Lock Screen
                      </a>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="/authentication/logout"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/authentication/logout" ? "active" : ""
                          }`}
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className={`accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c] ${openIndex === 27 ? "open" : ""
                  }`}
                type="button"
                onClick={() => toggleAccordion(27)}
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  content_copy
                </i>
                <span className="title leading-none">Extra Pages</span>
              </button>

              <div
                className={`accordion-collapse ${openIndex === 27 ? "open" : "hidden"
                  }`}
              >
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/pricing"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/pricing" ? "active" : ""
                          }`}
                      >
                        Pricing
                      </Link>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/timeline"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/timeline" ? "active" : ""
                          }`}
                      >
                        Timeline
                      </Link>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/faq"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/faq" ? "active" : ""
                          }`}
                      >
                        FAQ
                      </Link>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/gallery"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/gallery" ? "active" : ""
                          }`}
                      >
                        Gallery
                      </Link>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/testimonials"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/testimonials" ? "active" : ""
                          }`}
                      >
                        Testimonials
                      </Link>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/search"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/search" ? "active" : ""
                          }`}
                      >
                        Search
                      </Link>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <a
                        href="/coming-soon"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/coming-soon" ? "active" : ""
                          }`}
                      >
                        Coming Soon
                      </a>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/blank-page"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/blank-page" ? "active" : ""
                          }`}
                      >
                        Blank Page
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className={`accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c] ${openIndex === 28 ? "open" : ""
                  }`}
                type="button"
                onClick={() => toggleAccordion(28)}
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  error
                </i>
                <span className="title leading-none">Errors</span>
              </button>

              <div
                className={`accordion-collapse ${openIndex === 28 ? "open" : "hidden"
                  }`}
              >
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/not-found"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/not-found" ? "active" : ""
                          }`}
                      >
                        404 Error Page
                      </Link>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/internal-error"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/internal-error" ? "active" : ""
                          }`}
                      >
                        Internal Error
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <Link
                to="/widgets"
                className={`accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c] ${pathname === "/widgets" ? "active" : ""
                  }`}
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  widgets
                </i>
                <span className="title leading-none">Widgets</span>
              </Link>
            </div>

            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <Link
                to="/maps"
                className={`accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c] ${pathname === "/maps" ? "active" : ""
                  }`}
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  map
                </i>
                <span className="title leading-none">Maps</span>
              </Link>
            </div>

            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <Link
                to="/notifications"
                className={`accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c] ${pathname === "/notifications" ? "active" : ""
                  }`}
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  notifications
                </i>
                <span className="title leading-none">Notifications</span>
              </Link>
            </div>

            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <Link
                to="/members"
                className={`accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c] ${pathname === "/members" ? "active" : ""
                  }`}
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  people
                </i>
                <span className="title leading-none">Members</span>
              </Link>
            </div>

            <span className="block relative font-medium uppercase text-gray-400 mb-[8px] text-xs [&:not(:first-child)]:mt-[22px]">
              Others
            </span>

            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <Link
                to="/my-profile"
                className={`accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c] ${pathname === "/my-profile" ? "active" : ""
                  }`}
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  account_circle
                </i>
                <span className="title leading-none">My Profile</span>
              </Link>
            </div>

            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <button
                className={`accordion-button toggle flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c] ${openIndex === 29 ? "open" : ""
                  }`}
                type="button"
                onClick={() => toggleAccordion(29)}
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  settings
                </i>
                <span className="title leading-none">Settings</span>
              </button>

              <div
                className={`accordion-collapse ${openIndex === 29 ? "open" : "hidden"
                  }`}
              >
                <div className="pt-[4px]">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/settings"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/settings" ? "active" : ""
                          }`}
                      >
                        Account Settings
                      </Link>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/settings/change-password"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/settings/change-password"
                          ? "active"
                          : ""
                          }`}
                      >
                        Change Password
                      </Link>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/settings/connections"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/settings/connections" ? "active" : ""
                          }`}
                      >
                        Connections
                      </Link>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/settings/privacy-policy"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/settings/privacy-policy"
                          ? "active"
                          : ""
                          }`}
                      >
                        Privacy Policy
                      </Link>
                    </li>

                    <li className="sidemenu-item mb-[4px] last:mb-0">
                      <Link
                        to="/settings/terms-conditions"
                        className={`sidemenu-link rounded-md flex items-center relative transition-all font-medium text-gray-500 dark:text-gray-400 py-[9px] ltr:pl-[38px] ltr:pr-[30px] rtl:pr-[38px] rtl:pl-[30px] hover:text-primary-500 hover:bg-primary-50 w-full text-left dark:hover:bg-[#15203c] ${pathname === "/settings/terms-conditions"
                          ? "active"
                          : ""
                          }`}
                      >
                        Terms & Conditions
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item rounded-md text-black dark:text-white mb-[5px] whitespace-nowrap">
              <a
                href="/"
                className={`accordion-button flex items-center transition-all py-[9px] ltr:pl-[14px] ltr:pr-[30px] rtl:pr-[14px] rtl:pl-[30px] rounded-md font-medium w-full relative hover:bg-gray-50 text-left dark:hover:bg-[#15203c] ${pathname === "/" ? "active" : ""
                  }`}
              >
                <i className="material-symbols-outlined transition-all text-gray-500 dark:text-gray-400 ltr:mr-[7px] rtl:ml-[7px] !text-[22px] leading-none relative -top-px">
                  logout
                </i>
                <span className="title leading-none">Logout</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarMenu;
