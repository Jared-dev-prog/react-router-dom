import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()

  return (
    <div className='flex flex-col space-y-3 items-center h-screen justify-center px-5'>
      <div>
        <h1 className='md:text-2xl font-extrabold text-gray-400 text-xl'>CRM - Clientes</h1>
      </div>
      <div className='flex flex-col items-center space-y-3'>
        <p className='text-gray-500 text-sm'>Uppsss... hubo un error</p>
        <p className='text-justify text-gray-500 text-sm'>{error.message || error.statusText}</p>
      </div>
    </div>
  )
}
