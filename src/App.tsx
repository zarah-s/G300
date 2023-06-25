import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route index element={<div>hello world</div>} />
    </Routes>
  );
};

export default App;
