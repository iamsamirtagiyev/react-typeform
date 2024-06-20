import { useField } from "formik";
import React, { useRef } from "react";

const InputRadio = ({ label, options, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'y', 'v', 'w', 'x', 'v', 'z']

  const optionRef = useRef()

  document.onkeydown = e => {
    const span = document.querySelectorAll('span')
    span.forEach(s => {
        if(e.key == s.textContent){
            s.parentElement.click()
        }
    })
  }

  return (
    <div className="flex flex-col gap-5 w-full max-w-[500px] outline-0 border-0">
      <h1 className="label">{label}</h1>
      {options.map((option, key) => (
        <div key={key}>
            <input
              type="radio"
              hidden
              name={field.name}
              onChange={(e) => helpers.setValue(e.target.value)}
              value={option.key}
              id={option.key}
            />
          <label
            htmlFor={option.key}
            className="bg-zinc-900 rounded-md px-3 py-3 text-xl capitalize cursor-pointer flex items-center gap-3 transition-all duration-500"
          >
            <span className="bg-zinc-800 w-10 h-10 text-center leading-8 rounded-md font-medium transition-all duration-500 border-2 border-zinc-900 outline outline-1 outline-zinc-900">{ letters[key] }</span>
            {option.value}
          </label>
        </div>
      ))}
    </div>
  );
};

export default InputRadio;
