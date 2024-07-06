import { useState } from 'react';

export default function MyForm({ setData, data }) {
  const [form, setForm] = useState({
    fname: '',
    lname: '',
    email: '',
  });

  const [err, setErr] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmailUnique = data.find((el) => el.email === form.email);

    if (isEmailUnique === undefined) {
      setData([...data, form]);
      setErr('');
      setForm({ fname: '', lname: '', email: '' });
    } else {
      setErr('email already exist');
    }
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='fname'>Enter your first name:</label>
        <input
          id='fname'
          type='text'
          value={form.fname}
          name='fname'
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='lName'>Enter your last name:</label>
        <input
          id='lName'
          type='text'
          value={form.lname}
          name='lname'
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='email'>Enter your email:</label>
        <input
          id='email'
          type='email'
          value={form.email}
          name='email'
          onChange={handleChange}
        />
        {err && <span>{err}</span>}
      </div>
      <button>submit</button>{' '}
    </form>
  );
}
