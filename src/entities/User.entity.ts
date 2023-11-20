import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Contact } from "./Contact.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 255 })
  fullName: string;

  @Column({ unique: true, length: 45 })
  email: string;

  @Column({ nullable: true })
  avatar?: string;

  @Column({ length: 120 })
  password: string;

  @Column()
  telephone: number;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @OneToMany(() => Contact, (contact) => contact.user)
  contacts: Contact[]
}
