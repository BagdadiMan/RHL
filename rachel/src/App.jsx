import React from 'react';
import { UserTimeline } from './Timeline/UserTimeline';

export const App = () => {
    const text = 'רש"צ'

    const timelineItems = [
        {
            id: 1,
            startDate: new Date(),
            title: 'מפקד בקורס תכנות',
            labels: [
                {
                    id: 1,
                    text: 'בסמ"ח'
                },
                {
                    id: 2,
                    text: 'תכניתן'
                },
                {
                    id: 3,
                    text: 'Data Analyst'
                }
            ]
        }
    ]

    return ( <UserTimeline timelineItems={timelineItems}/>);
    };
