import { Control } from './control';

export class Track {
    id: number;

    start: Control;
    controls: Control[];
    finish: Control;

    name: string;
    description: string;
    courseSetter: string;
}
