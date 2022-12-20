//** icons */
import {HiOutlineMenuAlt2, HiOutlineMenuAlt3} from 'react-icons/hi';

//** compoenents */
import HeaderWallet from '../wallet/HeaderWallet';
import HeaderTop from './headerTop/HeaderTop';

//** css */
import "./Header.css";

interface IisMenuOpen{
    isMenuOpen: boolean,
    handleMenu: any,
    children?: any
}

function Header({isMenuOpen, handleMenu, children}: IisMenuOpen) {
  return (
    // h-full
    <>
        <div className={`${isMenuOpen ? 'absolute top-0 left-0 bg-current m-5 h-screen widthFill' : ''}`}> 
        {
            !isMenuOpen ? 
            <div className='flex justify-between'>
                <div className="cursor-pointer" onClick={() => handleMenu()}>
                    <HiOutlineMenuAlt2 size={"1.8rem"} />
                </div>
                <div className='ml-12'>
                    <HeaderTop title={"Portfolio"} />
                </div>
                <div>
                    <HeaderWallet amount={123} />
                </div>
            </div>
            :
            <>
                <div className='flex justify-end  cursor-pointer' onClick={() => handleMenu()}>
                    <HiOutlineMenuAlt3 size={"1.8rem"} color={"white"}/>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='text-white p-4 cursor-pointer'>
                        <h2>Home</h2>
                    </div>
                    <div className='text-white p-4 cursor-pointer'>
                        <h2>Investment</h2>
                    </div>
                    <div className='text-white p-4 cursor-pointer'>
                        <h2>Covers</h2>
                    </div>
                    <div className='text-white p-4 cursor-pointer'>
                        <h2>History</h2>
                    </div>
                    <div className='text-white p-4 cursor-pointer'>
                        <h2>Contact us</h2>
                    </div>
                </div>
            </>
        }
        </div>
        {/* <div>
        {children}
        </div> */}
    </>
  )
}

export default Header