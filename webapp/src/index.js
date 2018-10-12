import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './components/Layout';
import Jumbotron from "./components/common/Jumbotron"
import CommitteeMemberCard from'./components/pages/committees/committee_members/CommitteeMemberCard';
import AnnouncementForm from './components/pages/admin/AnnouncementForm';
import CommitteeMemberCardList from './components/pages/committees/committee_members/CommitteeMemberCardList';



ReactDOM.render(
    <Jumbotron
        title={"Rowan ACM"}
        subtitle={"Meetings on Friday @ 2-4pm in Robinson 201 a/b"}
        img={"https://rowanacm.org/img/bannerBackgroundSmall.jpg"}
    />,
    /*<Layout/>,*/
    document.getElementById('root')
);

