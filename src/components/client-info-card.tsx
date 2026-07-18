export function ClientInfoCard({
  name,
  logo,
  description,
  industry,
  location,
  website,
}: {
  name: string;
  logo: string;
  description: string;
  industry: string;
  location: string;
  website: string;
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex h-32 items-center justify-center bg-[#f2f3f3] p-6">
        <img alt={name} className="max-h-12 w-auto" src={logo} />
      </div>
      <p className="text-sm text-[#565b5d]">{description}</p>
      <dl className="flex flex-col gap-2 text-sm">
        <div className="flex gap-1">
          <dt className="font-semibold text-[#292b2c]">Industry:</dt>
          <dd className="text-[#565b5d]">{industry}</dd>
        </div>
        <div className="flex gap-1">
          <dt className="font-semibold text-[#292b2c]">Location:</dt>
          <dd className="text-[#565b5d]">{location}</dd>
        </div>
      </dl>
      <a
        href={`https://${website}`}
        className="w-fit text-sm font-semibold text-[#eb332d] hover:underline"
      >
        {website}
      </a>
    </div>
  );
}
