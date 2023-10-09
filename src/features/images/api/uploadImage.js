import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

import { useToast } from '@/hooks/useModal';
import instance from '@/libs/axios';
import compressImage from '@/util/compressImage';
import validateImage from '@/util/validation/validateImage';

const uploadImage = async (imageFile) => {
  const formData = new FormData();
  formData.append('image', imageFile);

  const res = await instance.post('/image/uploadfile', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  const uploadedImage = `${res.config.baseURL}/${res.data.filename}`;

  return uploadedImage;
};

export const useUploadImage = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const { openToast } = useToast();

  const mutation = useMutation({
    mutationFn: (file) => uploadImage(file),
    onSuccess: (uploadedImage) => setUploadedImage(uploadedImage),
  });

  const handleImageChange = async (e) => {
    const image = e.target.files[0];

    try {
      if (!validateImage(image)) return;
      const compressedImage = await compressImage(image);
      mutation.mutate(compressedImage);
    } catch (error) {
      openToast({ message: error.message, status: 'error' });
    }
  };

  return { uploadedImage, handleImageChange };
};
