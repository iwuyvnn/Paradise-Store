export default function SimplePage({ title }: { title: string }) {
  return (
    <div className="pt-32 min-h-screen px-4 bg-black">
      <div className="max-w-4xl mx-auto glass p-12 rounded-[3rem] border border-white/5 space-y-8">
        <h1 className="text-4xl font-display font-bold text-white">{title}</h1>
        <div className="space-y-4 text-gray-400 leading-relaxed">
           <p>This is a placeholder for the {title.toLowerCase()} page. Our team is working on the legal and contact documentation to ensure full transparency and compliance.</p>
           <p>In the meantime, you can reach out to us via our Discord community if you have any immediate questions.</p>
        </div>
      </div>
    </div>
  );
}
