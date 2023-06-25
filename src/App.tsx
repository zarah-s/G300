import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route index element={<div>hello world</div>} />
      </Routes>
    </Layout>
  );
};

export default App;
