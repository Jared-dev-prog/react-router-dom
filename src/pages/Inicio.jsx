import { useLoaderData } from 'react-router-dom'
import { obtenerClientes } from "../data";
import Cliente from '../components/Cliente';

export async function loader() {
  const clientes = await obtenerClientes()

  return clientes
}

export default function index() {
  const clientes = useLoaderData()

  return (
    <div className='py-5 px-5'>
      <h1 className='sm:text-lg md:text-xl font-extrabold'>Clientes</h1>
      <p className='sm:text-xs md:text-sm text-gray-600'>Administra tus clientes</p>

      {clientes?.length !== 0 ? (
        <table className='w-full table-auto shadow-xl mt-5 overflow-y-scroll'>
          <thead className='bg-gray-800 text-teal-500 sm:text-sm text-xs'>
            <tr>
              <th className='rounded-l py-1'>Cliente</th>
              <th>Contacto</th>
              <th className='rounded-r'>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {clientes?.map(cliente => (
              <Cliente 
                cliente={cliente}
                key={cliente.id}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p>No existen clientes registrados</p>
      )}
    </div>
  )
}
