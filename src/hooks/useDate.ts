import { useEffect, useState } from "react";

const useDate = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  const hours = date.getHours();
  const seconds= date.getSeconds();
  const time = date.toTimeString();

  return { hours, time,seconds };
};

export default useDate;
