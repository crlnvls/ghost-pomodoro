const useTimeRemaining = (endTime) => {
  const total = Date.parse(endTime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  return {
    total,
    minutes,
    seconds,
  };
};

export default useTimeRemaining;
