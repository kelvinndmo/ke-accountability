import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'missing-person' })
export class MissingPersonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  foundContact: string;

  @Column({ nullable: true })
  idNumber: string;

  @Column({
    type: 'text',
  })
  additionalInfo: string;

  @Column()
  age: number;

  @Column({
    nullable: true,
  })
  photoUrl: string;

  @Column({
    type: 'varchar',
  })
  lastSeenAt: string;

  @Column({
    type: 'boolean',
    default: false,
  })
  isFound: boolean;

  @Column({
    type: 'date',
    nullable: false,
  })
  lastSeenOn: Date;
}
