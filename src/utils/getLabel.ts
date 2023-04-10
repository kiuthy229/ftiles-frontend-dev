export function getLabel(object: any, id: any) {
  return object.find(function(data: any) {
    return data.id === id;
  });
}
