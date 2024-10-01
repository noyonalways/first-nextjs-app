export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto">
        <div className="grid grid-cols-4 bg-slate-700 p-8 rounded-md">
          <h2 className="text-2xl font-bold">Logo</h2>
          <div>
            <h3 className="text-xl mb-4">Links</h3>
            <ul className="flex flex-col">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
