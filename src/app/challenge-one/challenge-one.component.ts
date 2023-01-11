import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-challenge-one',
  templateUrl: './challenge-one.component.html',
  styleUrls: ['./challenge-one.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class ChallengeOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('test')
  }

  // 'مزدلفة', 'عرفات', 'الجمرات', 'منى', 'مكة', 'الحرم'

  todo = [
    { id: 1, name: 'الحرم', clock: '', date: '' },
    { id: 2, name: 'مكة', clock: '', date: '' },
    { id: 3, name: 'منى', clock: '', date: '' },
    { id: 4, name: 'الجمرات', clock: '', date: '' },
    { id: 5, name: 'عرفات', clock: '', date: '' },
    { id: 6, name: 'مزدلفة', clock: '', date: '' },

  ];

  done = [];
  date: { year: number; month: number };

  drop(event: any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    console.log(this.done)
  }

  indexSelected = null;
  selectFromList(index) {
    this.indexSelected = index;
    console.log(this.done[this.indexSelected])
  }


}



