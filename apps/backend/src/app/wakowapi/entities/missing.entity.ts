import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'missing-person' })
export class MissingPersonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty()
  firstName: string;

  @Column()
  @ApiProperty()
  lastName: string;

  @Column()
  @ApiProperty()
  foundContact: string;

  @Column({ nullable: true })
  @ApiProperty()
  idNumber: string;

  @Column({
    type: 'text',
  })
  @ApiProperty()
  additionalInfo: string;

  @Column()
  @ApiProperty()
  age: number;

  @Column({
    nullable: true,
  })
  @ApiProperty()
  photoUrl: string;

  @Column({
    type: 'varchar',
  })
  @ApiProperty()
  lastSeenAt: string;

  @Column({
    type: 'boolean',
    default: false,
  })
  @ApiProperty()
  isFound: boolean;

  @Column({
    type: 'date',
    nullable: false,
  })
  @ApiProperty()
  lastSeenOn: Date;
}
