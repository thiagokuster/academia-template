import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

const App = () => (
  <MotionConfig reducedMotion="user">
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </MotionConfig>
);

export default App;
