const shareURL = (url) => {
  try {
    if (navigator.canShare) {
      navigator.share({
        url: url,
      });
    } else {
      navigator.clipboard.writeText(url);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default shareURL;
