import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RequestResponseService } from 'src/shared/services/request-response/request-response.service';
import { IGenderDocument } from './gender.schema';
import { GenderService } from './gender.service';

@Controller('gender')
export class GenderController {

    constructor(private readonly genderService: GenderService,
        private readonly requestReponseService: RequestResponseService) {

    }
    @Post('')
    async createGender(@Body() payload: IGenderDocument) {
        return this.genderService.createGender(payload).then((res: IGenderDocument) => {
            return this.requestReponseService.successReponseHandler('Genders Created Successfully', res);
        }).catch((error: Error) => {
            return this.requestReponseService.errorReponseHandler(error);
        })
    }

    @Get('')
    async getAllGenders() {
        return this.genderService.getAllGendersList().then((res: IGenderDocument[]) => {
            return this.requestReponseService.successReponseHandler('Genders Fetched Successfully', res);
        }).catch((error: Error) => {
            return this.requestReponseService.errorReponseHandler(error);
        })
    }

    @Get(':id')
    async getGenderById(@Param('id') id: string) {
        return this.genderService.getGenderByGenderId(id).then((res: IGenderDocument) => {
            return this.requestReponseService.successReponseHandler('Gender fetched Successfully', res);
        }).catch((error: Error) => {
            return this.requestReponseService.errorReponseHandler(error);
        })
    }

    @Delete(':id')
    async deleteGenderById(@Param('id') id: string) {
        return this.genderService.deleteGenderByGenderId(id).then((res: IGenderDocument) => {
            return this.requestReponseService.successReponseHandler('Gender Deleted Successfully', res);
        }).catch((error: Error) => {
            return this.requestReponseService.errorReponseHandler(error);
        })
    }

    @Put(':id')
    async updateGenderById(@Param('id') id: string, @Body() payload: IGenderDocument) {
        return this.genderService.updateGenderById(id, payload).then((res: IGenderDocument) => {
            return this.requestReponseService.successReponseHandler('Gender Updated Successfully', payload);
        }).catch((error: Error) => {
            return this.requestReponseService.errorReponseHandler(error);
        })
    }
}
