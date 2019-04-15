
import React, { Component } from 'react';
import ErrorPage from "../ErrorPage";

export default class Page401 extends ErrorPage {

    constructor(props) {
        super(props);
        this.code = 401;
        this.desc = "You are unauthorized to view this page."
    }

}


