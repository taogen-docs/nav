import {type DefaultTheme, defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Nav",
    description: "My Navigation",
    srcDir: 'src',
    srcExclude: [],
    // Whether to get the last updated timestamp for each page using Git.
    lastUpdated: true,
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
            '/example/': sidebarExample()
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
        {text: 'Example', link: '/example/'},
    ];
}

function sidebarExample(): DefaultTheme.SidebarItem[] {
    return [
        {text: 'Examples', link: '/examples.md'},
    ]
}
