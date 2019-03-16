import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent {
  @ViewChild('editInp') searchElement: ElementRef;

  tasks = [];

  addTask(title) {
    this.tasks.push({
      title,
      complete: false,
      show: false,
    });
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  deleteTaskAll(index: number) {
    this.tasks.splice(index, this.tasks.length);
    localStorage.removeItem('tasks');
    localStorage.clear();
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  focusInput() {
    // @ts-ignore
    this.show = !this.show;
    setTimeout(() => {
      this.searchElement.nativeElement.focus();
    }, 0);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  toggle(task) {
    task.complete = !task.complete;
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}

