import Search from "./Search"

const HeroSection = () => {
  return (
    <div className='bg-gradient-to-r h-screen' >
        <div className="absolute bottom-16 right-28 z-30">
          <p className="text-sky-300 font-semibold text-lg">OUR PACKAGES</p>
          <h1 className="text-white font-bold text-4xl">Search Your <span className="underline underline-offset-8 decoration-cyan-400">Holidays</span> </h1>
          <Search/>
        </div>

        <div className="relative ">
          <div className="bg-sky-950 w-full h-screen absolute opacity-55"></div>
          <img src="https://images.unsplash.com/photo-1597313956715-a3fe32a86188?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-screen" />
        </div>
    </div>
  )
}

export default HeroSection