import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/core/services/task/task.model';
import { TaskserviceService } from 'src/app/core/services/task/taskservice.service';

@Component({
  selector: 'app-important-tasks-page',
  templateUrl: './important-tasks-page.component.html',
  styleUrls: ['./important-tasks-page.component.scss']
})
export class ImportantTasksPageComponent implements OnInit {
  tasks:Task[];

  constructor(private taskService: TaskserviceService) { }

  ngOnInit() {
    this.tasks = this.taskService.getAllTasks().filter(
      task => task.isImportant !== undefined && task.isImportant
    );
  }

  public async toggleDone(task: Task){
    this.taskService.toggleDone(task);
  }

  public async getTasks(){
    this.tasks = this.taskService.getAllTasks().filter(
      task => task.isImportant !== undefined && task.isImportant
    );
    return this.tasks;
  }
}
