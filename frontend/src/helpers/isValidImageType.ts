type ImageFileTypes = 'jpg' | 'gif' | 'png' | 'jpeg' | 'svg' | 'webp';

const validFileExtensions = { image: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp'] };

const isValidImageType = (fileName: string) => {
   return fileName && validFileExtensions.image.indexOf(fileName?.split('.').pop()) > -1
}

export default isValidImageType;