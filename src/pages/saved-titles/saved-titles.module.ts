import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SavedTitlesPage } from './saved-titles';

@NgModule({
  declarations: [
    SavedTitlesPage,
  ],
  imports: [
    IonicPageModule.forChild(SavedTitlesPage),
  ],
})
export class SavedTitlesPageModule {}
