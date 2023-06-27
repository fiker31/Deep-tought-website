
import React, { useState, useEffect } from "react";
import data from "../../dt.json";

const item = ({data}) => {
    const [component, setComponent] = useState([]);
    const handleComponentChange = (event) => {
        setComponent(event.target.value);
      }
      const displayComponent = () => {
        switch(component) {
          case 'video':
            return <Video />;
          case 'article':
            return <Article />;
          case 'threadbuilder':
            return <ThreadBuilder />;
          default:
            return 
            <p>Invalid Content</p>;
        }
      }

}