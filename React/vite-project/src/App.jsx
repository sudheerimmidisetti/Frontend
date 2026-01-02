import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import FunctionComponent from './FunctionComponent'
// import myImage from "./assets/react.svg"
// import Component1 from './Component1'
// import Component2 from './Component2'
// import FormWithEffect from './FormWithEffect'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Store from "./Store";
import AddDataHome from './AddDataHome';
import AddDataTask from './AddingDataTask';
import Products from './Products';
import ProductDetails from './ProductDeatils';
import PageNotFound from './PageNotFound';
import { Link } from 'react-router-dom';

function App() {
  // var myCards = [
  //   {
  //     "image": myImage,
  //     "price": 200,
  //     "brand": "UPSA" 
  //   },
  //   {
  //     "image": myImage,
  //     "price": 50000,
  //     "brand": "T-HUB" 
  //   },
  //   {
  //     "image": myImage,
  //     "price": 1900,
  //     "brand": "Rare Rabbit" 
  //   },
  //   {
  //     "image": myImage,
  //     "price": 30000,
  //     "brand": "Aditya" 
  //   }
  // ]

  // return (
  //   <div className="parent">
  //     {myCards.map((card, index) => (
  //       <FunctionComponent key = {index} card = {card} />
  //     ))}
  //   </div>
  // )

  // ----------------------------------------------------------------------------------------------------
  // const [Data, setData] = useState(true);
  // const [Count, setCount] = useState(0);
  // const Change = () => {
  //   setData(!Data);
  //   setCount(Count+1);
  // }

  // return (
  //   <>
  //     <button onClick={Change}>Click Me</button>
  //     <h1>Count : {Count}</h1>
  //     {(Data == true) ? <Component1 /> : <Component2 />}
  //   </>
  // )

  //-----------------------------------------------------------------------------------------------------------------
  // const [Count ,setCount] = useState(0)
  // return (
  //   <>
  //     <Store.Provider value={{Count, setCount}}>
  //       <BrowserRouter>
  //         <Routes>
  //           <Route path="/" element={<Page1 />} />
  //           <Route path="/page2" element={<Page2 />} />
  //         </Routes>
  //       </BrowserRouter>
  //     </Store.Provider>
  //   </>
  // );

  //-----------------------------------------------------------------------------------------------------------------
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);
  const [searchedData, setSearchedData] = useState([]);
  const defCards = [
    {
      id: 1,
      name: "FSD",
      desc: "full stack development",
      Prof: "Morty",
    },
    {
      id: 2,
      name: "AWS",
      desc: "Amazon web sevices",
      Prof: "Walter White",
    },
    {
      id: 3,
      name: "DS",
      desc: "Data Scientist",
      Prof: "Oak",
    },
  ];
  const [cards, setCards] = useState(defCards);

  useEffect(() => {
    function getresult() {
      let newResult = cards.filter((card) =>
        card.name.toLowerCase().includes(data.toLowerCase())
      );
      setSearchedData(newResult);
    }
    if (data.trim() === "") {
      setSearchedData([]);
    } else getresult();
  }, [data]);

  return (
    <>
      <Store.Provider value={{ cards, setCards }}>
        <BrowserRouter>
          <div
            style={{
              position: "sticky",
              top: 0,
              left: 0,
              right: 0,
              height: "100px",
              backgroundColor: "white", // optionally to avoid overlap effects
              zIndex: 1000, // to stay on top of other content
            }}
          >
            <Link to="/AddDataTask">Add Data</Link><br />
            <Link to="/Products">view Data</Link>
          </div>
          <Routes>
            <Route path="/" element={<AddDataHome />} />
            <Route path="/AddDataTask" element={<AddDataTask />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/ProductDetails/:id" element={<ProductDetails />} />
            <Route path="/image" element={<Image />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </Store.Provider>
    </>
  );
}

export default App;