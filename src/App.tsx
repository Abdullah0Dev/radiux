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
    <main className="bg-primary overflow-x-clip justify-center flex min-h-full text-white">
      <div className="container mx-32 ">
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
