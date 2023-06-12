import { ObjectId } from "mongodb";
import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity()
export class TODO {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  content: string;

  @Column()
  userName: string;
}