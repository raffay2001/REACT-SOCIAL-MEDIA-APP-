import React from "react";
import { Box } from "@mui/material";
import Post from "./Post";

const IMAGES = [
  {
    authorImage:
      "https://images.unsplash.com/photo-1496360166961-10a51d5f367a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    postImage:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    authorImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    postImage:
      "https://images.unsplash.com/photo-1597733336794-12d05021d510?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    authorImage:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    postImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];

const Feed = () => {
  return (
    <Box sx={{}} flex={4} p={2}>
      <Post
        authorName="Abdul Raffay"
        date="September 25, 2022"
        authorImage={IMAGES[0]["authorImage"]}
        postImage={IMAGES[0]["postImage"]}
      />
      <Post
        authorName="John Doe"
        date="September 23, 2022"
        authorImage={IMAGES[1]["authorImage"]}
        postImage={IMAGES[1]["postImage"]}
      />
      <Post
        authorName="Micheal Jordan"
        date="September 27, 2022"
        authorImage={IMAGES[2]["authorImage"]}
        postImage={IMAGES[2]["postImage"]}
      />
    </Box>
  );
};

export default Feed;
