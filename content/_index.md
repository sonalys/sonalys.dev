---
toc: false
---

<style>
.profile{
    margin-bottom: 20px;
}

.social-icons svg {
  width: 30px;
  height: 30px;
}

.profile {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.social-icons {
  display: flex;
  place-content: center;
  flex-direction: row;
  gap: 20px;
  margin: 20px;
}

/* Chip Styles -- ADDED */
.skills-chips-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px; /* Space between chips */
  margin-top: 0.5em; /* Consistent with <p> margins in this context */
  margin-bottom: 0.5em; /* Consistent with <p> margins in this context */
}

.skill-chip {
  background-color: color-mix(in srgb, var(--primary, #007bff) 10%, #f0f0f0 90%); /* Light background, slightly tinted with primary color */
  color: color-mix(in srgb, var(--primary, #007bff) 70%, #343a40 30%); /* Text color, darker and influenced by primary color */
  padding: 4px 10px;
  border-radius: 16px; /* Pill shape */
  font-size: 0.85em;
  font-weight: 500;
  line-height: 1.4;
  border: 1px solid color-mix(in srgb, var(--primary, #007bff) 25%, #dee2e6 75%); /* Subtle border, also tinted */
  white-space: nowrap; /* Prevent chips from breaking mid-word */
}
</style>

<div class="profile">
    <div class="profile_inner">
        <img draggable="false" src="http://localhost:1313/images/me.png" alt="profile image" title="" height="150" width="150" style="border-radius: 50%;">
        <h1>Alysson Ribeiro</h1>
        <span>Senior Software Engineer, passionate Golang developer</span>
        <div class="social-icons">
            <a href="https://github.com/sonalys" target="_blank" rel="noopener noreferrer me" title="Github">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path
                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                    </path>
                </svg>
            </a>
            <a href="https://www.linkedin.com/in/alysson-ribeiro" target="_blank" rel="noopener noreferrer me"
                title="Linkedin">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                </svg>
            </a>
            <a href="mailto:me@sonalys.dev" target="_blank" rel="noopener noreferrer me" title="Email">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 21" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
            </a>
        </div>
    </div>
</div>

# About Me

> I'm Alysson Ribeiro, a passionate Software Engineer.  
I started programming at the age of 10.  
What began with creating RPGs in Visual Basic led me into a beautiful and highly technical world.  
I've been working with Go (Golang) since 2019 on a variety of professional and personal projects.  
Currently, I'm deeply focused on transactional Domain-Driven Design.

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
        <div class="skills-chips-container">
          <span class="skill-chip">#Go</span>
          <span class="skill-chip">#Postgres</span>
          <span class="skill-chip">#Azure</span>
          <span class="skill-chip">#Kubernetes</span>
          <span class="skill-chip">#Temporal</span>
          <span class="skill-chip">#Grafana</span>
        </div>
        <p><strong>About the company:</strong> Sematell provides infrastructure for customer support, managing incoming messages through a ticket system.</p>
        <p>Here, I actively contribute to system architecture, develop internal and external services, engage in pair programming, and introduce new libraries, technologies, and solutions.</p>
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
        <div class="skills-chips-container">
          <span class="skill-chip">#Go</span>
          <span class="skill-chip">#Mongo</span>
          <span class="skill-chip">#NewRelic</span>
          <span class="skill-chip">#ReactJS</span>
          <span class="skill-chip">#NextJS</span>
          <span class="skill-chip">#ElasticSearch</span>
          <span class="skill-chip">#Kubernetes</span>
          <span class="skill-chip">#Azure</span>
        </div>
        <p><strong>About the company:</strong> Rockspoon is a <strong>POS</strong> solution for restaurants, offering an all-in-one platform for small businesses in California.</p>
        <p>At Rockspoon, I contributed to the <strong>Search</strong>, <strong>Marketplace</strong>, and <strong>Analytics</strong> teams.  
        We used <strong>Go</strong> with <strong>MongoDB</strong> across the entire backend.  
        My main role involved architecting and implementing web service features, leveraging MongoDB features like <strong>change streams</strong>, <strong>aggregation pipelines</strong>, and <strong>time-series</strong> collections.</p>
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
        <div class="skills-chips-container">
          <span class="skill-chip">#C#</span>
          <span class="skill-chip">#.NET</span>
          <span class="skill-chip">#MVVM</span>
          <span class="skill-chip">#WebSocket</span>
          <span class="skill-chip">#WPF</span>
          <span class="skill-chip">#Protobuf</span>
          <span class="skill-chip">#AWS</span>
        </div>
        <p><strong>About the company:</strong> Fluxonaut is a software platform for investors and journalists, designed to deliver real-time, digestible information.</p>
        <p>At Fluxonaut, I was responsible for developing UI components and data processing logic on the <strong>frontend</strong>.  
        I learned <strong>C#</strong> and the <strong>WPF</strong> framework to present <strong>real-time information</strong> to investors.  
        I refactored legacy code and reduced memory usage by 30%.  
        Additionally, I implemented a complete build and digital signing pipeline for the executable.</p>
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
        <div class="skills-chips-container">
          <span class="skill-chip">#Go</span>
          <span class="skill-chip">#Python</span>
          <span class="skill-chip">#ReactJS</span>
          <span class="skill-chip">#TypeScript</span>
          <span class="skill-chip">#Postgres</span>
          <span class="skill-chip">#Prometheus</span>
          <span class="skill-chip">#Grafana</span>
          <span class="skill-chip">#Kubernetes</span>
          <span class="skill-chip">#GCP</span>
        </div>
        <p><strong>About the company:</strong> Raccoon is a digital marketing agency founded by former Googlers, offering SEO optimization, business intelligence, and engineering services.</p>
        <p>At Raccoon, I learned <strong>Go</strong>, <strong>containerization</strong>, and <strong>Kubernetes</strong>.  
        I joined a <strong>video rendering</strong> project from day one, focused on ad segmentation. Using the <strong>YouTube API</strong> and <strong>Google Ads</strong>, we generated customized ads for different audiences.  
        We built a lightweight frontend, API, and worker system connected via pub/sub to render thousands of videos in parallel on <strong>Google Cloud</strong>.  
        We also developed a robust <strong>observability</strong> stack using <strong>Prometheus</strong> and <strong>Grafana</strong>.</p>
      </div>
    </div>
  </div>
</div>