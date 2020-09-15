import { Component } from '@angular/core';
import {
  EmployeesData,
  EmployeesViewModel,
  EmployeesProjects,
  mapEmployeeData,
} from './employees.models';
import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  acceptedFiles: string[] = ['.txt'];
  employeesGridData: EmployeesViewModel[] = [];

  upload(files: FileList): void {
    if (files.length === 0) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      const rows = fileReader.result.toString().split('\n');
      const data = rows.map((x) => mapEmployeeData(x));
      let employeesWithProjects: EmployeesProjects[] = data.map((x) => {
        return {
          empId: x.empId,
          projects: data.filter((j) => j.empId === x.empId),
        };
      });
      employeesWithProjects = _.uniqBy(employeesWithProjects, 'empId');

      // for each employee
      employeesWithProjects.forEach((employee) => {
        // for each of his projects
        employee.projects.forEach((project) => {
          // we find all employees that worked on the current project
          const employeesWithCurrentProject = employeesWithProjects.filter(
            (x) =>
              x.projects.some((j) => j.projectId === project.projectId) &&
              x.empId !== project.empId
          );

          // for each of this employees
          employeesWithCurrentProject.forEach((otherEmp) => {
            // we get the same project as the project from the current
            const projectSameAsFormEmployee = otherEmp.projects.find(
              (x) => x.projectId === project.projectId
            );
            // check the from date to not be in past of current employee project start date
            const isDateFromOk = moment(project.dateFrom).isSameOrBefore(
              projectSameAsFormEmployee.dateFrom
            );

            if (!isDateFromOk) {
              return;
            }
            // check for how long they have been working together
            const a = moment(projectSameAsFormEmployee.dateFrom);
            const b = moment(
              this.compareDate(project.dateTo, projectSameAsFormEmployee.dateTo)
            );
            const daysTogether = b.diff(a, 'days');
            if (daysTogether < 1) {
              return;
            }
            this.employeesGridData.push({
              firstEmployeeId: employee.empId,
              secondEmployeeId: otherEmp.empId,
              projectId: project.projectId,
              daysWorked: daysTogether,
            });
          });
        });
      });

      this.employeesGridData = _.orderBy(this.employeesGridData, ['daysWorked'], 'desc');
      console.log(this.employeesGridData);
    };
    fileReader.readAsText(files[0]);
  }

  compareDate(dateTimeA, dateTimeB): moment.Moment {
    const momentA = moment(dateTimeA, 'DD-MM-YYYY');
    const momentB = moment(dateTimeB, 'DD-MM-YYYY');
    if (momentA > momentB) {
      return momentB;
    } else if (momentA < momentB) {
      return momentA;
    } else {
      return momentA;
    }
  }
}
