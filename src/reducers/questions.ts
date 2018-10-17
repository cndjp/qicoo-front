import { Reducer } from "redux";
import {Question} from "../dataelements/question";
import {QuestionList} from "../dataelements/questionList";

const ADD_QUESTION = 'qicoo/question/ADD_QUESTION'
const ADD_LIKE = 'qicoo/question/ADD_LIKE'

export const addQuestion = (q: Question) => ({
    payload: {
        newQuestion: q
    },
    type: ADD_QUESTION as typeof ADD_QUESTION
});
export const addLike = (q: Question) => ({
    payload: {
        favorite: q
    },
    type: ADD_LIKE as typeof ADD_LIKE
});

type Actions = (
    | ReturnType<typeof addQuestion>
    | ReturnType<typeof addLike>
)

const questions:Reducer = (state: QuestionList, action: Actions) => {

    switch (action.type) {
        case ADD_QUESTION:
            return new QuestionList([
                action.payload.newQuestion,
                ...state.questions
            ]);
        case ADD_LIKE:
            const plusone = new QuestionList(
                state.questions.map(
                    (q) => {
                        if (q.id === action.payload.favorite.id){
                            return addLikeOne(q);
                        }
                        return q;
                    }
                )
            );
            return plusone;
        default:
            // return defaultQuestions;
            return new QuestionList([]);
    }
};

const addLikeOne = (q: Question):Question => {
    return new Question(q.comment, q.id, q.username, q.createdAt, new Date(), q.like + 1);
}

export default questions