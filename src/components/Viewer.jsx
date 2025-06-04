import { generateHTML } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";
import { TaskItem } from "@tiptap/extension-task-item";
import { TaskList } from "@tiptap/extension-task-list";
import { TextAlign } from "@tiptap/extension-text-align";
import { Typography } from "@tiptap/extension-typography";
import { Highlight } from "@tiptap/extension-highlight";
import { Subscript } from "@tiptap/extension-subscript";
import { Superscript } from "@tiptap/extension-superscript";
import { Underline } from "@tiptap/extension-underline";
import { Link } from "@tiptap/extension-link";
import dompurify from "dompurify";

function Viewer({ article }) {
  const rawHtml = generateHTML(article, [
    StarterKit,
    TaskItem,
    TaskList,
    TextAlign.configure({ types: ["heading", "paragraph"] }),
    Typography,
    Highlight,
    Subscript,
    Superscript,
    Underline,
    Link,
  ]);
  return (
    <div dangerouslySetInnerHTML={{ __html: dompurify.sanitize(rawHtml) }} />
  );
}
export default Viewer;
