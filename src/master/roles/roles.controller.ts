import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RequestResponseService } from 'src/shared/services/request-response/request-response.service';
import { IRolesDocument } from './roles.schema';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {

    constructor(private readonly rolesService: RolesService,
        private readonly requestResponseService: RequestResponseService) {

    }
    @Get('')
    async getAllRoles() {
        return this.rolesService.getAllRoles().then((res: IRolesDocument[]) => {
            return this.requestResponseService.successReponseHandler('Roles Fetched Successfully', res);
        }).catch((e: Error) => {
            return this.requestResponseService.errorReponseHandler(e);
        })
    }

    @Get(':id')
    async getRoleById(@Param('id') id: string) {
        return this.rolesService.getRoleById(id).then((res: IRolesDocument) => {
            return this.requestResponseService.successReponseHandler('Role Fetched Successfully', res);
        }).catch((e: Error) => {
            return this.requestResponseService.errorReponseHandler(e);
        })
    }

    @Put(':id')
    async updateRoleById(@Param('id') id: string, @Body() payload: IRolesDocument) {
        return this.rolesService.updateRoleById(id, payload).then((res: IRolesDocument) => {
            return this.requestResponseService.successReponseHandler('Role Updated Successfully', payload);
        }).catch((e: Error) => {
            return this.requestResponseService.errorReponseHandler(e);
        })
    }

    @Delete(':id')
    async deleteRoleById(@Param('id') id: string) {
        return this.rolesService.deleteRoleById(id).then((res: IRolesDocument) => {
            return this.requestResponseService.successReponseHandler('Role Deleted Successfully', res);
        }).catch((e: Error) => {
            return this.requestResponseService.errorReponseHandler(e);
        })
    }

    @Post('')
    async createRole(@Body() payload: IRolesDocument) {
        return this.rolesService.createRole(payload).then((res: IRolesDocument) => {
            return this.requestResponseService.successReponseHandler('Role Created Successfully', res);
        }).catch((e: Error) => {
            return this.requestResponseService.errorReponseHandler(e);
        })
    }
}
