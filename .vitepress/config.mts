import {type DefaultTheme, defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Nav",
    description: "My Navigation",
    srcDir: 'src',
    srcExclude: [],
    // Whether to get the last updated timestamp for each page using Git.
    // lastUpdated: true,
    head: [
        ['link', {rel: 'shortcut icon', type: "image/jpeg", href: '/logo.jpeg'}],
        // These two are what you want to use by default
        ['link', {rel: 'apple-touch-icon', type: "image/jpeg", href: '/logo.jpeg'}],
        ['link', {rel: 'apple-touch-icon', type: "image/jpeg", sizes: "72x72", href: '/logo.jpeg'}],
        ['link', {rel: 'apple-touch-icon', type: "image/jpeg", sizes: "114x114", href: '/logo.jpeg'}],
        ['link', {rel: 'apple-touch-icon', type: "image/jpeg", sizes: "144x144", href: '/logo.jpeg'}],
        ['link', {rel: 'apple-touch-icon-precomposed', type: "image/jpeg", href: '/logo.jpeg'}],
        // This one works for anything below iOS 4.2
        ['link', {rel: 'apple-touch-icon-precomposed apple-touch-icon', type: "image/jpeg", href: '/logo.jpeg'}],
    ],


    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: nav(),

        sidebar: {
            '/news/': sidebarNews(),
            '/work/': sidebarWork(),
            '/dev/': sidebarDev(),
            '/finance/': sidebarFinance(),
            '/entertainment/': sidebarEntertainment(),
            '/tools/': sidebarTools(),
        },
        logo: {src: '/logo.jpeg', width: 24, height: 24},
        search: {
            provider: 'local'
        },
        outline: {
            level: "deep"
        },

        socialLinks: [
            // {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ]
    }
})

function nav(): DefaultTheme.NavItem[] {
    return [
        {text: 'Home', link: '/'},
        {text: 'News', link: '/news/news.md', activeMatch: '/news/'},
        {text: 'Work', link: '/work/work.md', activeMatch: '/work/'},
        {text: 'Finance', link: '/finance/crypto.md', activeMatch: '/finance/'},
        {text: 'Entertainment', link: '/entertainment/movie.md', activeMatch: '/entertainment/'},
        {text: 'Dev', link: '/dev/cloud-services.md', activeMatch: '/dev/'},
        {text: 'Tools', link: '/tools/office-tools.md', activeMatch: '/tools/'},
    ];
}

function sidebarNews(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'News',
            link: '/news/news.md',
        },
        {
            text: 'Business & Financial News',
            link: '/news/business-and-finance-news.md',
        },
        {
            text: 'Product & Design News',
            link: '/news/product-and-design-news.md',
        },
        {
            text: 'Dev News',
            link: '/news/dev-news.md',
        },
    ]
}

function sidebarWork(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: "Work",
            link: '/work/work.md',
        },
        {
            text: "Sytc Systems",
            link: '/work/sytc-systems.md',
        },
        {
            text: "Find Job",
            link: '/work/find-job.md',
        },
        {
            text: "Find Job Helper",
            link: '/work/find-job-helper.md',
        }
    ]
}

function sidebarDev(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Backend',
            items: [
                {
                    text: 'Cloud Services',
                    link: '/dev/cloud-services.md',
                },
            ]
        },
        {
            text: 'Web Frontend',
            items: [
                {
                    text: 'Web Frontend Technologies',
                    link: '/dev/web-frontend/web-frontend-technologies.md',
                },
                {
                    text: 'Icon Resources',
                    link: '/dev/web-frontend/icon-resources.md',
                },
                {
                    text: 'Image Resources',
                    link: '/dev/web-frontend/image-resources.md',
                },
                {
                    text: 'Font Resources',
                    link: '/dev/web-frontend/font-resources.md',
                }
            ]
        },
        {
            text: 'Others',
            items: [
                {
                    text: 'Dev Blog',
                    link: '/dev/dev-blog.md',
                },
            ]
        }
    ]
}

function sidebarFinance(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: "Economics & Finance",
            link: '/finance/economics-and-finance.md',
        },
        {
            text: 'Crypto',
            link: '/finance/crypto.md',
        },
        {
            text: 'Stock',
            link: '/finance/stock.md'
        }
    ]
}

function sidebarEntertainment(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Movie',
            link: '/entertainment/movie.md',
        },
        {
            text: 'Book',
            link: '/entertainment/book.md',
        },
        {
            text: 'Music',
            link: '/entertainment/music.md',
        },
        {
            text: 'Social Media',
            link: '/entertainment/social-media.md',
        },
    ]
}

function sidebarTools(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Office Tools',
            link: '/tools/office-tools.md',
        },
        {
            text: 'Image Tools',
            link: '/tools/image-tools.md',
        },
        {
            text: 'Dev Tools',
            link: '/tools/dev-tools.md',
        },
        {
            text: 'Design Tools',
            link: '/tools/design-tools.md',
        },
        {
            text: 'Other Tools',
            link: '/tools/other-tools.md',
        }
    ]
}
