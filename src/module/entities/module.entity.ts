import { Course } from "src/courses/entities/course.entity"
import { Lesson } from "src/lesson/enitity/lesson.entity"
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
    Index,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm"

  
  @Entity("modules")
  export class Module {
    @PrimaryGeneratedColumn("uuid")
    id: string
  
    @Column({ length: 255 })
    title: string
  
    @Column({ type: "text", nullable: true })
    description: string
  
    @Column()
    order: number
  
    @CreateDateColumn()
    createdAt: Date
  
    @UpdateDateColumn()
    updatedAt: Date
  
    // Many-to-One relationship
    @ManyToOne(
      () => Course,
      (course) => course.modules,
      { nullable: false, onDelete: "CASCADE" },
    )
    @Index()
    course: Course
  
    // One-to-Many relationship
    @OneToMany(
      () => Lesson,
      (lesson) => lesson.module,
      { cascade: true },
    )
    lessons: Lesson[]
  }
  
  