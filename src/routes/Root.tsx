import { BrowserRouter, Routes, Route } from "react-router-dom";
import Exchanges from "@/pages/Exchanges";
import ExchangeInfo from "@/pages/ExchangeInfo";

const Root = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-6xl w-full">
        <BrowserRouter>
          <Routes>
            <Route index element={<Exchanges />} />
            <Route path=":id" element={<ExchangeInfo />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Root;
