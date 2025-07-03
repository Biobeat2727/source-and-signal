type Props = {
  params: { slug: string }
}

export default function ProjectDetailPage({ params }: Props) {
  return (
    <main className="min-h-screen bg-background text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Project: {params.slug}</h1>
      <p>This is a dynamic project page. You’ll render full project details here.</p>
    </main>
  )
}
