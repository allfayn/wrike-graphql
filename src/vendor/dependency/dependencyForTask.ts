import client from '../client';
import { AxiosRequestConfig } from 'axios';

export type FindOpts = {
  taskId: string;
};

// https://developers.wrike.com/api/v4/dependencies/#query-dependencies
export async function dependencyForTask(opts: FindOpts, context: AxiosRequestConfig) {
  const { taskId } = opts || {};

  const res = await client.get(`/tasks/${taskId}/dependencies`, context);

  return res?.data?.data;
}
