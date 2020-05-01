import React from 'react'

import "./share.style.scss";

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

export const ShareButtons = ({title, url}) => {
    
    return(
        <div>
          <FacebookShareButton url={url}>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}%2F`}
               target="blank"><FacebookIcon /></a>
         </FacebookShareButton>
      
          <TwitterShareButton url={url} title={title}>
              <a href={`https://twitter.com/intent/tweet/?text=${title}&url=${url}&via=_msLinda`}
              target="blank"><TwitterIcon /></a>
            
          </TwitterShareButton>
      
          <LinkedinShareButton url={url}>
          <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&source=${url}`} target="blank" >
            <LinkedinIcon />
           </a> 
          </LinkedinShareButton>
      
          <RedditShareButton url={url} title={title}>
          <a href={`http://www.reddit.com/submit/?url=${url}`}target="blank">
            <RedditIcon />
          </a>
          </RedditShareButton>
      
          <WhatsappShareButton url={url} title={title}>
            <a href={`whatsapp://send?text=${url}`} data-action="share/whatsapp/share">
               <WhatsappIcon />
            </a>
           </WhatsappShareButton>
        </div>
      )
      
}
export default ShareButtons