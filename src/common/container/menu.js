const allMenu = [
    {
        name: 'HOME',
        url: 'home',
        icon: 'home',
    },
    {
        name: 'JS',
        url: 'js',
        icon: 'book',
        children: [
            { name: 'JS执行栈', url: '/js/note1' },
            { name: 'JS事件循环', url: '/js/note2' },
            { name: 'JS值类型', url: '/js/note3' },
            { name: 'JS类型转换', url: '/js/note4' },
            { name: 'JS相等、类型判断', url: '/js/note5' },
            { name: 'This、箭头函数', url: '/js/note6' },
            { name: '作用域、闭包', url: '/js/note7' },
            { name: '异步', url: '/js/note8' },
            { name: '位运算', url: '/js/note9' },
            { name: '了解HTTPS', url: '/js/note10' },
            { name: '理解原型和闭包', url: '/js/note11' },
            // { name: '其他知识点', url: '/js/note14' },
            { name: '模块化', url: '/js/note15' },
        ],
    },
    {
        name: 'EXERCISES',
        url: 'exercuses',
        icon: 'calculator',
        children: [
            { name: '数组', url: '/exercises/exercise1' },
            { name: '拷贝', url: '/exercises/exercise2' },
            { name: '继承', url: '/exercises/exercise3' },
            { name: '对象', url: '/exercises/exercise4' },
            { name: '进制', url: '/exercises/exercise5' },
            { name: '题笔记', url: '/exercises/exercise6' },
            { name: '正则', url: '/exercises/exercise7' },
        ],
    },
    {
        name: 'NODE',
        url: 'node',
        icon: 'code',
        children: [
            { name: 'Notes', url: 'node' },
        ],
    },

]

export default allMenu
