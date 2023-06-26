import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/home/views/HomePage";
import RoutesPath from "./constants/Routes";
import StudentsPage from "./pages/students/views/StudentsPage";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path={RoutesPath.students} element={<StudentsPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
