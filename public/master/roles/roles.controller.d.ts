import { RequestResponseService } from 'src/shared/services/request-response/request-response.service';
import { IRolesDocument } from './roles.schema';
import { RolesService } from './roles.service';
export declare class RolesController {
    private readonly rolesService;
    private readonly requestResponseService;
    constructor(rolesService: RolesService, requestResponseService: RequestResponseService);
    getAllRoles(): Promise<import("src/shared/services/request-response/request-response.service").ISuccessErrorObjectInterface>;
    getRoleById(id: string): Promise<import("src/shared/services/request-response/request-response.service").ISuccessErrorObjectInterface>;
    updateRoleById(id: string, payload: IRolesDocument): Promise<import("src/shared/services/request-response/request-response.service").ISuccessErrorObjectInterface>;
    deleteRoleById(id: string): Promise<import("src/shared/services/request-response/request-response.service").ISuccessErrorObjectInterface>;
    createRole(payload: IRolesDocument): Promise<import("src/shared/services/request-response/request-response.service").ISuccessErrorObjectInterface>;
}
