import { Component } from '@angular/core';
// import 'rxjs/add/observable/timer';
import { MatDialog } from '@angular/material';
import { EditCourseComponent } from './edit-course/edit-course.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'material-demo';
  // isChecked = false;

  // onChange($event) {
  //   console.log('Hey there!!', $event);
  // }
  // colors = [
  //   { id: 1, name: 'Red'},
  //   { id: 2, name: 'Blue'},
  //   { id: 3, name: 'Green'}
  // ];

  // color = 2;

  // minDate = new Date(2019, 3, 20);
  // maxDate = new Date(2019, 7, 1);

  // categories = [
  //   { name: 'Beginner'},
  //   { name: 'Intermediate'},
  //   { name: 'Advance'}
  // ];

  // selectCategory(category) {
  //    this.categories
  //    .filter(c => c !== category)
  //    // tslint:disable-next-line:no-string-literal
  //    .forEach(c => c['selected'] = false);

  //    category.selected = !category.selected;
  // }

  // progress = 0;
  // timer;
  // isLoading = false;

  // constructor() {
  //   // this.timer = setInterval(() => {
  //   //  this.progress++;
  //   //  if (this.progress === 100) {
  //   //    clearInterval(this.timer);
  //   //    }
  //   // }, 20);

  //   this.isLoading = true;
  //   this.getCourses()
  //   .subscribe(() => this.isLoading = false);
  // }

  // getCourses() {
  //   return Observable.timer(2000);
  // }

  constructor(private dialog: MatDialog) {

  }
  openDialog() {
    this.dialog.open(EditCourseComponent, {
      data: { courseId: 1 }
    })
    .afterClosed()
    .subscribe(result => console.log(result));
  }
}
