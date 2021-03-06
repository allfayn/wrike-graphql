import DataLoader from 'dataloader';
import { workScheduleFindMany } from 'app/vendor/workSchedule/workScheduleFindMany';
import { GraphQLResolveInfo } from 'graphql';

export function workScheduleDLG(context: any, info: GraphQLResolveInfo) {
  return new DataLoader<string, any>(async (ids) => {
    const results = await workScheduleFindMany({ info }, context);
    return ids.map(
      (id) => results.find((x) => x.id === id) || new Error(`WorkSchedule: no result for ${id}`)
    );
  });
}
