import React from 'react';

function Image(props) {
  const styles = {
    image: {
      width: '100%',
      maxWidth: '300px',
      height: 'auto',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      margin: '10px 0',
      position: 'absolute',
      top: '60%', // Posicionar en el centro vertical
      left: '50%', // Posicionar en el centro horizontal
      transform: 'translate(-50%, -50%)', // Ajustar el punto de referencia al centro
    },
    container: {
      textAlign: 'center',
    },
    caption: {
      fontSize: '14px',
      color: '#555',
      marginTop: '5px',
    },
  };

  return (
    <div style={styles.container}>
      {props.url ? (
        <img
          src={props.url}
          alt={props.alt || 'Imagen no disponible'}
          style={styles.image}
        />
      ) : (
        <p>Imagen no disponible</p>
      )}
      {props.caption && <p style={styles.caption}>{props.caption}</p>}
    </div>
  );
}

export default Image;