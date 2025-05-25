import React, { useState } from 'react'

const AchievementBox = ({ image, topic, content, marks }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to calculate total subject marks
  const calculateTotalMarks = (marks) => {
    if (!marks.mark || !Array.isArray(marks.mark)) {
      throw new Error("Invalid input: marks.mark must be an array.");
    }
  
    return marks.mark.reduce((total, item) => total + parseInt(item.subjectMark || "0", 10), 0);
  };
  
  

  // Function to calculate full marks (100 * number of subjects)
  const calculateFullMarks = (marks) => {
    console.log(marks)
    const totalSubjects = marks.mark.length
    return totalSubjects * 100; // Full marks = 100 * number of subjects
  };



  return (
    <div>
      <div>
        <img className='w-96 h-64' src={`https://api.dhanamschool.com/files/` + image} alt="Achievement" />
      </div>
      <div className='text-xl my-4 font-semibold '>
        {topic}
      </div>
      <div>
        {marks!=null && marks.map((mark, index) => (
          <div key={index}>
            <div className='flex'>
              <div>Name:</div><div>{mark.name}</div>
            </div>
            <table>
              {mark.mark.map((m1, markIndex) => (
                <tr className='border-[1px] border-primary ' key={markIndex}>
                  <td className='px-5 py-2 border-r-[1px] border-primary'>{m1.subjectName}</td>
                  <td className='px-5'>{m1.subjectMark}</td>
                </tr>
              ))}
            </table>
                <div className="mt-4">
                <strong>Total Marks: </strong>
                {calculateTotalMarks(mark)} / {calculateFullMarks(mark)}
              </div>
          </div>
        ))}
      </div>
      <div className="relative z-10  text-justify max-w-2xl">
        <p
          className={`overflow-hidden transition-all ${isExpanded ? 'line-clamp-none' : 'line-clamp-2'}`}
        >
          {content}
        </p>
        {/* Read More / Show Less Button */}
        <button
          className="mt-4 text-sm underline"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>
      </div>

      {/* Display Total Marks and Full Marks */}

    </div>
  )
}

export default AchievementBox
