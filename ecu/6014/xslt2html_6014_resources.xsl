<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/resources">
    <html lang="en">
      <head>
        <title>LIBS6014 - Elias Robertson</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="../../../main.css" rel="stylesheet" />
        <link href="../../6014.css" rel="stylesheet" />
      </head>
      <body>
        <div class="navbar">
          <a class="navbar-button" href="http://ecu.mentallyobscure.org"><div class="navbar-button">ECU Portfolio</div></a>
          <a class="navbar-button" href="http://ecu.mentallyobscure.org/6014/contact.html">Site Info</a>
          <a class="navbar-button" href="http://ecu.mentallyobscure.org/6014/credits.html">Credits</a>
          <a class="navbar-button">Recommended Sources</a>
          <div id="recommended-list">
            <a class="navbar-button">Physical Resources</a>
            <div id="recommended-list-physical">
              <a class="navbar-button" href="http://ecu.mentallyobscure.org/6014/sources/physical/books.xml">Books</a>
            </div>
            <a class="navbar-button">Electronic Resources</a>
            <div id="recommended-list-electronic">
              <a class="navbar-button" href="http://ecu.mentallyobscure.org/6014/sources/electronic/databases.xml">Databases</a>
              <a class="navbar-button" href="http://ecu.mentallyobscure.org/6014/sources/electronic/journals.xml">Journals</a>
            </div>
            <a class="navbar-button" href="http://ecu.mentallyobscure.org/6014/sources/other/organisations.xml">Organisations</a>
            <a class="navbar-button" href="http://ecu.mentallyobscure.org/6014/sources/other/others.xml">Other Resources</a>
          </div>
          <a class="navbar-button" href="http://ecu.mentallyobscure.org/6014/search.html">Research Methods</a>
          <a class="navbar-button" href="http://ecu.mentallyobscure.org/6014">Home</a>
        </div>
        <div class="below-nav">
          <div class="row fix-center">
            <h4><b>Mental Illness: The Research on Developmental Trauma - a guide</b></h4>
				  </div>
					<xsl:for-each select="item">
						<div class="fix-center">
							<div class="row">
								<h2>
									<xsl:element name="a">
								    <xsl:attribute name="href">
								        <xsl:value-of select="link"/>
								    </xsl:attribute>
								    <xsl:value-of select="name"/>
									</xsl:element>
								</h2>
								<p><xsl:copy-of select="description" /></p>
								<xsl:for-each select="tags/tag">
									<p class="tag"><xsl:copy-of select="." /></p>
								</xsl:for-each>
							</div>
						</div>
					</xsl:for-each>
				</div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
