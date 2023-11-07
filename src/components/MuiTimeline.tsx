import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import { Stack } from '@mui/material';
import React from 'react'

function MuiTimeline() {
  return (
    <Stack m={4}>
      {/* Timeline component */}
      <Timeline position='left'>
        {/* TimelineItem A */}
        <TimelineItem>
          <TimelineOppositeContent color='text.secondary'>9:30 AM</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant='outlined' color='secondary' />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            City A
          </TimelineContent>
        </TimelineItem>

        {/* TimelineItem B */}
        <TimelineItem>
          <TimelineOppositeContent color='text.secondary'>10:30 AM</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant='outlined' color='secondary' />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            City B
          </TimelineContent>
        </TimelineItem>

        {/* TimelineItem C */}
        <TimelineItem>
          <TimelineOppositeContent color='text.secondary'>11:30 AM</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant='outlined' color='secondary' />
          </TimelineSeparator>
          <TimelineContent>
            City C
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Stack>
  )
}

export default MuiTimeline;