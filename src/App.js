import Sidebar from "./layout/Sidebar";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import AppRoutes from "./router";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div className="min-h-screen flex flex-row bg-gray-100">
              <div className="flex flex-col w-56 bg-white overflow-hidden">
                  <Sidebar/>
              </div>
              <div className="flex flex-col h-screen justify-between w-screen">
                  <Header/>
                  <main>
                      <AppRoutes/>
                  </main>
                  <Footer/>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
