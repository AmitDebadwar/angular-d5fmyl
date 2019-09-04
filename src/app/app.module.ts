import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstructionsComponent } from './student/instructions/instructions.component';
import { ExamComponent } from './student/exam/exam.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ExamSummeryComponent } from './student/exam-summery/exam-summery.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StaffDashboardComponent } from './staff/staff-dashboard/staff-dashboard.component';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';
import { EnrollmentComponent } from './staff/enrollment/enrollment.component';

@NgModule({
  declarations: [
    AppComponent,
    InstructionsComponent,
    ExamComponent,
    HeaderComponent,
    FooterComponent,
    ExamSummeryComponent,
    StaffDashboardComponent,
    StudentDashboardComponent,
    EnrollmentComponent
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    HttpClientModule,

    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
