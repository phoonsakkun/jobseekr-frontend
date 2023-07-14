export default function LogoContainer({ src }) {
  return (
    <div className="avatar">
      <div className="w-24 rounded">
        <img
          src={
            src
              ? src
              : "https://images.unsplash.com/photo-1580428354768-03a028646bc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          }
        />
      </div>
    </div>
  );
}
