import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/about',
    component: ComponentCreator('/about', '954'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '7c5'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'eed'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'e77'),
            routes: [
              {
                path: '/docs/category/product-ranges',
                component: ComponentCreator('/docs/category/product-ranges', '340'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/project-reboard',
                component: ComponentCreator('/docs/category/project-reboard', 'c91'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/reboard-gba',
                component: ComponentCreator('/docs/category/reboard-gba', '971'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/reboard-gg',
                component: ComponentCreator('/docs/category/reboard-gg', '0ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro/reboard-range/gameboy advance/install',
                component: ComponentCreator('/docs/intro/reboard-range/gameboy advance/install', '9a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro/reboard-range/gameboy advance/product-info',
                component: ComponentCreator('/docs/intro/reboard-range/gameboy advance/product-info', 'fc3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro/reboard-range/gameboy advance/tested-compatibility',
                component: ComponentCreator('/docs/intro/reboard-range/gameboy advance/tested-compatibility', '5d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro/reboard-range/gamegear/install',
                component: ComponentCreator('/docs/intro/reboard-range/gamegear/install', '056'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro/reboard-range/gamegear/product-info',
                component: ComponentCreator('/docs/intro/reboard-range/gamegear/product-info', '9ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro/reboard-range/gamegear/tested-compatibility',
                component: ComponentCreator('/docs/intro/reboard-range/gamegear/tested-compatibility', 'd43'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
