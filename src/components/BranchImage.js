import { getImageUrl, fallbackImage } from '../components/imageLoader';

const BranchImage = ({ image, name }) => {
  return (
    <div className="relative overflow-hidden rounded-t-lg h-96 group">
      <img
        src={image}
        alt={`${name} campus`}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        onError={(e) => {
          e.target.src = fallbackImage;
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold">{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default BranchImage;