import React from "react";

interface IProps {
  image: string;
}

const PartnerItem: React.FC<IProps> = ({ image }) => {
  return (
    <div className={`parceiro-box`}>
      <div className="parceiro-box-inner">
        <img src={image} alt="slide" />
      </div>
    </div>
  );
};

export default PartnerItem;
