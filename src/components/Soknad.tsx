import React, { useState } from 'react';
import {Hovedknapp} from "nav-frontend-knapper";
import {sendInnSøknad} from '../innsending/api'


interface SoknadProps {
    message: string,
}

interface IState {
  status: string;
}

const Soknad: React.FC<SoknadProps> = ({ message }) => {

    const [hocState, setHocState] = React.useState<IState>({status: `Søknad kan sendes`});

    return (
        <>
            <h1>{message}</h1>
            <Hovedknapp onClick={send}>Send søknad</Hovedknapp>
            <p>Status: {hocState.status}</p>
        </>
    );

    function send() {
        sendInnSøknad("Hello API")
            .then(result => setHocState({...hocState, status: "Vi har kontakt"}))
            .catch(e => setHocState({...hocState, status: `Noe gikk galt: ${e}`}));
    }
}

export default Soknad;