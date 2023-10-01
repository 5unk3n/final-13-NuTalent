import imageCompression from 'browser-image-compression';

const compressImage = async (
  image,
  options = {
    maxSizeMB: 0.9,
    maxWidthOrHeight: 490,
    useWebWorker: true,
  },
) => {
  try {
    const compressedImage = await imageCompression(image, options);
    const fileName = compressedImage.name;
    const formattedImage = new File([compressedImage], fileName, {
      type: 'image/jpeg',
    });
    return formattedImage;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default compressImage;
