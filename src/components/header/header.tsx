const Header = () => {
  return (
    <div className='navbar bg-base-100 shadow-sm fixed z-10'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              {' '}
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'>
            <li>
              <a href='#projects' className='hover:text-accent'>
                Projects
              </a>
            </li>
            <li>
              <a href='#contact' className='hover:text-accent'>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <a href='#hero' className='btn btn-ghost text-xl'>
          Bhargav
        </a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1 '>
          <li>
            <a
              href='#projects'
              className='focus:outline-none focus:ring-2 focus:ring-accent hover:text-accent'>
              Projects
            </a>
          </li>
          <li>
            <a
              href='#contact'
              className='focus:outline-none focus:ring-2 focus:ring-accent hover:text-accent'>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className='navbar-end'></div>
    </div>
  )
}

export default Header
