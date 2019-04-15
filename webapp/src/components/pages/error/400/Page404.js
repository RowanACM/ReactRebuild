
import React, { Component } from 'react';
import ErrorPage from "../ErrorPage";

export default class Page404 extends ErrorPage {

    constructor(props) {
        super(props);
        this.code = 404;
        this.desc = "We couldn't find the page you've requested.";
    }

}


