import { Outlet, Link, useLocation } from 'react-router-dom'

export default function Layout() {
  const location = useLocation()
  
  return (
    <div className='sm:flex'>
      <aside className="sm:w-1/4 sm:min-h-screen bg-gray-800 p-5">
        <h1 className='text-teal-500 text-lg md:text-xl text-center font-extrabold'>CRM - Clientes</h1>

        <nav className='mt-5'>
          <div className='flex items-center gap-2 -mb-3'>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users" width="20" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#D1D5DB" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <circle cx="9" cy="7" r="4" />
              <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
            </svg>
            <Link to="/" className={`${location.pathname === '/' ? "text-white" : "text-gray-300 "} font-light block text-sm hover:text-white`}>Clientes</Link>
          </div>
          
          <div className='flex items-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-plus" width="20" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#D1D5DB" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <circle cx="9" cy="7" r="4" />
              <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              <path d="M16 11h6m-3 -3v6" />
            </svg>
            <Link to="/clientes/nuevo" className={`${location.pathname === '/clientes/nuevo' ? "text-white" : "text-gray-300 "} font-light block text-sm hover:text-white`}>Nuevo cliente</Link>
          </div>
        </nav>
      </aside>

      <main className='sm:w-3/4 md:h-screen overflow-y-scroll overflow-x-scroll'>
        <Outlet />
      </main>

    </div>

  )
}
