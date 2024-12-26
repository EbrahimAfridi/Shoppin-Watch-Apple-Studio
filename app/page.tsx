import Navbar from "./components/Navbar";
const Home: React.FC = () => {
  return (
    <main className="min-h-screen w-screen flex flex-col items-start pl-[22vw] bg-white text-black">
      <Navbar />
      <div className="flex flex-col text-[64px] font-semibold gap-2 mt-[16vh] font-roboto">
        <p className="text-xl font-medium">Apple Watch Studio</p>
        <span className="h-[68px]">
        Choose a case.
        </span>
        <span className="h-[68px]">
          Pick a band.
        </span>
        <span className="h-[68px]">
          Create your own style.
        </span>
      
        <button className="text-lg w-fit px-7 py-2 mt-10 bg-blue-600 text-white font-medium rounded-full">
          Get started
        </button>
      
      </div>
    </main>
  );
}

export default Home;