import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TasksComponent } from './tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { SharedModule } from '../shared/card/shared.module';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  exports: [CommonModule],
  imports: [FormsModule, TasksComponent, SharedModule],
})
export class TasksModule {}
