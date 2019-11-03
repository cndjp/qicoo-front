import { Dispatch } from 'redux';
import axios, { AxiosResponse } from 'axios';

import { Question } from '../dataelements/question';
import QuestionListInJson from '../dataelements/questionListInJson';
import {
  addQuestion,
  addLike,
  loadQuestions,
  addReply,
} from '../reducers/questions';
import { NewReply } from 'src/dataelements/newReply';
import { NewQuestion } from 'src/dataelements/newQuestion';
import { IncrementLikeResponse } from 'src/dataelements/incrLikeResponse';

const BASE_URL = 'http://localhost:8081';
const TIMEOUT = 30 * 1000;

export async function postQuestion(dispatch: Dispatch, q: NewQuestion) {
  axios
    .post(BASE_URL + '/api/v1/questions', q, { timeout: TIMEOUT })
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

export async function postReply(dispatch: Dispatch, r: NewReply) {
  axios
    .post(BASE_URL + '/api/v1/questions/reply', r, { timeout: TIMEOUT })
    .then((res: AxiosResponse) => {
      const httpStatus = res.status;
      if (200 <= httpStatus && httpStatus <= 299) {
        dispatch(addReply(res.data));
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
    .put(
      BASE_URL + '/api/v1/questions/like',
      { question_id: q.question_id },
      { timeout: TIMEOUT }
    )
    .then((res: AxiosResponse<IncrementLikeResponse>) => {
      const httpStatus = res.status;
      if (200 <= httpStatus && httpStatus <= 299) {
        dispatch(
          addLike(
            new Question(
              q.comment,
              q.question_id,
              q.program_name,
              q.event_name,
              q.done_flg,
              q.display_name,
              res.data.like_count,
              q.created,
              q.updated,
              q.reply_list,
              q.reply_total
            )
          )
        );
      } else {
        console.warn('http status code in PUT response: ' + httpStatus);
      }
    });
}

export async function getQuestionList(
  per: number,
  page: number,
  sort: string,
  dispatch: Dispatch
) {
  axios
    .get(BASE_URL + '/api/v1/questions', {
      params: {
        per,
        page,
        sort,
        order: 'desc',
      },
      transformResponse: res => {
        return JSON.parse(res, (k, v) => {
          if (k === 'created_at' || k === 'updated_at') {
            return new Date(v);
          }
          return v;
        });
      },
    })
    .then((res: AxiosResponse<QuestionListInJson>) => {
      if (res.status === 200 && res.data.value !== null) {
        dispatch(loadQuestions(res.data.value, res.data.total));
      } else {
        console.warn('http status code in POST response: ' + res.status);
      }
    })
    .catch((err: AxiosResponse) => {
      console.error(err);
    });
}
