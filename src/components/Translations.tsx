import { fetchTranslations } from '@/model/testApi';
import { useStore } from '@/store/useStore';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Suspense, useEffect } from 'react';
import RetryErrorBoundary from './error/RetryErrorBoundary';
import SkeletonLoader from './skeleton/SkeletonLoader';

function Translations() {
  const { setSpinnerImage } = useStore();

  useEffect(() => {
    setSpinnerImage('/spinner1.gif');

    return () => {
      setSpinnerImage('/spinner2.gif');
    };
  }, [setSpinnerImage]);

  const { data } = useSuspenseQuery({
    queryKey: ['cats'],
    queryFn: fetchTranslations,
  });

  return (
    <div>
      <h1>Translations</h1>
      <ul>
        {data?.map((cat) => (
          <li
            key={cat.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px',
            }}
          >
            <img
              src={cat.url}
              alt={cat.id}
              style={{ width: '50px', height: '50px', marginRight: '10px' }}
            />
            <span>
              {cat.width} * {cat.height}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default () => (
  <RetryErrorBoundary>
    <Suspense fallback={<SkeletonLoader />}>
      <Translations />
    </Suspense>
  </RetryErrorBoundary>
);
