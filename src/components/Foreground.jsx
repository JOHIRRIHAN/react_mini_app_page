import React, { useState } from 'react'
import Card from './Card';
function foreground() {
  const ref = useState(null)
  const data = [
    {
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      filesize: ".9mb",
      close: false,
      tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"},
    },
    {
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      filesize: ".9mb",
      close: false,
      tag: {isOpen: true, tagTitle: "Download Now", tagColor: "blue"},
    },
    {
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      filesize: ".9mb",
      close: false,
      tag: {isOpen: false, tagTitle: "Upload", tagColor: "green"},
    },
  ];

  return (
      <div ref={ref} className="fixed bg z-[3] w-full h-full  top-0 left-0 flex gap-10 flex-wrap p-5">
      {data.map((item, index)=>(
        <Card data={item} reference={ref}/>
        ))}
      </div>
    
  )
}

export default foreground