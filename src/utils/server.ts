export const json = async (obj: any, status: number) => {
  return new Response(JSON.stringify(obj), {
    status,
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  });
};
