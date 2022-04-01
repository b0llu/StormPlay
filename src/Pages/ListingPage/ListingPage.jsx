import "./ListingPage.css";
import { useState } from "react";
import { CategoryBar } from "./ListingPageComponents/CategoryBar/CategoryBar";
import { VideoListing } from "./ListingPageComponents/VideoListing/VideoListing";
import { useSearchParams } from "react-router-dom";
import { useDocTitle } from "../../Hook/useTitle";

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
