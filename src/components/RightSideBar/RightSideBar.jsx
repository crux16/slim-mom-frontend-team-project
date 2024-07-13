import css from './RightSideBar.module.css';

export const RightSideBar = () => {
  return (
    <div className={css.container}>
      <h2>Summary</h2>
      <ul>
        <li>left</li>
        <li>consumed</li>
        <li>daily rate</li>
        <li>normal</li>
      </ul>

      <h2>Food not recommended</h2>
    </div>
  );
};
