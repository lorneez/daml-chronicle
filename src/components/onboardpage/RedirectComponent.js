import React, { useContext, useEffect } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import querystring from "querystring";
import LoadingComponent from "../LoadingComponent";

function RedirectComponent() {
    const auth = useContext(AuthContext);
    const { state } = auth;
    const { isSignedIn } = state;

    useEffect(()=> {
        const { dispatch } = auth;
        const params = querystring.parse(window.location.hash.substring(1));
        const { access_token, expires_in } = params;
        const testExpires = 300;
        console.log(params);
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
    }, []);

    if(isSignedIn) {
        window.location.href = "/search";
    }
    return <LoadingComponent></LoadingComponent>;
}

export default RedirectComponent;