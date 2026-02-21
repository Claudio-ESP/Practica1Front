export const ErrorMessage = ({ message }: { message: string }) => (
  <div style={{
    backgroundColor: '#ff6b6b',
    color: 'white',
    padding: '20px',
    borderRadius: '8px',
    margin: '20px 0',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '1.1rem',
    boxShadow: '0 4px 15px rgba(255, 107, 107, 0.3)'
  }}>
    ⚠️ {message}
  </div>
);