
import { useState,useEffect } from "react";

import dynamic from "next/dynamic";
import {useEditor, EditorContent} from "@tiptap/react";
import StarterKit from '@tiptap/starter-kit';

const Editor = () => {
  const edit = useEditor({
    extensions:[
      StarterKit,
    ],
    content:'<p>Hellow World 🌍🌍🌍</p>'
  })

  return(
    <EditorContent editor = {edit} />
  )
}

export default Editor;