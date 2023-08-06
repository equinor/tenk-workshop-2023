# TENK Workshop

A 1.5 hour workshop on creating interfaces with HTML, CSS and Javascript for the [TENK Codecamp](https://tenknorge.com/tenk-tech-camp) for girls age 13–18 at the Bergen Public Library August 10 and 11 2023.

~The workshop is based on using [Glitch](https://glitch.com/), a free online platform for creating web apps.~

**Update Aug 5:** Unfortunately Glitch is too unstable, the preview and tools buttons don’t work, can’t risk that in the workshop – we need a Plan B. We’ll use Github and Codespaces for the actual workshop, and Codepen to demonstrate core concepts. The attendees will create a Github account, clone a template, and use Codespaces.

The main concept is that the attendees will get a glimpse into what it’s like working as a frontend developer, there’s not enough time to learn everything from scratch in just 1.5 hours. So there will be an app that’s half made with design tokens as custom properties based on open props. We will record a video of a fictional colleague who was supposed to make a mockup of a design, but who got fed up with the bad weather and went on holiday. Before she left she added TODO comments in the code on what has to be finished. That way the girls who are curious and pro-active will find new tasks when exploring the code, while the main topics will be discussed and demonstrated for everyone.

The design will be based on one of the Amplify designs but built with a simplified set of EDS 2.0 tokens. 

## Some things to consider:
- Will there be a storybook?
- Should we just use vanilla html?

## Storybook
The jury is still out on whether we should use Storybook in the workshop, but I’ve included it anyway as a way to prepare the workshop components.

## Topics:
- Class toggling for menu collapsing
  - Extra assignment can be to add an animation

## Resources:
- [Custom Emmet snippets](https://www.smashingmagazine.com/2021/06/custom-emmet-snippets-vscode/) to create annotated skeletons for example
- [How to run a frontend workshop in Codespaces](https://dev.to/github/how-to-run-a-frontend-workshop-in-codespaces-2ede) for ideas, I tried using Codetour and Codeswing but it just didn’t work and hasn’t been maintained either, so decided against it. Still some cool thoughts and ideas.
- Chris Heilmann has some posts on [debugging](https://christianheilmann.com/2022/01/26/a-launch-json-setting-for-end-to-end-web-development/) and [tasks](https://christianheilmann.com/2022/03/17/automatically-starting-a-server-when-starting-a-debug-session-in-vs-code/) for another time. I set up Browser-sync as a background process using postStartCommand initially. Then thought I’d make it a bash-script. Then a task, with an extension to start and stop the process. Kept the postStartCommand as a comment, just in case we want to go back to that.
- (Modern CSS for component based architecture)[https://moderncss.dev/modern-css-for-dynamic-component-based-architecture/] for best practises and examples
- [Duolingo blog post on postStartCommand](https://blog.duolingo.com/developer-onboarding-with-github-codespaces/). I still think it would be a good idea to just use a bash-script, but couldn’t get it to work the way I wanted to. Would be nice if there was an extension that allowed you to run bash scripts from the explorer. Found one that didn’t work.
- [Another one from podman on postStartCommand](https://podman-desktop.io/blog/develop-using-devcontainer).

## Documentation:
- We will start by using view source in the browser, so the documentation should be comments in the code, to encourage exploration

## Conclusion
- End the workshop with showing how the template we’ve used can be re-used into making their own personal website
