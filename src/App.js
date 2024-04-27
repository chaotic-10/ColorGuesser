import React, { useEffect, useState } from 'react';


const App = () => {
  const [color, setColor] = useState('');
  const [answer, setAnswer] = useState([]);
  const [wrongSelection, setIsWrongSelection] = useState(false);

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const changeColor = () => {
    const actualColor = getRandomColor();
    setColor(actualColor);
    setAnswer([actualColor, getRandomColor(), getRandomColor()].sort(() => 0.5 - Math.random()));
  };

  useEffect(() => {
    setColor(getRandomColor());
    changeColor();
  }, []); 

  function handleAnswerClicked(answer) {
    if (answer === color) {
      setIsWrongSelection(false);
      changeColor();
    } else {
      setIsWrongSelection(true);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex items-center justify-center h-[250px] w-[250px]" onClick={changeColor} style={{ backgroundColor: color }}>
        {/* Your content here */}
      </div>
      <div className="mt-1 bg-gradient-to-br px-4 rounded-sm from-gray-700 to bg-green-400">
        GUESS THE CORRECT COLOR !
      </div>
      <div className="flex flex-row">{answer.map((item) => (
        <button className="mx-1 mt-1 px-1 py-1 rounded-md bg-green-600" onClick={() => handleAnswerClicked(item)} key={item}>{item}</button>
      ))}</div>
      
      {wrongSelection ? <div className="text-red-700 text-3xl">Wrong ans</div> : <div className="text-green-700 text-3xl">Right!</div>}
      {console.log(wrongSelection)}
    </div>
  );
};

export default App;
