import { FieldConfig } from 'app/schema/definitions';
import { CustomFieldInput } from '../types/inputs/CustomFieldInput';
import { customFieldCreate, CreateArgs } from 'app/vendor/customfields/customFieldCreate';
import { CustomFieldTC } from '../entities/CustomFieldTC';

export const CustomFieldCreateInput = CustomFieldInput.clone(
  'CustomFieldCreateInput'
).makeRequired(['title', 'type']);

export default {
  type: CustomFieldTC,
  args: {
    customField: CustomFieldCreateInput.NonNull,
  },
  resolve: (_, args) => {
    return customFieldCreate(args);
  },
} as FieldConfig<CreateArgs>;
