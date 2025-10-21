import { Timeline } from '@mui/icons-material';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './timeline.css';

function Experience() {

    return (
        <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021-2022"
            contentStyle={{ background: '#636d6c', color: 	'#fff' }}

            iconStyle={{ background: '#636d6c', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">Volunteer English Teacher</h3>
            <h4 className="vertical-timeline-element-subtitle">Jakarta, Indonesia</h4>
            <p>
                Taught a small group of children from disadvantaged backgrounds.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - Current"
            contentStyle={{ background: '#8ed1d1', color: 	'#fff' }}

            iconStyle={{ background: '#8ed1d1', color: '#000' }}
        >
            <h3 className="vertical-timeline-element-title">Volunteer Web Designer at SmartNakuru</h3>
            <h4 className="vertical-timeline-element-subtitle">Remote</h4>
            <p>
                A short project for delivering a web design, helped worked on the web design of selected pages. 
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021-2022"
            contentStyle={{ background: '#636d6c', color: 	'#fff' }}

            iconStyle={{ background: '#636d6c', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">E-Commerece store assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">Remote</h4>
            <p>
                Helped a small business run a small e-commerece business. Mainly, designing product images and analysing data analytics from ads.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - 2025"
            dateClassName={'date'}
            contentStyle={{ background: '#8ed1d1', color: 	'#fff' }}

            iconStyle={{ background: '#8ed1d1', color: '#000' }}
        >
            <h3 className="vertical-timeline-element-title">Industrial Placement Developer @ Cantarus</h3>
            <h4 className="vertical-timeline-element-subtitle">Manchester, United Kingdom</h4>
            <p>
                .NET Developer specialising in C#, JavaScript and various content management systems.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - 2025"
            contentStyle={{ background: '#636d6c', color: 	'#fff' }}

            iconStyle={{ background: '#636d6c', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">University of Leeds Chess Society Treasurer </h3>
            <h4 className="vertical-timeline-element-subtitle">Leeds, United Kingdom</h4>
            <p>
                Manage society finances, estimate budget and income, prepare statements of income. 
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2025"
            dateClassName={'date'}
            contentStyle={{ background: '#8ed1d1', color: 	'#fff' }}

            iconStyle={{ background: '#8ed1d1', color: '#000' }}
        >
            <h3 className="vertical-timeline-element-title">Quality Engineer @ Ligentia</h3>
            <h4 className="vertical-timeline-element-subtitle">Leeds, United Kingdom</h4>
            <p>
                Quality Engineer - writing automated tests using Playwright and C#. 
            </p>
        </VerticalTimelineElement>
                <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2025"
            contentStyle={{ background: '#636d6c', color: 	'#fff' }}

            iconStyle={{ background: '#636d6c', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">University of Leeds Hiking Society International Secretary</h3>
            <h4 className="vertical-timeline-element-subtitle">Leeds, United Kingdom</h4>
            <p>
                Lead hikes on sundays and manage international student body in the society.
            </p>
        </VerticalTimelineElement>
        </VerticalTimeline>

    );
  }
  
  export default Experience;
  