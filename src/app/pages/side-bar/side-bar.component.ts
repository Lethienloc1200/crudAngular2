import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  constructor() {}
  @Input() toggleABC!: boolean;
  // @Output() outPutSideBarToggleABC = new EventEmitter<boolean>();

  ngOnInit(): void {}
}
