import logo from "./logo.svg";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import { Suspense } from "react";

function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Router />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
