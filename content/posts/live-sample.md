---
title: Live Sample
date: 2021-10-18 12:39
tags:
  - live
  - twitch
description: Sampling
---
<html>
  <body>
    <!-- Add a placeholder for the Twitch embed -->
    <div id="twitch-embed"></div>

    <!-- Load the Twitch embed JavaScript file -->
    <script src="https://embed.twitch.tv/embed/v1.js"></script>

    <!-- Create a Twitch.Embed object that will render within the "twitch-embed" element -->
    <script type="text/javascript">
      new Twitch.Embed("twitch-embed", {
        width: 854,
        height: 480,
        channel: "carlignn",
        // Only needed if this page is going to be embedded on other websites
        parent: ["carlgaspar.com", "carlgaspar.netlify.app"]
      });
    </script>
  </body>
</html>