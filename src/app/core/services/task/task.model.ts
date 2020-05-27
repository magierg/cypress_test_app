export class Task {
    taskTitle: string;
    taskDesc: string;
    taskDate: Date;
    isImportant: boolean;
    isComplete: boolean;

    constructor(taskTitle: string,
        taskDesc: string,
        taskDate: Date,
        isImportant: boolean) {
            this.isImportant=isImportant;
            this.taskDate=taskDate;
            this.taskDesc=taskDesc;
            this.taskTitle=taskTitle;
            this.isComplete=false;
    }
}