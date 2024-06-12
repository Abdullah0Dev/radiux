import { Navbar, Hero, Features, Power, Tech, FAQ, Footer } from "./components";

const App = () => {
  return (
    <main className="bg-primary overflow-x-clip justify-center flex min-h-full text-white">
      <div className=" ">
        <div className="container px-32 ">
          <Navbar />
          <Hero />
          <Features />
        </div>
        <div className="pl-32">

        <Power />
        </div>
        <div className="container px-32 ">
          <Tech />
          <FAQ />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default App;
