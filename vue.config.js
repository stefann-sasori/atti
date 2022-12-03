// Inside vue.config.js
module.exports = {
    // ...other vue-cli plugin options...
    pwa: {
        name: 'Entreprise',
        themeColor: '#d82416',
        msTileColor: '#d82416',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: '#d82416',
        iconPaths: {
            favicon32: 'img/pwa/32x32.png',
            favicon16: 'img/pwa/16x16.png',
            appleTouchIcon: 'img/pwa/154x154.png',
            appleTouchStartupImage: 'img/pwa/154x154.png',
        },
        manifestOptions: {
            display: 'standalone',
            start_url: '/login',
            short_name: 'Entreprise'
        },

    }
}
