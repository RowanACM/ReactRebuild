
import React, { Component } from 'react';
import ErrorPage from "../ErrorPage";

export default class Page400 extends ErrorPage {

    constructor(props) {
        super(props);
        this.code = 400;
        this.desc = "We couldn't understand your request."
    }

}


