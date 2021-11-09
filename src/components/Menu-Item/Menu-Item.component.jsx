import React from 'react'
import "./Menu-Item.styles.scss"

const MenuItem = ({title,imageUrl,size})=>(
    <div className={`${size} menu-item`} >
        <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}}/>
    <div className="content">
        <h1 className="title">{title}</h1>
        <sapn className="subtitle">SHOP NOW</sapn>
    </div>
</div>
)

export default MenuItem;