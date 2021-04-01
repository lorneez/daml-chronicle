import React, {useState, useEffect } from "react"
import axios from "axios";
import client from "../../api/axiosClient"

function AboutPageComponent() {
    console.log("About page")

    // var data = JSON.stringify({
    //     "username": "chronuser1",
    //     "password": "a@w;UB;P93qJazy_"
    // });
    //
    // var config = {
    //     method: 'post',
    //     url: 'https://chronicle-daml.herokuapp.com/auth',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     data : data
    // };
    //
    // axios(config)
    //     .then(function (response) {
    //         console.log(JSON.stringify(response.data));
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });

    return (
        <div>
            <h1 className="about-title" style={{ fontSize: 40 }}>About</h1>
            <h2 className="what-we-do">What We Do</h2>
            <p>
                Duke University’s student newspaper, The Chronicle, has kept an archive of all it’s editions dating back to 1900, with those after 1995 being digitized. Leaders of this project aim to digitize all editions of The Chronicle via the image to text technology Optical Character Recognition (OCR), in order to be able to run semantic analysis on all of the archives using BERT, a natural language processing tool. Leaders of the project hope to develop a front facing app that allows students to search the archive by topic and therefore study the how the opinions of the student body has evolved over the years. There is promise in applying this project to other universities with large newspaper archives. Additionally, this project also aims to provide Chronicle staffers and the Duke community analysis and visualizations of how trends towards various topics in public discourse have evolved over the past 100 years of university journalism through correlating NLP techniques with readership and demographic data.
            </p>
            <h2 className="by-the-numbers">By The Numbers</h2>
            <p>
                34
            </p>
        </div>
    )

}

export default AboutPageComponent