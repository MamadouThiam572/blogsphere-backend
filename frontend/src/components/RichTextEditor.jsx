import React, { useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Importez le thème CSS "Snow"

const RichTextEditor = ({ value, onChange, placeholder }) => {
  // Configuration des modules et des formats de l'éditeur
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }], // Styles de titres
      ['bold', 'italic', 'underline', 'strike'], // Mise en forme de base
      ['blockquote', 'code-block'], // Blocs spéciaux
      [{ 'list': 'ordered'}, { 'list': 'bullet' }], // Listes
      ['link', 'image'], // Liens et images
      ['clean'] // Nettoyer la mise en forme
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'blockquote', 'code-block',
    'list', 'bullet',
    'link', 'image'
  ];

  return (
    <div>
      <ReactQuill
        theme="snow" // Thème "snow" avec une toolbar
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder || "Rédigez votre article ici..."}
        className="bg-white rounded-lg" // Styles Tailwind pour le conteneur
      />
    </div>
  );
};

export default RichTextEditor;