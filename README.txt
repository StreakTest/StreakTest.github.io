ROAD TO TOP 1 LIST
===================

This is a static GitHub Pages website for a Geometry Dash Extreme Demon list.

FILES
-----
index.html  -> page structure
style.css   -> design / animations
script.js   -> renders the levels
levels.js   -> EDIT THIS FILE to change the list

ADDING OR EDITING A LEVEL
--------------------------
Open levels.js.

Each level is one complete block like this:

  {
    rank: 253,
    verified: true,
    id: "12345678",
    difficulty: "Extreme Demon",
    name: "My Level",
    creator: "MyName",
    description: "My level description."
  },

To add another level, copy from the opening { through the closing }, and paste
that entire block below the last level. Then change the values.

verified: true  = green check
verified: false = red X

rank: 250       = displays #250
rank: 351       = displays #351

The website itself contains no controls for editing these values. All changes
are made in levels.js and then committed/pushed to GitHub.

GITHUB PAGES
------------
1. Create a repository on GitHub.
2. Upload index.html, style.css, script.js, levels.js, and README.txt.
3. Go to Settings -> Pages.
4. Select the main branch and the root folder (/).
5. Save. GitHub will publish the site at your Pages URL.
