import React from "react"

import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share"

const SharedButtons = ({ title, url, twitterHandle, tags }) => {
  return (
    <div>
      <FacebookShareButton url={url}>
        <FacebookIcon size={40} round={true} />
      </FacebookShareButton>

      <TwitterShareButton
        url={url}
        title={title}
        via={twitterHandle}
        hashtags={tags}
      >
        <TwitterIcon size={40} round={true} />
      </TwitterShareButton>

      <LinkedinShareButton url={url}>
        <LinkedinIcon size={40} round={true} />
      </LinkedinShareButton>
    </div>
  )
}
export default SharedButtons
