import React from 'react'
import list from "../../public/list.json"
import Cards from './Cards'
import {Link} from "react-router-dom"

function Course() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 '>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl font-semibold md:text-4xl '>We're delighted to have you <span className='text-pink-500'>Here :)</span></h1>
          <p className='mt-12'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis repellat, omnis quaerat dolorem adipisci odio eaque similique voluptatibus quo fugiat molestias repudiandae quod ipsam incidunt pariatur vitae temporibus, autem ratione deserunt, accusamus soluta alias nesciunt? Natus vero adipisci tenetur magni laudantium quibusdam cupiditate quae eos! Reiciendis, ea officiis beatae, rerum blanditiis commodi laborum architecto harum amet voluptas sapiente in ratione quisquam voluptatibus. Eius est a saepe aliquam ratione ipsum fugiat!</p>
         <Link to="/">
         
         <button className='bg-pink-500 mt-6 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
         </Link>
        </div>

        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            
            {
              list.map((item) => (
                <Cards item={item} key={item.id}/>
              ))
            }



        </div>
    </div>
    </>
  )
}

export default Course
