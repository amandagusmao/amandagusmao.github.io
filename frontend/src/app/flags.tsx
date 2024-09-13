import { unstable_flag as flag } from '@vercel/flags/dist/next';
export const blackFridayFlag = flag({
  key: 'black-friday',
decide: () => process.env.BLACK_FRIDAY_FLAG === '1',
});
