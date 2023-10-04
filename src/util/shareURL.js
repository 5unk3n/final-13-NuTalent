const shareURL = (url) => {
  try {
    if (navigator.canShare) {
      navigator.share({
        url: url,
      });
    } else {
      navigator.clipboard.writeText(url);
      alert('URL이 클립보드에 복사되었습니다.');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default shareURL;
