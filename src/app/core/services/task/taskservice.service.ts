import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {
  tasks:Task[];

  constructor() { 
    this.tasks = [];
    const task = new Task('Test Task 1','',undefined,false);
    this.tasks.push(task);
  }

  getAllTasks() {
    return this.tasks;
  }

  addTask(newTask: Task){
    this.tasks.push(newTask);
  }

  toggleDone(taskToAdd: Task){
    this.tasks.forEach(task => {
      if(task.taskTitle === taskToAdd.taskTitle){
        if(task.isComplete){
          task.isComplete = !task.isComplete;
        }else{
          task.isComplete = true;
        }
      }
    });
  }

  deleteTask(taskToAdd: Task){
    let index = 0;
    let indexToDelete = 0;
    this.tasks.forEach(task => {
      if(task.taskTitle === taskToAdd.taskTitle){
        indexToDelete = index;
      }
      index++;
    });
    this.tasks.splice(indexToDelete, 1);
  }
}
