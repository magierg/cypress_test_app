import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/core/services/task/task.model';
import { TaskserviceService } from 'src/app/core/services/task/taskservice.service';

@Component({
  selector: 'app-all-tasks-page',
  templateUrl: './all-tasks-page.component.html',
  styleUrls: ['./all-tasks-page.component.scss']
})
export class AllTasksPageComponent implements OnInit {
  tasks:Task[];

  constructor(private taskService: TaskserviceService) { }

  ngOnInit() {
    this.tasks = this.taskService.getAllTasks();
  }

  public async toggleDone(task: Task){
    this.taskService.toggleDone(task);
  }
}
