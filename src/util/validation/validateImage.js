/**
 * 이미지 유효성을 검사합니다.
 * @param {File} image - 유효성을 검사할 이미지 파일 객체
 * @throws {Error} - 이미지 크기가 10MB를 초과하거나, 지원되는 확장자가 아닐 때 에러를 throw합니다.
 * @returns {boolean} - 이미지가 유효하면 true를 반환합니다.
 */
export default function validateImage(image) {
  if (!image) {
    return false;
  } else if (image.size > 10 * 1024 * 1024) {
    throw new Error('10MB를 초과하는 이미지는 업로드 할 수 없습니다.');
  } else if (!image.name.match(/(.*)\.(jpg|gif|png|jpeg|bmp|tif|heic)$/i)) {
    throw new Error(
      '이미지 파일(*.jpg, *.gif, *.png, *.jpeg, *.bmp, *.tif, *.heic)만 업로드 할 수 있습니다.',
    );
  } else {
    return true;
  }
}
