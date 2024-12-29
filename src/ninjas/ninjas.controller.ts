import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import {NinjasService} from './ninjas.service';
import {CreateNinjaDto} from './create-ninjas.dto';
import {UpdateNinjaDto} from './update-ninjas.dto';

@Controller('ninjas')
export class NinjasController {
	constructor(private ninjaService: NinjasService) {}

	@Get()
	async getNinjas() {
		return this.ninjaService.findNinjas();
	}

	@Get(':id')
	async getNinja(@Param('id', ParseIntPipe) id: number) {
		return this.ninjaService.findNinja(id);
	}

	@Post()
	async addNinja(@Body() createNinjaDto: CreateNinjaDto) {
		return this.ninjaService.createNinja(createNinjaDto);
	}

	@Put(':id')
	async updateNinja(@Param('id', ParseIntPipe) id: number, @Body() updatedNinja: UpdateNinjaDto) {
		return this.ninjaService.updateNinja(id, updatedNinja)
	}

	@Delete(':id')
	async deleteNinja(@Param('id', ParseIntPipe) id: number) {
		return this.ninjaService.deleteNinja(id);
	}
}
