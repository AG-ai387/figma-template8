

const Footer = () => {
  return (
    <div>
        <footer className="bg-white py-12 px-8 font-sans tracking-wide ">
      <div className="grid max-sm:grid-cols-1 lg:grid-cols-3 items-center gap-8">
        
        
      </div>

      

      <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-5 lg:gap-20 max-lg:gap-8">
        <div className="lg:col-span-3 max-lg:col-span-full">
          <a href='javascript:void(0)'><img src={"/images/Logo.png"} alt="logo" className='w-48' /></a>
          <p className="text-gray-700 text-sm lg:max-w-sm mt-6">Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
          Cras egestas purus </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-gray-500">Category</h4>
          <ul className="space-y-4">
            <li><a href="javascript:void(0)" className="text-gray-900 hover:text-green-500 text-sm">Sofa</a></li>
            <li><a href="javascript:void(0)" className="text-gray-900 hover:text-green-500 text-sm">Armchair</a></li>
            <li><a href="javascript:void(0)" className="text-gray-900 hover:text-green-500 text-sm">Wing Chair</a></li>
            <li><a href="javascript:void(0)" className="text-gray-900 hover:text-green-500 text-sm">Desk Chair</a></li>
            <li><a href="javascript:void(0)" className="text-gray-900 hover:text-green-500 text-sm">Wooden Chair</a></li>
            <li><a href="javascript:void(0)" className="text-gray-900 hover:text-green-500 text-sm">Park Bench</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-gray-500">SUPPORT</h4>
          <ul className="space-y-4">
            <li><a href="javascript:void(0)" className="text-gray-900 hover:text-gray-200 text-sm">Help & Support</a>
            </li>
            <li><a href="javascript:void(0)" className="text-gray-900 hover:text-green-500 text-sm">Terms & Conditions</a></li>
            <li><a href="javascript:void(0)" className="text-gray-900 hover:text-green-500 text-sm">Privacy Policy</a></li>
            <li><a href="javascript:void(0)" className="text-gray-900 hover:text-green-500 text-sm">Help</a></li>
          </ul>
        </div>

        <div className="bg-transparent border border-gray-800 flex px-1 py-1 rounded-full">
            
            
          <input type='email' placeholder='Your email' className="w-full outline-none bg-transparent pl-4 text-sm text-gray-300" />
          <button type='button'
            className="bg-gray-300 hover:bg-green-500 transition-all text-white text-sm rounded-l-xl px-5 py-2.5">Subscribe</button>
        </div>


      </div><hr className="my-12 border-gray-800"  />


      <p className=' pl-[80px] text-sm text-gray-300 mt-8'>@ 2021 - Blogy - Designed & Develop by Zakirsoft.</p>
    </footer>
      
    </div>
  )
}

export default Footer
