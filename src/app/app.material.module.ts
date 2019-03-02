import {NgModule} from '@angular/core';

import {
  MatCardModule,
  MatTooltipModule,
  MatChipsModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatListModule,
  MatSelectModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule
} from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatTooltipModule,
    MatChipsModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  exports: [
    MatCardModule,
    MatTooltipModule,
    MatChipsModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ]
})
export class MaterialModule {}
