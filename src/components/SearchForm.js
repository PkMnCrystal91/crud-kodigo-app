import { useForm } from "../hooks/useForm";

const search = {
  search_title: "",
};

export const SearchForm = ({ onNewSearch }) => {
  const { search_title, onInputChange, onResetForm } = useForm(search);

  const onFormSubmit = (event) => {
    event.preventDefault();
    onNewSearch(search_title);
    onResetForm();
  };
  return (
    <form className="form-outline mt-4 mb-2" onSubmit={onFormSubmit}>
      <input
        type="search"
        placeholder="Search by name"
        className="form-control"
        name="search_title"
        value={search_title}
        onChange={onInputChange}
      />
    </form>
  );
};
