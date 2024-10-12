import { Routes } from '@angular/router';
import { SelectProjectComponent } from '../Components/select-project/select-project.component';
import { ExcavationDataComponent } from '../Components/excavation-data/excavation-data.component';
import { MainComponent } from '../Components/main/main.component';
import { PaymentComponent } from '../Components/payment/payment.component';
import { PermitComponent } from '../Components/permit/permit.component';
import { RequestReviewComponent } from '../Components/request-review/request-review.component';
import { PermitDetailsComponent } from '../Components/permit-details/permit-details.component';

export const routes: Routes = [
    {path:'',  redirectTo:'/permit', pathMatch: 'full'},
    {path:'main', component:MainComponent},
    {path:'select-project', component:SelectProjectComponent},
    {path:'excavation-data', component:ExcavationDataComponent},
    {path:'payment', component:PaymentComponent},
    {path:'request-review', component:RequestReviewComponent},
    {path:'permit', component:PermitComponent},
    {path:'permit/:id', component:PermitDetailsComponent}
];
