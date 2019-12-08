import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  constructor() { }

  ngOnInit() {
  }

  onCourseViewed(){
    this.courseSelected.emit(this.course);
  }

  isImageVisible(){
     return this.course && this.course.iconUrl;
  }

  //conditional styling
  cardClasses(){
      if(this.course.category == 'BEGINNER'){
        return 'beginner';
      }

    // return {
        // 'beginner': this.course.category == 'BEGINNER',
    // };
  }
  //styling titles then use {'text-decoration': 'underline'}
  // cardStyles(){
  //   return {
  //     'text-decoration': 'underline',

  //   };
  // }

}
