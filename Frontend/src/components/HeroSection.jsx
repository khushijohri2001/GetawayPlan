import Search from "./Search"

const HeroSection = () => {
  return (
    <div className='bg-gradient-to-r from-cyan-300 to-cyan-700 py-4 px-10 h-[70%]' >
        <div className="w-3/4 m-auto my-24">
          <p className="text-cyan-700 text-lg">Our Packages</p>
          <h1 className="text-white font-bold text-4xl">Search Your Holidays</h1>
          <Search/>
        </div>
    </div>
  )
}

export default HeroSection