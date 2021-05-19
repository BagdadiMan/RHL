import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import { UserTimelineItem } from "./UserTimelineItem";

export const UserTimeline = (props) => {
    const timelineItems = props.timelineItems;
    const sortedTimelineItems = timelineItems.sort((a,b) => b.startDate - a.startDate);

  return (
      <Timeline align="right">
          {sortedTimelineItems.map(item => <UserTimelineItem key={item.id} item={item}/>)}
      </Timeline>
  );
}
