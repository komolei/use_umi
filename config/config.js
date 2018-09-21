

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
    plugins: [
        ['umi-plugin-react', {
            antd: true,
            dva: true,
        }]
    ]
}
export default config;
