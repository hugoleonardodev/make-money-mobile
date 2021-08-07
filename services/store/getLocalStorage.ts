import STORAGE_OBJECT from '../../common/constants/STORAGE_OBJECT';
import { StorageObject } from './setLocalStorage';

const getLocalStorage = (): StorageObject => {
  const storage = localStorage.getItem('monetusMoney');

  if (!storage) {
    localStorage.setItem('monetusMoney', JSON.stringify(STORAGE_OBJECT));
  }

  const storageBefore = localStorage.getItem('monetusMoney');
  let result: StorageObject;
  if (storageBefore) {
    result = JSON.parse(storageBefore);
  }

  return result;
};

export default getLocalStorage;
