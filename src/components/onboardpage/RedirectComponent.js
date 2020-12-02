import React, {useContext, useEffect, useState} from 'react';

import {AuthContext} from '../../contexts/AuthContext';
import LoadingComponent from "../LoadingComponent";
const Token_URL = require('./ColabOAuth2Routes').Token_URL;

const getAccessToken = async (url) => {
    const response = await fetch(url, {
        headers : {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        }
    });
    const json = await response.json()
    return json;
}

function RedirectComponent() {
    const auth = useContext(AuthContext);
    const { state } = auth;
    const { isSignedIn } = state;
    useEffect(()=> {
        const { dispatch } = auth;
        const params = new URLSearchParams(window.location.search);
        const Access_Token_URL = Token_URL + "&code=" + params.get('code');
        getAccessToken(Access_Token_URL).then(res => {
            const testExpires = 300;
            const access_token = res.access_token;
            const expires_in = res.expires_in;
            if (access_token) {
                let expire = new Date();
                expire.setSeconds(expire.getSeconds() + testExpires);
                const expireTime = Math.floor(expire.getTime() / 1000);
                dispatch({
                    type: "LOGIN",
                    payload: {
                        isSignedIn: true,
                        accessToken: access_token,
                        expiresIn: expires_in,
                        expiresDate: expireTime
                    }
                });
            }
        });

    }, []);

    if(isSignedIn) {
        window.location.href = "/search";
    }
    return <LoadingComponent></LoadingComponent>;
}

export default RedirectComponent;