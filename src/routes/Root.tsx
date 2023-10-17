import { BrowserRouter, Routes, Route } from "react-router-dom";
import Exchanges from "@/pages/Exchanges";

const Root = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Exchanges />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Root;
