import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QA, QAStatus } from 'src/app/models/qa';

@Component({
    selector: 'app-questions-list',
    templateUrl: './questions-list.component.html',
    styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent implements OnInit {

    @Input() questions: QA[] = [];
    @Input() selectedQuestion: QA;
    @Output() questionChangeRequested = new EventEmitter<QA>();

    constructor() { }

    ngOnInit() {
    }

    onQuestionClicked(q: QA) {
        this.questionChangeRequested.emit(q);
    }

    isCorrect(q: QA): QAStatus {
        if (q.answer === q.userAnswer) {
            return QAStatus.Correct;
        }
        if (!q.userAnswer) {
            return QAStatus.NotAnswered;
        }

        return QAStatus.Incorrect;

    }

}
