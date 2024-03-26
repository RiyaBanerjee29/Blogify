import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            apiKey="y6qh2ctonablyw9ur7n4bvf6tsc981us6oqu495emiluu2sg"
            initialValue={defaultValue}
            init={{
              initialValue: defaultValue,
              height: 500,
              menubar: true,
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
              ],
              toolbar:
                "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange}

            // onEditorChange is a event, Jab user editor mein kuch likhta hai ya edit karta hai, toh onEditorChange event trigger hota hai
            // aur iske handler function (yahan onChange function) ko call kiya jata hai. Is function mein humare dwara
            // diye gaye react-hook-form ke form state ko update karne ka logic hota hai. Is tarah se, onEditorChange event
            //hume batata hai ki editor mein kuch badla gaya hai, aur onChange function us badlav ko handle karta hai.
          />
        )}
      />
    </div>
  );
}
