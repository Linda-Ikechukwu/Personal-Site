---
title: "How to Add  Social Share Buttons to Gatsby Blog Pages With React Share In 3 Steps"
date: "2020-05-24"
featured: "./socialshare.png"
description: "When you write a blog post, you want more people to read it. In this post you'll learn how to add social share buttons to a blog built with gatsby in 3 steps."
tags: ["React","Gatsby"]
keywords: "Social Share Buttons, Gatsby Blog, React Share, Build a developer blog "
---

We can all agree that writing a well thought out blog post isn’t the easiest thing to do. However, you'll still want to do it because you want to share your knowledge and hope that someone reads it aand finds it helpful. 

Adding social share buttons to your blog pages ensures that readers who find your article useful can share it with their audience with the click of a button. This improves the chances of more people reading your articles.

This article will guide you on how to add social share buttons to a blog built with gatsby in 3 steps with the end result like what we have in the header image and is intended for developers who have had some experience with gatsby and Graphql. Gatsby is a free and open source framework based on react and Graphql that helps developers build static sites which are blazing fast. If you’ve never used gatsby before, I suggest you take a look at the <a class="inline-link" href="https://www.gatsbyjs.org/tutorial/">documentation</a> or this <a class="inline-link" href="https://ibaslogic.com/blog/gatsby-tutorial-from-scratch-for-beginners/#working-with-gatsby-data">tutorial</a> to get started.

Enough said, let's dive in.

## Step 1: Install React Share 

React share is a library that provides social media share button components for react apps. To install, run `npm install react share --save`   or   `yarn add react-share`.

## Step 2: Create a ShareButtons component

Go to your components folder in `src`, create a new folder named `ShareButtons` and inside it create a `sharebuttons.component.js` file i.e `src/components/share/share.component.js`. 

This file will contain and export all your selected social buttons so you can use it wherever you want. 

Add this code: 

```javascript
import React from 'react'
 
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon
} from 'react-share'
 
const ShareButtons = ({title, url, twitterHandle, tags}) => {
    
    return(
        <div>
          <FacebookShareButton url={url} >
                <FacebookIcon  size={40} round={true}/>
         </FacebookShareButton>
      
          <TwitterShareButton url={url} title={title} via={twitterHandle} hashtags={tags}>
                <TwitterIcon  size={40} round={true} />
          </TwitterShareButton>
      
          <LinkedinShareButton url={url} >
            <LinkedinIcon  size={40} round={true}/>
          </LinkedinShareButton>
      
          <RedditShareButton url={url} title={title} >
            <RedditIcon  size={40} round={true} />
          </RedditShareButton>
      
          <WhatsappShareButton url={url} title={title}>
               <WhatsappIcon  size={40} round={true}/>
           </WhatsappShareButton>
        </div>
      )
      
}
export default ShareButtons

```

What the code above does is :

1. Import the different social share buttons  and corresponding icons component we wish to use. React share has a couple of them. Take a look at the <a class="inline-link" href="https://github.com/nygardk/react-share">repo’s readme</a> to gain more insight.

2.  Next, return the imported items along with some props. Again take a look at the repo’s readme to read about all allowed props.
    - url: string, denotes URL of the page.
    - title: string, denotes title of the page.
    - hashtags: array, denotes hashtags to share the post with.
    - size: number, the desired size of the icon. It resolves to px.
    - round: boolean, if set to true, the icons appear round and not in rectangular form.


##  Step 3: Setup ShareButtons components in your single blog posts template file

First, you need to query the title and tags of each blog post’s frontmatter in your blog post's template, since you’ll be needing to pass it as props to the sharebuttons component. 

```javascript
   //In src/templates/blog-post.js

   export const query = graphql`
 
   query {
      markdownRemark{
        frontmatter {
           title
           tags
        }
        html 
   }}

```


Next, get the resulting data from query into the `BlogPost` component:

```javascript
    const BlogPost = props => {

    const title = `Read ${props.data.markdownRemark.frontmatter.title} `;
    const tags = props.data.markdownRemark.frontmatter.tags;
    const url = props.location.href;
    const twitterHandle = "_MsLinda";
    }

```

*N.B: The `location.href` property of the prop points to the absolute url of the current page. You can `console.log(props)` and take a look at the properties.* 

Then, import the `ShareButtons` component and pass the declared constants above as props to it.

Putting everything together, you should have this:

```javascript
    import React from "react"
    import { graphql} from "gatsby"
    import ShareButtons from "../components/share-buttons/share.component"

    query{
      markdownRemark{
        frontmatter {
           title
           tags
           html 
   }}

    const BlogPost = props => {
 
    //For the social share buttons
    const title = `Read ${props.data.markdownRemark.frontmatter.title} `;
    const url = props.location.href;
    const twitterHandle = "_MsLinda";
    const tags = props.data.markdownRemark.frontmatter.tags;
 
   return (
     <div>
       <div className="post-body__content"
         dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}>
      </div>
      <div>
          <ShareButtons title={title} url={url} twitterHandle={twitterHandle} tags={tags}/>
      </div>
     </div>
   )
 
}

```


Yaay!! You did it. Now You should have social share buttons enabled on your blog page. You can click on them to see what happens.

## BONUS

To add a little margin between the icons and probably a hover style, create a sass file in the `ShareButtons` component folder i.e `src/components/sharebuttons/sharebuttons.style.scss`.

Inspecting the buttons in dev tools, you’ll find that each is a button with a class of  `react-share__ShareButton`. In the sass file, add the code below, then import into your `sharebuttons.component.js` file.

```css
    .react-share__ShareButton{
        margin-right: 1rem;

           & a svg{
              &:hover{
                 rect{
                    fill: var(--link-color) !important;
                }
            }
    }
```


*N.B: You should have the <a href="https://www.gatsbyjs.org/docs/sass/" class="inline-link">gatsby-sass plugin</a> installed and added to the plugins array of your gatsby.config.js file.*

Now go on and build something great!




