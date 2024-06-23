import ContentLoader from 'react-content-loader';

function SkeletonLoader() {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={160}
      viewBox="0 0 400 160"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      {/* Title */}
      <rect x="0" y="0" rx="5" ry="5" width="100" height="20" />

      {/* First row */}
      <rect x="0" y="40" rx="5" ry="5" width="50" height="50" />
      <rect x="60" y="55" rx="5" ry="5" width="100" height="20" />

      {/* Second row */}
      <rect x="0" y="100" rx="5" ry="5" width="50" height="50" />
      <rect x="60" y="115" rx="5" ry="5" width="100" height="20" />
    </ContentLoader>
  );
}

export default SkeletonLoader;
