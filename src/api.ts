import { fetchData } from './data';

async function getData() {
  const data = await fetchData();
  return data;
}

export { getData };
