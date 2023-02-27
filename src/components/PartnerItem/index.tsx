import React from "react";

interface IProps {
  image: string;
  active: boolean;
}

const PartnerItem: React.FC<IProps> = ({ image, active }) => {
  return (
    <div className={`parceiro-box ${active && "active"}`}>
      <div className="parceiro-box-inner">
        <img src={image} alt="slide" />
      </div>
    </div>
  );
};

export default PartnerItem;
