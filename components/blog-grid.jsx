import BlogCard from "./blog-card";
import allBlogsData from "../public/blogs.json";

export async function getStaticProps() {
  const res = await fetch("blogs.json");
  const allBlogsData = await res.json();
  
  return {
    props: {
      allBlogsData,
    },
  };
}

export default function BlogGrid({}) {
  
    let index = 0;
  return (
      
    <main className="flex justify-center flex-row flex-wrap mx-auto px-8 py-4">
        {allBlogsData.map( ({ imgUrl, blogHeadline, blogContent }) => {
          index++;
          return (<BlogCard
            imgSrc={imgUrl}
            blogContent={blogContent}
            key={index}
            blogHeadline={blogHeadline}
          />);
        })}
    </main>
      
  );
}
