import { Cats, fetchTranslations } from '@/model/testApi';
import { useQuery } from '@tanstack/react-query';

function Translations() {
  const { data, error, isLoading } = useQuery<Cats[]>({
    queryKey: ['cats'],
    queryFn: fetchTranslations,
  });

  if (isLoading) return <div>Loading...</div>;
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
