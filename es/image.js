export var toBase64 = function toBase64(blob) {
  return new Promise(function (resolve, reject) {
    var fileReader = new FileReader();
    fileReader.readAsDataURL(blob);

    fileReader.onload = function (res) {
      return resolve(fileReader);
    };

    fileReader.onerror = reject;
  });
};
export var toFile = function toFile(base64, contentType) {
  var binaryString = window.atob(base64.split(',')[1]);
  var arrayBuffer = new ArrayBuffer(binaryString.length);
  var uint8Array = new Uint8Array(arrayBuffer);

  for (var i = 0, len = binaryString.length; i < len; i++) {
    uint8Array[i] = binaryString.charCodeAt(i);
  }

  var blob;

  try {
    blob = new Blob([uint8Array]);
  } catch (e) {
    if (e.name === 'TypeError') {
      var win = window;
      var BlobBuilder = win.BlobBuilder || win.WebKitBlobBuilder || win.MozBlobBuilder || win.MSBlobBuilder;

      if (BlobBuilder) {
        var blobBuilder = new BlobBuilder();
        blobBuilder.append(arrayBuffer);
        blob = blobBuilder.getBlob(contentType);
      }
    } else {
      throw new Error('版本过低');
    }
  }

  return blob;
};
export default {
  toBase64: toBase64,
  toFile: toFile
};