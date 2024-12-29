import { IsString, IsOptional } from 'class-validator';

export class UpdateNinjaDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  weapon?: string;
}
