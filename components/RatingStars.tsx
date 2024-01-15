import React, { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const RatingStars: React.FC = () => {
  const [rating, setRating] = useState<number>(3);
  const starCount: number = 5;

  const handleRatingClick = (selectedRating: number): void => {
    setRating(selectedRating);
  };

  const renderRatingStars = (): JSX.Element[] => {
    const stars: JSX.Element[] = [];
    for (let i = 1; i <= starCount; i++) {
      stars.push(
        <span
          key={i}
          onClick={() => handleRatingClick(i)}
          className={`cursor-pointer ${
            i <= rating ? 'text-[#d20f2d]' : 'text-black'
          }`}
        >
          {i <= rating ? <AiFillStar size={24} /> : <AiOutlineStar size={24} />}
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="mt-2 flex">
      {renderRatingStars()}
    </div>
  );
};

export default RatingStars;
