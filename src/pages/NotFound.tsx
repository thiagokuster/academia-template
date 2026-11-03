import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.32em] text-primary">Erro 404</p>
      <h1 className="mt-4 font-display text-6xl font-semibold uppercase tracking-tight text-foreground md:text-8xl">
        Página não encontrada
      </h1>
      <p className="mt-4 max-w-md font-montserrat text-muted-foreground">
        Esse endereço não existe. Volte para a página da academia e continue de onde parou.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex h-12 items-center bg-primary px-8 font-montserrat text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground"
      >
        Ir para o início
      </Link>
    </div>
  );
};

export default NotFound;
