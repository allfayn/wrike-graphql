import client from '../client';
import { AxiosRequestConfig } from 'axios';

export interface RemoveArgs {
  id: string;
}

// https://developers.wrike.com/api/v4/comments/#delete-comment
export async function commentRemove(opts: RemoveArgs, context: AxiosRequestConfig) {
  const { id } = opts || {};
  if (!id) throw new Error('You should provide `id`');
  const res = await client.delete(`/comments/${id}`, context);
  return res?.data?.data[0];
}
