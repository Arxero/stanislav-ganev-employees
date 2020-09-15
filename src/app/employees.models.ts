import * as moment from 'moment';

export interface EmployeesData {
  empId: string;
  projectId: string;
  dateFrom: Date;
  dateTo: Date;
}

export interface EmployeesViewModel {
  firstEmployeeId: string;
  secondEmployeeId: string;
  projectId: string;
  daysWorked: number;
}

export interface EmployeesProjects {
  empId: string;
  projects: EmployeesData[];
}

export function mapEmployeeData(x: string): EmployeesData {
  const [empId, projectId, dateFrom, dateTo] = x.split(', ');
  return {
    empId,
    projectId,
    dateFrom: moment(dateFrom).toDate(),
    dateTo: isNaN(Date.parse(dateTo))
      ? new Date(Date.now())
      : moment(dateTo).toDate(),
  } as EmployeesData;
}
