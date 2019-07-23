import { Component, OnInit } from '@angular/core';
import { QA, QAStatus, UserAnswerWrapper } from 'src/app/models/qa';
import { QuestionsService } from 'src/app/services/questions.service';
// https://github.com/tonsky/FiraCode
// http://www.typescriptlang.org/play/?target=1#code/MYGwhgzhQ
@Component({
    selector: 'app-exam',
    templateUrl: './exam.component.html',
    styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {

    questions: QA[];
    currentQuestion: QA;

    constructor(private questionsService: QuestionsService) {
    }

    ngOnInit() {
        this.questions = this.getQuestions();
    }

    setCurrentQuestion(q: QA) {
        this.currentQuestion = q;
    }

    getGrade() {
        const correctCount = this.questions.filter(x => this.isCorrect(x) === QAStatus.Correct);
        return correctCount.length / this.questions.length;
    }

    isCorrect(q: QA): QAStatus {
        return this.questionsService.isCorrect(q);

    }

    getQuestions(): QA[] {
        return this.questionsService.getQuestions();
    }

    onUserAnswered(qa: UserAnswerWrapper) {
        qa.question.userAnswer = qa.userAnswer;
        setTimeout(() => {
            const currentIndex = this.questions.findIndex(x => x === this.currentQuestion);
            this.currentQuestion = this.questions[currentIndex + 1];
        }, 2000);
    }

}
