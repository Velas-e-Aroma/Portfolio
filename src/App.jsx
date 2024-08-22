import { useState } from 'react';

import Header from './components/Header';
import ScrollToTopButton from './components/ScrollToTopButton';
import Slide from './components/Slide';
import ResumeCatalog from './components/ResumeCatalog';
import BrowseCategories from './components/BrowseCategories';
import Footer from './components/Footer';
import Wave from './components/Wave';
import FeedbackPhoto from './components/FeedbackPhoto';

export default function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="flex-1 w-full max-w-screen-xl mx-auto border border-[#ccc]">
      <Header page={page} setPage={setPage} />
      {page === 'home' ? (
        <>
          <Slide />
          <div className="w-full m-0 p-0 relative">
            <ResumeCatalog />
            <Wave />
            <div className="w-full relative md:h-[600px] h-auto">
              <div className="w-full flex md:flex-row flex-col">
                <div className="md:w-[40%] w-full">
                  <FeedbackPhoto />
                </div>
                <div className=" w-full z-[-2]"></div>
              </div>
            </div>
          </div>
        </>
      ) : null}

      {page === 'catalog' ? <ResumeCatalog /> : null}

      {page === 'categories' ? <BrowseCategories /> : null}

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
