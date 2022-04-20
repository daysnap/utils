export default function pick<T extends object, K extends keyof T>(obj: T, fields?: K[]): Pick<T, K>;
