import React from 'react'

const Queries = () => {
  return (
    <div className=' my-0 overflow-x-hidden '>
      
<table className="min-w-full border-collapse block md:table ml-[256px]">
		<thead className="block md:table-header-group">
			<tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
				<th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Name</th>
				<th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">User Id</th>
				<th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Reviews</th>
				{/* <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Mobile</th> */}
				<th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions</th>
			</tr>
		</thead>
		<tbody className="block md:table-row-group">
			<tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Name</span>Jamal Rios</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">User Id</span>abc</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Reviews</span>This is first review</td>
				{/* <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Mobile</span>582-3X2-6233</td> */}
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
					<span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
					<button className="bg-green-500 hover:bg-green-700 text-white font-[500] py-1 px-2 border  rounded">Approve</button>
					<button className="bg-red-500 hover:bg-red-700 text-white font-[500] py-1 px-2 border border-red-500 rounded">Delete</button>
				</td>
			</tr>
			<tr className="bg-white border border-grey-500 md:border-none block md:table-row">
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Name</span>Erwin Campbell</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">User Id</span>xyz</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Reviews</span>This is second review</td>
				{/* <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Mobile</span>318-685-X414</td> */}
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
					<span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
					<button className="bg-green-500 hover:bg-green-700 text-white font-[500] py-1 px-2 border  rounded">Approve</button>
					<button className="bg-red-500 hover:bg-red-700 text-white font-[500] py-1 px-2 border border-red-500 rounded">Delete</button>
				</td>
			</tr>
			<tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Name</span>Lillie Clark</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">User Id</span>pqr</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Reviews</span>This is third review</td>
				{/* <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Mobile</span>505-644-84X4</td> */}
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
					<span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
					<button className="bg-green-500 hover:bg-green-700 text-white font-[500] py-1 px-2 border  rounded">Approve</button>
					<button className="bg-red-500 hover:bg-red-700 text-white font-[500] py-1 px-2 border border-red-500 rounded">Delete</button>
				</td>
			</tr>
			<tr className="bg-white border border-grey-500 md:border-none block md:table-row">
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Name</span>Maribel Koch</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">User Id</span>ijk</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Reviews</span>This is fourth review</td>
				{/* <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Mobile</span>582-400-3X36</td> */}
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
					<span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
					<button className="bg-green-500 hover:bg-green-700 text-white font-[500] py-1 px-2 border  rounded">Approve</button>
					<button className="bg-red-500 hover:bg-red-700 text-white font-[500] py-1 px-2 border border-red-500 rounded">Delete</button>
				</td>
			</tr>			
		</tbody>
	</table>
    </div>
  )
}

export default Queries