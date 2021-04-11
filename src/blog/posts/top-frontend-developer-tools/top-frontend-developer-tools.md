---
title: "Front End Developer Tools You Should Use in 2021 (and What I Love About Them)"
date: "2021-03-11"
featured: "./frontend-developer-tools.png"
description: "Emmert Wolf once wrote: a man is only as good as his tools and that remains true for every profession, especially for frontend developers. Discover 7 tools that could improve your productivity and speed up your development workflow.."
tags: ["DevLife",]
keywords: "Frontend Developer Tools, Top 5 Frontend developer tools."
---

Emmert Wolf once wrote that "a man is only as good as his tools". In the software development world, this can be loosely translated to mean that the difference in the productivity levels of a group of developers with the  same technical knowledge is sometimes based on their toolset.

I’ve been a professional front-end developer for over a year and some months, and in that time, I’ve built several websites, both as a freelancer and while working full-time for two different companies. If you ask me, I’ve had a fair share of trying out some front-end developer tools to try to both ease and speed up my development workflow. 

In this post, I’m going to round up some of the most interesting front-end developer tools that I have used this year, which you will definitely find useful for your own development workflow. These front-end development tools aren’t necessarily the most popular  or hottest in 2020, but they’re all unique in their use cases and have come in handy for me on several occasions, as they will too for you. If you’re already excited, let’s get started.

## 1. Retool
<a class="inline-link" href=""></a>
This is definitely my favourite tool on this list, hence why it comes first. <a class="inline-link" href="https://retool.com/">Retool</a> is a low-code platform for building internal tools rapidly. Internal tools can be any internally-facing software developed by and tailored to a company to support internal operations and needs. Such tools can be in the form of CRUD focused apps like admin dashboards or CRMs. 

With the help of Retool, building internal tools becomes as easy as drag and drop the UI components you need, connect your database and write only the queries you need to interact with your data. No need to spend days or even months, making UI/UX decisions, fighting with state management, setting up access control or re-inventing the wheel. 

Let me tell you why I love this tool. A few months ago, a backend developer from my team and I were tasked to build a tool to enable easier data uploads for the customer team. The company I work for builds products to bridge the gap between distributors and retailers.  The customer team is in charge of scouting for distributors and signing them on to try out the platform. They will input the distributor details into an Excel sheet which the backend team will now upload to the database at given time intervals. This process was time-wasting and kept the backend developers from doing their actual jobs. Our task was to build a CRUD app that the customer team could use to upload and edit changes directly to the distributor database. 

Before discovering Retool, I would have spent days building a login flow, tables, styling, making fetch and post requests and other redundant tasks. However, with Retool, building this tool took only a day and a half (because we had to spend some time reading and understanding the documentation first). I simply used a drag and drop interface to get all the UI components I needed, connected to the distributor database, the backend guy wrote a few queries to read and write data, and viola, we were done. If you’re interested, you too, can learn how to <a class="inline-link" href="https://retool.com/blog/can-you-build-this-for-me/"> use Retool to build a simple internal app in minutes </a>.

## 2. Tailwind CSS

<a class="inline-link" href="https://tailwindcss.com/">Tailwind CSS</a> is a utility-first framework for rapidly building custom user interface (UI) components. This means that unlike other CSS frameworks or libraries, it doesn’t provide pre-styled components that’ll have all your projects looking the same (insert Bootstrap).  Instead, it provides low-level utility classes for styling virtually every CSS property like margin (e.g. mt-10), flex (e.g. justify-between), colour (e.g. blue-600),  and so on. This way, you get to build custom interfaces.

Tailwind CSS really shines when used with component based frameworks like React. Everything about any UI component - styles and markups - will all be encapsulated in one file, just the way it should be. No going back and forth between a CSS file and the JSX code. In fact, you may almost never need to write CSS again. With Tailwind CSS, you’ll make better design decisions because it limits your choices via limited class variations and therefore reduces the cognitive load. You’ll also never have to worry about naming CSS classes any more. Awesome, right? 

If you want to start using Tailwind CSS for your project, see this article on <a class="inline-link" href="https://blog.logrocket.com/tailwind-css-is-it-tomorrows-bootstrap-ebe560f9d00b/">getting started with Tailwind CSS</a>.

## 3. Lite YouTube Embed

It’s so easy to embed YouTube videos into a webpage using the `<iframe>` tag. What you may not know is that one embedded YouTube video will not only increase the byte size of your webpage by over 800kb, but the browser will have to make approximately <a class="inline-link" href="https://www.labnol.org/internet/light-youtube-embeds/27941/">21 HTTP requests</a> to render the video player. I don’t need to tell you the negative effects this can have on page performance especially if you’re going to embed several videos.

