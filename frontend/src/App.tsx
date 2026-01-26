import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoutes from "./components/PrivateRoutes";

// Front Pages
import Home from "./pages/Home";
import Features from "./pages/front-pages/Features";
import Team from "./pages/front-pages/Team";
import FpFaq from "./pages/front-pages/FpFaq";
import Contact from "./pages/front-pages/Contact";

// Dashboard
import Lms from "./pages/dashboard/Lms";
import HelpDesk from "./pages/dashboard/HelpDesk";
import Analytics from "./pages/dashboard/Analytics";
import School from "./pages/dashboard/School";
import Saas from "./pages/dashboard/Saas";
import MyResults from "./pages/dashboard/MyResults";
import MyCourses from "./pages/dashboard/MyCourses";
import MyPurchases from "./pages/dashboard/MyPurchases";
import Announcements from "./pages/dashboard/Announcements";

// Apps
import ToDoList from "./pages/apps/ToDoList";
import Calendar from "./pages/apps/Calendar";
import Contacts from "./pages/apps/Contacts";
import Chat from "./pages/apps/Chat";

import Inbox from "./pages/apps/email/Inbox";
import Promotions from "./pages/apps/email/Promotions";
import Compose from "./pages/apps/email/Compose";
import Read from "./pages/apps/email/Read";

import KanbanBoard from "./pages/apps/KanbanBoard";

import MyDrive from "./pages/apps/file-manager/MyDrive";
import Assets from "./pages/apps/file-manager/Assets";
import Projects from "./pages/apps/file-manager/Projects";
import Personal from "./pages/apps/file-manager/Personal";
import Applications from "./pages/apps/file-manager/Applications";
import Documents from "./pages/apps/file-manager/Documents";
import Media from "./pages/apps/file-manager/Media";
import Recents from "./pages/apps/file-manager/Recents";
import Important from "./pages/apps/file-manager/Important";

// LMS Pages
import CoursesList from "./pages/lms/CoursesList";
import CourseDetails from "./pages/lms/CourseDetails";
import LessonPreview from "./pages/lms/LessonPreview";
import CreateCourse from "./pages/lms/CreateCourse";
import EditCourse from "./pages/lms/EditCourse";
import Instructors from "./pages/lms/Instructors";

// Helpdesk Pages
import Tickets from "./pages/helpdesk/Tickets";
import TicketDetails from "./pages/helpdesk/TicketDetails";
import Agents from "./pages/helpdesk/Agents";
import Reports from "./pages/helpdesk/Reports";


// Users pages
import TeamMembers from "./pages/users/TeamMembers";
import UsersList from "./pages/users/UsersList";
import AddUser from "./pages/users/AddUser";

// Profile pages
import UserProfile from "./pages/profile/UserProfile";
import ProfileTeams from "./pages/profile/ProfileTeams";
import ProfileProjects from "./pages/profile/ProfileProjects";

// Starter Page
import Starter from "./pages/Starter";

// icons Page
import MaterialSymbols from "./pages/icons/MaterialSymbols";
import Remixicon from "./pages/icons/Remixicon";

// UI Elements Pages
import Alerts from "./pages/ui-elements/Alerts";
import Avatars from "./pages/ui-elements/Avatars";
import Accordion from "./pages/ui-elements/Accordion";
import Badges from "./pages/ui-elements/Badges";
import Buttons from "./pages/ui-elements/Buttons";
import Spinner from "./pages/ui-elements/Spinner";
import Breadcrumb from "./pages/ui-elements/Breadcrumb";
import Dropdowns from "./pages/ui-elements/Dropdowns";
import Images from "./pages/ui-elements/Images";
import Modal from "./pages/ui-elements/Modal";
import Pagination from "./pages/ui-elements/Pagination";
import Progress from "./pages/ui-elements/Progress";
import Tooltips from "./pages/ui-elements/Tooltips";
import Tabs from "./pages/ui-elements/Tabs";
import Typography from "./pages/ui-elements/Typography";
import Videos from "./pages/ui-elements/Videos";

// Tables Page
import Tables from "./pages/Tables";

// Forms Page
import InputSelect from "./pages/forms/InputSelect";
import CheckboxesRadios from "./pages/forms/CheckboxesRadios";
import RichTextEditor from "./pages/forms/RichTextEditor";
import FileUploader from "./pages/forms/FileUploader";

// Charts Page
import LineCharts from "./pages/charts/LineCharts";
import AreaCharts from "./pages/charts/AreaCharts";
import ColumnCharts from "./pages/charts/ColumnCharts";
import MixedCharts from "./pages/charts/MixedCharts";
import RadialbarCharts from "./pages/charts/RadialbarCharts";
import RadarCharts from "./pages/charts/RadarCharts";
import PieCharts from "./pages/charts/PieCharts";
import PolarCharts from "./pages/charts/PolarCharts";
import MoreCharts from "./pages/charts/MoreCharts";

