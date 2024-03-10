import { RequestResponseService } from 'src/shared/services/request-response/request-response.service';
import { IGenderDocument } from './gender.schema';
import { GenderService } from './gender.service';
export declare class GenderController {
    private readonly genderService;
    private readonly requestReponseService;
    constructor(genderService: GenderService, requestReponseService: RequestResponseService);
    createGender(payload: IGenderDocument): Promise<import("src/shared/services/request-response/request-response.service").ISuccessErrorObjectInterface>;
    getAllGenders(): Promise<import("src/shared/services/request-response/request-response.service").ISuccessErrorObjectInterface>;
    getGenderById(id: string): Promise<import("src/shared/services/request-response/request-response.service").ISuccessErrorObjectInterface>;
    deleteGenderById(id: string): Promise<import("src/shared/services/request-response/request-response.service").ISuccessErrorObjectInterface>;
    updateGenderById(id: string, payload: IGenderDocument): Promise<import("src/shared/services/request-response/request-response.service").ISuccessErrorObjectInterface>;
}
