import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoggedInGuard } from "../auth/logged-in.guard";
import { CreateNewStudentComponent } from "./create-new-student/create-new-student.component";
import { RegistrationComponent } from "./registration.component";
import { ShowAllStudentsComponent } from "./show-all-students/show-all-students.component";
import { StudentProfileComponent } from "./student-profile/student-profile.component";

const routes: Routes = [
    { path: "", component: RegistrationComponent, children: [
        { path:"new-student",canActivate:[LoggedInGuard], component: CreateNewStudentComponent },
        { path:"student/:id",canActivate:[LoggedInGuard], component: StudentProfileComponent },
        { path:"", component: ShowAllStudentsComponent }
    ] }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class RegistrationRoutingModule {}