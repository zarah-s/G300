import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/home/views/HomePage";
import RoutesPath from "./constants/Routes";
import StudentsPage from "./pages/students/views/StudentsPage";
import MentorsPage from "./pages/mentors/views/MentorsPage";
import UserRolePage from "./pages/userRole/views/UserRolePage";
import CoursesPage from "./pages/courses/views/CoursesPage";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path={RoutesPath.students} element={<StudentsPage />} />
        <Route path={RoutesPath.mentors} element={<MentorsPage />} />
        <Route path={RoutesPath.userRole} element={<UserRolePage />} />
        <Route path={RoutesPath.courses} element={<CoursesPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
