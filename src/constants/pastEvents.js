const pastEvents = [
  {
    title: 'Building React UIs Visually',
    video: 'https://www.youtube.com/embed/VlCp05zlT3A',
    description: (
      <>
        <p>Design tools are fast and amazing tools for thought, but for a host of reasons are limited to creating drawings rather than production assets. Engineers must instead re-create surfaces from scratch, by hand, using code (often heavily using tools like the Devtools CSS inspector, the closest thing engineers have to a design tool). This inevitably leads to discrepancies and back-and-forth with the design team, and ultimately two sources of truth that are never truly in sync. History has seen a number of attempts at bridging this gap.</p>
        <p>This talk deep-dives into one such stab. Plasmic is a React UI builder. It loosely resembles a design tool and aims to give the same sense of speedy iteration, but is for building maintainable, production-ready presentational components. The idea is to give developers a better and faster development experience, eliminate an entire class of visual bugs/QA/tooling, and ultimately maintain a single source of truth with design. This talk will also cover some of the challenges with building such a tool (which itself is a React application).</p>
      </>
    ),
    presenter: 'Yang Zhang',
    presenterLink: null,
  },
  {
    title: 'React hooks fundamentals',
    video: 'https://www.youtube.com/embed/hcv0teYx4o4',
    description: (
      <>
        <p>Welcome to React Hooks, A [Virtual] Talk</p>
        <p>What are React Hooks?</p>
        <p>React Hooks are a new (since React 16.8) way to write stateful components without writing classes. They also let you write components in a functional and compositional style without all that boilerplate! React Hooks have many uses and we'll explore the basics together. We'll also have a Q&&A session at the end where we can discuss benefits, drawbacks, and migration to hooks (should you, or not). We also welcome you to BYOC, if you want to screenshare and get feedback on design, practices and style.</p>
      </>
    ),
    presenter: 'Sean Nakamura',
    presenterLink: null,
  },
  {
    title: 'Real-time updates with Websockets and Server-Sent Events',
    video: 'https://www.youtube.com/embed/7ZJjWI6mFm0',
    description: (
      <>
        <p>Real-time updates with Websockets and Server-Sent Events, A [Virtual] Talk</p>
        <p>What are Websockets and SSE?</p>
        <p>The web is nice and all, requesting data, then receiving that data.</p>
        <p>What if you wanted to send data - that wasn't even asked for!</p>
        <p>"Why would anyone ever want to do that?" you might ask.</p>
        <p>Well you are probably doing that now in your every day life.</p>
        <p>When you use slack, someone sends a gif of a cat vibing with Shaq? You get that gif sent straight to your phone and you didn't ask for it, and there it is anyway.</p>
        <p>Or what if you wanted to create an multiplayer game where actions of one player are seen by the other players in near real time?</p>
        <p>This is where websockets and server-sent events come in the picture.</p>
        <p>Websockets (or wss) allow persistent two-way communication between clients and servers, think chat rooms like AOL Instant Messenger.</p>
        <p>Server-Sent Events (or SSE) allows your site to push event-driven data to any connected clients (one way communication), think of how your clients poll for new data every 5 seconds to get updates... except WAY better!</p>
      </>
    ),
    presenter: 'Jon Borgonia',
    presenterLink: null,
  },
]

export default pastEvents;
