import { resourceList } from './resourcesList';
// import '../../css/main.css';

export let allResources = {};
fetch('./data/data.json')
  .then((response) => response.json())
  .then((data) => {
    allResources = data;
    console.log(data);

    resourceList();
  })
  .catch((error) => {
    (console.error('No data found'), error);
  });
