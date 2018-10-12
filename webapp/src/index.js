import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './components/Layout';
import CommitteeMemberCard from'./components/pages/committees/committee_members/CommitteeMemberCard';
import AnnouncementForm from './components/pages/admin/AnnouncementForm';
import CommitteeMemberCardList from './components/pages/committees/committee_members/CommitteeMemberCardList';



ReactDOM.render(
    <CommitteeMemberCardList committee={"Full Stack"}/>,
    document.getElementById('root')
);

