// src/users/user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn, CreateDateColumn, OneToOne, JoinTable, ManyToMany, JoinColumn } from 'typeorm';
import { UsersDetails } from './user.details.entity';



@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  password_hash: string;

  @Column({default: 'user'})
  role: string;

  @OneToOne(() => UsersDetails)
  @JoinColumn({ name: 'profile_id' })
  user_details: UsersDetails;

  @CreateDateColumn()
  created_at: Date;

  @DeleteDateColumn({ nullable: false })
  deletedAt: Date
}