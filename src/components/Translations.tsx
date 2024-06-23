import { fetchTranslations } from '@/model/testApi';
import { useStore } from '@/store/useStore';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

function Translations() {
  const { setSpinnerImage } = useStore();

  useEffect(() => {
    setSpinnerImage('/spinner1.gif');

    return () => {
      setSpinnerImage('/spinner2.gif');
    };
  }, [setSpinnerImage]);

  const { data, error } = useSuspenseQuery({
    queryKey: ['cats'],
    queryFn: fetchTranslations,
  });

  if (error instanceof Error) return <div>Error: {error.message}</div>;

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

export default Translations;
