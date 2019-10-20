import { Reducer } from 'redux';
import { Question } from '../dataelements/question';
import { QuestionList } from '../dataelements/questionList';

const ADD_QUESTION = 'qicoo/question/ADD_QUESTION';
const LOAD_QUESTION = 'qicoo/question/LOAD_QUESTION';
const ADD_LIKE = 'qicoo/question/ADD_LIKE';
const ADD_REPLY = 'qicoo/question/ADD_REPLY';

export const addQuestion = (q: Question) => ({
  payload: {
    newQuestion: q,
  },
  type: ADD_QUESTION as typeof ADD_QUESTION,
});
export const addReply = (q: Question) => ({
  payload: {
    newQuestion: q,
  },
  type: ADD_REPLY as typeof ADD_REPLY,
});
export const loadQuestions = (qList: Question[], total: number) => ({
  payload: {
    loadedQuestions: qList,
    totalCount: total,
  },
  type: LOAD_QUESTION as typeof LOAD_QUESTION,
});
export const addLike = (q: Question) => ({
  payload: {
    targetQuestion: q,
  },
  type: ADD_LIKE as typeof ADD_LIKE,
});

type Actions =
  | ReturnType<typeof addQuestion>
  | ReturnType<typeof loadQuestions>
  | ReturnType<typeof addLike>
  | ReturnType<typeof addReply>;

const questions: Reducer = (state: QuestionList, action: Actions) => {
  switch (action.type) {
    case ADD_QUESTION:
      return new QuestionList(
        [action.payload.newQuestion, ...state.questions],
        state.questions.length + 1
      );
    case LOAD_QUESTION:
      return new QuestionList(
        action.payload.loadedQuestions,
        action.payload.totalCount
      );
    case ADD_LIKE:
      return new QuestionList(
        state.questions.map(q => {
          if (q.question_id === action.payload.targetQuestion.question_id) {
            return addLikeOne(q);
          }
          return q;
        }),
        state.total
      );
    case ADD_REPLY:
      return new QuestionList(
        state.questions.map(q => {
          if (q.question_id === action.payload.newQuestion.question_id) {
            return action.payload.newQuestion;
          }
          return q;
        }),
        state.total
      );
    default:
      // return defaultQuestions;
      return new QuestionList([], 0);
  }
};

const addLikeOne = (q: Question): Question => {
  return new Question(
    q.comment,
    q.question_id,
    q.program_name,
    q.event_name,
    q.done_flg,
    q.display_name,
    q.like_count + 1,
    q.created,
    q.updated,
    q.reply_list,
    q.reply_total
  );
};

export default questions;