To improve perceived page performance, we can first serve a lightweight static image that looks like a YouTube video and then lazy load the video in the background. As soon as the user clicks on the image, it is replaced with the video which will play right away. This is where <a class="inline-link" href="https://www.npmjs.com/package/lite-youtube-embed">Lite YouTube Embed</a> comes in. This front-end developer tool is an NPM package that offers an elegant way to lazy load YouTube videos in order to improve the page load speed (approximately 224x faster) and save bandwidth. It’s also very easy to <a class="inline-link" href="https://debbie.codes/blog/nuxt-lite-youtube-embeds/">learn to use</a>.

## 4. CSS Feature Toggle

If you work on projects where you need to support some legacy or older browsers, then you’ll love this particular front-end developer tool. <a class="inline-link" href="https://chrome.google.com/webstore/detail/css-feature-toggles/aeinmfddnniiloadoappmdnffcbffnjg">CSS Feature Toggle</a> is a Chrome extension that’s lets you test how your webpages will look on browsers that don’t support selected modern CSS features like flexbox, grid or blend-modes. This extension is great for testing progressive enhancement fallbacks.

When you download the extension, a new tab will be added to your Chrome developer tools. In the tab, you’ll notice a list of modern CSS features that you can toggle on or off. When you toggle features, the page will instantly update to display the changes. 

## 5. Create App

For simple one or two-page websites, it's okay to just have your plain JS, HTML and CSS files interlinked. But as soon as the project starts to get a bit more complex with more JavaScript and CSS files, you'll probably want to use a bundler tool like Webpack. 

Webpack will bundle and minify all your CSS and JS files into one  or two files to cut down on HTTP requests and improve performance, compile your TypeScript to JavaScript, compile LESS/SASS to CSS, transcompile ES6/ES7/ES8 to ES5 for cross-browser compatibility, and even enable live or hot reloading.  The problem we all have is that configuring Webpack is a pain, but the <a class="inline-link" href="https://createapp.dev/">CreateApp</a> tool can help you with that.

CreateApp is a front-end build config generator tool for Webpack, Parcel and Snowpack. With this front-end developer tool, you can easily generate boilerplate and configuration files that you’ll need for your project, so you can simply get down to writing code that actually implements features. Just select what you want from the options provided, download the resulting boilerplate project as a zip file, unzip, run npm install and you’re good to go. And don't worry, CreateApp uses the latest version of WebPack and is actively maintained by <a class="inline-link" href="https://github.com/jakoblind/webpack-autoconf">over 10 contributors on GitHub</a>.  

## 6. Markdown All in One

I just discovered this tool recently and I have been hooked. <a class="inline-link" href="https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one">Markdown All in One</a> is a VS-Code extension that provides everything you need to be productive with Markdown. You’ll get features like keyboard shortcuts, table of contents, auto preview, dedicated math support, list editing, print markdown to HTML, GitHub flavoured markdown support, auto-completion and more.

As someone who writes my blog posts purely in Markdown, using this tool has made things easier for me. If you’re like me and you use Markdown to either write documentation, blog posts or articles, then this extension would also be a great addition to your front-end developer toolset.

## 7. Free Illustrations

If you do freelance web development or just build a lot of side projects, you’ll love <a class="inline-link" href="https://freeillustrations.xyz/">Free Illustrations</a>. I just had to include it on this list. It’s not necessary a front-end developer tool, but an online collection of several free illustration packs & vectors that you can use for your next personal or commercial project with or without attribution. It has illustrations of different file types: svg, png,  psd, sketch, AI, figma, and lots more to suit whatever environment you want to work on

Using free illustrations, you’ll find high quality beautiful illustrations of just about any category you’re looking for. No need to pester or beg your designer friends anymore :)

## Conclusion

And that’s all I have for you. In this article, I introduced to you 7 front-end developer tools (that I have personally used) that will help superchage your productivity, improve your workflow and help you build web apps faster. If you're interested in discovering more tools, I have a <a class="inline-link" href="https://github.com/Linda-Ikechukwu/Web-Development-Tools">GitHub repo</a> where I've been documenting some of my favourite tools. You should <a class="inline-link" href="https://github.com/Linda-Ikechukwu/Web-Development-Tools">check it out</a>.

Also, if there’s any tool you’ve been using that have improved your workflow in any way, please share them with me in the comments. I too, would love to expand my stash :)

