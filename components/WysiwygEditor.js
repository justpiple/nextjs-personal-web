import '@toast-ui/editor/dist/toastui-editor.css'
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css'
import 'tui-color-picker/dist/tui-color-picker.css'
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css'
import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import "tui-editor-plugin-font-size/dist/tui-editor-plugin-font-size.css";
import { Editor } from '@toast-ui/react-editor'
import colorSyntax from '@toast-ui/editor-plugin-color-syntax'
import fontSize from "tui-editor-plugin-font-size";
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all.js';
import React from 'react'

function WysiwygEditor({ editorRef, initialValue }) {
  const toolbarItems = [['heading', 'bold', 'italic', 'strike'], ['hr'], ['ul', 'ol', 'task'], ['table', 'link'], ['image'], ['code'], ['scrollSync'],]
  const blobToBase64 = blob => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    return new Promise(resolve => {
      reader.onloadend = () => {
        resolve(reader.result);
      };
    });
  };
  async function uploadImage(blob) {
    return new Promise(function (resolve, reject) {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', '/api/upload', true);
      xhr.responseType = 'json';
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      blobToBase64(blob).then((base64) => {
        xhr.send(JSON.stringify({ upload: base64 }));
      })
      xhr.addEventListener('load', () => {
        const response = xhr.response;
        if (!response || response.error) {
          return reject(genericErrorText);
        }

        resolve({
          default: response.url
        });
      });
    })
  }
  return (
    <Editor ref={editorRef} initialValue={initialValue}
      initialEditType='markdown' // wysiwyg & markdown 
      height='700px'
      theme={''} // '' & 'dark' 
      usageStatistics={false}
      toolbarItems={toolbarItems}
      hooks={{
        addImageBlobHook: (blob, callback) => {
          uploadImage(blob)
            .then(response => {
              // if (!response.success) {
              //   throw new Error('Validation error');
              // }

              callback(response.default, 'Uploaded media');
            }).catch(error => {
              console.log(error);
            });
        },
      }}
      plugins={[colorSyntax, codeSyntaxHighlight, fontSize]}
    />
  )

}
export default React.forwardRef(WysiwygEditor)