// import s from './Modal.module.css';
const ListWithScroll = props => {
  return (
    <ol style={props.style}>
      {props.array.map(listItem => (
        <li key={listItem._id}>
          {listItem.title}
        </li>
      ))}
    </ol>
  );
};

export default ListWithScroll;
