import type { Post } from "../interfaces/I_Post";

export const Posts: Post[] = [
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo nunc metus, vel rhoncus tellus porta feugiat.',
        meta: {
            publishDate: new Date(),
            tag: 'Lorem'
        },
        image: 'https://via.placeholder.com/400x230',
        reads: Math.floor(Math.random() * 1000)
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo nunc metus, vel rhoncus tellus porta feugiat.',
        meta: {
            publishDate: new Date(Date.now() - 1 * 60 * 60 * 1000), // 1 hour ago
            tag: 'Lorem'
        },
        image: 'https://via.placeholder.com/400x230',
        reads: Math.floor(Math.random() * 1000)
        
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo nunc metus, vel rhoncus tellus porta feugiat.',
        meta: {
            publishDate: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 hours ago
            tag: 'Lorem'
        },
        image: 'https://via.placeholder.com/400x230',
        reads: Math.floor(Math.random() * 1000)
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo nunc metus, vel rhoncus tellus porta feugiat.',
        meta: {
            publishDate: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
            tag: 'Lorem'
        },
        image: 'https://via.placeholder.com/400x230',
        reads: Math.floor(Math.random() * 1000)
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo nunc metus, vel rhoncus tellus porta feugiat.',
        meta: {
            publishDate: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
            tag: 'Lorem'
        },
        image: 'https://via.placeholder.com/400x230',
        reads: Math.floor(Math.random() * 1000)
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo nunc metus, vel rhoncus tellus porta feugiat.',
        meta: {
            publishDate: new Date(Date.now() - 5000 * 60 * 60 * 1000), // yesterday
            tag: 'Lorem'
        },
        image: 'https://via.placeholder.com/400x230',
        reads: Math.floor(Math.random() * 1000)
    },
];

export const MostReadPosts: Post[] = [
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo nunc metus, vel rhoncus tellus porta feugiat.',
        meta: {
            publishDate: new Date(),
            tag: 'Lorem'
        },
        image: 'https://via.placeholder.com/400x230',
        reads: Math.floor(Math.random() * 1000)
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo nunc metus, vel rhoncus tellus porta feugiat.',
        meta: {
            publishDate: new Date(Date.now() - 1 * 60 * 60 * 1000), // 1 hour ago
            tag: 'Lorem'
        },
        image: 'https://via.placeholder.com/400x230',
        reads: Math.floor(Math.random() * 1000)
        
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo nunc metus, vel rhoncus tellus porta feugiat.',
        meta: {
            publishDate: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 hours ago
            tag: 'Lorem'
        },
        image: 'https://via.placeholder.com/400x230',
        reads: Math.floor(Math.random() * 1000)
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo nunc metus, vel rhoncus tellus porta feugiat.',
        meta: {
            publishDate: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
            tag: 'Lorem'
        },
        image: 'https://via.placeholder.com/400x230',
        reads: Math.floor(Math.random() * 1000)
    },
];