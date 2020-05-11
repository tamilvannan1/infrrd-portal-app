import { NgModule } from '@angular/core';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCheckboxModule, MatFormFieldModule,
  MatIconModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {MatCardModule} from "@angular/material/card";
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
  declarations: [],
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
    MatSelectModule,
    MatBadgeModule,
    MatCheckboxModule,
    MatFormFieldModule
  ],
exports: [
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  FlexLayoutModule,
  MatSelectModule,
  MatBadgeModule,
  MatCheckboxModule,
  MatFormFieldModule
]
})
export class MaterialDesignModule { }
