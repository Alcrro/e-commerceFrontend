import InputField from '@/components/ui/auth/FormInput';
import FormLabel from '@/components/ui/auth/FormLabel';
import { FormInput } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';

interface ExtraField {
  name: string;
  label: string;
  type: string;
}

const FormFields = ({
  title,
  extraFields = [],
  extraValues,
  setExtraValues,
  fieldErrors,
}: {
  title: string;
  extraFields: ExtraField[];
  extraValues: Record<string, string>;
  setExtraValues: Dispatch<SetStateAction<Record<string, string>>>;
  fieldErrors: Record<string, string>;
}) => {
  return (
    <div className="flex flex-col gap-4 group-labels">
      {title !== 'login' &&
        extraFields.map((field) => (
          <div
            className={`group_label ${field.name === 'confirmPassword' ? 'order-last' : ''}`}
            key={field.name}
          >
            <FormLabel htmlFor={field.name} description={field.label} />
            <input
              type={field.type}
              name={field.name}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              defaultValue={extraValues[field.name] || ''}
              onChange={(value) =>
                setExtraValues((prev: any) => ({
                  ...prev,
                  [field.name]: value,
                }))
              }
            />
          </div>
        ))}
      <div className="group_label">
        <FormLabel htmlFor="email" description="Email" />
        <input
          id="email"
          className={`w-full p-3 border ${fieldErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 ${fieldErrors.email ? 'focus:ring-red-500' : 'focus:ring-blue-500'}`}
          type="email"
          name="email"
          aria-invalid={!!fieldErrors.email}
          aria-describedby="email-error"
          required
        />
      </div>
      <div className="group_label">
        <FormLabel htmlFor="password" description="Password" />
        <input
          id="password"
          name="password"
          type="password"
          className={`w-full p-3 border ${fieldErrors.password ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 ${fieldErrors.password ? 'focus:ring-red-500' : 'focus:ring-blue-500'}`}
          aria-invalid={!!fieldErrors.password}
          aria-describedby="password-error"
          required
        />
      </div>
    </div>
  );
};

export default FormFields;
