import { useState } from 'react';

const Profile = () => {
  const [previewUrl, setPreviewUrl] = useState('');

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div>
      <input
        type="file"
        id="chooseFile"
        name="chooseFile"
        accept="image/*"
        onChange={handleFileInputChange}
      />
      {previewUrl && <img src={previewUrl} alt="Preview" className='w-1/2' />}
    </div>
  );
};

export default Profile;
