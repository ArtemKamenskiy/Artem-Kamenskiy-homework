import {Component, ViewChild, ElementRef} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  @ViewChild('editInp') searchElement: ElementRef;
  // @ts-ignore
  @ViewChild('Edit_your_task') searchElement: ElementRef;
  show: false;
  tasks = [];

  form: FormGroup = new FormGroup({
    task: new FormControl()
  });

  submitForm() {
    this.tasks.push(this.form.value.task);
    this.form.reset();
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
      this.searchElement.nativeElement;
    }, 0);
  }
}


