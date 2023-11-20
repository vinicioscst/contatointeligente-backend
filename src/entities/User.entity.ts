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

  @Column({ nullable: true })
  avatar?: string;

  @Column({ length: 120 })
  password: string;

  @Column()
  telephone: number;

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
