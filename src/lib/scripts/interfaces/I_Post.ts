export interface Meta {
    publishDate: Date;
    tag?: string;
}

export interface Post {
    title: string;
    meta: Meta;
    image: string;
    reads: number;
}