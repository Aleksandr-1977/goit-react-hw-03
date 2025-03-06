import css from './Contacts.module.css';

const Contacts = ({ contact: { name, number } }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button">Delete</button>
    </div>
  );
};
export default Contacts;
