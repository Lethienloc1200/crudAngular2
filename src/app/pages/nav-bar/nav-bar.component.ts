import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  @Input() toggle!: boolean;
  @Output() outPutToggle = new EventEmitter<boolean>();
  // onToggle(event:any) {
  //   this.outPutToggle.emit();
  // }
  ngOnInit(): void {}
}
