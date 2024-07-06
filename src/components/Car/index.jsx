import { useState } from 'react';

export default function Car() {
  const [car, setCar] = useState({
    brand: 'Ford',
    model: 'Mustang',

    color: 'red',
    date: {
      day: '1',
      year: '1990',
    },
  });

  const updateColor = () => {
    setCar({ ...car, color: 'green' });
  };

  const updateYear = () => {
    setCar({ ...car, date: { ...car.date, year: '1964' } });
  };

  console.log('🚀 ~ Car ~ car:', car);
  return (
    <div
      style={{
        marginLeft: '20px',
      }}
    >
      <h1>My {car.brand}</h1>
      <p>
        It is a{' '}
        <span
          style={{
            color: car.color,
          }}
        >
          {car.color}
        </span>{' '}
        {car.model} from {car.date.year}.
      </p>

      <button onClick={updateColor}>Update color</button>
      <button onClick={updateYear}>Update Year</button>
    </div>
  );
}
