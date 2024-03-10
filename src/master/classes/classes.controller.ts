import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RequestResponseService } from 'src/shared/services/request-response/request-response.service';
import { IClassesDocument } from './classes.schema';
import { ClassesService } from './classes.service';

@Controller('classes')
export class ClassesController {

    constructor(private readonly classesServices: ClassesService,
        private readonly requestResponseService: RequestResponseService) {

    }

    @Get('')
    async getAllClasses() {
        return this.classesServices.getAllClasses().then((res: IClassesDocument[]) => {
            return this.requestResponseService.successReponseHandler('Classes Fetched Successfully', res);
        }).catch((e: Error) => {
            return this.requestResponseService.errorReponseHandler(e);

        })
    }

    @Get(':id')
    async getClassesById(@Param('id') id: string) {
        return this.classesServices.getClassesById(id).then((res: IClassesDocument) => {
            return this.requestResponseService.successReponseHandler('Classe Fetched Successfully', res);
        }).catch((e: Error) => {
            return this.requestResponseService.errorReponseHandler(e);

        })
    }
    

    @Delete(':id')
    async deleteClassesById(@Param('id') id: string) {
        return this.classesServices.deleteClassesById(id).then((res: IClassesDocument) => {
            return this.requestResponseService.successReponseHandler('Classe Deleted Successfully', res);
        }).catch((e: Error) => {
            return this.requestResponseService.errorReponseHandler(e);

        })
    }

    @Put(':id')
    async updateClassesById(@Param('id') id: string, @Body() payload: IClassesDocument) {
        return this.classesServices.updateClassesById(id, payload).then(() => {
            return this.requestResponseService.successReponseHandler('Classes Updated Successfully', payload);
        }).catch((e: Error) => {
            return this.requestResponseService.errorReponseHandler(e);

        })
    }

    @Post('')
    async createClasses(@Body() payload: IClassesDocument) {
        return this.classesServices.createClasses(payload).then((res: IClassesDocument) => {
            return this.requestResponseService.successReponseHandler('Classes Created Successfully', res);
        }).catch((e: Error) => {
            return this.requestResponseService.errorReponseHandler(e);

        })
    }
}
