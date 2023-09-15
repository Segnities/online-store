export const validFileExtensions = { image: ['jpg', 'png', 'jpeg', 'webp'] };

export function isValidFileType(fileName:string, fileType:string) {
   return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
}
