import * as React from "react"
import "./timeline.css"
import Markdown from 'react-markdown'

const TimelineEntry = ({ date, children }) => {
  return (
    <li className="timelineEntry">
      <div className="timelineDate">
        {date}
      </div>
      <div className="timelineLineContainer">
        <div className="timelineIcon" />
        <div className="timelineLine" />
      </div>
      <div style={{ minHeight: 100 }}>
        {children}
      </div>
    </li >
  )
}

const TimelineCard = ({ title, children}) => {
  return <div className="timeline-card">
    <b>{title}</b>
    <Markdown>{children}</Markdown>
  </div>
}

const Timeline = () => {
  return <div>
    <ul style={{ textAlign: 'start', listStyle: 'none' }}>
      <TimelineEntry date="2021.01">
        <TimelineCard title="Rockspoon">
          {`[ Go Mongo NewRelic ReactJS NextJS ElasticSearch Kubernetes Azure ]

Rockspoon is a **POS** for restaurants, providing a all-in-one solution for small restaurants in California.

At Rockspoon, I participated in **Search**, **Marketplace** and **Analytics** teams.  
We utilized **Go** with **Mongo** for the entire backend.
Most of my job was to architect and implement features for web-services.  
Intensive use of **Mongo features**, such as **change-stream**, **pipeline-aggregation** and
**time-series** collections.`}
        </TimelineCard>
      </TimelineEntry>
      <TimelineEntry date="2020.01">
        <TimelineCard title="Fluxonaut">
          {`[ C# .NET MVVM Websocket WPF Protobuf AWS ]

Fluxonaut is a software developed for investors and journalists, with the objective of providing real-time digested information.

At Fluxonaut, I was responsible for developing the windows and the **data processing** logic on the **frontend**.  
There I learned **C#** and **WPF** framework for displaying **real-time information** for investors.  
I refactored legacy code and enhance memory footprint by 30%.  
I also implemented from scratch a pipeline for building and digitally signing the executable.
          `}
        </TimelineCard>
      </TimelineEntry>
      <TimelineEntry date="2019.01">
        <TimelineCard title="Raccoon Digital Marketing">
          {`[ Go Python ReactJS TypeScript Postgres Prometheus Grafana Kubernetes GCP ]

Raccoon is a digital marketing company founded by ex-googlers, providing SEO optimization, business inteligence and engineering projects for customers.

At Raccoon I first learned **Go**, **Containerization** and **Kubernetes**.  
There I joined from day-1 a **video rendering** project for segmentation in ads. Using **youtube api** and **google-ads** to render different ads for different audiences.
We implemented a simple front-end, api and worker connected through a publisher-subscriber to render thousands of videos in parallel on **Google Cloud**.  
We also implemented a very robust **observability** with **Prometheus** and **Grafana**.
          `}
        </TimelineCard>
      </TimelineEntry>
    </ul>
  </div>
}

export default Timeline