export default function Header({ title }) {
  return (
    <>
      <div style="text-align:center">
          <img src="/favicon.svg" alt="Puterbot Logo" />
          <h1 className="title">{title}</h1>
          <h2>AI-First Process Automation</h2>
      </div>
    </>
  );
}
