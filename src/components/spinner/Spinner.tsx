interface SpinnerProps {
  imageUrl: string;
}

function Spinner({ imageUrl }: SpinnerProps) {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <img
        src={imageUrl}
        alt="Loading..."
        style={{ width: '100px', height: '100px' }}
      />
    </div>
  );
}

export default Spinner;
