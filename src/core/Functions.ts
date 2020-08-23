export const convertIsoToDate = (isoDate: string) => {
  const date = new Date(isoDate);
  const year = date.getFullYear();
  let month: string | number = date.getMonth() + 1;
  let dt: string | number = date.getDate();

  if (dt < 10) {
    dt = '0' + dt;
  }

  if (month < 10) {
    month = '0' + month;
  }

  return `${dt}.${month}.${year}`
}


export const createFormData = (payload: object) => {
  const data = new FormData();

  Object.keys(payload).forEach(key => {
    // @ts-ignore
    data.append(key, payload[key]);
  });

  return data;
}
