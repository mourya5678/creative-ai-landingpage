async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", { cache: "no-store" });
  return response.json();
};

export default async function Home() {
  const users = await getUsers();
  return (
    <div>
      <h1>Home Page</h1>
      {users?.map((user) => (
        <p key={user?.id}>{user?.name}</p>
      ))}
    </div>
  );
};