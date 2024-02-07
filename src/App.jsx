import React, { useState } from 'react';
import ted from './images/ted.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [buttonText, setButtonText] = useState("No!");
  const buttonData = ["Not Now", "Maybe Later", "Sorry", "Next Time", "Thanks, but No", "Not Today", "You Sure?"];

  const handleClick = () => {
    const newX = Math.max(0, Math.min(window.innerWidth - 100, Math.floor(Math.random() * window.innerWidth)));
    const newY = Math.max(0, Math.min(window.innerHeight - 80, Math.floor(Math.random() * window.innerHeight)));
    setPosition({ x: newX, y: newY });
    const randomIndex = Math.floor(Math.random() * buttonData.length);
    setButtonText(buttonData[randomIndex]);
  };

  const handleYesClick = () => {
    toast.success('Yay! You said yes! 💖');
  };

  return (
    <div className="relative w-screen h-screen bg-pink-200">
      <div className="flex pt-[65%]  justify-center items-center md:pt-[21%] text-3xl md:text-7xl font-bold">
        <p className="">
          Will You Be My Valentine?🥺          
        </p>
      </div>

      <div className="flex justify-center">
        <img src={ted} alt="Teddy Bear" className=" mt-10 w-15 h-32 md:w-40 md:h-40" />
      </div>
      <div className="text-center mt-4">
        <button className="bg-red-700 p-2 rounded-md text-white font-bold hover:bg-pink-600 transition duration-300 inline-block" onClick={handleYesClick}>
          Yes
        </button>
      </div>

      <button
        className="absolute bg-red-700 p-2 rounded-md text-white font-bold hover:bg-pink-600 transition duration-300 ease-in-out"
        style={{ top: position.y, left: position.x }}
        onClick={handleClick}
      >
        {buttonText}
      </button>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default App;
