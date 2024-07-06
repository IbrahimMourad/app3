import React, { useState } from 'react';

const arr = [
  { x: 1, y: 2 },
  { x: 3, y: 4 },
];

const newObj = { x: 6, y: 9 };

const ArrayStateExample = () => {
  const [data, setData] = useState(arr);
  console.log('🚀 ~ ArrayStateExample ~ data:', data);

  const handleClick = () => {
    // const newData = data.map((el) => (el.y == 4 ? { ...el, y: 5 } : el));
    // setData(newData);

    // add new obj to the Arr

    console.log(...data);
    setData([...data, newObj]);
  };

  return (
    <div>
      {data.map((el) => (
        <>
          <span>
            x:{el.x} , y:{el.y}
          </span>
          <br />
        </>
      ))}

      <button onClick={handleClick}>Add new</button>
    </div>
  );
};

export default ArrayStateExample;
