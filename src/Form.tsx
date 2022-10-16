import React, { useContext, useState } from 'react'
import InputMask from 'react-input-mask'
import MyContext from './contexts/myContext'

export function Form() {
  const { setNumeroCartao, setNomeTitular, setExpiracao, setCvv } =
    useContext(MyContext)
  return (
    <div>
      <div className="block bg-[#454549] p-6 rounded-lg w-[300px] sm:w-[450px] mx-auto mt-10 xl:mt-0 xl:max-w-md">
        <form>
          <div className="form-group mb-6">
            <InputMask
              mask="9999 9999 9999 9999"
              onChange={e => setNumeroCartao(e.target.value)}
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 "
              id="exampleInput123"
              aria-describedby="emailHelp123"
              placeholder="Numero do cartão"
            />
          </div>
          <div className="form-group mb-6">
            <input
              onChange={e => setNomeTitular(e.target.value)}
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 "
              id="exampleInput126"
              placeholder="Nome do titular"
            ></input>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-group mb-6">
              <InputMask
                mask="99/99"
                onChange={e => setExpiracao(e.target.value)}
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 "
                id="exampleInput123"
                aria-describedby="emailHelp123"
                placeholder="Data de expiração"
              />
            </div>
            <div className="form-group mb-6">
              <InputMask
                mask="999"
                onChange={e => setCvv(e.target.value)}
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 "
                id="exampleInput124"
                aria-describedby="emailHelp124"
                placeholder="CVV"
              />
            </div>
          </div>

          <button
            type="button"
            className=" w-full px-6 py-4 bg-[#42D3FF] font-semibold text-black  text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg  focus:shadow-lg active:bg-[#42D3] focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
          >
            Adicionar Cartão
          </button>
        </form>
      </div>
    </div>
  )
}
