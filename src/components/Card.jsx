function Card({ cardApi }) {
  return (
    <>
      <div className="card-container">
        {cardApi.map((cardApi, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#1e1f26", // dark card background
              color: "#fff",
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
              <div
                style={{
                  backgroundColor: "#8cd3f8", // icon background
                  padding: "10px",
                  borderRadius: "8px",
                  marginRight: "10px",
                }}
              >
                {/* Placeholder icon */}
                <span role="img" aria-label="icon">
                  📄
                </span>
              </div>
              <h3 style={{ margin: 0 }}>StyleSpy</h3>
            </div>{" "}
            <div>
              {/* Description */}
              <p
                style={{
                  marginBottom: "20px",
                  fontSize: "14px",
                  color: "#ccc",
                }}
              >
                Instantly analyze and copy CSS from any webpage element.
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
