/**
 * canvas 转 blob 文件
 */
export function canvasToBlob(
  canvas: HTMLCanvasElement,
  type?: string,
  quality?: any,
) {
  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (data) =>
        data ? resolve(data) : reject(new Error('canvas toBlob is null')),
      type,
      quality,
    )
  })
}
