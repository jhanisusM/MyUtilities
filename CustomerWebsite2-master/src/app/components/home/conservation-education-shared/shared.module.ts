import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SocialMediaComponent } from 'src/app/social-media/social-media.component';

@NgModule({
 imports: [
    CommonModule,
    ],
 declarations: [
    SocialMediaComponent
    ],
 exports: [
    CommonModule,
    SocialMediaComponent
    ]
})
export class SharedModule {}
