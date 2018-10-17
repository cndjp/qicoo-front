import { Dispatch } from 'redux';
import axios, { AxiosResponse } from 'axios';

import { Question } from '../dataelements/question';
import QuestionListInJson from '../dataelements/questionListInJson';
import { addQuestion, loadQuestions } from '../reducers/questions';

const BASE_URL = 'BASE_URL_TO_BE_REPLACED';
const TIMEOUT = 30;

export async function postQuestion(dispatch: Dispatch, q: Question) {
  axios
    .post(BASE_URL + '/questions', q, { timeout: TIMEOUT })
    .then((res: AxiosResponse) => {
      const httpStatus = res.status;
      if (200 <= httpStatus && httpStatus <= 299) {
        dispatch(addQuestion(q));
      } else {
        console.warn('http status code in POST response: ' + httpStatus);
      }
    })
    .catch((err: AxiosResponse) => {
      console.error(err);
    });
}

export async function getQuestionList(dispatch: Dispatch) {
  axios
    .get(BASE_URL + '/questions')
    .then((res: AxiosResponse<QuestionListInJson>) => {
      if (res.status === 200) {
        dispatch(loadQuestions(res.data.data));
      } else {
        console.warn('http status code in POST response: ' + res.status);
      }
    })
    .catch((err: AxiosResponse) => {
      console.error(err);
    });
}
