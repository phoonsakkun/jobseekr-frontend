export default function LogoContainer({ src }) {
  return (
    <div className="avatar">
      <div className="w-24 rounded">
        <img src={src} />
      </div>
    </div>
  );
}
