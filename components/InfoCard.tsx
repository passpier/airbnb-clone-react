import React from "react";

interface InfoCardProps {}

const InfoCard: React.FC<Accommodation> = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  return <div>Hello InfoCard</div>;
};

export default InfoCard;
