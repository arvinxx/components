import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyz', 5);

/**
 * 生成5位随机id
 * @example "8b56а"
 */
export const randomId = () => nanoid();
