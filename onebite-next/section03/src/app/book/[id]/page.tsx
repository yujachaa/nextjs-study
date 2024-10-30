export default function Page({ params }: { params: { id: number } }) {
  const { id } = params;
  return <div>book/{id} page 입니다.</div>;
}
