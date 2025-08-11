// app/page.tsx
export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-center">Novaledger Responsive</h1>
      
      {/* Responsive Test Section */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Layout Testing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-medium">Mobile (375px)</h3>
            <p className="text-sm text-gray-600 mt-2">
              Hamburger menu appears, content stacks vertically
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-medium">Tablet (768px)</h3>
            <p className="text-sm text-gray-600 mt-2">
              Horizontal nav appears, 2-column layout
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-medium">Desktop (1024px)</h3>
            <p className="text-sm text-gray-600 mt-2">
              Full navigation, 3-column layout
            </p>
          </div>
        </div>
      </div>

      {/* Responsive Content Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-white p-6 rounded-lg border">
            <h3 className="text-lg font-medium mb-2">Feature {item}</h3>
            <p className="text-gray-600">
              This content adapts to different screen sizes.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}