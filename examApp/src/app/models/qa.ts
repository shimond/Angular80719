export interface QA {
    questionText: string;
    answer: string;
    options: string[];
    userAnswer?: string;
}

export interface UserAnswerWrapper {
    question: QA;
    userAnswer: string;
}
export enum QAStatus {
    Correct = 'Correct',
    Incorrect = 'Incorrect',
    NotAnswered = 'NotAnswered'
}
