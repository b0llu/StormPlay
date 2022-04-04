import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDocTitle } from "../../Hook/useTitle";
import { CategoryBar, VideoListing } from "./ListingPageComponents";

export const ListingPage = () => {
  const [searchParams] = useSearchParams();
  const categoryName = searchParams.get("category");
  const [category, setCategory] = useState(categoryName);
  useDocTitle("Videos | StormPlay");

  return (
    <section>
      <CategoryBar category={category} setCategory={setCategory} />
      <VideoListing category={category} />
    </section>
  );
};
