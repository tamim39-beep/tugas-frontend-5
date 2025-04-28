export default function ProfileCard({ name, address, phone, pfp }) {
  return (
    <div className="card">
      <div>
        <img src={pfp} alt="" />
        <p>{name}</p>
      </div>
      <div>
        <div>
          <img src="/icons/home.svg" className="icon" />
          <p>{address}</p>
        </div>

        <div>
          <img src="/icons/whatsapp.svg" className="icon" />
          <a href={`https://wa.me/${phone}`}>{phone}</a>
        </div>
      </div>
    </div>
  );
}
