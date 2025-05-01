export default function ProfileCard({ name, address, phone, pfp, bestie }) {
  return (
    <div className={`card ${bestie ? "bestie-card" : ""}`}>
      <div className="profile-header">
        <img src={pfp} alt={`${name}`} />
        <p>{name}</p>
        {bestie && <span className="bestie-label">BEST FRIEND</span>}
      </div>

      <div className="profile-info">
        <div className="info-row">
          <img src="/icons/home.svg" className="icon" />
          <p>{address}</p>
        </div>

        <div className="info-row">
          <img src="/icons/whatsapp.svg" className="icon" />
          <a href={`https://wa.me/${phone}`}>{phone}</a>
        </div>
      </div>
    </div>
  );
}
