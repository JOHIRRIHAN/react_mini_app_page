import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({data , reference}) {
  return (
    <div>
      <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} dragElastic={0.2} dragTransition={{ bounceStiffness: 100, bounceDamping: 109}} className='flex-shrink-0 relative w-56 h-72 rounded-[40px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
        <FaFileAlt />
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div className="footer absolute bottom-0 w-full left-0">
          <div className='flex items-center justify-between py-4 px-8 mb-5'>
            <h5>{data.filesize}</h5>
            <span className='h-7 w-7 bg-zinc-700 rounded-full flex items-center justify-center'>
            {data.close ? <IoClose /> : <LuDownload size=".8em" color='#fff'/>}
            </span>
          </div>
          {
            data.tag.isOpen && (
              <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-500" : "bg-green-600"} flex items-center justify-center`}>
                  <h3 className='text-md font-semibold'>{data.tag.tagTitle}</h3>
              </div>
            )
          }
          
        </div>
      </motion.div>
    </div>
  )
}

export default Card