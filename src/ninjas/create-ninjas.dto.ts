import {IsNotEmpty, IsString} from 'class-validator';

export class CreateNinjaDto {
	@IsString()
	@IsNotEmpty()
	name: string;

	@IsString()
	@IsNotEmpty()
	weapon: string;
}
