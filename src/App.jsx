import Header from './components/Header';
import ScrollToTopButton from './components/ScrollToTopButton';
import Slide from './components/Slide';

export default function App() {
  return (
    <div className="flex-1 w-full max-w-screen-xl mx-auto">
      <Header />
      <Slide />
      <Slide />
      <Slide />
      <Slide />
      <Slide />
      <ScrollToTopButton />
    </div>
  );
}
