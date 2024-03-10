import { RequestResponseService } from 'src/shared/services/request-response/request-response.service';
import { IClassesDocument } from './classes.schema';
import { ClassesService } from './classes.service';
export declare class ClassesController {
    private readonly classesServices;
    private readonly requestResponseService;
    constructor(classesServices: ClassesService, requestResponseService: RequestResponseService);
    getAllClasses(): Promise<import("src/shared/services/request-response/request-response.service").ISuccessErrorObjectInterface>;
    getClassesById(id: string): Promise<import("src/shared/services/request-response/request-response.service").ISuccessErrorObjectInterface>;
    deleteClassesById(id: string): Promise<import("src/shared/services/request-response/request-response.service").ISuccessErrorObjectInterface>;
    updateClassesById(id: string, payload: IClassesDocument): Promise<import("src/shared/services/request-response/request-response.service").ISuccessErrorObjectInterface>;
    createClasses(payload: IClassesDocument): Promise<import("src/shared/services/request-response/request-response.service").ISuccessErrorObjectInterface>;
}
