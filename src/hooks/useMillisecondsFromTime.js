const useMillisecondsFromTime = (time) => {
  const [minutes, seconds] = time.split(":").map(Number);
  return (minutes * 60 + seconds) * 1000;
};

export default useMillisecondsFromTime;
