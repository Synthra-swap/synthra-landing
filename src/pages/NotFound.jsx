import React from "react";
import SEO from "../components/SEO";
import { NotFoundPage } from "../components/ui/not-found-page-2";

export default function NotFound() {
  return (
    <>
      <SEO
        title="404 — Page Not Found"
        description="The page you are looking for does not exist on Synthra."
        path="/404"
      />
      <NotFoundPage />
    </>
  );
}
