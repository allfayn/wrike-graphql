import client from '../client';

export interface RemoveArgs {
  id: string;
}

// https://developers.wrike.com/api/v4/tasks/#delete-tasks
export async function taskRemove(opts: RemoveArgs) {
  const { id } = opts || {};
  if (!id) throw new Error('You should provide task `id`');
  const res = await client.delete(`/tasks/${id}`);
  return res?.data?.data[0];
}