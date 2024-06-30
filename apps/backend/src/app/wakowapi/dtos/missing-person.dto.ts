import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMissingPersonDTO {
  @IsString()
  @ApiProperty()
  @IsNotEmpty({ message: 'First name is required' })
  firstName: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty({ message: 'Last name is required' })
  lastName: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty({ message: 'Contact is required' })
  foundContact: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty({ message: 'ID number is required' })
  idNumber: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty({ message: 'Additional information is required' })
  additionalInfo: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Age is required' })
  age: number;

  @IsString()
  @ApiProperty()
  @IsNotEmpty({ message: 'Last seen location is required' })
  lastSeenAt: string;

  @IsNotEmpty({ message: 'Last seen date is required' })
  @ApiProperty()
  lastSeenOn: Date;
}
