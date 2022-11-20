import { useState, useEffect, useRef } from "react";
import Phone from "./components/phone/Phone";
import MessageContainer from "./components/message/MessageContainer";
import SearchBar from "./components/search/SearchBar";
import "./App.css";
import Header from "./components/header/Header";

function App() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const messagesRef = useRef([]);

  useEffect(() => {
    setLoading(true);
    const getData = async function () {
      const res = await fetch(
        "https://randomuser.me/api/?results=20&inc=name,picture,id,cell&nat=in"
      );
      const result = await res.json();
      return result.results;
    };
    getData()
      .then((data) => {
        messagesRef.current = data;
        setMessages(data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filterData = (query) => {
    const filteredData = messagesRef.current.filter(
      (message) =>
        message.name.first.toLowerCase().includes(query.toLowerCase()) ||
        message.name.last.toLowerCase().includes(query.toLowerCase())
    );
    setMessages(filteredData);
  };

  return (
    <div className="App">
      <Phone>
        <Header />
        <SearchBar filterData={filterData} />
        <MessageContainer messages={messages} loading={loading} />
      </Phone>
    </div>
  );
}

export default App;
