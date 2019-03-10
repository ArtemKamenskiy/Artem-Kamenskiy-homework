import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

class newTaskItem {
}

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent {
  @ViewChild('editInp') searchElement: ElementRef;
  // @ts-ignore
  @ViewChild('Edit_your_task') searchElement: ElementRef;

  tasks: newTaskItem[] = [];

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
    localStorage.removeItem('tasks');
    localStorage.clear();
  }

  focusInput() {
    // @ts-ignore
    this.show = !this.show;
    setTimeout(() => {
      this.searchElement.nativeElement.focus();
    }, 0);
  }

  toggle(task) {
    task.complete = !task.complete;
  }
}

