export const calculateDaysBetweenDates = (startDate: Date, endDate: Date): number => {
    const differenceInTime = endDate.getTime() - startDate.getTime();
    return Math.ceil(differenceInTime / (1000 * 3600 * 24));
  };