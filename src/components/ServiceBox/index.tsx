import React from 'react'
import "./ServiceBox.css";
import "./ServiceBox-Mobile.css";

interface IProps {
    titulo: string;
    thumbnail: string;
    desc: string;
}

const ServiceBox: React.FC<IProps> = ({titulo, thumbnail, desc}) => {
  return (
    <div className="service-box">
    <h2>{titulo}</h2>
    <div className="service-img">
      <img src={thumbnail} alt={titulo} />
    </div>

    <h3>{desc}</h3>
  </div>
  )
}

export default ServiceBox