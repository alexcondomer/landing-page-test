export default {
  widgets: [
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
                  buildHookId: '5faca06a187ac8ece63be9aa',
                  title: 'Sanity Studio',
                  name: 'landing-page-test-studio',
                  apiId: 'd1c447b2-0379-44b2-abab-8b4b70580346'
                },
                {
                  buildHookId: '5faca06a75eeb8e85b2897ea',
                  title: 'Blog Website',
                  name: 'landing-page-test-web',
                  apiId: '0f941539-6c68-4aab-b894-42534882d9f0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alexcondomer/landing-page-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://landing-page-test-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
