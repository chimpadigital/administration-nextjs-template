import { BlogI } from "@/models/blog";
import React from "react";
const columns = [
  {name: "TITLE", uid: "title"},
  {name: "PUBLISH DATE", uid: "published_at"},
  {name: "STATUS", uid: "status"},
  {name: "ACTIONS", uid: "actions"},
];

const blogs:BlogI[] = [
  {
    id: 1,
    title: "Lorem ipsum",
    status: "draft",
    created_at: "---",
    published_at: "07/08/2024"
  },
  {
    id: 2,
    title: "Lorem ipsum 2",
    status: "paused",
    created_at: "---",
    published_at: "04/04/2024"
  },
  {
    id: 3,
    title: "Lorem ipsum 3",
    status: "published",
    created_at: "---",
    published_at: "04/04/2024"
  },
  
];

export {columns, blogs};