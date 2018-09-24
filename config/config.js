

const config = {
    singular: true,
    routes: [
        {
            path: '/',
            component: '../layout/index',
            routes: [
                {
                    path: '/',
                    component: './test'
                },
                {
                    path: '/helloworld',
                    component: './HelloWorld'
                },
                {
                    path: '/dashboard',
                    routes: [
                        {
                            path: '/dashboard/one',
                            component: 'dashboard/one'
                        }
                    ]
                },
                {
                    path: 'puzzlecard',
                    component: './puzzleCard'
                },
                {
                    path: '/cms',
                    component:'./common/common'
                },
                {
                    path: '/cms/hi',
                    component: './cms/hi'
                },
            ]
        },


    ],
    proxy:{
        '/dev':{
            target:'https://08ad1pao69.execute-api.us-east-1.amazonaws.com',
            changeOrigin:true
        }
    },
    plugins: [
        ['umi-plugin-react', {
            antd: true,
            dva: true,
        }]
    ]
}
export default config;
