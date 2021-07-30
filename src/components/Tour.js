function Tour({ items }) {
  console.log("props:", items);
  return (
    <div className='tour-container'>
      <img src={items.image} alt='tour'></img>
      <h1>{items.name}</h1>
      <p>{items.info}</p>
    </div>
  );
}

export default Tour;
