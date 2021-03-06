module.exports = {
  siteMetadata: {
    title: `Carl Gaspar`,
    author: {
      name: `Carl Gaspar`,
      summary: `IT Security Administrator, Sec+ | Developer`,
    },
    description: `IT Security Administrator, Sec+ | Developer`,
    siteUrl: `https://carlgaspar.netlify.app`,
    social: {
      github: `carlignn`,
      linkedin: `carlignn`,
      twitter: `carlignn_`,
      instagram: `carlignn`,
      facebook: `carlignn`,
      twitch: `carlignn`,
      youtube: `Carl Gaspar`,
      reddit: `carlignn`,
    },
    socialLinks: [
      {
        name: 'github',
        url: 'https://github.com/carlignn',
      },
      {
        name: 'linkedin',
        url: 'https://linkedin.com/in/carlignn',
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/carlignn_',
      },
      {
        name: 'instagram',
        url: 'https://instagram.com/carlignn',
      },
      {
        name: 'facebook',
        url: 'https://facebook.com/carlignn',
      },
      {
        name: 'twitch',
        url: 'https://twitch.tv/carlignn',
      },
      {
        name: 'youtube',
        url: 'https://www.youtube.com/channel/UCby1WMTh4H_25W8JKJLDuOA',
      },
      {
        name: 'reddit',
        url: 'https://www.reddit.com/user/carlignn',
      },
      {
        name: 'tiktok',
        url: 'https://tiktok.com/@carlignn',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `media`,
        path: `${__dirname}/static/media`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/content/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              staticFolderName: 'static',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/netlify-cms/index.js`,
        enableIdentityWidget: true,
        publicPath: 'admin',
        htmlTitle: 'Content Manager',
        includeRobots: false,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map((node) => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ 'content:encoded': node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Source Sans Pro`, `Poppins\:400,400i,700`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Frosted Blog`,
        short_name: `Gatsby Frosted`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
};
