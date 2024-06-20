import { useField } from 'formik'
import React from 'react'

const InputText = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props)
  return (
    <div className='flex flex-col w-full max-w-[500px] gap-5'>
        <label className='label'>{ label }</label>
        <input type="text" { ...props } { ...field } autoComplete='off' className='w-full bg-zinc-900 text-xl font-medium capitalize rounded-md px-4 py-3 outline-0' />
    </div>
  )
}

export default InputText