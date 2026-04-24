/**
 * Calculates the experience duration from a start date to the current date.
 * @param {string} startDate - The start date string (e.g., '2022-02-10')
 * @returns {string} - Formatted duration (e.g., '4 Years 2 Months')
 */
export const calculateExperience = (startDateStr) => {
  const start = new Date(startDateStr);
  const now = new Date();
  
  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  
  // Adjust years/months if current month is before start month
  if (months < 0) {
    years--;
    months += 12;
  }
  
  // Adjust if current day is before start day in the same month
  if (now.getDate() < start.getDate()) {
    months--;
    if (months < 0) {
      years--;
      months += 11; // Simplified: actually depends on month days, but for display this is usually sufficient
    }
  }

  const yearText = years > 0 ? `${years} Year${years > 1 ? 's' : ''}` : '';
  const monthText = months > 0 ? `${months} Month${months > 1 ? 's' : ''}` : '';
  
  return [yearText, monthText].filter(Boolean).join(' ');
};

export const START_DATE = '2022-02-10';
