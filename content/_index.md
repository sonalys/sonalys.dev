# About Me

<br>


> I'm Alysson Ribeiro, a passionate Software Engineer. 
> I started programming with 10 years old.
> From programming RPGs on Visual Basic as a starting point, I jumped into a beautiful and technical world.
> I am an experienced Golang developer, working with it since 2019 into multiple professional and personal projects.
> Currently I'm very focused on transactional Domain Driven Design on PostgreSQL.

<br>

# Career

<style>
/* General page style, likely unrelated to timeline structure itself, kept from original */
li {
  margin-top: 0 !important;
}

/* Timeline Styles */
.timeline-container {
  margin: 0 auto; /* Center the timeline container */
  max-width: 1200px; /* Optional: constrain maximum width */
  padding: 20px; /* Padding around the timeline */
}

.timeline {
  display: grid;
  grid-template-columns: auto auto 1fr;
  column-gap: 15px;
  /* Use the variable if defined, otherwise hardcode. This gap separates cards. */
  row-gap: 2rem; /* or var(--timeline-row-gap); */
  align-items: stretch; 
  /* position: relative; /* Useful if other absolute positioning was needed, but not strictly for this */
}

.timelineEntry {
  /* This is crucial: child elements become direct grid items of .timeline */
  display: contents;
}

.timelineDate {
  font-weight: bold;
  justify-self: end; /* Align date box to the right end of its column */
  text-align: right; /* Align date text to the right within its box */
  padding-top: .6rem; /* Vertical alignment with card content */
  white-space: nowrap; /* Prevent dates from wrapping */
  /* If .timelineDate itself should not stretch, you can add align-self: start;
     but usually, text being at the top of a stretched cell is fine. */
}

.timelineLineContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  position: relative; /* Crucial for positioning the ::after pseudo-element */
}

.timelineIcon {
  width: 20px;
  height: 20px;
  background-color: var(--primary, #007bff);
  border-radius: 50%;
  /* margin-bottom: 5px; Space between icon and the vertical line below it */
  position: relative; 
  z-index: 1; 
  flex-shrink: 0; /* Prevent icon from shrinking if space is tight, though unlikely here */
}

.timelineLine {
  width: 2px;
  flex-grow: 1; /* Makes the line fill the REMAINING vertical space in .timelineLineContainer */
  background-color: var(--primary, #007bff);
}

.timeline-card {
  background-color: color-mix(in srgb, var(--primary, #007bff) 20%, transparent); 
  padding: 1rem;
  border-radius: 8px;
}

.timeline-card p {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

.timeline-card b + br + p {
    margin-top: 0.25em; 
}

.timeline-card p:last-child {
    margin-bottom: 0;
}

.timelineEntry:last-child .timelineLineContainer .timelineLine {
  display: none;
}

/* The connecting line segment that spans the row-gap */
.timelineEntry:not(:last-child) .timelineLineContainer::after {
  content: "";
  position: absolute;
  width: 2px; /* Must match .timelineLine width */
  background-color: var(--primary, #007bff);
  
  /* Start from the bottom edge of the .timelineLineContainer */
  top: 100%; 
  /* Extend downwards by the amount of the row-gap */
  height: 4rem; /* CRITICAL: Must match .timeline's row-gap value (or var(--timeline-row-gap)) */
  
  /* Horizontal centering within the column */
  left: 50%;
  transform: translateX(-50%);
  
  /* Ensure this connector line is behind the next icon */
  z-index: 0; 
}
</style>

<div class="timeline-container">
  <div class="timeline">
    <div class="timelineEntry">
      <div class="timelineDate">2024.05</div>
      <div class="timelineLineContainer">
        <div class="timelineIcon"></div>
        <div class="timelineLine"></div>
      </div>
      <div class="timeline-card">
        <b>Senior Software Engineer</b><br/>
        <p>[ Go Postgres Azure Kubernetes Temporal Grafana ]</p>
        <p><strong>About the company:</strong> Sematell is a company providing infrastructure for Customer Support, handling incoming Messages through a ticket system.</p>
        <p>Here I actively participate in System Architecture, Development of internal and external services, Pair Programming and upbringing new libraries, technologies and solutions.</p>
      </div>
    </div>
    <div class="timelineEntry">
      <div class="timelineDate">2021.01</div>
      <div class="timelineLineContainer">
        <div class="timelineIcon"></div>
        <div class="timelineLine"></div>
      </div>
      <div class="timeline-card">
        <b>Senior Software Engineer</b><br/>
        <p>[ Go Mongo NewRelic ReactJS NextJS ElasticSearch Kubernetes Azure ]</p>
        <p><strong>About the company:</strong> Rockspoon is a <strong>POS</strong> for restaurants, providing an all-in-one solution for small restaurants in California.</p>
        <p>At Rockspoon, I participated in <strong>Search</strong>, <strong>Marketplace</strong>, and <strong>Analytics</strong> teams.  
        We utilized <strong>Go</strong> with <strong>Mongo</strong> for the entire backend.  
        Most of my job was to architect and implement features for web-services.  
        Intensive use of <strong>Mongo features</strong>, such as <strong>change-stream</strong>, <strong>pipeline-aggregation</strong>, and
        <strong>time-series</strong> collections.</p>
      </div>
    </div>
    <div class="timelineEntry">
      <div class="timelineDate">2020.01</div>
      <div class="timelineLineContainer">
        <div class="timelineIcon"></div>
        <div class="timelineLine"></div>
      </div>
      <div class="timeline-card">
        <b>Front-end Developer</b><br/>
        <p>[ C# .NET MVVM Websocket WPF Protobuf AWS ]</p>
        <p><strong>About the company:</strong> Fluxonaut is a software developed for investors and journalists, with the objective of providing real-time digested information.</p>
        <p>At Fluxonaut, I was responsible for developing the windows and the <strong>data processing</strong> logic on the <strong>frontend</strong>.  
        There I learned <strong>C#</strong> and <strong>WPF</strong> framework for displaying <strong>real-time information</strong> for investors.  
        I refactored legacy code and enhanced memory footprint by 30%.  
        I also implemented from scratch a pipeline for building and digitally signing the executable.</p>
      </div>
    </div>
    <div class="timelineEntry">
      <div class="timelineDate">2019.01</div>
      <div class="timelineLineContainer">
        <div class="timelineIcon"></div>
        <div class="timelineLine"></div>
      </div>
      <div class="timeline-card">
        <b>Full Stack Developer</b><br/>
        <p>[ Go Python ReactJS TypeScript Postgres Prometheus Grafana Kubernetes GCP ]</p>
        <p><strong>About the company:</strong> Raccoon is a digital marketing company founded by ex-googlers, providing SEO optimization, business intelligence and engineering projects for customers.</p>
        <p>At Raccoon I first learned <strong>Go</strong>, <strong>Containerization</strong> and <strong>Kubernetes</strong>.  
        There I joined from day-1 a <strong>video rendering</strong> project for segmentation in ads. Using <strong>youtube api</strong> and <strong>google-ads</strong> to render different ads for different audiences.  
        We implemented a simple front-end, API and worker connected through a publisher-subscriber to render thousands of videos in parallel on <strong>Google Cloud</strong>.  
        We also implemented a very robust <strong>observability</strong> stack with <strong>Prometheus</strong> and <strong>Grafana</strong>.</p>
      </div>
    </div>
  </div>
</div>