export enum SizeEnum {
    Sm = 'sm',
    Md = 'md',
    Lg = 'lg'
}

export interface ITask {
    title: string,
    description?: string[],
    externalLink?: string,
    img?: string
    className?: string
}

export interface IProject {
    title: string,
    shortDescription: string,
    description?: string,
    time?: string,
    id: string,
    preview?: string,
    stack?: string[],
    externalLink?: string,
    tasks?: ITask[],
    team?: string,
    status?: string
}
