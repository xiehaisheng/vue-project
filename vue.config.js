module.exports = {
    devServer: {
        proxy: {
            '/ajax_home_list_show': {
                target: 'https://m.smzdm.com',
                changeOrigin: true,
            },
            '/ajax_post_list_show': {
                target: 'https://m.smzdm.com',
                changeOrigin: true
            },
            '/ajax_haitao_list_show': {
                target: 'https://haitao.m.smzdm.com',
                changeOrigin: true
            },
            '/ajax_faxian_list_show': {
                target: 'https://faxian.m.smzdm.com',
                changeOrigin: true
            },
        }
    }
}