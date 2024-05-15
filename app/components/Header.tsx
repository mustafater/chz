import { Bars3Icon, BeakerIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import Login from './login';
import Navlinks from './NavLinks';
import Search from './Searchk';



function Header() {


    return <header>
      <div className='grid grid-cols-3   items-center p-10'>
      <Bars3Icon className="lg:hidden h-8 w-8 cursor-pointer"/>
      
       <Link  href="/" className='lg:col-start-2 ' prefetch={false}><h1 className=" font-sans md:font-serif hover:font-serif text-4xl text-center">Ana Baslık</h1></Link>
  
        <div className="flex item-center  col-end-7 col-span-2 justify-end space-x-2">
              {/* Wallet button */}
       
            <div  className="hidden md:inline lg:px-8 py-2 lg:py-2  ">
            <Login/>
            </div>
        </div>
      </div>
      {/*  nav links*/}
      <Navlinks/>
        {/** search */}
        <Search/>
    </header>
  }
  
  export default Header