<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:preserve-space elements="blogPostAuthor blogPostTitle blogPostedDate blogUpdatedDate"/>
	<xsl:template match="/posts">
    <html lang="en">
      <head>
        <title>huh, you've found a blog?</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="http://blog.mentallyobscure.org/main.css" rel="stylesheet" />
      </head>
      <body>
        <div class="navbar">
          <a href="http://blog.mentallyobscure.org/veganish"><div class="navbar-button">Vegan...ish</div></a>
          <a href="http://blog.mentallyobscure.org/writing"><div class="navbar-button">Writing</div></a>
          <a href="http://blog.mentallyobscure.org/coding"><div class="navbar-button">Coding</div></a>
          <!-- Everything below this goes from right to left too. Putting it in a div makes it go left to right again. -->
          <a href="http://mentallyobscure.org"><div class="nav-title">Take me home!</div></a>
        </div>

        <div class="below-nav fix-center fullscreen">
          <div class="fullscreen">
            <xsl:for-each select="/posts/post">
              <h2><xsl:value-of select="blogSectionTitle" /></h2>
              <h3><xsl:value-of select="blogSectionDescription" /></h3>
              <hr/>
              <div>
                <div id="post-section" class="fix-center column-2-3">
                  <div class="fullscreen">
                    <div class="post-title">
                      <xsl:copy-of select="blogPostTitle" /> ||| <xsl:copy-of select="blogPostAuthor" /> <br />
                      Posted: <xsl:copy-of select="blogPostedDate" /> ||| Updated: <xsl:copy-of select="blogUpdatedDate" />
                    </div>

                    <br/>
                    <br/>
                    <div class="post-body fix-center">
                      <xsl:for-each select="blogPostBody/recipeItem"><xsl:value-of select="." /><br/></xsl:for-each>
                      <br/><br/>
                      <xsl:for-each select="blogPostBody/recipeInstructions"><xsl:value-of select="." /><br/><br/></xsl:for-each>
                    </div>
                  </div>
                </div>
                <div id="post-sidebar" class="fix-center column-1-3">
                  <div class="fullscreen">
                    <div class="post-tags fix-center">
                      Check out related posts by tag!<br />
                      <xsl:for-each select="blogPostTagsHTML/tag">
                        <xsl:value-of select="." /><br/>
                      </xsl:for-each>
                    </div>
                    <br />
                    <br />
                    <div class="post-recent fix-center">
                      Check out related posts!<br />
                      <xsl:value-of select="blogPostRecentRSS" />
                    </div>
                  </div>
                </div>
              </div>
            </xsl:for-each>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
