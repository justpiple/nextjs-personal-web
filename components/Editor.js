import dynamic from 'next/dynamic';
import React, { useRef } from 'react';
import { EditorProps } from '@toast-ui/react-editor';

const Editor = dynamic < EditorProps > (() => import('@toast-ui/react-editor')
  .then(m => m.Editor), { ssr: false });

const ToastEditorComponent = () => {
  const editorRef = useRef(null);
  console.log(editorRef.current); // {retry: ƒ}

  return (
    <Editor
      initialValue="hello react editor world!"
      previewStyle="vertical"
      height="600px"
      initialEditType="markdown"
      useCommandShortcut={true}
      ref={editorRef}
    />
  )
}

export default ToastEditorComponent;