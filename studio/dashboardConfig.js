export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '601b0f0813e2920bc8612355',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-4o6nk4ys',
                  apiId: '3ba3cf1f-0dac-41db-85da-1b9ccf435afd'
                },
                {
                  buildHookId: '601b0f08f69c1a0b61a728e0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-f7uzfejc',
                  apiId: '0b920c82-2d7b-4598-9db5-06cff50c81fd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/RussellSnyder/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-f7uzfejc.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
