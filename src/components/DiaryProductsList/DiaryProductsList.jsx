import DiaryListItem from '../DiaryProductsListItem/DiaryProductsListItem';
import style from './DiaryProductsList.module.css';
import { useDispatch } from 'react-redux';
import { deleteDiaryEntry } from '../../redux/diary/diaryOperations';
import List from '@mui/material/List';
import { useUser } from 'hooks/useUser';

function DiaryProductsList() {
  const dispatch = useDispatch();
  const { calendarDate, diaryList } = useUser();
  function handleDelete(entryId) {
    const formatDate = calendarDate.replaceAll('/', '-');
    dispatch(deleteDiaryEntry({ formatDate, entryId }));
  }
  return (
    <>
      {diaryList.length < 1 ? (
        <p>No Entires for this day</p>
      ) : (
        <List className={style.productList}>
          {diaryList.map((item, index) => (
            <DiaryListItem
              key={`${item._id}-${index}`}
              product={item}
              handleDelete={handleDelete}
            />
          ))}
        </List>
      )}
    </>
  );
}

export default DiaryProductsList;
