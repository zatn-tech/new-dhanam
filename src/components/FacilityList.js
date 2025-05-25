const FacilityList = ({ facilities }) => {
    return (
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Facilities</h3>
        <ul className="grid grid-cols-2 gap-2">
          {facilities.map((facility, index) => (
            <li 
              key={index}
              className="flex items-center text-gray-600 transition-all duration-300 hover:text-blue-600 hover:translate-x-1"
            >
              <svg 
                className="w-4 h-4 mr-2 text-green-500" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              {facility}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default FacilityList;