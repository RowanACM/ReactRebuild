import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './components/Layout';
import CommitteeMemberCard from'./components/pages/committees/committee_members/CommitteeMemberCard';
import AnnouncementForm from './components/pages/admin/AnnouncementForm';



ReactDOM.render(
    <Layout/>,
    document.getElementById('root')
);

