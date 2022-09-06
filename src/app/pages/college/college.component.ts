import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.scss']
})
export class CollegeComponent implements OnInit {
  dataSource_HallOfFame = HALLOFFAME_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}

export interface HallOfFame {
  name: string;
  course: string;
  photosrc: string;
  information: string;
}

const HALLOFFAME_DATA: HallOfFame[] = [
{name: "Nashrah Ansari", course: "SSC Examination", photosrc: "https://source.unsplash.com/c_GmwfHBDzk/200x200", information: "Nashrah secured 3rd rank in SSC Examination held in 2022"},
{name: "Arfa Khan", course: "HSC Examination", photosrc: "https://source.unsplash.com/c_GmwfHBDzk/200x200", information: "Arfa secured 2nd rank in HSC Examination held in 2021"},
{name: "Samreen Momin", course: "HSC Examination", photosrc: "https://source.unsplash.com/c_GmwfHBDzk/200x200", information: "Samreen secured 4nd rank in HSC Examination held in 2020"},
];
