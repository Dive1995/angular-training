import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateNewStudentComponent } from "./create-new-student/create-new-student.component";
import { RegistrationComponent } from "./registration.component";
import { ShowAllStudentsComponent } from "./show-all-students/show-all-students.component";

const routes: Routes = [
    { path: "reg", component: RegistrationComponent, children: [
        { path:"new-student", component: CreateNewStudentComponent },
        { path:"all-students", component: ShowAllStudentsComponent }
    ] }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class RegistrationRoutingModule {}