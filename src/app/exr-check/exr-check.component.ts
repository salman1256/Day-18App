import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exr-check',
  templateUrl: './exr-check.component.html',
  styleUrls: ['./exr-check.component.css']
})
export class ExrCheckComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
    title = 'exerciseOne';
    teams:any[]=[
      {tid:1,tname:'India',tlogo:'https://i.pinimg.com/originals/81/bb/b5/81bbb5eee2ad2290b688940204f23092.png',nwc:2},
      {tid:2,tname:'Aus',tlogo:'https://www.searchpng.com/wp-content/uploads/2019/03/Australia-cricket-bord-logo-PNG.png',nwc:4},
      {tid:3,tname:'West Indies',tlogo:'https://www.nicepng.com/png/detail/244-2445958_west-indies-cricket-team-logo.png',nwc:2},
      {tid:4,tname:'England',tlogo:'https://www.searchpng.com/wp-content/uploads/2019/03/England-Cricket-Team-Logo-PNG-Image-715x715.png',nwc:1},
    ]
  }
   

