import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Contact } from "./Contact.entity";
import { getRounds, hashSync } from "bcryptjs";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 255 })
  fullName: string;

  @Column({ unique: true, length: 45 })
  email: string;

  @Column({ length: 120 })
  password: string;

  @Column({type: "boolean", default: false})
  isAdmin: boolean;

  @Column({ type:"varchar", nullable: true })
  avatar?: string | undefined | null;

  @Column({ length: 25 })
  telephone: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;

  @DeleteDateColumn({ type: "date", nullable: true })
  deletedAt?: string | undefined | null;

  @OneToMany(() => Contact, (contact) => contact.user)
  contacts: Contact[]


  @BeforeInsert()
  @BeforeUpdate()
  hashSync() {
    const roundsValue: number = getRounds(this.password)
    if (!roundsValue) {
      this.password = hashSync(this.password, 10)
    }
  }
}
