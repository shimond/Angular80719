import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QA, UserAnswerWrapper } from 'src/app/models/qa';

@Component({
    selector: 'app-question-viewer',
    templateUrl: './question-viewer.component.html',
    styleUrls: ['./question-viewer.component.scss']
})
export class QuestionViewerComponent implements OnInit {

    @Input() question: QA;
    @Output() userAnswered = new EventEmitter<UserAnswerWrapper>();
    constructor() { }

    ngOnInit() {
    }

    isQuestionLocked() {
        return this.question.userAnswer;
    }
    onOptionClicked(answer: string) {
        this.userAnswered.emit({ question: this.question, userAnswer: answer });
    }

}
