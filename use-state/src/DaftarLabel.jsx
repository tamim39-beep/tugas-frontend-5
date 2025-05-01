export default function DaftarLabel() {
  const label = [
    { buah: "apel", status: "segar" },
    { buah: "melon", status: "busuk" },
    { buah: "jeruk", status: "segar" },
  ];

  return (
    <div className="border border-amber-400 p-5">
      {labels.map((label) => (
        <div className="p-2 border ">
          <p>{label.buah}</p>
          <p
            className={`rounded-full p-1 text-xs w-fit
                  ${
                    label.status == "segar" ? "bg-green-500" : "bg-orange-600"
                  }`}
          >
            {label.status}
          </p>
        </div>
      ))}
    </div>
  );
}
