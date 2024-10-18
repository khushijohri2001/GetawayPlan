import React from 'react'

const Table = () => {
    return (
        <div className="shadow-md border border-cyan-700">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Packages
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Duration
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Book Now
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                        <td className="px-6 py-4">
                            body
                        </td>
                        <td className="px-6 py-4">
                            body
                        </td>
                        <td className="px-6 py-4">
                            body
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Add</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table