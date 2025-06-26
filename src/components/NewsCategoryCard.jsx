
import { FaRegEye } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';

const NewsCategoryCard = ({ singleNews }) => {
  const {
    author,
    title,
    thumbnail_url,
    details,
    rating,
    total_view,
  } = singleNews;

  return (
    <div className="card bg-base-100 shadow-md border rounded-lg mt-4">
      {/* Author Info */}
      <div className="flex items-center gap-3 p-4">
        <img
          src={author?.img}
          alt="author"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h2 className="font-semibold text-sm">{author?.name || "Unknown"}</h2>
          <p className="text-xs text-gray-500">{author?.published_date?.split(' ')[0]}</p>
        </div>
      </div>

      {/* Title and Image */}
      <div className="px-4">
        <h2 className="font-bold text-md mb-2 leading-tight">{title}</h2>
        <img
          src={thumbnail_url}
          alt="thumbnail"
          className="w-full h-64 object-cover object-[center_10%] rounded-md"
        />
      </div>

      {/* News Details */}
      <div className="px-4 py-2 text-sm text-gray-700">
        {details.length > 200
          ? `${details.slice(0, 200)}...`
          : details}
        <span className="text-blue-500 font-medium cursor-pointer"> Read More</span>
      </div>

      {/* Footer: Ratings and Views */}
      <div className="flex justify-between items-center px-4 py-3 border-t text-sm text-gray-600">
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(Math.floor(rating?.number || 0))].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-1 text-gray-800">{rating?.number || 0}</span>
        </div>

        <div className="flex items-center gap-1">
          <FaRegEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCategoryCard;
