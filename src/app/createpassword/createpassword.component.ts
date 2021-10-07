import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createpassword',
  templateUrl: './createpassword.component.html',
  styleUrls: ['./createpassword.component.scss']
})
export class CreatepasswordComponent implements OnInit {
  html = '<span><i>Tooltip</i> <u>with</u> <b>HTML</b></span>';

  constructor() { }

  ngOnInit(): void {
  }

}
