import { Handler } from '@netlify/functions';

export const handler: Handler = (event) => {
  const { name, favoriteColor } = JSON.parse(event.body);

  console.log({ name, favoriteColor });

  return {
    statusCode: 200,
    body: JSON.stringify({
      name,
      favoriteColor,
      message: `My name is ${name} and my favorite color is ${favoriteColor}`,
    }),
  };
};
