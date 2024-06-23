import { fetchTranslations } from '@/model/testApi';
import { useStore } from '@/store/useStore';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import RetryErrorBoundary from './error/RetryErrorBoundary';

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
          <li key={cat.id}>
            <img src={cat.url} alt={cat.id} />
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
    <Translations />
  </RetryErrorBoundary>
);
