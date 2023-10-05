import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import AssessmentIcon from '@mui/icons-material/Assessment';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WebStoriesIcon from '@mui/icons-material/WebStories';
import GroupIcon from '@mui/icons-material/Group';

export const SidebarData = [
    {
        title: 'Home',
        icon:<HomeIcon />,
        link:'/Home'
    },
    {
        title: 'Mailbox',
        icon:<MailIcon />,
        link:'/Mailbox'
    },
    {
        title: 'Analytics',
        icon:<AssessmentIcon />,
        link:'/Analytics'
    },
    {
        title: 'Dashboard',
        icon:<DashboardIcon />,
        link:'/Dashboard'
    },
    {
        title: 'WebStories',
        icon:<WebStoriesIcon />,
        link:'/WebStories'
    },
    {
        title: 'Friend Group',
        icon:<GroupIcon />,
        link:'/FriendGroup'
    }
]
