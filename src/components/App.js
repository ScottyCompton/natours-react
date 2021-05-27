import Header from './layout/Header';
import About from './sections/About';
import Tours from './sections/Tours';
import Features from './sections/Features';
import Stories from './sections/Stories';
function App() {
  return (
    <>
    <Header />
    <main>
      <About />
      <Features />
      <Tours />
      <Stories />
    </main>
    </>
  );
}

export default App;
