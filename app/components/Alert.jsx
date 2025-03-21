export default function Alert() {
  return (
    <div
      role="alert"
      className="rounded-xl border border-purple-900 bg-stone-900 p-4"
    >
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <strong className="block text-xl text-purple-500 font-bold">
            Correo enviado ✅
          </strong>

          <p className="mt-1 text-sm text-purple-600">
            Tu mensaje ha sido enviado exitosamente. Me pondré en contacto contigo.
          </p>
        </div>
      </div>
    </div>
  );
}
