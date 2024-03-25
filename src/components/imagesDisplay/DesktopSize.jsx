import { useEffect, useState } from 'react'

// eslint-disable-next-line react/prop-types
const DesktopSize = ({ images, title }) => {
    const [bigImage, setBigImage] = useState("")
    useEffect(()=> {
        setBigImage(images[0])
    },[images])
    return (
        <div className=" ">
            <div className="pb-4 flex justify-center h-[25rem] w-[35rem]">
                <img src={bigImage} alt={title} className=" h-full" />
            </div>
            <div className="flex gap-2 overflow-x-hidden">
                 {/* eslint-disable-next-line react/prop-types */}
                {images && images.map((image, index) => {
                    return <img className=" h-10" onMouseOver={()=> setBigImage(image)} key={index} src={image} alt={index} />
                })}
            </div>
        </div>
    )
}

export default DesktopSize
