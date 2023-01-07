import '@toast-ui/editor/dist/toastui-editor.css'
import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import { Viewer } from '@toast-ui/react-editor'
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all.js';
import React from 'react'

function WysiwygEditor({ content, viewerRef }) {
  // const viewerRef = React.useRef()
  return (
    <Viewer ref={viewerRef} initialValue={content.post}
      height='100%'
      plugins={[codeSyntaxHighlight]}
    />
  )

}
export default React.forwardRef(WysiwygEditor)