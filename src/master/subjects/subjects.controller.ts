import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RequestResponseService } from 'src/shared/services/request-response/request-response.service';
import { ISubjectsDocument } from './subjects.schema';
import { SubjectsService } from './subjects.service';

@Controller('subjects')
export class SubjectsController {
    constructor(private readonly subjectService: SubjectsService,
        private readonly requestResponseService: RequestResponseService) {

    }
    @Get('')
    async getAllRoles() {
        return this.subjectService.getAllSubjects().then((res: ISubjectsDocument[]) => {
            return this.requestResponseService.successReponseHandler('Subjects Fetched Successfully', res);
        }).catch((e: Error) => {
            return this.requestResponseService.errorReponseHandler(e);
        })
    }

    @Get(':id')
    async getRoleById(@Param('id') id: string) {
        return this.subjectService.getSubjectById(id).then((res: ISubjectsDocument) => {
            return this.requestResponseService.successReponseHandler('Subjects Fetched Successfully', res);
        }).catch((e: Error) => {
            return this.requestResponseService.errorReponseHandler(e);
        })
    }

    @Put(':id')
    async updateRoleById(@Param('id') id: string, @Body() payload: ISubjectsDocument) {
        return this.subjectService.updateSubjectById(id, payload).then((res: ISubjectsDocument) => {
            return this.requestResponseService.successReponseHandler('Subjects Updated Successfully', payload);
        }).catch((e: Error) => {
            return this.requestResponseService.errorReponseHandler(e);
        })
    }

    @Delete(':id')
    async deleteRoleById(@Param('id') id: string) {
        return this.subjectService.deleteSubjectById(id).then((res: ISubjectsDocument) => {
            return this.requestResponseService.successReponseHandler('Subjects Deleted Successfully', res);
        }).catch((e: Error) => {
            return this.requestResponseService.errorReponseHandler(e);
        })
    }

    @Post('')
    async createRole(@Body() payload: ISubjectsDocument) {
        return this.subjectService.createSubject(payload).then((res: ISubjectsDocument) => {
            return this.requestResponseService.successReponseHandler('Subjects Created Successfully', res);
        }).catch((e: Error) => {
            return this.requestResponseService.errorReponseHandler(e);
        })
    }
}