// Authentication Pages
import SignIn from "./pages/authentication/SignIn";
import SignUp from "./pages/authentication/SignUp";
import ForgotPassword from "./pages/authentication/ForgotPassword";
import ResetPassword from "./pages/authentication/ResetPassword";
import ConfirmEmail from "./pages/authentication/ConfirmEmail";
import LockScreen from "./pages/authentication/LockScreen";
import Logout from "./pages/authentication/Logout";

// Extra Pages
import Pricing from "./pages/Pricing";
import Timeline from "./pages/Timeline";
import Faq from "./pages/Faq";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import Search from "./pages/Search";
import ComingSoon from "./pages/ComingSoon";
import BlankPage from "./pages/BlankPage";
import Widgets from "./pages/Widgets";
import Maps from "./pages/Maps";
import Notifications from "./pages/Notifications";
import Members from "./pages/Members";
import MyProfile from "./pages/MyProfile";
import InternalError from "./pages/InternalError";
import NotFound from "./pages/NotFound";

// Settings Pages
import AccountSettings from "./pages/settings/AccountSettings";
import ChangePassword from "./pages/settings/ChangePassword";
import Connections from "./pages/settings/Connections";
import PrivacyPolicy from "./pages/settings/PrivacyPolicy";
import TermsConditions from "./pages/settings/TermsConditions";

