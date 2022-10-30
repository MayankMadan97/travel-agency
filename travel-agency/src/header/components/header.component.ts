import { Component, OnInit } from '@angular/core';

/**
 * header global component
 *
 * @export
 * @class HeaderComponent
 * @implements {OnInit}
 */
@Component({
    selector: 'app-header',
    templateUrl: '../views/header.component.html',
    styleUrls: ['../header.component.scss']
})

export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}