import { Component, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';
import { read } from 'fs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = COURSES;
  
// @ViewChildren(CourseCardComponent, {read: ElementRef})  
// cards: QueryList<ElementRef>;
// ngAfterViewInit(){

//   console.log(this.cards);
// }


  //pipe is a template mechanism that we can use to transform data and display it in another form to the user
  startDate = new Date(2000, 0, 1);
  title = COURSES[0].description;

  //parent
  onCourseSelected(course: Course){
    console.log("The parent component - click event bubbled.....", course);
  }


}
