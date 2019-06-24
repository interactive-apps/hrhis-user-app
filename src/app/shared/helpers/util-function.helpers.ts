export function makeLocalUid() {
    let text = '';
    const possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 11; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

export function removeArrayObjects(sourceArray: any[], toRemoveObjects: any[], keyUsed: string) {
    for (var i = sourceArray.length - 1; i >= 0; i--) {
      for (var j = 0; j < toRemoveObjects.length; j++) {
        if (sourceArray[i] && (sourceArray[i][keyUsed] === toRemoveObjects[j][keyUsed])) {
          sourceArray.splice(i, 1);
        }
      }
    }
    return sourceArray;
}
