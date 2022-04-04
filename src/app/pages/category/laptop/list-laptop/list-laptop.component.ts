import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-laptop',
  templateUrl: './list-laptop.component.html',
  styleUrls: ['./list-laptop.component.scss'],
})
export class ListLaptopComponent implements OnInit {
  constructor() {}
  dataLapTop = [
    {
      id: '1',
      name: 'Lap Top abc',
      price: '200.000 vnd',
      type: '8GB/128GB',
      discount: '200vnd',
      imgUrl:
        'https://cdn.tgdd.vn/Products/Images/44/253581/apple-macbook-pro-14-m1-pro-2021-600x600.jpg',
    },
    {
      id: '2',
      name: 'Lap Top -2',
      price: '200.000 vnd',
      type: '8GB/128GB -2',
      discount: '200vnd -2',
      imgUrl:
        'https://cdn.tgdd.vn/Products/Images/44/253153/hp-240-g8-i3-1005g1-4gb-256gb-win10-519a7pa-600x600.jpg',
    },
    {
      id: '3',
      name: 'Lap Top -3',
      price: '200.000 vnd',
      type: '8GB/128GB -3',
      discount: '200vnd -3',
      imgUrl:
        'https://cdn.tgdd.vn/Products/Images/44/263977/acer-travelmate-b3-tmb311-31-p49d-n5030-nxvnfsv005-081221-100723-600x600.jpg',
    },
    {
      id: '3',
      name: 'Lap Top -3',
      price: '200.000 vnd',
      type: '8GB/128GB -3',
      discount: '200vnd -3',
      imgUrl:
        'https://cdn.tgdd.vn/Products/Images/44/263980/acer-nitro-5-gaming-an515-45-r6ev-r5-5600h-8gb-600x600.jpg',
    },
    {
      id: '3',
      name: 'Lap Top -3',
      price: '200.000 vnd',
      type: '8GB/128GB -3',
      discount: '200vnd -3',
      imgUrl:
        'https://cdn.tgdd.vn/Products/Images/44/269311/acer-aspire-3-a315-57g-573f-i5-nxhzrsv00b-120122-043700-600x600.jpg',
    },
  ];

  ngOnInit(): void {}
}
