import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.entity";

@Entity('usersdetails')
export class UsersDetails {
  @PrimaryGeneratedColumn()
  userdat_id: number;

  @Column({ nullable: false })
  first_name: string;

  @Column({ nullable: false })
  last_name: string;

  @Column('json', { nullable: true })
  tags_dni: string[];

  @Column({ nullable: false })
  phone: string;

  @Column({ nullable: false })
  address: string;

  @Column({ nullable: true })
  sex: string;

  @OneToOne(() => User, (user)=> user.user_details)
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn({ nullable: false })
  deleted_at: Date
}
