import React from 'react'
import { Form, redirect, useNavigate } from 'react-router-dom'
import { eliminarCliente } from '../data'

export async function action({params}) {
  await eliminarCliente(params.id)
  return redirect("/")
}

export default function Cliente({ cliente }) {
  const { nombre, telefono, email, empresa, id } = cliente
  const navigate = useNavigate()

  return (
    <tr className='sm:text-sm text-sm text-gray-500 border-b'>
      <td className='p-3 space-y-1'>
        <p>{nombre}</p>
        <p className='text-xs'>{empresa}</p>
      </td>

      <td className='p-3 space-y-1'>
        <p className='font-semibold'>Email: <span className='font-normal text-xs'>{email}</span></p>
        <p className='font-semibold'>Tel: <span className='font-normal text-xs'>{telefono}</span></p>
      </td>

      <td className='p-3 space-y-1 flex justify-center items-center'>
        <div className='flex justify-start gap-5'>
          <div className='flex gap-1 bg-teal-500 py-1 px-3 rounded'>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit cursor-pointer" width="15" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round"
              onClick={() => navigate(`/clientes/${id}/editar`)}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
              <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
              <line x1="16" y1="5" x2="19" y2="8" />
            </svg>            
            <button className='text-xs text-gray-100'
              onClick={() => navigate(`/clientes/${id}/editar`)}
            >Editar</button>
          </div>
          
          <Form 
            method='POST'
            action={`/clientes/${id}/eliminar`}
          >
            <div className='flex gap-1 bg-black py-1 px-3 rounded'>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash-off" width="15" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="3" y1="3" x2="21" y2="21" />
                <path d="M4 7h3m4 0h9" />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="14" x2="14" y2="17" />
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l.077 -.923" />
                <line x1="18.384" y1="14.373" x2="19" y2="7" />
                <path d="M9 5v-1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
              </svg>          
              <button type='submit' className='text-xs text-gray-100'
                onClick={e => {
                  const respuesta = confirm("¿Deseas eliminar este cliente?")
                  if(!respuesta) {
                    e.preventDefault()
                  }
                }}
              >Eliminar</button>
            </div>
          </Form>
          
        </div>
      </td>
    </tr>
  )
}
