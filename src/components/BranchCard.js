import BranchImage from './BranchImage';
import ContactInfo from './ContactInfo';
import FacilityList from './FacilityList';

const BranchCard = ({ name, address, contact, facilities, image ,data,mail }) => {
  return (
    <div className="bg-white rounded-lg  shadow-primary shadow-2xl overflow-hidden md:w-[500px] transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-secondary">
      <BranchImage image={image} name={name}  />

      <div className="p-6 space-y-4">
        <h2 className="text-2xl font-bold text-primary mb-4">{name}</h2>
        <div className='text-justify'>
          <p>{data}</p>
        </div>

        <div className="space-y-4">
          <div className="group cursor-pointer">
            <h3 className="text-lg font-semibold text-primary">Address</h3>
            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-secondary transition-transform duration-300 group-hover:scale-110"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <p className="text-primary600 transition-colors duration-300 group-hover:text-red-600">{address}</p>
            </div>
          </div>

          <ContactInfo contact={contact} mail={mail} />
          {/* <FacilityList facilities={facilities} /> */}
        </div>
      </div>
    </div>
  );
};

export default BranchCard;