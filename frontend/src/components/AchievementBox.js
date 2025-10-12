import React, { useState } from 'react'

const AchievementBox = ({ achievement, image, topic, content, marks }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Handle both old and new prop structures
  const achievementData = achievement || {};
  const finalImage = image || achievementData.file || achievementData.image;
  const finalTopic = topic || achievementData.topic;
  const finalContent = content || achievementData.description || achievementData.content || '';
  const finalMarks = marks || achievementData.marks || [];

  const calculateTotalMarks = (mark) => {
    if (!mark || !mark.mark || !Array.isArray(mark.mark)) return 0;
    return mark.mark.reduce((total, m1) => total + parseInt(m1.subjectMark || 0), 0);
  };

  const calculateFullMarks = (mark) => {
    if (!mark || !mark.mark || !Array.isArray(mark.mark)) return 100;
    return mark.mark.length * 100; // Assuming each subject has 100 marks
  };

  return (
    <div className="card overflow-hidden group hover:shadow-large transition-all duration-300">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
          src={finalImage ? `https://api.dhanamschool.com/files/${finalImage}` : 'https://via.placeholder.com/400x300/1a5f7a/ffffff?text=Achievement'}
          alt="Achievement"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="bg-secondary text-primary px-3 py-1 rounded-full text-sm font-medium">
            🏆 Achievement
          </span>
        </div>
      </div>
      {/* Content Section */}
      <div className="p-6">
        {/* Topic */}
        <h3 className="text-xl font-display font-semibold text-primary mb-4">
          {finalTopic || 'Academic Achievement'}
        </h3>
        {/* Marks Section */}
        {finalMarks && Array.isArray(finalMarks) && finalMarks.length > 0 && (
          <div className="mb-6">
            {finalMarks.map((mark, index) => (
              <div key={index} className="mb-4 last:mb-0">
                {/* Student Name */}
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-secondary font-semibold text-sm">
                      {mark.name?.charAt(0)?.toUpperCase() || 'S'}
                    </span>
                  </div>
                  <h4 className="font-medium text-primary">{mark.name || 'Student'}</h4>
                </div>
                {/* Subject Marks Table */}
                {mark.mark && Array.isArray(mark.mark) && mark.mark.length > 0 && (
                  <div className="bg-primary/5 rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-primary/10">
                        <tr>
                          <th className="px-4 py-2 text-left text-sm font-medium text-primary">Subject</th>
                          <th className="px-4 py-2 text-right text-sm font-medium text-primary">Marks</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mark.mark.map((m1, markIndex) => (
                          <tr key={markIndex} className="border-t border-primary/10 hover:bg-primary/5 transition-colors">
                            <td className="px-4 py-3 text-sm text-primary/80">{m1.subjectName || 'Subject'}</td>
                            <td className="px-4 py-3 text-right text-sm font-semibold text-secondary">
                              {m1.subjectMark || '0'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {/* Total Marks */}
                {mark.mark && Array.isArray(mark.mark) && mark.mark.length > 0 && (
                  <div className="mt-3 p-3 bg-secondary/10 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-primary/80">Total Marks:</span>
                      <span className="text-lg font-bold text-secondary">
                        {calculateTotalMarks(mark)} / {calculateFullMarks(mark)}
                      </span>
                    </div>
                    <div className="mt-2">
                      <div className="w-full bg-primary/20 rounded-full h-2">
                        <div
                          className="bg-secondary h-2 rounded-full transition-all duration-500"
                          style={{
                            width: `${(calculateTotalMarks(mark) / calculateFullMarks(mark)) * 100}%`
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        {/* Description */}
        <div className="border-t border-primary/10 pt-4">
          <p className={`text-primary/70 leading-relaxed transition-all duration-300 ${
            isExpanded ? '' : 'line-clamp-3'
          }`}>
            {finalContent}
          </p>
          {/* Read More Button */}
          {finalContent && finalContent.length > 150 && (
            <button
              className="mt-3 text-secondary hover:text-secondary/80 font-medium text-sm transition-colors duration-200"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Show Less' : 'Read More'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default AchievementBox
