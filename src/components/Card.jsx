function Card({ cardApi }) {
  return (
    <div className="card-container">
      {cardApi.map((object, id) => (
        <div
          key={id}
          style={{
            backgroundColor: "#1F2535", // dark card background
            color: "#ffffff",
            margin: "2rem",
            borderRadius: "12px",
            padding: "20px",
            width: "300px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
          }}
        >
          {/* Icon and Title */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <h3> {object.name}</h3>
          </div>
          <p
            style={{
              marginBottom: "20px",
              fontSize: "14px",
              color: "#ccc",
            }}
          >
            {object.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Card;
