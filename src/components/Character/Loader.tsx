export const Loader = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px',
    fontSize: '1.2rem',
    color: 'white',
    fontWeight: 'bold'
  }}>
    <div style={{
      animation: 'spin 1s linear infinite',
      marginRight: '10px',
      fontSize: '1.5rem'
    }}>⭐</div>
    Cargando personajes...
  </div>
);