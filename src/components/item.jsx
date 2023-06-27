
import React, { useState, useEffect } from "react";
import data from "../../dt.json";

const item = ({data}) => {
  const [threads, setThreads] = useState([]);
  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((data) => {
        setThreads(data);
      });
  }, []);
}