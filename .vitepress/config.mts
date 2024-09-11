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
            '/cs/': sidebarCs(),
            '/finance/': sidebarFinance(),
            '/relax/': sidebarRelax(),
            '/entertainment/': sidebarEntertainment(),
            '/living/': sidebarLiving(),
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
        {text: 'Relax', link: '/relax/relax.md', activeMatch: '/relax/'},
        {text: 'Entertainment', link: '/entertainment/movie.md', activeMatch: '/entertainment/'},
        {text: 'Living', link: '/living/living.md', activeMatch: '/living/'},
        {text: 'CS', link: '/cs/cloud-services.md', activeMatch: '/cs/'},
        {text: 'Tools', link: '/tools/office-tools.md', activeMatch: '/tools/'},
    ];
}

function sidebarNews(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: "Daily",
            items: [
                {
                    text: 'News',
                    link: '/news/news.md',
                },
                {
                    text: 'Business & Financial News',
                    link: '/news/business-and-finance-news.md',
                },
                {
                    text: 'Technology & Science News',
                    link: '/news/science-and-tech-news.md',
                },
                {
                    text: 'Programming News',
                    link: '/news/dev-news.md',
                },

            ]
        },
        {
            text: 'Some More',
            items: [
                {
                    text: 'China News',
                    link: '/news/china-news.md',
                },
                {
                    text: 'Product & Design News',
                    link: '/news/product-and-design-news.md',
                },
                {
                    text: 'Self Improvement',
                    link: '/news/self-improvement.md',
                },
                {
                    text: 'Career News',
                    link: '/news/career-news.md',
                },
                {
                    text: 'Paid News',
                    link: '/news/paid-news.md',
                },
                {
                    text: "RSS",
                    link: '/news/rss.md',
                },
            ]
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
            text: "Sytc",
            link: '/work/sytc.md',
        },
        {
            text: "Recruitment Platforms",
            link: '/work/recruitment-platform.md',
        },
        {
            text: "Preparation for Find a Job",
            link: '/work/preparation-for-find-a-job.md',
        },
        {
            text: 'Occupation',
            link: '/work/occupation.md',
        },
        {
            text: 'Side Hustles',
            link: '/work/side-hustles.md',
        },
    ]
}

function sidebarCs(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Backend',
            items: [
                {
                    text: 'Java Technologies',
                    link: '/cs/backend/java-technologies.md'
                },
                {
                    text: 'Cloud Services',
                    link: '/cs/cloud-services.md',
                },
            ]
        },
        {
            text: 'Web Frontend',
            items: [
                {
                    text: 'Web Frontend Technologies',
                    link: '/cs/web-frontend/web-frontend-technologies.md',
                },
                {
                    text: 'Icon Resources',
                    link: '/cs/web-frontend/icon-resources.md',
                },
                {
                    text: 'Image Resources',
                    link: '/cs/web-frontend/image-resources.md',
                },
                {
                    text: 'Font Resources',
                    link: '/cs/web-frontend/font-resources.md',
                }
            ]
        },
        {
            text: 'Others',
            items: [
                {
                    text: 'Dev Blog',
                    link: '/cs/dev-blog.md',
                },
            ]
        }
    ]
}

function sidebarFinance(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Investment',
            items: [
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
                },
                {
                    text: 'Fund',
                    link: '/finance/fund.md'
                },
                {
                    text: 'Bond',
                    link: '/finance/bond.md'
                },
                {
                    text: 'Real Estate',
                    link: '/finance/real-estate.md'
                }
            ]
        },
        {
            text: 'Payment Services',
            link: '/finance/payment-services.md'
        }
    ]
}

function sidebarRelax(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Relax',
            link: '/relax/relax.md'
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
            text: 'Live TV',
            link: '/entertainment/live-tv.md',
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
            text: 'Talk',
            link: '/entertainment/talk.md'
        },
        {
            text: 'Social Media',
            link: '/entertainment/social-media.md',
        },
        {
            text: 'Game',
            link: '/entertainment/game.md',
        },
    ]
}

function sidebarLiving(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Living',
            link: '/living/living.md',
        },
    ]
}

function sidebarTools(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'AI Tools',
            link: '/tools/ai-tools.md',
        },
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
            text: 'Website Tools',
            link: '/tools/website-tools.md',
        },
        {
            text: 'UI&UX Design Tools',
            link: '/tools/ui-ux-design-tools.md',
        },
        {
            text: 'Software Design Tools',
            link: '/tools/software-design-tools.md',
        },
        {
            text: 'Resource Download Tools',
            link: '/tools/resource-download-tools.md',
        },
        {
            text: 'Living Tools',
            link: '/tools/living-tools.md',
        },
        {
            text: 'Other Tools',
            link: '/tools/other-tools.md',
        },
        {
            text: 'Proxy',
            link: '/tools/proxy.md',
        }
    ]
}
