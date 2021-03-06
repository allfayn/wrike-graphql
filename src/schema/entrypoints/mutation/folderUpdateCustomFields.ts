import { FolderTC } from 'app/schema/entities/FolderTC';
import { FieldConfig } from 'app/schema/definitions';
import { FolderID } from 'app/schema/types/Scalars';
import { folderUpdateMany } from 'app/vendor/folder/folderUpdateMany';
import { CustomFieldValueInput } from 'app/schema/types/inputs/CustomFieldValueInput';

export default {
  type: FolderTC,
  args: {
    folderIds: FolderID.NonNull.List.NonNull,
    customFields: CustomFieldValueInput.NonNull.List.NonNull,
  },
  resolve: (_, args, context) => {
    return folderUpdateMany(
      {
        folderIds: args.folderIds,
        folder: {
          customFields: args.customFields,
        },
      },
      context
    );
  },
} as FieldConfig;
