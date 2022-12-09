import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Member {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  fristName: string;

  @Column({ length: 2 })
  middleInitial: string;

  @Column({ length: 100 })
  lastName: string;

  @Column('text')
  description: string;

  @Column({ length: 9 })
  ssn: string;

  @Column('bool')
  isActive: boolean;
}
