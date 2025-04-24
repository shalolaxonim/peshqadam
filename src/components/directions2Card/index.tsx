import React from "react";

interface DirectionCardProps {
  title: string;
  description: string;
  image: string;
  id: number;
}

const DirectionCard: React.FC<DirectionCardProps> = ({ title, description, image, id }) => {
  return (
    <div className="hover:shadow-xl p-6 flex flex-col gap-[20px] bg-white dark:bg-bgDark  dark:border-2 dark:border-sariq">
      <div className="flex items-center gap-[10px]">
      <img src={image} alt={title} className="w-20 h-16 mb-4" />
      <h3 className="sm:text-cormorantSmall md:text-cormorantBig font-bold text-qora dark:text-textDark font-cinzel">{title}</h3>
      </div>
      <p className="sm:text-cormorantSmall lg:text-cormorantBig text-qora dark:text-textDark font-cormorant">{description}</p>
      <a href={`/yonalishlar/${id}`} className="text-sariq">
        Batafsil &gt;
      </a>
    </div>
  );
};

export default DirectionCard;
