import { useState } from 'react';

import Button from './components/Button';

import './App.css';
import MainContent from './components/MainContent';
import Logout from './components/Logout';
import MyForm from './components/Form';
import List from './components/List';

const user = {
  userName: 'John Doe',
  imgSrc:
    'https://media.istockphoto.com/id/906808234/photo/handsome-man.jpg?s=612x612&w=0&k=20&c=Ec8IY-ETslaS56vmO77BJyEOpPM1hzJlLbs6xeKRoAc=',
  alt: 'model',
  status: 'active',
};

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [count, setCount] = useState(0);

  // const handleOnClick = () => {
  //   setCount(count + 1);
  // };

  const [data, setData] = useState([
    { fname: 'ibrahim', lname: 'mohamed', email: 'sds@gmail.com' },
  ]);
  console.log('🚀 ~ App ~ data:', data);

  return (
    <div className='App'>
      {/*   {isLoggedIn ? <MainContent user={user} /> : <Logout />}

      <Button
        value={isLoggedIn}
        handleClick={setIsLoggedIn}
        userName={user.userName}
      /> */}

      {/* <button onClick={handleOnClick}>clicked {count}!</button> */}
      <MyForm setData={setData} data={data} />
      <List data={data} />
    </div>
  );
}

export default App;
