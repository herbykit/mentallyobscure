// This file uses Node.JS. It does not run server side.
// To require: fs, path, JQuery (if $(variable) is not present in vanilla JS)

// Grab these 3 directories: /posts in each of /coding, /veganish, /Writing

// Go through each 3 directories with every post, check if the post already exists in HTML form, if not create a new one on this step
// If one doesn't exist:
const htmlInit = `<html lang="en">`;

const head = `<head>
  <title>huh, you've found a blog?</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="../../main.css" rel="stylesheet" />
</head>`;

const startBody = `<body>
  <div class="navbar">
    <a href="http://blog.mentallyobscure.org/veganish"><div class="navbar-button">Vegan...ish</div></a>
    <a href="http://blog.mentallyobscure.org/writing"><div class="navbar-button">Writing</div></a>
    <a href="http://blog.mentallyobscure.org/coding"><div class="navbar-button">Coding</div></a>
    <!-- Everything below this goes from right to left too. Putting it in a div makes it go left to right again. -->
    <a href="http://mentallyobscure.org"><div class="nav-title">Take me home!</div></a>
  </div>`;


const htmlEnd = `</body>
  </html>`;

function fillPost(blogSectionTitle, blogSectionDescription, blogPostTitle, blogPostAuthor, blogPostedDate, blogUpdatedDate, blogPostBody, blogPostTagsHTML, blogPostRecentRSS) {
  return htmlInit + head + startBody + `<div class="below-nav fix-center fullscreen">
    <div class="fullscreen">
      <h2>$(blogSectionTitle)</h2>
      <h3>$(blogSectionDescription)</h3>
      <hr/>
      <div>
        <div id="post-section" class="fix-center column-2-3">
          <div class="fullscreen">
            <div class="post-title fix-center">
              $(blogPostTitle) ||| $(blogPostAuthor) <br/>
              Posted: $(blogPostedDate) ||| Updated: $(blogUpdatedDate)
            </div>
            <br/>
            <br/>
            <div class="post-body fix-center">
              $(blogPostBody)
            </div>
          </div>
        </div>
        <div id="post-sidebar" class="fix-center column-1-3">
          <div class="fullscreen">
            <div class="post-tags fix-center">
              Look at related posts by tag!<br/>
              $(blogPostTagsHTML)
            </div>
            <br/>
            <br/>
            <div class="post-recent fix-center">
              Check out recent posts!<br/>
              $(blogPostRecentRSS)
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>` + htmlEnd;
}

function readCustomXML(XMLLocation) {

}

function pullXMLtoHTML(XMLLocation, HTMLLocation) {
  // function to interpret XML text with ajax documentbody
  let xmlToArray = readCustomXML(XMLLocation);
  let blogSectionTitle = ""; // grab each item from the returned array

  let post = fillPost(blogSectionTitle, blogSectionDescription, blogPostTitle, blogPostAuthor, blogPostedDate, blogUpdatedDate, blogPostBody, blogPostTagsHTML, blogPostRecentRSS);
  //create new file at htmllocation and save it
}


/**
Create new HTML file
Add in header: title: title of post | herby's huh
Add in meta tags at the top of body: author name, date posted, date updated
Add in navbar
Add in div containing the post itself and to the right, the recent posts and tags
Fill in post div with author name, date posted, date updated, content title, content body
Fill in related posts div with tags on the post, rss feed with latest 3 posts
Save file to the applicable folder: /coding: /projects, /veganish: /recipes, /writing: /works
*/

// Go through each of the 3 directories with every HTML post: /projects, /recipes, then /works.
/*
For each post:
- check tags, check current RSS feed of that tag (or create one) and add if not present. save updated feed if necessary
- check last post date in most recent latest.rss post and if this post is newer (with creation date), add the new post. save updated feed if necessary
- check post feed for specific folder this post is in, add to feed if missing. save updated feed if necessary
*/

/**
Generic structure required for each RSS document created (function to call when creating a new RSS feed file)
First 9 lines and last 2 are always the same per feed - set up once for each feed, insert lines 2 before last line each time (excl. latest)
<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
<title>$(rssTitle)</title>
<link>$(rssLinkWhenComplete)</link>
<description>$(rssDescription)</description>
<generator>JS and Node.js (fs + path)</generator>
<language>en</language>
<lastBuildDate>$(currentTime)</lastBuildDate>

<item> **this is the structure for each item to be added**
<title>$(postTitle)</title>
<category>$(tag1)</category> **Can be multiple per item**
<description>$(postExcerpt)</description>
<link>$(postLink)</link>
<pubDate>$(postPubDate)</pubDate>
</item>

</channel>
</rss>
*/

// buildHTML(pathToXML)

// buildFeed(rssTitle, tssLinkWhenComplete, rssDescription, currentTime)

// buildItem(postTitle, postTags, postExcept, postLink, postPubDate)

// checkFeed(tagName)

// checkForItem(feedName)

// updateFeed(buildItem() output)

// updatePost(postName)

/** For standard calls to run the file from Node.js (export module as "build") */
// call checkFeed on all these RSS files, build if not present: recipes, projects, works, latest

// go through each xml file in the /posts folder and check if the post has a matching html file in the regular folder. if not, make it.

// go through each file afterwards: checkFeed for each tag encountered, if not existing, create, otherwise insert (incl. with every rss feed)

/** For calls to run the file from Node.js (export module as "update fileName") */
// use checkForItem, if exists, grab its XML file and run the buildHTML from it, updating the item's RSS values if necessary. if it doesn't exist... err
