import ProfileModal from '@/app/profile/modal/ProfileModal';
import ModalElement from '@/app/profile/modal/ModalElement';
import { getByIdAddressApi } from '@/service/addressApi';
import AddressForm from '@/app/profile/modal/forms/address/AddressForm';

const page = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const slug = (await params).slug;

  const id = slug[slug.length - 1];
  const address = await getByIdAddressApi(id);

  if (!address?.data) {
    return null;
  }

  const { phoneNumber, ...restAddress } = address.data;

  const phoneCode = phoneNumber.split(' ')[0];

  const phoneNoWIthoutPC = phoneNumber.split(' ')[1];
  // Regular expression to check for edit, delete, or update with a dynamic part
  const regex = /^(edit|delete|update)-\w+$/;

  // Extract and return just the methods (edit, delete, update)
  const methods = slug
    .filter((item) => regex.test(item))
    .map((item) => item.split('-')[0])
    .join(', '); // Get the part before the '-'

  // If any methods exist, return them
  console.log('Matching methods:', methods); // ["edit", "delete", "update"]

  return (
    <ProfileModal>
      <ModalElement>
        <AddressForm
          address={{ ...restAddress, phoneCode, phoneNoWIthoutPC }}
        />
      </ModalElement>
    </ProfileModal>
  );
};

export default page;
