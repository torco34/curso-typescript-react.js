import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface Iprosp {
  value: string,
  onChange: (content: string) => void, // Declarar onChange como una función que toma un string
}

export const Editar = ({ value, onChange }: Iprosp) => {
  return (
    <>
      <ReactQuill
        value={value}
        onChange={onChange}
        placeholder="Escribe tu texto aquí..."
        modules={{
          toolbar: [
            [{ header: [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
            ['clean'],
          ],
        }}
      />
    </>
  );
};
