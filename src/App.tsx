import { useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  useEffect(() => {
    document.title = "Google Search";
  }, []);
  return (
    <>
      <div className="min-h-screen flex flex-col container font-sans antialiased">
        {/* Header Section */}
        <Header />

        {/* Main Content Section */}
        <Main />

        {/* Footer Section */}
        <Footer />
      </div>
    </>
  );
}

export default App;
