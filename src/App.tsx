import { Navbar, Hero, Features, Power, Tech, FAQ, Footer } from "./components";

const App = () => {
  return (
    <main className="bg-primary text-white">
      <div className="container px-12 mx-auto ">
        <Navbar />
        <Hero />
        <Features />
      </div>
      <div className=" ">
        <Power />
      </div>
      <div className="container px-12 mx-auto">
        <Tech />
        <FAQ />
        <Footer />
      </div>
    </main>
  );
};

export default App;