import React, { useState } from 'react';
import Axios from 'axios';

function ArticlesData() {
    const getFiftyContent = () => {
        Axios.get("https://chronicle-daml.herokuapp.com/allcontentfifty/1").then(
            (response) => {
                console.log(response);
            }
        );
    };
    return <div>Hello Youtube <button onClick={getFiftyContent}>click</button></div>
}