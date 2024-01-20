import { useState } from "react";

//** components */
import Header from "./components/header/Header";
import Portfolio from "./pages/portfolio/Portfolio";
import Footer from "./components/footer/Footer";


//** pages */

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);

  //** handling menubar */
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  //** new commit gpg test */
  return (
    <>
      <div className="p-5 relative h-screen">
          {/* header  */}
          <div className="pt-4">
            <Header isMenuOpen={isMenuOpen} handleMenu={handleMenu} />
          </div>
          {/* body  */}
          <Portfolio />
      </div>
      {/* footer  */}
      <div className="">
        <Footer />
      </div>
    </>
  )
}

export default App
