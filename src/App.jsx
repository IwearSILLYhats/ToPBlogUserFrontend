import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [test, setTest] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetching...");
      let testData = await fetch("http://localhost:3000/posts");
      testData = await testData.json();
      console.log(testData);
      setTest(testData.message);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Did render??</h1>
      {test && <p>{test}</p>}
    </div>
  );
}

export default App;