import Layout from "./components/Layout/Layout";

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <Layout>
            <Routes>
              {/* ... routes ... */}
              {/* Front Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/front-pages/features" element={<Features />} />
              <Route path="/front-pages/team" element={<Team />} />
              <Route path="/front-pages/faq" element={<FpFaq />} />
              <Route path="/front-pages/contact" element={<Contact />} />

              {/* Protected Dashboard Routes */}
              <Route element={<PrivateRoutes />}>

                {/* Dashboard */}
                <Route path="/dashboard" element={<Lms />} />
                <Route path="/dashboard/helpdesk" element={<HelpDesk />} />
                <Route path="/dashboard/analytics" element={<Analytics />} />
                <Route path="/dashboard/school" element={<School />} />
                <Route path="/dashboard/saas" element={<Saas />} />
                <Route path="/my-results" element={<MyResults />} />
                <Route path="/my-courses" element={<MyCourses />} />
                <Route path="/my-purchases" element={<MyPurchases />} />
                <Route path="/announcements" element={<Announcements />} />

                {/* Apps */}
                <Route path="/apps/to-do-list" element={<ToDoList />} />
                <Route path="/apps/calendar" element={<Calendar />} />
                <Route path="/apps/contacts" element={<Contacts />} />
                <Route path="/apps/chat" element={<Chat />} />

                <Route path="/apps/email/inbox" element={<Inbox />} />
                <Route path="/apps/email/promotions" element={<Promotions />} />
                <Route path="/apps/email/compose" element={<Compose />} />
                <Route path="/apps/email/read" element={<Read />} />

                <Route path="/apps/kanban-board" element={<KanbanBoard />} />

                <Route path="/apps/file-manager/my-drive" element={<MyDrive />} />
                <Route path="/apps/file-manager/assets" element={<Assets />} />
                <Route
                  path="/apps/file-manager/projects"
                  element={<Projects />}
                />
                <Route
                  path="/apps/file-manager/personal"
                  element={<Personal />}
                />
                <Route
                  path="/apps/file-manager/applications"
                  element={<Applications />}
                />
                <Route
                  path="/apps/file-manager/documents"
                  element={<Documents />}
                />
                <Route path="/apps/file-manager/media" element={<Media />} />
                <Route path="/apps/file-manager/recents" element={<Recents />} />
                <Route
                  path="/apps/file-manager/important"
                  element={<Important />}
                />


                {/* LMS Pages */}
                <Route path="/lms/courses-list" element={<CoursesList />} />
                <Route path="/lms/course-details" element={<CourseDetails />} />
                <Route path="/lms/lesson-preview" element={<LessonPreview />} />
                <Route path="/lms/create-course" element={<CreateCourse />} />
                <Route path="/lms/edit-course" element={<EditCourse />} />
                <Route path="/lms/instructors" element={<Instructors />} />

                {/* Helpdesk Pages */}
                <Route path="/helpdesk/tickets" element={<Tickets />} />
                <Route
                  path="/helpdesk/ticket-details"
                  element={<TicketDetails />}
                />
                <Route path="/helpdesk/agents" element={<Agents />} />
                <Route path="/helpdesk/reports" element={<Reports />} />

                {/* Users Pages */}
                <Route path="/users/team-members" element={<TeamMembers />} />
                <Route path="/users/users-list" element={<UsersList />} />
                <Route path="/users/add-user" element={<AddUser />} />

                {/* Profile Pages */}
                <Route path="/profile/user-profile" element={<UserProfile />} />
                <Route path="/profile/teams" element={<ProfileTeams />} />
                <Route path="/profile/projects" element={<ProfileProjects />} />

                {/* Starter Page */}
                <Route path="/starter" element={<Starter />} />

                {/* Icons Pages */}
                <Route
                  path="/icons/material-symbols"
                  element={<MaterialSymbols />}
                />
                <Route path="/icons/remixicon" element={<Remixicon />} />

                {/* UI Elements Pages */}
                <Route path="/ui-elements/Alerts" element={<Alerts />} />
                <Route path="/ui-elements/avatars" element={<Avatars />} />
                <Route path="/ui-elements/accordion" element={<Accordion />} />
                <Route path="/ui-elements/badges" element={<Badges />} />
                <Route path="/ui-elements/buttons" element={<Buttons />} />
                <Route path="/ui-elements/spinner" element={<Spinner />} />
                <Route path="/ui-elements/breadcrumb" element={<Breadcrumb />} />
                <Route path="/ui-elements/dropdowns" element={<Dropdowns />} />
                <Route path="/ui-elements/images" element={<Images />} />
                <Route path="/ui-elements/modal" element={<Modal />} />
                <Route path="/ui-elements/pagination" element={<Pagination />} />
                <Route path="/ui-elements/progress" element={<Progress />} />
                <Route path="/ui-elements/tooltips" element={<Tooltips />} />
                <Route path="/ui-elements/tabs" element={<Tabs />} />
                <Route path="/ui-elements/typography" element={<Typography />} />
                <Route path="/ui-elements/videos" element={<Videos />} />

                {/* Tables Page */}
                <Route path="/tables" element={<Tables />} />

                {/* Forms Pages */}
                <Route path="/forms/input-select" element={<InputSelect />} />
                <Route
                  path="/forms/checkboxes-radios"
                  element={<CheckboxesRadios />}
                />
                <Route
                  path="/forms/rich-text-editor"
                  element={<RichTextEditor />}
                />
                <Route path="/forms/file-uploader" element={<FileUploader />} />

                {/* Charts Pages */}
                <Route path="/charts/line-charts" element={<LineCharts />} />
                <Route path="/charts/area-charts" element={<AreaCharts />} />
                <Route path="/charts/column-charts" element={<ColumnCharts />} />
                <Route path="/charts/mixed-charts" element={<MixedCharts />} />
                <Route
                  path="/charts/radialbar-charts"
                  element={<RadialbarCharts />}
                />
                <Route path="/charts/radar-charts" element={<RadarCharts />} />
                <Route path="/charts/pie-charts" element={<PieCharts />} />
                <Route path="/charts/polar-charts" element={<PolarCharts />} />
                <Route path="/charts/more-charts" element={<MoreCharts />} />
              </Route>

              {/* Authentication Pages */}
              <Route path="/authentication/sign-in" element={<SignIn />} />
              <Route path="/authentication/sign-up" element={<SignUp />} />
              <Route
                path="/authentication/forgot-password"
                element={<ForgotPassword />}
              />
              <Route
                path="/authentication/reset-password"
                element={<ResetPassword />}
              />
              <Route
                path="/authentication/confirm-email"
                element={<ConfirmEmail />}
              />
              <Route
                path="/authentication/lock-screen"
                element={<LockScreen />}
              />
              <Route path="/authentication/logout" element={<Logout />} />

              {/* Extra Pages */}
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/search" element={<Search />} />
              <Route path="/coming-soon" element={<ComingSoon />} />
              <Route path="/blank-page" element={<BlankPage />} />
              <Route path="/widgets" element={<Widgets />} />
              <Route path="/maps" element={<Maps />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/members" element={<Members />} />
              <Route path="/my-profile" element={<MyProfile />} />

              <Route path="*" element={<NotFound />} />
              <Route path="/internal-error" element={<InternalError />} />

              {/* Settings Pages */}
              <Route element={<PrivateRoutes />}>
                <Route path="/settings" element={<AccountSettings />} />
                <Route
                  path="/settings/change-password"
                  element={<ChangePassword />}
                />
                <Route path="/settings/connections" element={<Connections />} />
                <Route
                  path="/settings/privacy-policy"
                  element={<PrivacyPolicy />}
                />
                <Route
                  path="/settings/terms-conditions"
                  element={<TermsConditions />}
                />
              </Route>
            </Routes>
          </Layout>
        </Router>
      </AuthProvider>
    </>
  );
};

export default App;
