import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LapTop } from '../../models/laptop.class';
import { LapTopService } from '../../services/laptop.service';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.scss'],
})
export class LaptopComponent implements OnInit {
  @Input() inputLapTop!: any;
  constructor(private lapTopService: LapTopService, private router: Router) {}
  lapTopList: LapTop[] = [];
  ngOnInit(): void {
    this.loadLapTopList();
  }

  loadLapTopList() {
    this.lapTopService.getListLapTop().subscribe((data) => {
      this.lapTopList = data.map((record: any) => new LapTop(record));
      console.log('check LapTop==========>', this.lapTopList);
    });
  }
  onClickDetail(id: number) {
    this.router.navigate(['laptop', id]);
  }
}
