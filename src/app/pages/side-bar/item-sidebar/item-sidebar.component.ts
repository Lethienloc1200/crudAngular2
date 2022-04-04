import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { ActivatedRoute, Router } from '@angular/router';

interface FoodNode {
  name: string;
  linkName: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'LapTop',
    linkName: 'laptop',
    children: [
      { linkName: 'laptop/dell', name: 'Dell' },
      { linkName: 'laptop/hp', name: 'Hp' },
      { linkName: 'laptop/macbook', name: 'macbook' },
    ],
  },
  {
    name: 'Phone',
    linkName: 'phone',
    children: [
      {
        name: 'Iphone',
        linkName: 'phone/iphone',
        children: [
          { linkName: 'phone/iphone/iphone7', name: 'iphone7' },
          { linkName: 'phone/iphone/iphone8', name: 'iphone8' },
        ],
      },
      // {
      //   name: 'Macbook',
      //   children: [{  linkName:'samsum',name: 'Macbook 2018' }, { name: 'Macbook 2022' }],
      // },
    ],
  },
  // {
  //   name: 'Phụ kiện',
  //   children: [
  //     {
  //       name: 'Tai nghe',
  //       children: [
  //         { linkName: 'samsum', name: 'Không dây' },
  //         { name: 'Tai thỏ' },
  //       ],
  //     },
  //     {
  //       name: 'Chuột',
  //       children: [
  //         { linkName: 'samsum', name: 'Logitech' },
  //         { name: 'Logitech-22' },
  //       ],
  //     },
  //   ],
  // },

  // {
  //   name: 'Đồng hồ thông minh',
  //   children: [
  //     {
  //       name: 'Đồng hồ A',
  //       children: [{  linkName:'samsum',name: 'Đồng hồ A1' }, { name: 'Đồng hồ A2' }],
  //     },
  //     {
  //       name: 'Đồng hồ B',
  //       children: [{  linkName:'samsum',name: 'Đồng hồ B1' }, { name: 'Đồng hồ B2' }],
  //     },
  //   ],
  // },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  linkName: string;
  level: number;
}

/**
 * @title Tree with flat nodes
 */
@Component({
  selector: 'app-item-sidebar',
  templateUrl: './item-sidebar.component.html',
  styleUrls: ['./item-sidebar.component.scss'],
})
export class ItemSidebarComponent {
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      linkName: node.linkName,
      level: level,
    };
  };
  navigateRouterLink(link: string) {
    this.router.navigate([link]);
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private route: ActivatedRoute, private router: Router) {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
