import { TaskTC } from 'app/schema/entities/TaskTC';
import { FieldConfig } from 'app/schema/definitions';
import { TaskID } from 'app/schema/types/Scalars';
import { remove, TaskRemoveArgs } from 'app/vendor/task/remove';

export default {
  type: TaskTC,
  args: {
    id: TaskID.NonNull,
  },
  resolve: (_, args) => {
    return remove(args);
  },
} as FieldConfig<TaskRemoveArgs>;