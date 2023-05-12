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
    <form method="post" enctype="multipart/form-data">
      <input
        type="file"
        id="chooseFile"
        name="chooseFile"
        accept="image/*"
        onChange={handleFileInputChange}
      />
      {previewUrl && <img src={previewUrl} alt="Preview" />}
    </form>
  );
};

export default Profile;
