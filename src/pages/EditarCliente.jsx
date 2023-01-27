import React from 'react'
import { useLoaderData, Form, useNavigate, useActionData, redirect } from "react-router-dom"
import Formulario from '../components/Formulario'
import Errores from '../components/Errores'
import { obtenerCliente, editarCliente } from "../data/index"

export async function loader({params}) {
  const cliente = await obtenerCliente(params.id)
  
  if(Object.keys(cliente).length === 0) {
    throw new Response('', {
      status: 404, 
      statusText: "Cliente no econtrado"
    })
  }
  return cliente
}

export async function action({request, params}) {
  const formData = await request.formData()
  const datos = Object.fromEntries(formData)
  const correo = formData.get('email')
  console.log(correo)
  const errores = []

  if(Object.values(datos).includes('')) {
    errores.push('Todos los campos son obligatorios')
  }
  
  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])")

  if(!regex.test(correo)) {
    errores.push('El correo no es válido')
  }

  if(errores.length !== 0) {
    return errores
  }

  await editarCliente(params.id, datos)
  return redirect("/")
}

export default function EditarCliente() {
  const navigate = useNavigate()
  const cliente = useLoaderData()
  const errores = useActionData()


  return (
    <div className='px-5 py-5'>
      <h1 className='sm:text-lg lg:text-xl font-extrabold'>Editar cliente</h1>
      <p className='text-xs md:text-sm text-gray-600'>A continuación podrás editar la información del cliente</p>

      <div className='flex justify-end mt-3'>
        <div className='flex items-center rounded bg-teal-500 hover:bg-teal-600'>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-left cursor-pointer" width="18" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round"
           onClick={() => navigate("/")} 
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <line x1="5" y1="12" x2="19" y2="12" />
            <line x1="5" y1="12" x2="11" y2="18" />
            <line x1="5" y1="12" x2="11" y2="6" />
          </svg>
        <button className='text-gray-100 md:text-sm text-xs py-1 px-3'
          onClick={() => navigate("/")}
        >Volver</button>
        </div>
      </div>

      <div className='shadow-lg border sm:w-3/5 mx-auto w-4/5 mt-5 rounded'>
        {errores?.length && errores.map((error, i) => (
          <Errores 
            key={i}
            error={error}
          />
        )) }
        <Form 
          method='POST'
        >
          <Formulario 
            cliente={cliente}
          />
          <div className='flex justify-end'>
            <input type="submit" value="Guardar cambios" className='bg-teal-600 mb-5 mr-5 text-sm py-1 px-3 rounded text-gray-100 cursor-pointer transition-colors hover:bg-teal-700' />
          </div>
        </Form>
      </div>
    </div>
  )
}
