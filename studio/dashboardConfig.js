export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d10103149b1b18881478cbd',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-pybncyyk',
                  apiId: 'd3230bb3-ad15-45fb-a6b5-6cddcaf71d48'
                },
                {
                  buildHookId: '5d10103168dcbbfa9eb9a404',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-t7mzss5b',
                  apiId: '1dddb757-623b-4420-bf06-bb4b1218479c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/frankwrk/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-t7mzss5b.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
