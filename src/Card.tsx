import React from 'react'

export function Card(props: any) {
  return (
    <div>
      <div className="flex justify-center p-10">
        <div className="w-[350px] h-[200px] bg-[#454549] rounded-lg shadow-lg">
          <div className="flex justify-between m-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="3" y="5" width="18" height="14" rx="3" />
              <line x1="3" y1="10" x2="21" y2="10" />
              <line x1="7" y1="15" x2="7.01" y2="15" />
              <line x1="11" y1="15" x2="13" y2="15" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="9.5" cy="9.5" r="5.5" fill="#fff" />
              <circle cx="14.5" cy="14.5" r="5.5" />
            </svg>
          </div>
          <div className="px-4 py-2">
            <div>
              <div className="text-gray-400 font-semibold">{props.numero}</div>
            </div>
            <div>
              <h1 className="text-gray-400  uppercase font-semibold">
                {props.nomeTitular}
              </h1>
            </div>
          </div>
          <div className="flex justfiy-end gap-2 p-4 text-gray-400 font-bold">
            <div className="font-bold text-xs">
              <div>Expiração</div>
              <div>{props.expiracao}</div>
            </div>
            <div className="font-bold text-xs">
              <div>CVV</div>
              <div>{props.cvv}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
