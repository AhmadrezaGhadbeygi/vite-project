import React, { useEffect, useState } from "react";
function Clock( props) {


  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, [time]);

  return (
      <div className={ props.data? 'text-white ' : ' text-black'}>{time.getHours()} : {time.getMinutes()} : {time.getSeconds()}</div>
      )
}
export default Clock;
