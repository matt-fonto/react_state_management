import { useEffect, useState } from "react";

const API_URL = "https://randomuser.me/api";

const TimerWithUseEffect = () => {
  const [time, setTime] = useState(0);

  // this would generate an infinite loop
  // setInterval(() => {
  //   setTime(time + 1);
  // }, 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>Time: {time}</div>;
};

// 1:03:11
export function UseEffect() {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchAndSetUser() {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        if (isMounted) {
          setUser(data.results[0]);
        }
      } catch (error) {
        if (isMounted) {
          console.log(error);
        }
      }
    }

    fetchAndSetUser();

    return () => {
      isMounted = false;
    };
  }, []);

  console.log("user", user);

  return <TimerWithUseEffect />;
}
