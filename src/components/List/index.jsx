import React from 'react';

const List = ({ data }) => {
  return (
    <ul>
      {data?.map((el) => (
        <p key={el.email}>
          name: {`${el.fname} ${el.lname}`}, email: {el.email}
        </p>
      ))}
    </ul>
  );
};

export default List;
