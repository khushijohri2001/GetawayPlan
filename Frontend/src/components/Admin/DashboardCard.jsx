import React from 'react'

const DashboardCard = ({ title, count, bgColor, icon }) => {
    return (
        <div class="mb-8 rounded-md">
            <div class="w-72 mx-auto rounded-md shadow-lg hover:shadow-2xl hover:shadow-white transition duration-500 transform hover:scale-100">
                <p class="text-lg ml-5 absolute font-bold -right-5 -top-4 text-red-600 bg-white h-10 w-10 pl-4 pt-2 rounded-full">{count}</p>
                <div class={`h-40 ${bgColor} flex items-center justify-around`}>
                   {icon}
                    <p class="mr-0 text-white text-lg font-bold">{title}</p>
                </div>

            </div>
        </div>
    )
}

export default DashboardCard