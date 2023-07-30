import Image from "next/image";
import React from "react";

interface SmallCardProps {}

const SmallCard: React.FC<City> = ({ img, location, distance }) => {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      {/*Left*/}
      <div className="relative h-16 w-16">
        <Image src={img} fill alt="city image" className="rounded-img" />
      </div>
      {/*right*/}
      <div>
        <h2>{location}</h2>
        <h2>{distance}</h2>
      </div>
    </div>
  );
};

export default SmallCard;
