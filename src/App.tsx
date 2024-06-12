import {
  Navbar,
  Hero,
  Features,
  Power,
  Tech,
  FAQ,
  Footer,
} from "./components";

const App = () => {
  return (
    <main className="bg-primary min-h-full text-white">
      <div>
        <Navbar />
        <Hero />
        <Features />
        <Power />
        <Tech />
        <FAQ />
        <Footer />
      </div>
    </main>
  );
};

export default App;
