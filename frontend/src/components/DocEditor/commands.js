import { defineAsyncComponent } from "vue";

/* Icons */
import {
  Link,
  Strikethrough,
  Bold,
  Underline,
  Italic,
  Link2,
  MessageCirclePlus,
} from "lucide-vue-next";

export default {
  Bold: {
    label: "Bold",
    icon: Bold,
    action: (editor) => editor.chain().focus().toggleBold().run(),
    isActive: (editor) => editor.isActive("bold"),
  },
  Italic: {
    label: "Italic",
    icon: Italic,
    action: (editor) => editor.chain().focus().toggleItalic().run(),
    isActive: (editor) => editor.isActive("italic"),
  },
  Underline: {
    label: "Underline",
    icon: Underline,
    action: (editor) => editor.chain().focus().toggleUnderline().run(),
    isActive: (editor) => editor.isActive("underline"),
  },
  Strikethrough: {
    label: "Strikethrough",
    icon: Strikethrough,
    action: (editor) => editor.chain().focus().toggleStrike().run(),
    isActive: (editor) => editor.isActive("strike"),
  },
  Link: {
    label: "Link",
    icon: Link2,
    isActive: (editor) => editor.isActive("link"),
    component: defineAsyncComponent(() => import("./InsertLink.vue")),
  },
  Separator: {
    type: "separator",
  },
  "New Comment": {
    label: "New Comment",
    icon: MessageCirclePlus,
    action: "emitToggleCommentMenu",
    isActive: (editor) => editor.isActive("comment"),
  },
};
