import App from "./App";
import { useState, useEffect } from "react";
import "./index.css";

const defaultState = {
  loading: false,
};

const Page = () => {
  const [loading, setLoading] = useState(defaultState.loading);
  useEffect(() => {
    setLoading(false), console.log("App loaded");
  }, []);
  return loading ? <div>Fallback content</div> : <App />;
};

export default { Page };
