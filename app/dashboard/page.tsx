import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function Dashboard() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Welcome back, {user.name}!</h1>
          <Link
            href="/templates/new"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Create New Template
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* User Stats */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Your Stats</h2>
            <div className="space-y-2">
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Templates Created:</strong> {user.templates.length}
              </p>
              <p>
                <strong>Member Since:</strong>{" "}
                {new Date(user.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Recent Templates */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Recent Templates</h2>
            {user.templates.length === 0 ? (
              <p className="text-gray-500">
                No templates yet. Create your first one!
              </p>
            ) : (
              <div className="space-y-3">
                {user.templates.slice(0, 3).map((template) => (
                  <div
                    key={template.id}
                    className="border-b pb-3 last:border-b-0"
                  >
                    <h3 className="font-medium">{template.name}</h3>
                    <p className="text-sm text-gray-600 truncate">
                      {template.content}
                    </p>
                    <p className="text-xs text-gray-500">
                      Created{" "}
                      {new Date(template.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* All Templates */}
        {user.templates.length > 0 && (
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">All Your Templates</h2>
            <div className="grid grid-cols-1 gap-4">
              {user.templates.map((template) => (
                <div key={template.id} className="border p-4 rounded-lg">
                  <h3 className="font-medium text-lg">{template.name}</h3>
                  <p className="text-gray-600 mt-2">{template.content}</p>
                  <div className="mt-3 flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      Created{" "}
                      {new Date(template.createdAt).toLocaleDateString()}
                    </span>
                    <Link
                      href={`/templates/${template.id}`}
                      className="text-blue-600 hover:text-blue-700 text-sm"
                    >
                      View Template
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
