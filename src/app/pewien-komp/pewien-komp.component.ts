import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pewien-komp',
  templateUrl: './pewien-komp.component.html',
  styleUrls: ['./pewien-komp.component.css']
})

export class PewienKompComponent implements OnInit {
  title: string;
  year: number;
  director: string;
  others: Others;
  review: string[];
  editMode = false;

  constructor() {
  }

  ngOnInit(): void {
    this.title = 'Salto';
    this.year = 1965;
    this.others = {
      writer: 'Tadeusz Konwicki',
      starring: 'Zbigniew Cybulski, Jerzy Block, Marta Lipińska',
      genre: 'Dramat psychologiczny'
    };
    this.director = 'Tadeusz Konwicki';
    this.review = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lectus ipsum, varius a erat ac, faucibus pellentesque augue. Vivamus dapibus, dui ac posuere blandit, nisl velit porttitor metus, in sagittis mi nulla ac dolor. Ut imperdiet nulla sit amet nibh gravida scelerisque. Vivamus id felis purus. Integer imperdiet risus eget diam volutpat, quis placerat ligula venenatis.', 'Duis lobortis nisl sit amet pharetra tincidunt. Proin blandit sollicitudin libero vitae sodales. Vivamus ac mauris sagittis, interdum ligula non, dapibus ligula.'];
  }

  addTask(task): void {
    this.review.push(task);
  }

  deleteTask(task): void {
    for (let i = 0; i < this.review.length; i++) {
      if (this.review[i] === task) {
        this.review.splice(i, 1);
      }
    }
  }

  changeEditMode(): void {
    this.editMode = !this.editMode;
  }
}

interface Others {
  writer: string;
  starring: string;
  genre: string;
}
