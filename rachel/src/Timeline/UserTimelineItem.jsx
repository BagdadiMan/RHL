import React from 'react';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Typography from '@material-ui/core/Typography';
import WorkIcon from '@material-ui/icons/Work';
import { UserTimelineItemContent } from './UserTimelineItemContent';

export const UserTimelineItem = (props) => {
    const {startDate, id} = props.item;
    const hebrewMonthNames = ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר","אוקטובר","נובמבר","דצמבר"];

    return (
        <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            {`${hebrewMonthNames[startDate.getMonth()]} ${startDate.getFullYear().toString()}`}
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
              <WorkIcon />
            </TimelineDot>
        <TimelineConnector />
        </TimelineSeparator>
        <UserTimelineItemContent item={props.item} />
      </TimelineItem>
    );
}