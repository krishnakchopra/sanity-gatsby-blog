export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '601bedcfa74f511e8169bc01',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-rqe4cvgz',
                  apiId: 'b882d640-0d67-40d2-9c0d-68598f714bda'
                },
                {
                  buildHookId: '601bedcff69c1a1a1da72fa7',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-jj927iyt',
                  apiId: '55946b80-d910-4f10-8bb6-74af761cafd8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/krishnakchopra/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-jj927iyt.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
