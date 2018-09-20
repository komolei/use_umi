export default {
    singular: true,
    routes: [{
        path: '/',
        component: './test'
    }],
    plugins: [
        ['umi-plugin-react', {
            antd: true  
        }]
    ]
}
