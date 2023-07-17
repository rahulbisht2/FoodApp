import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CreateContainer, Header, MainContainer, MenuContainer } from "./components";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunction";
import { actionType } from "./context/reducer";
import Services from "./components/Services";


const App = () => {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="flex flex-col w-screen h-auto bg-primary">
        <Header />

        <main className="w-full px-4 py-4 mt-14 md:mt-20 md:px-16">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/Services" element={<Services />} />
          </Routes>
        </main>
      </div>
      
    </AnimatePresence>
  );
};
export default App;