import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.scss']
})
export class AllTasksComponent {
  @ViewChild('editInp') searchElement: ElementRef;

  tasks = [];
  show: boolean;

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

