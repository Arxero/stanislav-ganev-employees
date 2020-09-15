import { Component, OnInit, Input } from '@angular/core';
import { EmployeesViewModel } from '../employees.models';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.scss']
})
export class DatagridComponent implements OnInit {
  @Input() employees: EmployeesViewModel[];
  displayedColumns: string[] = [
    'firstEmployeeId',
    'secondEmployeeId',
    'projectId',
    'daysWorked',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
