import { useState, useEffect } from "react";
import Phone from "./components/phone/Phone";
import "./App.css";
import MessageContainer from "./components/message/MessageContainer";
import SearchBar from "./components/search/SearchBar";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getData = async function () {
      const res = await fetch(
        "https://randomuser.me/api/?results=20&inc=name,picture,id,cell&nat=in"
      );
      const result = await res.json();
      return result.results;
    };
    getData()
      .then((data) => {
        setMessages(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Phone>
        <SearchBar />
        <MessageContainer messages={messages} />
      </Phone>
    </div>
  );
}

export default App;
