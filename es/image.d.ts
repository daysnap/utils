export declare const toBase64: (blob: Blob) => Promise<FileReader>;
export declare const toFile: (base64: string, contentType?: string) => Blob;
declare const _default: {
    toBase64: (blob: Blob) => Promise<FileReader>;
    toFile: (base64: string, contentType?: string) => Blob;
};
export default _default;
