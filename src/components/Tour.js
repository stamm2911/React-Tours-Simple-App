function Tour({ items, deleteTour }) {
  console.log("props:", items);

  return (
    <div className="tour-container">
      <img src={items.image} alt="tour"></img>
      <div className='title-price-container'>
        <h1>{items.name}</h1>
        <p>{items.price}</p>
      </div>
      <p>{items.info}</p>
      <button onClick={()=>deleteTour(items.id)}>Not interested</button>
    </div>
  );
}

export default Tour;
