import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {CreateNinjaDto} from './create-ninjas.dto';
import { UpdateNinjaDto} from './update-ninjas.dto';

@Injectable()
export class NinjasService {
	constructor(private prisma: PrismaService) {}

	async findNinjas() {
		return this.prisma.ninjas.findMany();
	}

	async findNinja(id: number) {
		const ninja = await this.prisma.ninjas.findUnique({
			where: {
				id
			},
		});

		if (!ninja) throw new NotFoundException(`Ninja with id ${id} not found`)
		return ninja;
	}

	async createNinja(createNinjaDto: CreateNinjaDto) {
		return await this.prisma.ninjas.create({
			data: createNinjaDto,
		});
	}

	async updateNinja(id: number,  updatedNinja: UpdateNinjaDto) {
		try{
			return await this.prisma.ninjas.update({
				where: {id},
				data: updatedNinja,
			});
		} catch (error) {
			throw new NotFoundException(`Ninja with id ${id} not found`);
		}
	}

	async deleteNinja(id: number) {
		try{
			return await this.prisma.ninjas.delete({
				where: {id}
			});
		} catch (error) {
			throw new NotFoundException(`Ninja with id ${id} not found`);
		}
	}

}
