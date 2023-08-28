import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className=" flex justify-center items-center flex-col bg-white p-10 pb-6 rounded-[20px] shadow-3xl ">
      <img
        src={imgURL}
        alt="customer"
        className=" rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className=" mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className=" mt-3 flex justify-center items-center gap-2.5">
        <img
          src={star}
          width={24}
          height={24}
          alt="rating-star"
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-2 font-palanquin text-3xl text-center font-bold ">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
