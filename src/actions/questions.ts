import { Dispatch } from 'redux';
import axios, { AxiosResponse } from 'axios';

import { Question } from '../dataelements/question';
import QuestionListInJson from '../dataelements/questionListInJson';
import { addQuestion, addLike, loadQuestions } from '../reducers/questions';

const BASE_URL = 'BASE_URL_TO_BE_REPLACED';
const TIMEOUT = 30 * 1000;

export async function postQuestion(dispatch: Dispatch, q: Question) {
  axios
    .post(BASE_URL + '/questions', q, { timeout: TIMEOUT })
    .then((res: AxiosResponse) => {
      const httpStatus = res.status;
      if (200 <= httpStatus && httpStatus <= 299) {
        dispatch(addQuestion(res.data));
      } else {
        console.warn('http status code in POST response: ' + httpStatus);
      }
    })
    .catch((err: AxiosResponse) => {
      console.error(err);
    });
}

export async function putLike(dispatch: Dispatch, q: Question) {
  axios
  .put(BASE_URL + '/questions/' + q.id + '/like', null, {timeout: TIMEOUT})
  .then((res: AxiosResponse) => {
    const httpStatus = res.status;
    if (200 <= httpStatus && httpStatus <= 299) {
      dispatch(addLike(q));
    } else {
      console.warn('http status code in PUT response: ' + httpStatus);
    }
  });
}

export async function getQuestionList(begin: number, end: number, sort: string, dispatch: Dispatch) {
  axios
    .get(BASE_URL + "/questions", {
      params: {
        start: begin,
        end,
        sort,
        order: "desc"
      },
      transformResponse: (res) => {
        return JSON.parse(res, (k, v)=>{
          if (k === 'created_at' || k === 'updated_at') {
            return new Date(v)
          }
          return v;
        });
      }
    })
    .then((res: AxiosResponse<QuestionListInJson>) => {
      if (res.status === 200 && res.data.data !== null) {
        dispatch(loadQuestions(res.data.data, res.data.total));
      } else {
        console.warn('http status code in POST response: ' + res.status);
      }
    })
    .catch((err: AxiosResponse) => {
      console.error(err);
    });
}
