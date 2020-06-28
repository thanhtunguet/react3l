import {IMAGE_JPEG} from 'config';

export function base64ToDataURL(base64: string, mimeType = IMAGE_JPEG) {
  return `data:${mimeType};base64,${base64}`;
}

export function stringToUint8Array(str: string): Uint8Array {
  const {length} = str;
  const array: Uint8Array = new Uint8Array(new ArrayBuffer(length));
  for (let i = 0; i < length; i++) array[i] = str.charCodeAt(i);
  return array;
}

export default {
  base64ToDataURL,
  stringToUint8Array,
};
