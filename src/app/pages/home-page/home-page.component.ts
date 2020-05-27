import { Component, OnInit } from '@angular/core';
import { TaskserviceService } from '../../core/services/task/taskservice.service';
import { Task } from 'src/app/core/services/task/task.model';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
    task: Task;
    tasks:Task[];
    minDate: Date;
    errorMessage: string;
    
    constructor(private taskService: TaskserviceService) {}

    ngOnInit() {
        this.errorMessage = '';
        this.filterTodaysTasks();
        this.task = new Task('', '', undefined, false);
        this.minDate = new Date();
    }

    public async addTask(newTask: Task) {
        if(newTask.taskTitle){
            this.taskService.addTask(newTask);
            this.task = new Task('', '', undefined, false);
            this.filterTodaysTasks();
        }else{
            this.errorMessage = 'Task title is required';
        }
    }

    public async toggleDone(task: Task){
        this.taskService.toggleDone(task);
    }

    public async deleteTask(task: Task){
        this.taskService.deleteTask(task);
        this.filterTodaysTasks();
    }

    private filterTodaysTasks(){
        const today = new Date();
        const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate()+1);
        this.tasks = this.taskService.getAllTasks().filter(
            task => task.taskDate === undefined || task.taskDate < tomorrow
        );
    }
}
