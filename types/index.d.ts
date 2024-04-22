declare namespace WorkflowDesigner {
    export interface Options {
        showGrid?: boolean;
        gridSize?: number;
    }
}

export interface Workflow<T> {
    roots: State<T>[];
}

export interface State<T> {
    payload?: T
}