import React from "react"

const Element = ({title,img,id,checkActive,changeActive}) => {
    return (
        <div onClick={()=>changeActive(id)} className={`panel ${checkActive===id&&'active'}`} style={{ backgroundImage: `url(${img})` }}>
            <h3>{title}</h3>
        </div>
    )
}

export default Element
