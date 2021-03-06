import { GroupTC } from 'app/schema/entities/GroupTC';
import { FieldConfig } from 'app/schema/definitions';
import { GroupID } from 'app/schema/types/Scalars';
import { groupUpdate, UpdateArgs } from 'app/vendor/group/groupUpdate';
import { GroupCreateInput } from './groupCreate';

export const GroupUpdateInput = GroupCreateInput.clone('GroupUpdateInput')
  .removeField('members')
  .makeFieldNullable('title');

export default {
  type: GroupTC,
  args: {
    id: GroupID.NonNull,
    group: GroupUpdateInput.NonNull,
  },
  resolve: (_, args, context) => {
    return groupUpdate(args, context);
  },
} as FieldConfig<UpdateArgs>;
