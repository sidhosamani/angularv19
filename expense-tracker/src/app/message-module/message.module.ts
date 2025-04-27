import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageRoutingModule } from './message-routing.module';
import { MessageComponent } from './pages/message/message.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MessageComponent],
  imports: [
    CommonModule,
    MessageRoutingModule,
    FormsModule
  ]
})
export class MessageModule { }
