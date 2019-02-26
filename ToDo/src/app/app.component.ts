import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks = [];

  form: FormGroup = new FormGroup({
    task: new FormControl()
  });

  submitForm() {
    this.tasks.push(this.form.value.task);
    this.form.reset();
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    localStorage.removeItem('tasks');
    localStorage.clear();
  }

  deleteTaskAll(index: number) {
    this.tasks.splice(index, this.tasks.length);
    localStorage.removeItem('tasks');
    localStorage.clear();
  }

  focusInput() {
    document.getElementById('editInp').focus();
  }

}


