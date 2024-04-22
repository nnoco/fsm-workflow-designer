import { WorkflowDesigner } from '../types/index';

export function FsmWorkflowDesigner(canvasId: string, options?: WorkflowDesigner.Options) {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;

    if(!canvas) {
        throw `Cannot found canvas by given id '${canvasId}'`;
    }

    if(!(canvas instanceof HTMLCanvasElement)) {
        throw `'${canvasId}' is not type of HTMLCanvasElement'`;
    }

    if(options?.showGrid) {
        const context = canvas.getContext('2d')!;

        const gridSize = options?.gridSize ?? 20;
        const { width, height } = canvas;

        context.fillStyle = 'black';
        for(let x = 0; x < width; x += gridSize) {
            for(let y = 0; y < height; y += gridSize) {
                context.fillRect(x, y, 1, 1);
            }
        }
    }
    
    canvas.onclick = function() {
        console.log('Hello, fsm-workflow-designer.');
    }
}