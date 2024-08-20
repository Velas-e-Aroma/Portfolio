import Header from './components/Header';
import ScrollToTopButton from './components/ScrollToTopButton';
import Slide from './components/Slide';
import ResumeCatalog from './components/ResumeCatalog';
import BrowseCategories from './components/BrowseCategories';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="flex-1 w-full max-w-screen-xl mx-auto">
      <Header />
      <Slide />
      <div className="w-full px-4 m-0 p-0">
        <ResumeCatalog />
        <BrowseCategories />
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
