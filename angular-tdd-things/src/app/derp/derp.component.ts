import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-derp',
  templateUrl: './derp.component.html',
  styleUrls: ['./derp.component.scss']
})
export class DerpComponent implements OnInit {

  public thing: string = 'foo'

  constructor() { }

  ngOnInit(): void { }

}
