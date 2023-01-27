import React from 'react'

export default function Formulario({cliente}) {

  return (
    <div className='p-5'>
      <h2 className='md:text-lg text-base font-medium text-gray-900 mb-3'>Información del cliente</h2>
      <div className='mb-5'>
        <label htmlFor="nombre" className="block mb-2 md:text-sm text-xs font-medium text-gray-900">Nombre:</label>
        <input type="text" name="nombre" id="nombre" className="bg-gray-50 border border-gray-300 text-gray-900 md:text-sm text-xs rounded focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1 block w-full py-2 px-3 " placeholder="Nombre del cliente"
          defaultValue={cliente?.nombre}
        ></input>
      </div>

      <div className='mb-5'>
        <label htmlFor="empresa" className="block mb-2 md:text-sm text-xs font-medium text-gray-900">Empresa:</label>
        <input type="text" name="empresa" id="empresa" className="bg-gray-50 border border-gray-300 text-gray-900 md:text-sm text-xs rounded focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1 block w-full py-2 px-3 " placeholder="Nombre de la empresa"
          defaultValue={cliente?.empresa}
        ></input>
      </div>

      <div className='mb-5'>
        <label htmlFor="email" className="block mb-2 md:text-sm text-xs font-medium text-gray-900">Email:</label>
        <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 md:text-sm text-xs rounded focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1 block w-full py-2 px-3 " placeholder="Correo eléctronico"
          defaultValue={cliente?.email}
        ></input>
      </div>

      <div className='mb-5'>
        <label htmlFor="notas" className="block mb-2 md:text-sm text-xs font-medium text-gray-900">Telefono:</label>
        <input type="text" name="telefono" id="telefono" className="bg-gray-50 border border-gray-300 text-gray-900 md:text-sm text-xs rounded focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1 block w-full py-2 px-3 " placeholder="Teléfono de contacto"
          defaultValue={cliente?.telefono}
        ></input>
      </div>

      <div>
        <label htmlFor="notas" className="block mb-2 md:text-sm text-xs font-medium text-gray-900">Notas:</label>
        <textarea name="notas" id="notas"  rows="5" className="bg-gray-50 border border-gray-300 text-gray-900 md:text-sm text-xs rounded focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1 block w-full py-2 px-3"
          defaultValue={cliente?.notas}
        ></textarea>
      </div>
      
    </div>
  )
}
