import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExamComponent } from './components/exam/exam.component';
import { QuestionViewerComponent } from './components/question-viewer/question-viewer.component';
import { QuestionsListComponent } from './components/questions-list/questions-list.component';
import { QuestionsService, QuestionsServiceMock } from './services/questions.service';

@NgModule({
    declarations: [
        AppComponent,
        ExamComponent,
        QuestionViewerComponent,
        QuestionsListComponent
    ],
    imports: [
        BrowserModule
    ],
    // providers: [{ provide: QuestionsService, useClass: QuestionsServiceMock }],
    bootstrap: [AppComponent]
})
export class AppModule { }
