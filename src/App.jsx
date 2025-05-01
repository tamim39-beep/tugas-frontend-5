import ProfileCard from "./component/ProfileCard";
import profiles from "./data/dummyProfile";

export default function App() {
  console.log(profiles);
  return (
    <main>
      <h1>
        <span>My Personal</span> <br /> Contact Book
      </h1>

      <div className="kumpulan-kontak">
        {profiles.map((profile) => (
          <ProfileCard
            name={profile.name}
            address={profile.address}
            pfp={profile.pfp}
            phone={profile.phone}
            bestie={profile.bestie}
          />
        ))}
      </div>
    </main>
  );
}
