type MultipleChoiceLesson = {
  kind: "multiple-choice"; // Discriminant property
  question: string;
  studentAnswer: string;
  correctAnswer: string;
};

type CodingLesson = {
  kind: "coding"; // Discriminant property
  studentCode: string;
  solutionCode: string;
};

type TrueFalseLesson = {
  kind: "true-false"; // Discriminant property
  question: string;
  studentAnswer: boolean;
  correctAnswer: boolean;
};

type Lesson = MultipleChoiceLesson | CodingLesson | TrueFalseLesson;

function isCorrect(lesson: Lesson): boolean {
  switch (lesson.kind) {
    case "multiple-choice":
      return lesson.studentAnswer === lesson.correctAnswer;
    case "coding":
      return lesson.studentCode === lesson.solutionCode;
    case "true-false":
      return lesson.studentAnswer === lesson.correctAnswer;
  }
}
