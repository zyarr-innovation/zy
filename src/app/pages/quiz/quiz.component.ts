import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  displayedColumns = ['serialno', 'processor', 'model', 'pccount'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }
}

export interface Element {
  serialno: string;
  processor: string;
  model: string;
  pccount: string;
}

const ELEMENT_DATA: Element[] = [
{serialno: "1", processor: "Pentium", model: "DELL", pccount: "15"},
{serialno: "2", processor: "Pentium", model: "IBM", pccount: "20"},
{serialno: "3", processor: "Pentium", model: "HP", pccount: "15"},
];