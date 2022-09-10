import React from 'react'
import TableCurrency from '../tablecurrency/TableCurrency'

function Currency() {

    return (
        <>
            <div className='layout my-12'>
                <div className="overflow-x-auto relative rounded-2xl">

                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-md md:text-lg text-gray-900 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    Currency
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    We Buy
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Exchange Rate
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    We Shell
                                </th>
                            </tr>
                        </thead>

                        <TableCurrency />

                    </table>

                </div>
            </div>
        </ >
    )
}

export default Currency