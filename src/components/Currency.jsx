import React from 'react'
import useApi from './useApi'

function Currency() {
    const { data } = useApi()

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

                        <tbody>
                            {data.rates && Object.keys(data.rates).map((key, index) => (

                                <tr className="bg-white border-b" key={index}>
                                    <td className="py-4 px-6 text-base text-gray-900 font-medium">
                                        {key}
                                    </td>
                                    <td className="py-4 px-6 text-base text-gray-900 font-medium">
                                        {
                                            (parseFloat(data.rates[key]) + parseFloat(data.rates[key]) / 100 * 5).toFixed(6)
                                        }
                                    </td>
                                    <td className="py-4 px-6 text-base text-gray-900 font-medium">
                                        {
                                            parseFloat(data.rates[key]).toFixed(6)
                                        }
                                    </td>
                                    <td className="py-4 px-6 text-base text-gray-900 font-medium">
                                        {
                                            (parseFloat(data.rates[key]) - parseFloat(data.rates[key]) / 100 * 5).toFixed(6)
                                        }
                                    </td>
                                </tr>

                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </ >
    )
}

export default Currency