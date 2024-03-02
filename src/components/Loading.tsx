import { Spinner } from "./Spinner";
export const Loading: React.FC = () => {
  return (
    <div className="h-screen overflow-clip flex flex-col items-center justify-center h-screen w-screen text-center">
      <div role="status">
        <Spinner />
      </div>
      <p className="mx-2">
        We are looking for your numbers in each draw since 1988. It takes time.
      </p>
    </div>
  );
};
