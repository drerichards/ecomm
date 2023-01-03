import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Routes, Route } from "react-router-dom";
import Navigation from "routes/navigation/Navigation";
import Home from "routes/home/Home";
import Authentication from "routes/authentication/Authentication";
import Shop from "components/shop/Shop";
import Checkout from "routes/checkout/Checkout";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "utils/firebase/firebase";
import { setCurrentUser } from "store/user/user.actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) createUserDocumentFromAuth(user);
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
