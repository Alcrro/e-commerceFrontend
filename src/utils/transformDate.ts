export function getDate(date: Date) {
  if (!date) {
    return 'Bun venit';
  }

  let parseDate = new Date(date);
  let today = new Date();

  // Calculate the difference in years, months, and days
  let yearsDifference = today.getFullYear() - parseDate.getFullYear();
  let monthsDifference = today.getMonth() - parseDate.getMonth();
  let daysDifference = today.getDate() - parseDate.getDate();

  // Adjust for negative month difference
  if (monthsDifference < 0) {
    yearsDifference--;
    monthsDifference += 12;
  }

  // Adjust for negative day difference
  if (daysDifference < 0) {
    let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    daysDifference += lastMonth.getDate();
    monthsDifference--;
  }

  if (yearsDifference > 0) {
    return `Gunoi de ${yearsDifference} year(s) ago`;
  } else if (monthsDifference > 0) {
    return `Gunoi de ${monthsDifference} month(s) ago`;
  } else if (daysDifference > 0) {
    return `Gunoi de ${daysDifference} day(s) ago`;
  } else {
    return 'Bun venit'; // in case the dates are the same
  }
}
