import React from 'react'
import useApi from '../api/useApi'

function TableCurrency() {
    const { data } = useApi()

    return (
        <>
            <tbody>
                {data.rates && Object.keys(data.rates).map((key, index) => (

                    <tr className="bg-white border-b" key={index}>
                        <td className="py-4 px-6 text-base text-gray-900 font-medium">
                            {key}
                        </td>
                        <td className="py-4 px-6 text-base text-gray-900 font-medium">
                            {
                                (parseFloat(data.rates[key]) + data.rates[key] / 100 * 5).toFixed(6)
                            }
                        </td>
                        <td className="py-4 px-6 text-base text-gray-900 font-medium">
                            {
                                parseFloat(data.rates[key]).toFixed(6)
                            }
                        </td>
                        <td className="py-4 px-6 text-base text-gray-900 font-medium">
                            {
                                (parseFloat(data.rates[key]) - data.rates[key] / 100 * 5).toFixed(6)
                            }
                        </td>
                    </tr>

                ))}
            </tbody>
        </>
    )
}

export default TableCurrency