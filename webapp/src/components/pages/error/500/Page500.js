
import React, { Component } from 'react';
import ErrorPage from "../ErrorPage";

export default class Page500 extends ErrorPage {

    constructor(props) {
        super(props);
        this.code = 500;
        this.desc = "Something went wrong.";
    }

}


