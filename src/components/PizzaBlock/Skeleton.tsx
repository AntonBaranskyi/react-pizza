import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton: React.FC = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={480}
    viewBox="0 0 280 480"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="128" cy="149" r="100" />
    <rect x="13" y="257" rx="15" ry="15" width="226" height="30" />
    <rect x="13" y="296" rx="13" ry="13" width="230" height="74" />
    <rect x="18" y="386" rx="20" ry="20" width="97" height="35" />
    <rect x="132" y="383" rx="12" ry="12" width="116" height="42" />
  </ContentLoader>
);

export default Skeleton;
