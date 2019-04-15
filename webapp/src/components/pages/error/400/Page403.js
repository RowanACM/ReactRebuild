
import React, { Component } from 'react';
import ErrorPage from "../ErrorPage";

export default class Page403 extends ErrorPage {

    constructor(props) {
        super(props);
        this.code = 403;
        this.desc = "Here be dragons, this page is forbidden."
    }

}


