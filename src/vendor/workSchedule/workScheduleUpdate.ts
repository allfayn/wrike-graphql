import client from '../client';
import { GraphQLResolveInfo } from 'graphql';
import { getFlatProjectionFromAST } from 'graphql-compose';
import { AxiosRequestConfig } from 'axios';

export const projectionFields = ['userIds'] as const;

export type _UpdateArgs = {
  id: string;
  workschedule: Record<string, any>;
  projection?: typeof projectionFields[number][];
};

export type UpdateArgs = Exclude<_UpdateArgs, 'projection'> & { info: GraphQLResolveInfo };

// https://developers.wrike.com/api/v4/work-schedules/#update-work-schedule
export async function _workScheduleUpdate(opts: _UpdateArgs, context: AxiosRequestConfig) {
  const { id, workschedule, projection } = opts || {};

  const params: Record<string, any> = workschedule || {};
  if (projection) {
    if (projection.length > 0) params.fields = projection;
  }

  if (!id) throw new Error('You should provide `id`');
  const res = await client.put(`/workschedules/${id}`, params, context);

  return res?.data?.data[0];
}

export function workScheduleUpdate(opts: UpdateArgs, context: AxiosRequestConfig) {
  const requestedFields = Object.keys(getFlatProjectionFromAST(opts.info));
  const projection = projectionFields.filter((n) => requestedFields.includes(n));
  return _workScheduleUpdate({ ...opts, projection }, context);
}
