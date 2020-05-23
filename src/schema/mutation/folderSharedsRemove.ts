import { FolderTC } from 'app/schema/entities/FolderTC';
import { FieldConfig } from 'app/schema/definitions';
import { FolderID, ContactID } from 'app/schema/types/Scalars';
import { folderUpdate } from 'app/vendor/folder/folderUpdate';
import { FolderInput } from '../types/inputs/FolderInput';

export const FolderUpdateInput = FolderInput.clone('FolderUpdateInput').removeField('shareds');

export default {
  type: FolderTC,
  args: {
    folderId: FolderID.NonNull,
    sharedIds: ContactID.NonNull.List.NonNull,
  },
  resolve: (_, args) => {
    return folderUpdate({
      folderId: args.folderId,
      folder: {
        removeShareds: args.sharedIds,
      },
    });
  },
} as FieldConfig;
